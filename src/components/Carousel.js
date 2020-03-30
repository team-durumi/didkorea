import React from 'react'

export default function Carousel({ slides }) {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="px-0">
        <ol className="carousel-indicators">
          {slides.map((slide, i) => {
            return (
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={i}
                className="active"
                key={i}
              ></li>
            )
          })}
        </ol>
        <div className="carousel-inner">
          {slides.map((slide, i) => {
            return (
              <div className="carousel-item active" key={i}>
                <img
                  className="d-block w-100"
                  src={slide.image}
                  alt={slide.title}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const placeholderImage = index =>
  'https://via.placeholder.com/800x450?text=Slide' + index
