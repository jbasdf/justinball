import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>{props.site.siteMetadata.title}</strong>{' '}
      <span>{props.site.siteMetadata.description}</span>
    </Link>
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }),
  onToggleMenu: PropTypes.func,
}

export default Header
