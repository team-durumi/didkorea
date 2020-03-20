import React from 'react'

const productPageStyle = {
  padding: 50,
}

const tableHeadStyle = {
  backgroundColor: 'lightblue',
  color: 'white',
}

const tableNameStyle = {
  backgroundColor: 'lightgrey',
}

export default function Products({ products }) {
  console.log(products)
  return (
    <div style={productPageStyle}>
      <h1>title</h1>
      <h2>subtitle goes here</h2>
      <table>
        <tbody>
          <tr>
            <th style={tableHeadStyle} rowSpan="2">
              Name
            </th>
            {products.map((product, key) => {
              return (
                <td key={key} style={tableNameStyle}>
                  <h5 style={{ textAlign: 'center' }}>{product.name}</h5>
                </td>
              )
            })}
          </tr>
          <tr>
            {/*<th style={tableHeadStyle}></th>*/}
            {products.map((product, key) => {
              return (
                <td key={key}>
                  <img src={product.image} width="100%" />
                </td>
              )
            })}
          </tr>
          <tr>
            <th style={tableHeadStyle}>Features</th>
            {products.map((product, key) => {
              return (
                <td key={key}>
                  <p>{product.features}</p>
                </td>
              )
            })}
          </tr>
          <tr>
            <th style={tableHeadStyle}>Functions</th>
            {products.map((product, key) => {
              return (
                <td key={key}>
                  <img src={product.functions} width="50%" />
                </td>
              )
            })}
          </tr>
          <tr>
            <th style={tableHeadStyle}>Main Uses</th>
            {products.map((product, key) => {
              return (
                <td key={key}>
                  <span>{product['main-uses']} </span>
                </td>
              )
            })}
          </tr>
          <tr>
            <th style={tableHeadStyle}>PDF</th>
            {products.map((product, key) => {
              return (
                <td key={key}>
                  <a href={product.files} target="_blank">
                    {product.name}
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
