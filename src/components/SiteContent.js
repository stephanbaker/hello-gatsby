import React from "react"

const SiteContent = ({children}) => {
  return (
    <main>
      <div style={{
        margin: '0 auto 0 auto',
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}>
        {children}      
      </div>
    </main>           
  )
}

export default SiteContent
