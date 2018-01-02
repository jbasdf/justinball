import React from 'react'
import PropTypes from 'prop-types'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>My Email</h3>
            <a href={`mailto:${props.site.siteMetadata.email}`}>
              {props.site.siteMetadata.email}
            </a>
          </div>
        </section>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3>My Company</h3>
            <span>
              <a href={props.site.siteMetadata.companyUrl}>
                {props.site.siteMetadata.companyName}
              </a>
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

Contact.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      email: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      companyUrl: PropTypes.string.isRequired,
      companyName: PropTypes.string.isRequired,
    }),
  }),
}

export default Contact
