import React from 'react'
import { Link } from 'gatsby'

const navStyle = {
  backgroundColor: '#08137E',
}

const navLinkStyle = {
  color: 'white',
}

function Navi(props) {
  const { location, title, items } = props
  return (
    <div style={navStyle}>
      <div className="container px-0">
        <nav className="navbar navbar-expand-lg px-0">
          <Link className="navbar-brand " to="/">
            <img
              className="mb-0 text-center mr-md-auto"
              style={{
                color: 'white',
                width: 150,
                left: 0,
                display: 'inline-block',
              }}
              src="/did-logo.png"
              alt={title}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" style={{ color: 'white' }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
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
        </nav>
      </div>
    </div>
  )
}

export default Navi
