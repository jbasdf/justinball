import React from 'react'
import PropTypes from 'prop-types'

const BannerLanding = props => {
  const style = {}
  if (props.post.frontmatter.image) {
    style.backgroundImage = `url(${props.post.frontmatter.image.childImageSharp.sizes.src})`
  }

  return (
    <section id="banner" className="style2" style={style}>
      <div className="inner">
        <header className="major">
          <h1>{props.post.frontmatter.title}</h1>
        </header>
        <div className="content">
          <p>{props.post.frontmatter.date}</p>
        </div>
      </div>
    </section>
  )
}

BannerLanding.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default BannerLanding
