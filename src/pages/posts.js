import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import BlogIndex from "../components/BlogIndex"

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/.*\\/content\\/posts/"}}
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

const BlogPage = ({ data }) => (
  <Layout>
    <h1>The Blog</h1>
    <p>Check out what I've been talking about</p>
    <p>Not interested? <Link to="/">Go back to the homepage</Link></p>
    <BlogIndex data={data} />
  </Layout>
)

export default BlogPage
