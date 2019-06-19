import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Menu from "../components/Menu"


export const query = graphql`
  query DocsMenuQuery {
    allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___weight, frontmatter___title]}, filter: {fileAbsolutePath: {regex: "/.*/content/docs/"}}) {
      sections: group(field: frontmatter___section) {
        title: fieldValue
        nodes {
          frontmatter {
            title
            weight
            path
            section
          }
        }
      }
    }
  }
`

const DocsPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { sections } = allMarkdownRemark;

  return (
    <Layout>
      <h1>The Documentation</h1>
      <p>This is the index of the documentation we have created.</p>
      <p>
        Not interested? <Link to="/">Go back to the homepage</Link>
      </p>
      <Menu sections={sections} />
    </Layout>
  )
}

export default DocsPage
