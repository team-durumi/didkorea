import React from 'react'
import './style.scss'
import {
  title as companyName,
  copyright,
  credit,
  address,
  address_en,
  phone,
  fax,
  email,
} from '../../../data/footer.yml'

const Footer = () => (
  <footer className="footer">
    <div className="container px-md-0 footer__inner">
      <div className="row">
        <div className="col-md-4 footer__brand">
          <img
            className="footer__logo"
            src="/did-logo.png"
            alt={companyName}
          />
        </div>
        <div className="col-md-8 footer__meta">
          <span className="footer__line">{credit}</span>
          <span className="footer__line">{address}</span>
          <span className="footer__line">
            <span className="footer__label">Address</span>
            {address_en}
          </span>
          <span className="footer__line linkify">
            <span className="footer__label">전화</span>
            <a href={'tel:' + phone}>{phone}</a>
            <span className="footer__sep">|</span>
            <span className="footer__label">팩스</span>
            {fax}
            <span className="footer__sep">|</span>
            <span className="footer__label">이메일</span>
            <a href={'mailto:' + email}>{email}</a>
          </span>
          <div className="footer__copy">{copyright}</div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
