import React from 'react'

const productPageStyle = {
  padding: 50,
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
      <h2>subtitle goes here</h2>
      <div className="row">
        {products.map((product, key) => {
          return (
            <div className="col-md-4 my-3">
              <div className="card">
                <h5 className="card-header" style={cardHeadStyle}>
                  {product.name}
                </h5>
                <div style={{}}>
                  <img
                    className="card-img-top"
                    src={product.image}
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="card-body" style={{}}>
                  <div style={{}}>
                    <ul style={{ paddingLeft: 0 }}>
                      {product.features.map((item, key) => {
                        return (
                          <li className="list-unstyled" style={featuresLiStyle}>
                            {item}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <div>
                    <img src={product.functions} />
                  </div>
                  <div>
                    <span>{product['main-uses']} </span>
                  </div>
                  <div>
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
