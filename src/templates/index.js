import get from 'lodash/get'
import Meta from 'components/meta'
import Layout from 'components/layout'
import Page from 'templates/page'
import ProductTerm from 'templates/productTerm'

const Template = ({ data, location }) => (
  <div>
    <Layout location={location}>
      <Meta
        title={get(data, 'post.frontmatter.title')}
        site={get(data, 'site.meta')}
      />
      <Page {...this.props} />
    </Layout>
  </div>
)
export default Template
