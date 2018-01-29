const fs = require('fs');
const _ = require('lodash');
const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');

const author = 'Justin Ball';
const outputPath = '../src/drafts';
const contents = fs.readFileSync('../data/history.json');
const { stopWords, parseTitle, parseDescription, parseImages, parseKeywords, frequentWords } = require('./libs/selectors');
const history = JSON.parse(contents);
const ignoreWords = ['you tube', 'want', 'video', 'watch', 'this', 'unavailable'];

const postsFolder = '../src/posts/';
const existingPosts = fs.readdirSync(postsFolder).
  filter(f => fs.lstatSync(path.join(postsFolder, f)).isDirectory()).
  map(f => f.split('-').slice(0,3).join('-'));

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function groupUrls(urlPattern) {
  const groups = {};
  history.forEach((bookmark) => {
    const url = bookmark['url'];
    if (url.indexOf(urlPattern) >= 0) {
      const dateTime = new Date(bookmark['lastVisitTime']);
      const key = dateTime.toDateString();
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push({ url: url, dateTime: dateTime });
    }
  });
  return groups;
}

function postPath(title) {
  return `${title.replace(/\s+/g, '-')}`;
}

function getPostStream(title, dateTime, fileName = 'index.md') {
  const datePart = dateTime.toISOString().split('T')[0];
  if (existingPosts.indexOf(datePart) >= 0) {
    return null;
  }
  const filePath = `${outputPath}/${datePart}-${postPath(title)}/${fileName}`;
  ensureDirectoryExistence(filePath);
  return fs.createWriteStream(filePath);
}

function writePostFrontMatter(stream, title, image, description, dateTime, tags, cb) {
  stream.write(`---\n`);
  stream.write(`title: ${title}\n`);
  stream.write(`author: ${author}\n`);
  stream.write(`layout: post\n`);
  stream.write(`tags:\n`);
  stream.write(`- learning\n`);
  _.each(tags, (tag) => {
    stream.write(`- ${tag.trim()}\n`);
  });
  stream.write(`date: ${dateTime.toISOString()}\n`);
  stream.write(`templateKey: blog-post\n`);
  stream.write(`path: "/${postPath(title)}"\n`);
  stream.write(`description: "${description}"\n`);
  if (image) {
    stream.write(`imageUrl: ${image}\n`);
  }
  if (cb) {
    cb(stream);
  }
  stream.write(`---\n`);
}

function sitesData(sites, cb) {
  try {
    const promises = sites.map((site) => {
      return axios.get(site.url);
    });
    axios.all(promises).then(cb);
  } catch (error) {
    console.log(error);
  }
};

function titleWords(title) {
  return _(title.split(' ')).
    map(word => _.lowerCase(word.trim())).
    filter(word => stopWords.indexOf(word) < 0).
    value();
}

function getMetas(responses) {
  return responses.map((response) => {
    const $ = cheerio.load(response.data);
    const title = parseTitle($);
    const url = response.config.url;

    let images = parseImages($);
    if (images.length <= 0 && url.indexOf('youtube.com/watch') >= 0) {
      images = [`http://img.youtube.com/vi/${videoId(url)}/sddefault.jpg`]
    }

    return {
      url: url,
      title: title,
      titleWords: titleWords(title),
      description: parseDescription($),
      images: images,
      keywords: parseKeywords($),
      frequentWords: _.map(frequentWords($), word => _.lowerCase(word)),
    };
  });
}

function mostCommon(words) {
  const stats = {};
  for (let i = 0; i < words.length; i += 1) {
    const word = words[i].trim();
    if (stopWords.indexOf(word) === -1) {
      if (stats[word]) {
        stats[word] += 1;
      } else {
        stats[word] = 1;
      }
    }
  }
  return Object.keys(stats).sort((a, b) => (stats[a] < stats[b]));
}

function consensus(metas, key) {
  const wordGroups = _.map(metas, meta =>
    _.filter(meta[key], word =>
      !_.includes(ignoreWords, word) &&
      !_.isNumber(word) &&
      !_.isEmpty(word)
    )
  );
  const intersect = _.intersection(...wordGroups);
  if (intersect.length > 0) {
    return intersect.slice(0, 6);
  }
  return mostCommon(_.flatten(wordGroups)).slice(0, 6);
}

function outputPosts(sites, contentCb, frontMatterCb, fileName = 'index.md') {
  sitesData(sites, (responses) => {
    const metas = getMetas(responses);
    const commonWords = consensus(metas, 'frequentWords');
    const keywords = consensus(metas, 'keywords');
    const titleWords = consensus(metas, 'titleWords');

    let title;
    const important = _.intersection(titleWords, keywords);
    if (important.length > 0) {
      title = important.join(' ');
    } else {
      title = _.map(titleWords, title => _.startCase(title)).join(' ');
    }

    const tags = keywords.length > 0 ? keywords : commonWords;
    const dateTime = sites[0].dateTime;

    const image = _(metas).map('images').flatten().first();
    const description = '';

    const stream = getPostStream(title, dateTime, fileName);
    if (stream) {
      writePostFrontMatter(stream, title, image, description, dateTime, tags, frontMatterCb);
      contentCb(stream, metas);
      stream.end();
    }
  });
}

function videoId(url) {
  return url.split('?')[1].split('&')[0].replace('v=', '');
}

function videoUrl(url) {
  return `https://www.youtube.com/embed/${videoId(url)}`;
}

function outputYouTubeWatches(sites) {
  outputPosts(sites, (stream, metas) => {
    let html = '';
    _.each(metas, (meta) => {
      html += `
<div id="${videoId(meta.url)}" class="youtube-video">
  <h2 class="youtube-title">${meta.title}</h2>
  <iframe src="${videoUrl(meta.url)}" frameborder="0" width="640" height="385" allowfullscreen>
    <p>Your browser does not support iframes.</p>
  </iframe>
  <p class="youtube-description">${meta.description}</p>
</div>`;
    });
    if (metas.length > 1) {
      html = `<div class="youtube-videos video-responsive">\n${html}\n</div>`;
    }
    stream.write(html);
  });
}

function outputYouTubePlaylists(sites) {
  outputPosts(sites, (stream, metas) => {
    let html = '';
    _.each(metas, (meta) => {
      html += `
<div id="${videoId(meta.url)}" class="youtube-playlist">
  <h2 class="youtube-title">${meta.title}</h2>
  <iframe src="${videoUrl(meta.url)}" frameborder="0" width="640" height="385" allowfullscreen>
    <p>Your browser does not support iframes.</p>
  </iframe>
  <p class="youtube-description">${meta.description}</p>
</div>`;
    });
    stream.write(html);
  });
}

// Output pages that match specific patterns
_.each(groupUrls('youtube.com/watch'), outputYouTubeWatches);
_.each(groupUrls('youtube.com/playlist'), outputYouTubePlaylists);




