import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Script from 'react-load-script'
import Layout from '../components/layout'
import Banner from '../components/Banner'

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
    window.netlifyIdentity.init()
  }

  renderArticles() {
    const { edges: posts } = this.props.data.allMarkdownRemark
    return posts
      .slice(1)
      .filter(post => post.node.frontmatter.templateKey === 'blog-post')
      .map(({ node: post }) => {
        const style = {}
        if (post.frontmatter.image) {
          style.backgroundImage = `url(${post.frontmatter.image.childImageSharp.sizes.src})`
        } else if(post.frontmatter.imageUrl) {
          style.backgroundImage = `url(${post.frontmatter.imageUrl})`
        }
        return (
          <article key={post.id} style={style}>
            <header className="major">
              <h3>
                {post.frontmatter.title}{' '}
                <div className="sub-header">{post.frontmatter.date}</div>
              </h3>
              <p>{post.excerpt}</p>
            </header>
            <Link to={post.frontmatter.path} className="link primary" />
          </article>
        )
      })
  }

  renderBanner() {
    const { edges: all } = this.props.data.allMarkdownRemark
    const posts = all.filter(
      post => post.node.frontmatter.templateKey === 'blog-post'
    )
    if (posts && posts.length > 0) {
      return <Banner post={posts[0].node} site={this.props.data.site} />
    }
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const { edges: posts } = this.props.data.allMarkdownRemark

    return (
      <Layout>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        {this.renderBanner()}
        <div id="main">
          <section id="one" className="tiles">
            {this.renderArticles()}
          </section>
          <section>
            <div className="inner">
              <ul className="actions align-right">
                <li>
                  <Link to="/archive/2" className="button next">
                    More
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>About</h2>
              </header>
              <p>
                Hi, I'm Justin Ball. I'm the CTO and co-founder of{' '}
                <a href="https://www.atomicjolt.com">Atomic Jolt</a>. I write code,
                travel, play board games, ride bikes
                and blog about random topics. <Link to="/about">More about me...</Link>
              </p>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      limit: 21
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
            imageUrl,
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
`
