import React from 'react'

export default function Carousel({ slides }) {
  if (!slides || slides.length === 0) {
    return null
  }

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="px-0">
        <ol className="carousel-indicators">
          {slides.map((slide, i) => (
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={i}
              className={i === 0 ? 'active' : ''}
              key={i}
            />
          ))}
        </ol>
        <div className="carousel-inner">
          {slides.map((slide, i) => (
            <div
              className={i === 0 ? 'carousel-item active' : 'carousel-item'}
              key={i}
            >
              <img
                className="d-block w-100"
                src={slide.image}
                alt={slide.title || ''}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
