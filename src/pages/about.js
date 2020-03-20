import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/post'
import Meta from 'components/meta'
import Layout from 'components/layout'

import Carousel from 'components/Carousel'
import { slides } from '../../data/front.yml'

const AboutIndex = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <Carousel slides={slides} />
      <div className="container px-0 py-4">
        <div className="row no-gutters">
          <div className="col-md-6 pr-3">
            <h1>회사 소개</h1>
            <p>저희 광명코포레이션을 찾아주셔서 감사합니다.</p>
            <p>
              광명코포레이션은 1998년 창사 이래 국내 유수 기업인 대림체인외
              동력전달품목 판매에
              <br />
              주력해 왔습니다. 또한 일본의 최대 체인 메이커인 D.I.D CHAIN을 독점
              공급하고 있습니다.
            </p>
            <p>
              고객 여러분에게 저렴하고 고품질의 제품을 공급하고자 하오니 향후
              많은 지도 편달 바랍니다.
            </p>

            <p>대표 장 종수</p>
          </div>
          <div className="col-md-6 pl-3">
            <h2>찾아오시는 길</h2>
            <img src="http://didkorea.co.kr/img/map.gif" className="border" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutIndex
