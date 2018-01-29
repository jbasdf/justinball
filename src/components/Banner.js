import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Banner = props => {
  const style = {}
  if (props.post.frontmatter.image &&
    props.post.frontmatter.image.childImageSharp &&
    props.post.frontmatter.image.childImageSharp.sizes) {
    style.backgroundImage = `url(${props.post.frontmatter.image.childImageSharp.sizes.src})`
  } else if(props.post.frontmatter.imageUrl) {
    style.backgroundImage = `url(${props.post.frontmatter.imageUrl})`
  }
  return (
    <section id="banner" className="major" style={style}>
      <div className="inner">
        <header className="major">
          <h1>{props.post.frontmatter.title}</h1>
        </header>
        <div className="content">
          <p>{props.post.excerpt}</p>
          <ul className="actions">
            <li>
              <Link
                to={props.post.frontmatter.path}
                className="button next scrolly"
              >
                Read More
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

Banner.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }),
  post: PropTypes.shape({
    excerpt: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Banner
