import _ from "lodash";
import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import get from "lodash/get";
import dangerouslyAtomicHtml from "dangerously-atomic-html";
import BannerLanding from "../components/BannerLanding";
import VideoPlayer from "../components/VideoPlayer";
import VideoPlayList from "../components/VideoPlayList";

class BlogPostTemplate extends React.Component {
  visitor(domNode) {
    if (_.includes(domNode.className, "youtube-videos")) {
      return {
        type: "node",
        Component: VideoPlayer,
        props: { domNode: domNode }
      };
    } else if (_.includes(domNode.className, "youtube-playlist")) {
      return {
        type: "node",
        Component: VideoPlayList,
        props: { domNode: domNode }
      };
    }
  }

  renderContent(post) {
    if (typeof window !== `undefined`) {
      return dangerouslyAtomicHtml(post.html.trim(), this.visitor);
    } else {
      return <div dangerouslySetInnerHTML={{ __html: post.html }} />;
    }
  }

  renderStructure(post) {
    if (post.frontmatter.structuredHtml) {
      return this.renderContent(post);
    } else {
      return (
        <div className="inner">
          {this.renderContent(post)}
        </div>
      );
    }
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
          {this.renderStructure(post)}
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
        imageUrl
        structuredHtml
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
