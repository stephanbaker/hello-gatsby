import React from "react"

interface SiteContentProps {
  children: any
}

export default class SiteContent extends React.Component {
  render = () => {
    return (
      <main>
        <div style={{
          margin: '0 auto 0 auto',
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}>
          {this.props.children}
        </div>
      </main >
    )
  }
}
