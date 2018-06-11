import React from "react";
import PropTypes from "prop-types";
import kebabCase from "lodash/kebabCase";
import Helmet from "react-helmet";
import Link from "gatsby-link";

export default class TagsPage extends React.Component {

  static propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        group: PropTypes.arrayOf(
          PropTypes.shape({
            fieldValue: PropTypes.string.isRequired,
            totalCount: PropTypes.number.isRequired,
          }).isRequired
        ),
      }),
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string.isRequired,
        }),
      }),
    }),
  };

  renderTag(tag) {
    const style = {
      fontSize: 10 + tag.totalCount
    };
    return (
      <li key={tag.fieldValue} className="tag">
        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} style={style}>
          {tag.fieldValue} ({tag.totalCount})
        </Link>
      </li>
    );
  }

  render() {
    const group = this.props.data.allMarkdownRemark.group;
    const title = this.props.data.site.siteMetadata.title;

    return (
      <div>
        <Helmet title={title} />
        <div className="inner">
          <h1>Tags</h1>
          <ul className="tags">
            {group.map(this.renderTag)}
          </ul>
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;