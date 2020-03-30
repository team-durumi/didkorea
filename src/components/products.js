import React from 'react'

const productPageStyle = {
  padding: 30,
}

const cardHeadStyle = {
  backgroundColor: '#CACBCA',
  color: 'white',
  textAlign: 'center',
  // height: '5rem'
}

const tableNameStyle = {
  backgroundColor: '#CACBCA',
}

const featuresLiStyle = {
  paddingBottom: 10,
}

export default function Products({ products }) {
  console.log(products)
  return (
    <div style={productPageStyle}>
      {/*<h2>subtitle goes here</h2>*/}
      <div className="row">
        {products.map((product, key) => {
          return (
            <div className="col-md-4 my-3">
              <div className="card">
                <h5 className="card-header" style={cardHeadStyle}>
                  {product.name}
                </h5>
                <div>
                  <img
                    className="card-img-top"
                    src={product.image}
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="card-body" style={{}}>
                  <div className="mb-3" style={{}}>
                    <h5 className="mb-1">Features</h5>
                    <ul className="mb-0 px-0">
                      {product.features.map((item, key) => {
                        return (
                          <li
                            className="list-unstyled pb-2"
                            style={featuresLiStyle}
                          >
                            {item}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <div className="mb-3">
                    <h5 className="mb-1">Functions</h5>
                    <img src={product.functions} />
                  </div>
                  <div className="mb-3">
                    <h5 className="mb-1">Main Uses</h5>
                    <span>{product.main_uses} </span>
                  </div>
                  <div className="mb-3">
                    <h5 className="mb-1">PDF Download</h5>
                    <a
                      href={product.files}
                      target="_blank"
                      style={{ fontWeight: 'bold' }}
                    >
                      <i className="fa fa-download mr-2" />
                      <span>{product.name}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
