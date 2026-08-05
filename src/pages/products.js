import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import Meta from 'components/meta'
import Layout from 'components/layout'

const ProductsIndex = ({ location }) => {
  useEffect(() => {
    navigate('/product/01-standard-roller-chain/', { replace: true })
  }, [])

  return (
    <Layout location={location}>
      <Meta title="제품소개" path={location.pathname} />
      <div className="container py-5">
        <p>제품소개 페이지로 이동 중…</p>
      </div>
    </Layout>
  )
}

export default ProductsIndex
