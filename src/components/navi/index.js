import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import './style.scss'

function Navi(props) {
  const { location, title, items } = props
  const navRef = useRef(null)
  const [pinned, setPinned] = useState(false)
  const [navHeight, setNavHeight] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight)
      }
    }
    measure()
    window.addEventListener('resize', measure)

    const onScroll = () => {
      setPinned(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      {pinned ? (
        <div
          className="site-nav__spacer"
          style={{ height: navHeight }}
          aria-hidden="true"
        />
      ) : null}
      <div
        ref={navRef}
        className={'site-nav' + (pinned ? ' is-pinned' : '')}
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg px-0">
            <Link className="navbar-brand" to="/">
              <img src="/did-logo.png" alt={title} />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="메뉴 열기"
            >
              <i className="fa fa-bars" aria-hidden="true" />
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto mt-lg-0">
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
                      <Link to={item.link} className="nav-link">
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
    </>
  )
}

export default Navi
