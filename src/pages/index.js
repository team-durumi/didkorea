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
      <div className="container px-md-0 my-4">
        <h3>취급품목</h3>
        <div className="row">
          {featuredProducts.map((product, key) => (
            <div className="product my-2 col-md-3" key={key}>
              <a href={product.link} className="d-block">
                <img
                  className="border rounded"
                  src={product.image}
                  alt={product.title}
                />
              </a>
              <h5>{product.title}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="container px-md-0 my-5">
        <div className="row no-gutters">
          {banners.length > 0 &&
            banners.map((banner, key) => {
              let bannerImage = banner.image
                ? banner.image
                : placeholderImage(key)
              return (
                <div className="col-md-6" key={key}>
                  <a href={banner.link} target="_blank">
                    <img
                      className="border rounded"
                      src={bannerImage}
                      alt={banner.title}
                    />
                  </a>
                </div>
              )
            })}
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
