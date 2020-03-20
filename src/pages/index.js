import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/post'
import Meta from 'components/meta'
import Layout from 'components/layout'
import Carousel from 'components/Carousel'
import { slides, featuredProducts, banners } from '../../data/front.yml'

const FrontIndex = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <Carousel slides={slides} />
      <div className="container px-0 my-3">
        <h3>취급품목</h3>
        <div className="row">
          {featuredProducts.map((product, key) => (
            <div className="product col-md-3" key={key}>
              <img src={product.image} alt={product.title} />
              <h5>{product.title}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="container px-0 my-3">
        <div className="row no-gutters">
          <div className="col-6">
            <img src={placeholderImage(1)} alt="" />
          </div>
          <div className="col-6">
            <img src={placeholderImage(2)} alt="" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FrontIndex

const placeholderImage = index =>
  'https://via.placeholder.com/565x120?text=Slide' + index

const placeholderProductImage = index =>
  'https://via.placeholder.com/400x300?text=Product' + index
