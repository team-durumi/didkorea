import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import get from 'lodash/get'
import map from 'lodash/map'
import slugify from 'slugify'

import Meta from 'components/meta'
import Layout from 'components/layout'
import Products from 'components/products'

import './style.scss'

const ProductTerm = props => {
  // console.log(props)
  let { title, termTitles, products } = props.pageContext
  // console.log(title, termTitles, products)
  let meta = { title: title }
  let type, productComponent
  if (products.length == 1) {
    productComponent = <Product product={products[0]} />
  } else {
    productComponent = <Products products={products} />
  }
  return (
    <Layout location={props.location}>
      <Meta site={meta} />
      <div className="product detail container p-0">
        <ProductTermNav termTitles={termTitles} />
        <div className="row no-gutters d-block">
          <h1 className="my-3 w-100 border-bottom pb-2">{title}</h1>
          {productComponent}
        </div>
      </div>
    </Layout>
  )
}

const ProductTermNav = ({ termTitles }) => {
  const slugs = termTitles.map(termTitle => slugify(termTitle, { lower: true }))
  return (
    <ul className="nav nav-tabs my-3">
      {slugs.map((slug, i) => {
        return (
          <li className="nav-item" key={i}>
            <Link className="nav-link nav-item active" to={'/product/' + slug}>
              {termTitles[i]}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

const Product = ({ product }) => {
  let dimensions = product.dimensions
  return (
    <div class="content">
      <p className="bg-light">
        Worldwide standard chains complying with JIS and ANSI
      </p>
      <p>
        The 14 sizes of DID standard roller chains are available ranging from
        DID25 to DID240 including those in conformity with ANSI (American
        National Strandard Institute), and ISO (International Organization for
        Standardization)
      </p>
      <p>
        The chains not only meet the requirements for the minimum tensile
        strength prescribed by ANSI and ISO, but they also provide the top class
        quality in the world including a high fatigue strength.
      </p>
      <div className="row">
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
