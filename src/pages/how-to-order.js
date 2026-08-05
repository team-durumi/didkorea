import React from 'react'
import Meta from 'components/meta'
import Layout from 'components/layout'
import Carousel from 'components/Carousel'
import { slides } from '../../data/front.yml'
import './how-to-order.scss'

const HowToOrderIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <Meta title="주문방법" path={location.pathname} />
      <Carousel slides={slides} />
      <div className="container px-md-0 py-4 how-to-order">
        <h1 className="how-to-order__title">주문방법</h1>

        <section className="how-to-order__section">
          <h2 className="how-to-order__section-title">연락처로 주문하기</h2>
          <p className="how-to-order__lead mb-0">
            제품소개에 안내된 제품을 확인하신 후, 다음 연락처를 통해
            주문해주세요.
          </p>
          <ul className="how-to-order__list">
            <li className="how-to-order__item">
              <i className="fa fa-phone how-to-order__icon" aria-hidden="true" />
              <span className="how-to-order__contact">
                연락처{' '}
                <a href="tel:028955118">02-895-5118</a>
              </span>
            </li>
            <li className="how-to-order__item">
              <i
                className="fa fa-envelope how-to-order__icon"
                aria-hidden="true"
              />
              <span className="how-to-order__contact">
                이메일{' '}
                <a href="mailto:didkorea@didkorea.co.kr">
                  didkorea@didkorea.co.kr
                </a>
              </span>
            </li>
          </ul>
        </section>

        <section className="how-to-order__section">
          <h2 className="how-to-order__section-title">주문정보</h2>
          <p className="how-to-order__lead mb-0">
            제품 주문 시, 다음 사항을 고려하시면 좋습니다.
          </p>
          <ul className="how-to-order__list">
            <li className="how-to-order__item">
              <i
                className="fa fa-chevron-right how-to-order__icon"
                aria-hidden="true"
              />
              <span>주문 품목 및 규격</span>
            </li>
            <li className="how-to-order__item">
              <i
                className="fa fa-chevron-right how-to-order__icon"
                aria-hidden="true"
              />
              <span>수량</span>
            </li>
            <li className="how-to-order__item">
              <i
                className="fa fa-chevron-right how-to-order__icon"
                aria-hidden="true"
              />
              <span>주문 업체명 및 연락처, 주소</span>
            </li>
          </ul>
        </section>

        <section className="how-to-order__guide">
          <h3>D.I.D 제품의 품목 번호를 읽는 방법은 다음과 같습니다.</h3>
          <img
            src="/order-instructions.png"
            alt="D.I.D 제품 품목 번호 읽는 방법"
          />
        </section>
      </div>
    </Layout>
  )
}

export default HowToOrderIndex
