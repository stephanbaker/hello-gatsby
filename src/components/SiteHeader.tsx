import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

interface SiteHeaderProps {
  siteTitle: string
}

export default class SiteHeader extends React.Component<SiteHeaderProps, {}> {
  render = () => {
    return (
      <header
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto 0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {this.props.siteTitle}
            </Link>
          </h1>
        </div>
      </header>
    )
  }
}