import { Link } from 'gatsby'
import React from 'react'
import './style.scss'
import {
  title,
  title_en,
  copyright,
  credit,
  address,
  address_en,
  contact,
} from '../../../data/footer.yml'

const footerStyle = {
  background: '#444444',
}

const footerHeaderStyle = {
  color: 'white',
  fontWeight: 700,
}

const footerTextStyle = {
  color: 'white',
  fontWeight: 700,
  fontSize: '.9rem',
}

const Footer = ({ author, title, data }) => (
  <div className="footer" style={footerStyle}>
    <div className="container px-md-0 py-4">
      <div className="row no-gutters">
        <div className="col-md-6">
          <h2 style={footerHeaderStyle}>{title}</h2>
          <h2 style={footerHeaderStyle}>{title_en}</h2>
        </div>
        <div className="col-md-6">
          <span className="d-inline-block" style={footerTextStyle}>
            {copyright}
          </span>
          <span className="d-inline-block" style={footerTextStyle}>
            {credit}
          </span>
          <span className="d-inline-block" style={footerTextStyle}>
            {address}
          </span>
          <span className="d-inline-block" style={footerTextStyle}>
            Address: {address_en}
          </span>
          <span className="d-inline-block" style={footerTextStyle}>
            {contact}
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
