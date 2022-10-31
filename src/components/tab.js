import React from 'react'
import { graphql } from 'gatsby'
import ProductContent from 'components/product_content'

const tabStyles = {
  marginTop: 30,
  marginBottom: 50,
}

const navStyle = {
  marginBottom: 30,
}

export default function Tab({ series }) {
  return (
    <div className="tabArea mt-3" style={tabStyles}>
      <nav style={navStyle}>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {series.map((item, key) => {
            return (
              <a
                className="nav-item nav-link"
                id={'nav-tab-' + key}
                data-toggle="tab"
                href={'#nav-' + key}
                role="tab"
                aria-controls={'nav-tab-' + key}
                aria-selected="true"
                key={key}
              >
                {item}
              </a>
            )
          })}
        </div>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        {series.map((item, key) => {
          return (
            <div
              className="tab-pane fade show"
              id={'nav-' + key}
              role="tabpanel"
              aria-labelledby={'nav-' + key}
              key={key}
            >
              <ProductContent series_item={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
