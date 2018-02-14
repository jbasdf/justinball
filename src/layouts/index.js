import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import '../assets/scss/main.scss'
import 'prismjs/themes/prism-solarizedlight.css';

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
    console.log('constructing index and setting is-loading')
    debugger;
  }

  componentDidMount() {
    debugger;
    console.log('index did mount')
    this.timeoutId = setTimeout(() => {
      debugger;
      console.log('changing loading state')
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

  render() {
    const { children } = this.props

    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isMenuVisible ? 'is-menu-visible' : ''
        }`}
      >
        <div id="wrapper">
          <Header
            onToggleMenu={this.handleToggleMenu}
            site={this.props.data.site}
          />
          {children()}
          <Contact site={this.props.data.site} />
          <Footer site={this.props.data.site} />
        </div>
        <Menu onToggleMenu={this.handleToggleMenu} />
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
}

export default Template

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
`
