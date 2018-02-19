import React from 'react'
import Link from 'gatsby-link'
import Menu from '../components/Menu'

import '../assets/scss/main.scss'
import 'prismjs/themes/prism-solarizedlight.css';


const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url} className={`button ${props.className}`}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

class Archive extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  renderArticles(group) {
    return group
      .filter(post => post.node.frontmatter.templateKey === 'blog-post')
      .map(({ node: post }) => {
        const style = {}
        try {
          if (post.frontmatter.image) {
            style.backgroundImage = `url(${post.frontmatter.image.childImageSharp.sizes.src})`
          } else if(post.frontmatter.imageUrl) {
            style.backgroundImage = `url(${post.frontmatter.imageUrl})`
          }
        } catch(e) {
          console.log(post);
          console.log(e);
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

  render() {
    const { pathContext } = this.props;
    const { group, index, first, last, pageCount } = pathContext;
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    return (
      <div>
        <div id="main">
          <section className="tiles">
            {this.renderArticles(group)}
          </section>
          <section>`
            <div className="inner">
              <div className="previousLink" style={{display: 'inline-block'}}>
                <NavLink test={first} url={previousUrl} text="Go to Previous Page" className="previous" />
              </div>
              <div className="nextLink" style={{display: 'inline-block', float: 'right'}}>
                <NavLink test={last} url={nextUrl} text="Go to Next Page" className="next"/>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
}

export default Archive;
