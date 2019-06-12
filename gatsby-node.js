/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`)
  return graphql(`
    {
      allMarkdownRemark (
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          previous {
            frontmatter {
              path
              title
            }
          }
          node {
            frontmatter {
              path
              title
            }
          }
          next {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if(result.errors) {
      return Promise.reject(result.errors)
    }
      
    const posts = result.data.allMarkdownRemark.edges;
      return posts.forEach(({ node, previous, next }, index) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: { previous, next },
      })
    })
  })
}
