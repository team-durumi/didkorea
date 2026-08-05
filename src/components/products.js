import React from 'react'

export default function Products({ products, description }) {
  return (
    <div className="product-series">
      {description ? <h2 className="product-series__lead">{description}</h2> : null}
      <div className="row">
        {products.map((product, key) => {
          return (
            <div className="col-md-4 my-3" key={key}>
              <div className="card product-card">
                <h5 className="card-header product-card__header">
                  {product.name}
                </h5>
                <div>
                  <img
                    className="card-img-top product-card__image"
                    src={product.image}
                    alt={product.name || ''}
                  />
                </div>
                <div className="card-body product-card__body">
                  <div className="product-card__section">
                    <h5 className="product-card__label">Features</h5>
                    <ul className="product-card__features">
                      {product.features.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="product-card__section">
                    <h5 className="product-card__label">Functions</h5>
                    {product.functions ? (
                      <img
                        src={product.functions}
                        alt={`${product.name} functions`}
                      />
                    ) : null}
                  </div>
                  <div className="product-card__section">
                    <h5 className="product-card__label">Main Uses</h5>
                    <span>{product.main_uses} </span>
                  </div>
                  <div className="product-card__section">
                    <h5 className="product-card__label">PDF Download</h5>
                    <a
                      href={product.files}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-card__download"
                    >
                      <i className="fa fa-download" />
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
