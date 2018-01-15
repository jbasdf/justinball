const fs = require('fs');
const _ = require('lodash');
const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');

const author = 'Justin Ball';
const outputPath = './drafts';
const contents = fs.readFileSync('../data/history.json');
const { stopWords, parseTitle, parseDescription, parseImages, parseKeywords, frequentWords } = require('./libs/selectors');
const history = JSON.parse(contents);
const ignoreWords = ['you tube', 'want', 'video', 'watch', 'this', 'unavailable'];

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

function getPostStream(title, dateTime) {
  const datePart = dateTime.toISOString().split('T')[0];
  const filePath = `${outputPath}/${datePart}-${postPath(title)}/index.md`;
  ensureDirectoryExistence(filePath);
  return fs.createWriteStream(filePath);
}

function writePostFrontMatter(stream, title, image, description, dateTime, tags) {
  stream.write(`---\n`);
  stream.write(`title: ${title}\n`);
  stream.write(`author: ${author}\n`);
  stream.write(`layout: post\n`);
  stream.write(`tags:\n`);
  stream.write(`- Learning\n`);
  _.each(tags, (tag) => {
    stream.write(`- ${tag.trim()}\n`);
  });
  stream.write(`date: ${dateTime.toISOString()}\n`);
  stream.write(`templateKey: blog-post\n`);
  stream.write(`path: "/${postPath(title)}"\n`);
  stream.write(`description: ${description}\n`);
  if (image) {
    stream.write(`image: ${image}\n`);
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
      const videoId = url.split('?')[1];
      images = [`http://img.youtube.com/vi/${videoId}/sddefault.jpg`]
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
    return intersect;
  }
  return mostCommon(_.flatten(wordGroups)).slice(4);
}

function outputPosts(sites) {
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

    const stream = getPostStream(title, dateTime);
    writePostFrontMatter(stream, title, image, description, dateTime, tags);
    _.each(metas, (meta) => {
      stream.write(meta.title);
      stream.write("\n");
      stream.write(meta.description);
      stream.write("\n");
      stream.write(meta.url);
      stream.write("\n\n");
    });
    stream.end();
  });
}

// Output pages that match specific patters
_.each(groupUrls('youtube.com/watch'), outputPosts);
