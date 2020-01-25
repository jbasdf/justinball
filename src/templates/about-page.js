import React from 'react';
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <div id="main">
      <div className="content">
        <div className="inner">
          <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
          <PageContent className="content" content={content} />
        </div>
      </div>
    </div>
  );
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <AboutPageTemplate
    contentComponent={HTMLContent}
    title={post.frontmatter.title}
    content={post.html}
  />;
};

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
