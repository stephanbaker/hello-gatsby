import React from "react"

const SiteFooter = () => {
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

export default SiteFooter
