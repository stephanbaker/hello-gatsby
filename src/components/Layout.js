/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import SiteFooter from "./SiteFooter"
import SiteHeader from "./SiteHeader"
import SiteContent from "./SiteContent"
import "./Layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SiteHeader siteTitle={data.site.siteMetadata.title} />
        <SiteContent>{children}</SiteContent>
        <SiteFooter /> 
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
