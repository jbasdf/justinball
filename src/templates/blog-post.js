import _ from "lodash";
import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import get from "lodash/get";
import dangerouslyAtomicHtml from 'dangerously-atomic-html';
import BannerLanding from "../components/BannerLanding";
import VideoPlayer from "../components/VideoPlayer";

class BlogPostTemplate extends React.Component {

  visitor(domNode){
    if(_.includes(domNode.className, 'youtube-videos')){
      return {
        type: 'node',
        Component: VideoPlayer,
        props: { domNode: domNode }
      }
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
          <div className="inner">
            {dangerouslyAtomicHtml(post.html.trim(), this.visitor)}
          </div>
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
