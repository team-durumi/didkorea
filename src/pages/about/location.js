import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/post'
import Meta from 'components/meta'
import Layout from 'components/layout'

const AboutLocationIndex = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div className="container">
        <div className="row">
          <h1>location</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            eum numquam, obcaecati voluptatem. Mollitia placeat natus temporibus
            pariatur cumque minima deleniti, unde ex, facere, dolore commodi
            eaque aut laboriosam sunt!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutLocationIndex
