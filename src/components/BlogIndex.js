import React from "react"
import { Link } from "gatsby"

const BlogIndex = ({data}) => {
  const { edges } = data ? data.allMarkdownRemark : null

  return (
    <ul>
      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <li key={frontmatter.path}>
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
          </li>
        )
      })}
    </ul>  
  )
}

export default BlogIndex
