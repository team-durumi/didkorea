import React from 'react'
import { graphql } from 'gatsby'
import { products } from '../../data/product-terms.yml'

const productPageStyle = {
  // border: '1px solid black',
  padding: 50,
}

const tableHeadStyle = {
  backgroundColor: 'lightblue',
  color: 'white',
}

const tableNameStyle = {
  backgroundColor: 'lightgrey',
}

export default function ProductContent({ series_item }) {
  var product_keys = []
  products.map((product, index) => {
    if (product['series'] === series_item) {
      product_keys.push(index)
    }
  })

  if (product_keys.length == 1) {
    var type = 'singular'
  } else {
    var type = 'plural'
  }
  // if (series_item.includes('Series')) {
  // 	return (
  //     <div style={productPageStyle}>
  // 			<h1>{series_item}</h1>
  // 	    <p>{type}</p>
  //     </div>
  // 	)
  // } else {
  // 	return (
  //     <div style={productPageStyle}>
  // 			<h1>{series_item}</h1>
  // 	    <p>{type}</p>
  //     </div>
  // 	)
  // }

  // 일단 series 페이지 구현
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
                  <p>{products[item]['features']}</p>
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
                  <a href={products[item]['files']} target="_blank">
                    {products[item]['name']}
                  </a>
                </td>
              )
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
