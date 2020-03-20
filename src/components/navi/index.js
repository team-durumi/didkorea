import React from 'react'
import { Link } from 'gatsby'

const navStyle = {
  height: 100,
  backgroundColor: '#020980',
}

const navLinkStyle = {
  color: 'white',
}

function Navi(props) {
  const { location, title, items } = props
  return (
    <nav
      className="navbar navbar-expand flex-column flex-md-row border-bottom box-shadow"
      style={navStyle}
    >
      <div className="container">
        <Link className="text-center mr-md-auto" to="/">
          <h1 className="navbar-brand mb-0" style={navLinkStyle}>
            {title}
          </h1>
        </Link>
        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            {items.map((item, key) => {
              return (
                <li
                  key={key}
                  className={
                    location.pathname === item.link
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link
                    to={item.link}
                    className="nav-link"
                    style={navLinkStyle}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navi
