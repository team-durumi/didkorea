import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/post'
import Meta from 'components/meta'
import Layout from 'components/layout'
import Tab from 'components/tab'

const ProductsIndex = ({ data, location }) => {
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
