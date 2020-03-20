import React, { useEffect } from 'react'
import emergence from 'emergence.js'

import Navi from 'components/navi'
import Footer from 'components/footer'
import { siteMetadata } from '../../../gatsby-config'
import navItems from '../../../data/navigations.yml'

import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

function Layout(props) {
  useEffect(() => {
    emergence.init()
  })
  const { children } = props
  return (
    <>
      <Navi title={siteMetadata.title} items={navItems} {...props} />
      {children}
      <Footer title={siteMetadata.title} author={siteMetadata.author} />
    </>
  )
}

export default Layout
