import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/post'
import Meta from 'components/meta'
import Layout from 'components/layout'
import { products, series } from '../../data/product-terms.yml'
console.log(products, series)

const ProductsIndex = ({ data, location, products, series }) => {
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div className="container">
        <div className="row">
          <h1>products</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            eum numquam, obcaecati voluptatem. Mollitia placeat natus temporibus
            pariatur cumque minima deleniti, unde ex, facere, dolore commodi
            eaque aut laboriosam sunt!
          </p>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <p class="p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam labore accusantium suscipit consequatur, minus sapiente
                harum. Quasi blanditiis natus explicabo vitae sunt veniam sint,
                sapiente optio, excepturi totam delectus quo.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <p class="p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                laborum eos labore tenetur repellat praesentium dolores,
                blanditiis ullam aut quia veniam dolorem odio architecto, beatae
                culpa modi a facere inventore.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <p class="p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis deleniti at sequi. Maiores harum sapiente eos magni
                odit hic, natus rem ducimus tenetur vero! Fugit laudantium
                culpa, iusto laboriosam illo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductsIndex
