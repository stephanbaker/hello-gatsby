/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`)
  const docPageTemplate = path.resolve(`src/templates/docPage.js`)
  return graphql(`
    {
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/.*/content/posts/" } }
        sort: { order: ASC, fields: frontmatter___date }
      ) {
        edges {
          node {
            parent {
              ... on File {
                absolutePath
              }
            }
            frontmatter {
              title
              path
            }
          }
          previous {
            frontmatter {
              title
              path
            }
          }
          next {
            frontmatter {
              title
              path
            }
          }
        }
      }
      docs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/.*/content/docs/" } }
        sort: { order: ASC, fields: frontmatter___weight }
      ) {
        edges {
          node {
            parent {
              ... on File {
                absolutePath
              }
            }
            frontmatter {
              title
              path
            }
          }
          previous {
            frontmatter {
              title
              path
            }
          }
          next {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const pathRegex = /.*\/src\/pages\/(.*?)(?:\s|$)/g
    const posts = result.data.posts.edges
    const docs = result.data.docs.edges
    const postsResult = createPagesFromEdges(
      posts,
      blogPostTemplate,
      createPage
    )
    const docsResult = createPagesFromEdges(docs, docPageTemplate, createPage)
    return Promise.all([postsResult, docsResult])
  })
}

const createPagesFromEdges = (edges, component, createPage) => {
  edges.forEach(({ node, previous, next }) => {
    const splits = node.parent.absolutePath.split("/content")
    if (splits.length < 2) {
      return
    }

    const title =
      node && node.frontmatter && node.frontmatter.title
        ? node.frontmatter.title
        : p.split("/").pop()

    const p = splits[1].slice(0, -3)
    console.log(p, title)

    createPage({
      path: p,
      component,
      context: { title, previous, next },
    })
  })
}
