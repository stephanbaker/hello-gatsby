import React from "react"
import { Link } from "gatsby"

interface Edge {
  node: {
    frontmatter: {
      title: string,
      path: string
    }
  }
}

interface BlogIndexProps {
  data: {
    allMarkdownRemark: {
      edges: Edge[]
    }
  }
}

// const BlogIndex = ({data}) => {
export default class BlogIndex extends React.Component<BlogIndexProps, {}> {
  render = () => {
    const { edges } = this.props.data ? this.props.data.allMarkdownRemark : null

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
}