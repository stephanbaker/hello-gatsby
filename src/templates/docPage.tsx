import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import rehypeReact from "rehype-react"
import ClickCounter from "../components/ClickCounter"

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        title
        date
      }
    }
  }
`

interface DocPageTemplateProps {
  data: {
    markdownRemark: {
      htmlAst: string,
      frontmatter: {
        title: string,
        date: string
      }
    }
  },
  pageContext: {
    title: string,
    previous: {
      frontmatter: {
        title: string,
        path: string
      }
    },
    next: {
      frontmatter: {
        title: string,
        path: string
      }
    }
  }
}

export default class DocPageTemplate extends React.Component<DocPageTemplateProps, {}> {

  renderComponent = new rehypeReact({
    createElement: React.createElement,
    components: {
      "click-counter": ClickCounter,
    },
  }).Compiler

  render = () => {
    const { markdownRemark } = this.props.data
    const { frontmatter, htmlAst } = markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <h1>{frontmatter.title}</h1>
        {this.renderComponent(htmlAst)}
        <div className="pagination" style={{ width: "100%" }}>
          {previous && (
            <Link
              style={{
                float: "left",
              }}
              to={previous.frontmatter.path}
            >
              Prev: {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link
              style={{
                float: "right",
              }}
              to={next.frontmatter.path}
            >
              Next: {next.frontmatter.title}
            </Link>
          )}
        </div>
      </Layout>
    )
  }
}