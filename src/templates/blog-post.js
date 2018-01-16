import _ from "lodash";
import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import cheerio from "cheerio";
import get from "lodash/get";
import BannerLanding from "../components/BannerLanding";

class BlogPostTemplate extends React.Component {
  constructor() {
    super();
    this.state = {
      currentVideoId: null
    };
  }

  playVideo(videoId) {
    this.setState(() => {
      currentVideoId: videoId;
    });
  }

  renderVideoList(videos) {
    return _.map(videos, video => {
      return (
        <li
          key={video.attribs.id}
          onClick={() => {
            this.setState(() => ({
              currentVideoId: video.attribs.id
            }));
          }}
        >
          <img
            src={`http://img.youtube.com/vi/${video.attribs.id}/default.jpg`}
          />
        </li>
      );
    });
  }

  renderVideoViewer(videos) {
    if (videos.length <= 0) {
      return;
    }

    if (this.state.currentVideoId) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${this.state.currentVideoId}`}
          frameborder="0"
          width="640"
          height="385"
          allowfullscreen
        />
      );
    }

    return (
      <div>
        <img
          src={`http://img.youtube.com/vi/${videos[0].attribs.id}/default.jpg`}
        />
        <div className="play" />
      </div>
    );
  }

  renderContent(html) {
    if (html.indexOf('<div class="youtube-videos">') >= 0) {
      const $ = cheerio.load(html);
      const videos = $(".youtube-video");
      return (
        <div>
          {this.renderVideoViewer(videos)}
          <ul>{this.renderVideoList(videos)}</ul>
        </div>
      );
    }

    return <p dangerouslySetInnerHTML={{ __html: post.html }} />;
  }

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = _.get(this.props, "data.site.siteMetadata.title");

    return (
      <div>
        <Helmet>
          <title>{`${post.frontmatter.title} | ${siteTitle}`}</title>
          <meta name="description" content={post.frontmatter.description} />
        </Helmet>
        <BannerLanding post={post} />
        <div id="main">
          <div className="inner">{this.renderContent(post.html)}</div>
        </div>
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            sizes {
              src
            }
          }
        }
      }
    }
  }
`;
