const path = require('path');
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
              templateKey
              path
              date
              title
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
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }
    createPaginatedPages({
      edges: result.data.allMarkdownRemark.edges,
      createPage: createPage,
      pageTemplate: "src/templates/archive.js",
      pageLength: 20,
      pathPrefix: "archive",
    });
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
        context: {
          path: node.frontmatter.path,
        },
      });
    });
  });
};
