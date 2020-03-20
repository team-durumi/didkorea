import React from 'react'
import { graphql } from 'gatsby'
import { products } from '../../data/product-terms.yml'

const productPageStyle = {
  // border: '1px solid black',
  padding: 50,
}

const tableHeadStyle = {
  backgroundColor: '#587FBE',
  color: 'white',
}

const tableNameStyle = {
  backgroundColor: '#CACBCA',
}

const featuresLiStyle = {
  paddingBottom: 10,
}

export default function ProductContent({ series_item }) {
  var product_keys = []
  products.map((product, index) => {
    if (product['series'] === series_item) {
      product_keys.push(index)
    }
  })

  // if (product_keys.length == 1) {
  if (series_item.includes('Series')) {
    return (
      <div style={productPageStyle}>
        <h1>{series_item}</h1>
        <h2>subtitle goes here</h2>
        <table>
          <tbody>
            <tr>
              <th style={tableHeadStyle} rowSpan="2">
                Name
              </th>
              {product_keys.map((item, key) => {
                return (
                  <td key={key} style={tableNameStyle}>
                    <h5 style={{ textAlign: 'center' }}>
                      {products[item]['name']}
                    </h5>
                  </td>
                )
              })}
            </tr>
            <tr>
              {/*<th style={tableHeadStyle}></th>*/}
              {product_keys.map((item, key) => {
                return (
                  <td key={key}>
                    <img src={products[item]['image']} width="100%" />
                  </td>
                )
              })}
            </tr>
            <tr>
              <th style={tableHeadStyle}>Features</th>
              {product_keys.map((item, key) => {
                return (
                  <td key={key}>
                    <ul>
                      {products[item]['features'].map((item, key) => {
                        return (
                          <li className="list-unstyled" style={featuresLiStyle}>
                            {item}
                          </li>
                        )
                      })}
                    </ul>
                  </td>
                )
              })}
            </tr>
            <tr>
              <th style={tableHeadStyle}>Functions</th>
              {product_keys.map((item, key) => {
                return (
                  <td key={key}>
                    <img src={products[item]['functions']} width="50%" />
                  </td>
                )
              })}
            </tr>
            <tr>
              <th style={tableHeadStyle}>Main Uses</th>
              {product_keys.map((item, key) => {
                return (
                  <td key={key}>
                    <span>{products[item]['main-uses']} </span>
                  </td>
                )
              })}
            </tr>
            <tr>
              <th style={tableHeadStyle}>PDF</th>
              {product_keys.map((item, key) => {
                return (
                  <td key={key}>
                    <div className="btn-group">
                      <i className="fa fa-download" />
                      <a href={products[item]['files']} target="_blank">
                        {products[item]['name']}
                      </a>
                    </div>
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      // <SingleProduct />
      <div style={productPageStyle}>
        <h1>{series_item}</h1>
        <h2>Worldwide standard chains complying with JIS and ANSI</h2>
        <span>{}</span>
        <img src={products[0]['image']} />
        <p>
          The 14 sizes of DID standard roller chains are available ranging from
          DID25 to DID240 including those in conformity with ANSI (American
          National Strandard Institute), and ISO (International Organization for
          Standardization).
        </p>
        <p>
          The chains not only meet the requirements for the minimum tensile
          strength prescribed by ANSI and ISO, but they also provide the top
          class quality in the world including a high fatigue strength.
        </p>
        <img src="/products/01/src-02.png" />
        <img src="/products/01/src-dimensions.png" />
        <h2>Catalog Download</h2>

        <div className="row">
          {products[0]['dimensions'].length > 0 &&
            products[0]['dimensions'].map((dimension, i) => {
              return (
                <div className="col-sm-3 my-2" key={i}>
                  <div className="card">
                    <div className="card-body">
                      <a
                        href={dimension.files}
                        className="btn btn-primary float-right"
                        target="_blank"
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
}
