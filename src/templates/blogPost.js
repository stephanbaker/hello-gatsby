import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import rehypeReact from "rehype-react"
import ClickCounter from "../components/ClickCounter"

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path} }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`

const renderComponent = new rehypeReact({
  createElement: React.createElement,
  components: {
    "click-counter": ClickCounter,
  },
}).Compiler

const BlogPostTemplate = ({data, pageContext}) => {
  const { markdownRemark } = data;
  const { frontmatter, htmlAst } = markdownRemark;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      
      { renderComponent(htmlAst) }

      <div className="blogPostPagination" style={{width: "100%"}}>
        {previous && 
         <Link style={{
             float: "left"
           }}
           to={previous.frontmatter.path}>Prev: {previous.frontmatter.title}
         </Link>
        }
        {next && 
         <Link style={{
             float: "right"
           }}
           to={next.frontmatter.path}>Next: {next.frontmatter.title}
         </Link>
        }
      </div>
    </Layout>
  )
}

export default BlogPostTemplate
