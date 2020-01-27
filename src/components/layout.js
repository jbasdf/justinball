import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import '../assets/scss/main.scss'
import 'prismjs/themes/prism-solarizedlight.css';

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        email
        author
        companyUrl
        companyName
        github
        twitter
        linkedin
        facebook
        instagram
      }
    }
  }
`;

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      //loading: 'is-loading',
      loading: '',
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  renderWrapper(data, children) {
    return (
      <div id="wrapper">
        <Header
          onToggleMenu={this.handleToggleMenu}
          site={data.site}
        />
        {children}
        <Contact site={data.site} />
        <Footer site={data.site} />
      </div>
    );
  }

  render() {
    const { children } = this.props

    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isMenuVisible ? 'is-menu-visible' : ''
        }`}
      >
        <StaticQuery
          query={query}
          render={data => this.renderWrapper(data, children)}
        />
        <Menu onToggleMenu={this.handleToggleMenu} />
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.func,
}

export default Template
