import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/post'
import Meta from 'components/meta'
import Layout from 'components/layout'
import { products, series } from '../../data/product-terms.yml'
console.log(products, series)

const ProductsIndex = ({ data, location, products, series }) => {
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div className="container">
        <Tab />
        <br />
      </div>
    </Layout>
  )
}

export default ProductsIndex
