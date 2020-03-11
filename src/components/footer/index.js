import { Link } from 'gatsby'
import React from 'react'
import './style.scss'
import {
  title,
  title_en,
  copyright,
  credit,
  address,
  contact,
} from '../../../data/footer.yml'

const Footer = ({ author, title, data }) => (
  <div className="footer">
    <div className="container px-0 border-top py-3">
      <div className="row no-gutters">
        <div className="col-6">
          <h2>{title}</h2>
          <h2>{title_en}</h2>
        </div>
        <div className="col-6">
          <span className="d-inline-block">{copyright}</span>
          <span className="d-inline-block">{credit}</span>
          <span className="d-inline-block">{address}</span>
          <span className="d-inline-block">{contact}</span>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
