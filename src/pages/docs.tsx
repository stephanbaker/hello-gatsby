import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Menu from "../components/Menu"

export const query = graphql`
  query DocsMenuQuery {
    site {
      siteMetadata {
        sectionsOverride
      }
    }
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

interface Node {
  frontmatter: {
    title: string,
    weight: number,
    path: string,
    section: string
  }
}
interface Section {
  title: string
  nodes: Node[]
}

interface DocsPageProps {
  data: {
    site: {
      siteMetadata: {
        sectionsOverride: string[]
      }
    },
    allMarkdownRemark: {
      sections: Section[]
    }
  }
}

export default class DocsPage extends React.Component<DocsPageProps, {}> {

  render = () => {
    const { site, allMarkdownRemark } = this.props.data;
    const { sections } = allMarkdownRemark;
    const { siteMetadata } = site;
    const { sectionsOverride } = siteMetadata;

    return (
      <Layout>
        <h1>The Documentation</h1>
        <p>This is the index of the documentation we have created.</p>
        <p>
          Not interested? <Link to="/">Go back to the homepage</Link>
        </p>
        <Menu sections={sections} sectionsOverride={sectionsOverride} />
      </Layout>
    )
  }
}