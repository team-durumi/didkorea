import { Link } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import map from 'lodash/map'
import slugify from 'slugify'

import Meta from 'components/meta'
import Layout from 'components/layout'
import Products from 'components/products'
import terms from '../../../data/series/series.yml'

import './style.scss'

const ProductTerm = props => {
  let { title, termTitles, products } = props.pageContext
  let meta = { title: title }
  let type, productComponent
  let currentTerm = terms.filter(term => term.name == title).shift()

  if (products.length == 1) {
    productComponent = (
      <Product product={products[0]} description={currentTerm.description} />
    )
  } else {
    productComponent = (
      <Products products={products} description={currentTerm.description} />
    )
  }
  return (
    <Layout location={props.location}>
      <Meta site={meta} />
      <div className="product detail container p-md-0">
        <ProductTermNav termTitles={termTitles} location={props.location} />
        <div className="row no-gutters d-block mt-4">
          <h1 className="mt-3 w-100 border-bottom pb-2 mb-0">{title}</h1>
          {productComponent}
        </div>
      </div>
    </Layout>
  )
}

const ProductTermNav = ({ termTitles, location }) => {
  const slugs = termTitles.map(termTitle => slugify(termTitle, { lower: true }))
  return (
    <ul className="nav nav-tabs my-3">
      {slugs.map((slug, i) => {
        return (
          <li className="nav-item" key={i}>
            <Link
              className={
                'nav-link nav-item ' +
                (slug === location.pathname.split('/')[2] ? 'active' : '')
              }
              to={'/product/' + slug}
            >
              {termTitles[i]}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

const Product = ({ product, description }) => {
  let dimensions = product.dimensions
  // console.log(descriptionArray)
  return (
    <div className="content" style={{ padding: 30 }}>
      <h2>{description}</h2>
      <img src={product.image} className="border rounded my-3" />

      {product.features.map((feature, i) => {
        return <p key={i}>{feature}</p>
      })}

      {product.dimension_images.map((image, i) => {
        return <img src={image} className="border rounded my-3" key={i} />
      })}

      <div className="row my-5">
        <h2 className="w-100 pl-3">Catalog Download</h2>
        {dimensions.length > 0 &&
          dimensions.map((dimension, i) => {
            // console.log(dimension, i)
            return (
              <div className="col-sm-3 my-2" key={i}>
                <div className="card">
                  <div className="card-body">
                    <a
                      href={dimension.files}
                      className="btn btn-primary float-right"
                    >
                      spec
                    </a>
                    <h5 className="card-title">{dimension.number}</h5>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ProductTerm
