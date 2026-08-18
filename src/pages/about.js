import React from 'react'
import Meta from 'components/meta'
import Layout from 'components/layout'
import Carousel from 'components/Carousel'
import { slides } from '../../data/front.yml'
import Map from 'components/map'
import './about.scss'

const AboutIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <Meta title="회사소개" path={location.pathname} />
      <Carousel slides={slides} />
      <div className="container px-md-0 py-4 about-page">
        <div className="row no-gutters">
          <div className="col-md-6 pr-md-3">
            <h1>회사 소개</h1>
            <p>저희 광명코포레이션을 찾아주셔서 감사합니다.</p>
            <p>
              광명코포레이션은 1998년 창사 이래 국내 유수 기업인 대림체인외
              동력전달품목 판매에 주력해 왔습니다. 또한 일본의 최대 체인
              메이커인 D.I.D CHAIN을 독점 공급하고 있습니다.
            </p>
            <p>
              고객 여러분에게 저렴하고 고품질의 제품을 공급하고자 하오니 향후
              많은 지도 편달 바랍니다.
            </p>
            <br />
            <p>대표 장종수</p>

            <section className="about-group">
              <h2 className="about-group__title">공급 브랜드 · 그룹 관계</h2>
              <p className="about-group__text">
                광명코포레이션은 일본{' '}
                <a
                  href="https://www.did-daido.co.jp/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  大同工業(Daido Kogyo / D.I.D)
                </a>
                의 체인을 국내에 공급합니다. 大同工業은 2026년 1월부터{' '}
                <a
                  href="https://tsubakimoto.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  株式会社椿本チエイン(Tsubaki)
                </a>{' '}
                그룹의 자회사입니다.
              </p>
              <div className="about-group__brands">
                <a
                  className="about-group__brand"
                  href="https://tsubakimoto.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="about-group__label">Group (모회사)</span>
                  <span className="about-group__logo-slot">
                    <img
                      src="/brand/tsubaki-logo.svg"
                      alt="Tsubaki — Tsubakimoto Chain Co."
                    />
                  </span>
                </a>
                <a
                  className="about-group__brand about-group__brand--text"
                  href="https://www.did-daido.co.jp/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="about-group__label">Product brand</span>
                  <span className="about-group__logo-slot">
                    <span className="about-group__did">D.I.D</span>
                    <span className="about-group__did-sub">Daido Kogyo</span>
                  </span>
                </a>
              </div>
            </section>
          </div>
          <div className="col-md-6 pl-md-3">
            <h2>찾아오시는 길</h2>
            <Map />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutIndex
