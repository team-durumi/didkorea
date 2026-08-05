import React from 'react'
import Helmet from 'react-helmet'
import { siteMetadata } from '../../../gatsby-config'

const Meta = ({ title, path }) => {
  const siteTitle = siteMetadata.title
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const description =
    siteMetadata.description ||
    '광명코포레이션 — D.I.D 체인 국내 공급'
  const pathname = path || '/'
  const url = `${siteMetadata.siteUrl}${pathname}`
  const image = `${siteMetadata.siteUrl}/img/og-image.png`

  return (
    <Helmet
      htmlAttributes={{ lang: 'ko' }}
      title={pageTitle}
      meta={[
        { name: 'description', content: description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: pageTitle },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
        { property: 'og:title', content: pageTitle },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { property: 'og:image', content: image },
        { property: 'og:site_name', content: siteTitle },
      ]}
    />
  )
}

export default Meta
