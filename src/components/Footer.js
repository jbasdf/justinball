import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href={`https://www.twitter.com/${props.site.siteMetadata.twitter}`}
            className="icon alt fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href={`https://www.facebook.com/${
              props.site.siteMetadata.facebook
            }`}
            className="icon alt fa-facebook"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href={`https://www.instagram.com/${
              props.site.siteMetadata.instagram
            }`}
            className="icon alt fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href={`https://www.github.com/${props.site.siteMetadata.github}`}
            className="icon alt fa-github"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href={`https://www.linkedin.com/in/${
              props.site.siteMetadata.linkedin
            }/`}
            className="icon alt fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; 2018 {props.site.siteMetadata.author}</li>
        <li>
          Design by: <a href="https://html5up.net">HTML5 UP</a> Thanks!
        </li>
      </ul>
    </div>
  </footer>
)

Footer.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      github: PropTypes.string.isRequired,
      twitter: PropTypes.string.isRequired,
      linkedin: PropTypes.string.isRequired,
      facebook: PropTypes.string.isRequired,
      instagram: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  }),
  onToggleMenu: PropTypes.func,
}

export default Footer
