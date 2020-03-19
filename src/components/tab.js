import React from 'react'
import { products } from '../../data/product-terms.yml'
import { graphql } from 'gatsby'

export default function Tab({ series }) {
  return (
    <div className="tabArea mt-3">
      <nav>
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
              <div>
                {'tab page for ' + item}
                <h1>{item}</h1>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
