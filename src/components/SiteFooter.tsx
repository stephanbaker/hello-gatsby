import React from "react"


export default class SiteFooter extends React.Component {
  render = () => {
    return (
      <footer style={{
        margin: `0 auto 0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        textDecoration: 'none',
      }}>
        © {new Date().getFullYear()}, Built with&nbsp;
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    )
  }
}
