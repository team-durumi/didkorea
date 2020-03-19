const each = require('lodash/each')
const head = require('lodash/head')
const path = require('path')
const PostTemplate = path.resolve('./src/templates/index.js')
const ProductTemplate = path.resolve('./src/templates/product/index.js')
const fs = require('fs')
const yaml = require('js-yaml')
const slugify = require('slugify')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const terms = yaml.safeLoad(
    fs.readFileSync('./data/product-terms.yml', 'utf-8')
  )
  const { products, series } = terms

  each(products, product => {
    let slug = slugify(product.series, { lower: true })
    console.log(slug)
    createPage({
      path: `/product/${slug}/`,
      component: ProductTemplate,
      context: {
        title: product.name,
        image: product.image,
        product: product,
        series: series,
      },
    })
  })

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
