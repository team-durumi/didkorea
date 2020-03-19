import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import get from 'lodash/get'
import map from 'lodash/map'
import slugify from 'slugify'

import Meta from 'components/meta'
import Layout from 'components/layout'

import './style.scss'

const Product = props => {
  // console.log(props)
  let { title, image, product, series } = props.pageContext
  console.log(title, image, product)
  let meta = { title: title }
  let dimensions = product.dimensions || []
  return (
    <Layout location={location}>
      <Meta site={meta} />
      <div className="product detail container p-0">
        <ProductTermNav terms={series} />
        <div className="row no-gutters">
          <h1 className="my-3 w-100 border-bottom pb-2">{title}</h1>
          <p>
            제품 상세 화면에 표시할 데이터가 충분한가요? /data/product-terms.yml
          </p>
          <p className="bg-light">
            Worldwide standard chains complying with JIS and ANSI
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            similique, omnis voluptate. Neque eligendi maxime, quod autem
            officia minima expedita. Inventore quam quis, dolor ratione tempore
            est placeat asperiores, iure.
          </p>
          <div className="row">
            {dimensions.length > 0 &&
              dimensions.map((dimension, i) => {
                console.log(dimension, i)
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
      </div>
    </Layout>
  )
}

const ProductTermNav = ({ terms }) => {
  const slugs = terms.map(term => slugify(term, { lower: true }))
  return (
    <ul className="nav nav-tabs my-3">
      {slugs.map((slug, i) => {
        return (
          <li className="nav-item" key={i}>
            <Link className="nav-link nav-item active" to={'/product/' + slug}>
              {terms[i]}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Product
