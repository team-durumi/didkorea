import React from 'react'

export default function Carousel({ slides }) {
  console.log(slides)
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
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

const placeholderImage = index =>
  'https://via.placeholder.com/800x450?text=Slide' + index
