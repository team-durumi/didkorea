import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/post'
import Meta from 'components/meta'
import Layout from 'components/layout'

import Carousel from 'components/Carousel'
import { slides } from '../../data/front.yml'

const HowToOrderIndex = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <Carousel slides={slides} />
      <div className="container px-0 py-4">
        <div className="row no-gutters">
          <div className="col-md-6 pr-3 d-block">
            <h1>주문방법</h1>
            <p>
              <strong>
                제품소개에 안내된 제품을 확인하신 후, 다음 연락처를 통해
                주문해주세요.
              </strong>
            </p>
            <ul>
              <li>연락처 02-895-5118</li>
              <li>이메일 didkorea@didkorea.co.kr </li>
            </ul>
          </div>
          <div className="col-md-6 pl-3 d-block">
            <h1 style={{ visibility: 'hidden' }}>주문방법</h1>
            <p>
              <strong>제품 주문 시, 다음 사항을 고려하시면 좋습니다.</strong>
            </p>
            <ul>
              <li>주문 품목 및 규격</li>
              <li>수량</li>
              <li>주문 업체명 및 연락처, 주소</li>
            </ul>
          </div>
          <p>
            <strong>
              D.I.D 제품의 품목 번호를 읽는 방법은 다음과 같습니다.
            </strong>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default HowToOrderIndex
