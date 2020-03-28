const each = require('lodash/each')
const head = require('lodash/head')
const path = require('path')
const PostTemplate = path.resolve('./src/templates/index.js')
const ProductTermTemplate = path.resolve('./src/templates/productTerm/index.js')
const fs = require('fs')
const yaml = require('js-yaml')
const slugify = require('slugify')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allFile(filter: { extension: { regex: "/md|js/" } }, limit: 1000) {
              edges {
                node {
                  id
                  name: sourceInstanceName
                  path: absolutePath
                  remark: childMarkdownRemark {
                    id
                    frontmatter {
                      layout
                      path
                    }
                  }
                }
              }
            }
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }

        // Create blog posts & pages.
        const items = data.allFile.edges
        const posts = items.filter(({ node }) => /posts/.test(node.name))
        each(posts, ({ node }) => {
          if (!node.remark) return
          const { path } = node.remark.frontmatter
          createPage({
            path,
            component: PostTemplate,
          })
        })

        const pages = items.filter(({ node }) => /page/.test(node.name))
        each(pages, ({ node }) => {
          if (!node.remark) return
          const { name } = path.parse(node.path)
          const PageTemplate = path.resolve(node.path)
          createPage({
            path: name,
            component: PageTemplate,
          })
        })
      })
    )
    graphql(`
      query ProductsQuery {
        allProductsYaml {
          group(field: series) {
            title: fieldValue
            nodes {
              name
              image
              features
              functions
              files
              main_uses
              dimension_images
              dimensions {
                files
                number
              }
            }
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) {
        console.log(errors)
        reject(errors)
      }
      let terms = data.allProductsYaml.group
      let termTitles = terms.map(term => {
        return term.title
      })
      each(terms, term => {
        let termSlug = slugify(term.title, { lower: true })
        createPage({
          path: `/product/${termSlug}/`,
          component: ProductTermTemplate,
          context: {
            title: term.title,
            products: term.nodes,
            termTitles: termTitles,
          },
        })
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}
