import React from 'react'
import Meta from 'components/meta'
import Layout from 'components/layout'
import Carousel from 'components/Carousel'
import { slides, featuredProducts, banners } from '../../data/front.yml'

const FrontIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <Meta path={location.pathname} />
      <Carousel slides={slides} />
      <div className="container px-md-0 my-4 home-products">
        <h3 className="home-products__title">제품소개</h3>
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
            banners.map((banner, key) => (
              <div className="col-md-4" key={key}>
                <a
                  href={banner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="border rounded"
                    src={banner.image}
                    alt={banner.title}
                  />
                </a>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default FrontIndex
