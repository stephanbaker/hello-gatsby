/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby"

import SiteFooter from "./SiteFooter"
import SiteHeader from "./SiteHeader"
import SiteContent from "./SiteContent"
import "./Layout.css"

interface LayoutProps {
  children: any
}

interface LayoutData {
  site: {
    siteMetadata: {
      title: string;
    }
  }
}

const Layout: React.SFC<LayoutProps> = ({ children }) => {
  const data: LayoutData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <SiteHeader siteTitle={data.site.siteMetadata.title} />
      <SiteContent>{children}</SiteContent>
      <SiteFooter />
    </div>
  )
}

export default Layout;