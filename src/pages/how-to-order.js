import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import Meta from 'components/meta'
import Layout from 'components/layout'
import Carousel from 'components/Carousel'
import { slides } from '../../data/front.yml'

const ulStyles = {
  paddingLeft: 15,
  marginTop: 15,
}

const HowToOrderIndex = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <Carousel slides={slides} />
      <div className="container px-md-0 py-4">
        <div>
          <div className="mb-4">
            <h1>주문방법</h1>
            <h3>
              제품소개에 안내된 제품을 확인하신 후, 다음 연락처를 통해
              주문해주세요.
            </h3>
            <ul style={ulStyles}>
              <li className="list-unstyled mb-1">
                <i
                  className="fa fa-chevron-right"
                  style={{ marginRight: 10 }}
                />
                <span>연락처 02-895-5118</span>
              </li>
              <li className="list-unstyled mb-1">
                <i
                  className="fa fa-chevron-right"
                  style={{ marginRight: 10 }}
                />
                <span>이메일 didkorea@didkorea.co.kr </span>
              </li>
            </ul>
          </div>
          <div>
            <h1>주문정보</h1>
            <h3>제품 주문 시, 다음 사항을 고려하시면 좋습니다.</h3>
            <ul style={ulStyles}>
              <li className="list-unstyled mb-1">
                <i
                  className="fa fa-chevron-right"
                  style={{ marginRight: 10 }}
                />
                <span>주문 품목 및 규격</span>
              </li>
              <li className="list-unstyled mb-1">
                <i
                  className="fa fa-chevron-right"
                  style={{ marginRight: 10 }}
                />
                <span>수량</span>
              </li>
              <li className="list-unstyled mb-1">
                <i
                  className="fa fa-chevron-right"
                  style={{ marginRight: 10 }}
                />
                <span>주문 업체명 및 연락처, 주소</span>
              </li>
            </ul>
          </div>
          <div className="how-to-get-product-id">
            <h3>D.I.D 제품의 품목 번호를 읽는 방법은 다음과 같습니다.</h3>
            <img src="/order-instructions.png" className="mt-2" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HowToOrderIndex
