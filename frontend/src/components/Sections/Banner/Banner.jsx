import React from 'react'
import "./Banner.scss"
const Banner = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active position-relative ">
      <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg" class="d-block w-100" alt="..."/>
      <h2 className=' position-absolute '>Food and more <span>.</span> </h2>
    </div>
    <div class="carousel-item">
      <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg" class="d-block w-100" alt="..."/>
      <h2 className=' position-absolute '>Food and more <span>.</span> </h2>

    </div>
    <div class="carousel-item">
      <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg" class="d-block w-100" alt="..."/>
      <h2 className=' position-absolute '>Food and more <span>.</span> </h2>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Banner