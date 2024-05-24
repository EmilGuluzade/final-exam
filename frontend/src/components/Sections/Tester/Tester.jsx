import React from 'react'
import "./Tester.scss"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}
const Tester = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <section className='tester'>
      <div className="container">
        <div className="section__heading">
          <div className="section__heading-img">
            <i class="fa-solid fa-bell-concierge" style={{ color: "#ffffff" }}></i>
          </div>
          <div className="section__heading-title">
            <h2>Testominals</h2>
          </div>
        </div>
       
        <Slider {...settings}>
      <div className='coritem d-flex  flex-column  align-items-center '>
      <i class="fa-solid fa-quote-right"></i>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sapiente consequatur quo laudantium modi libero illo debitis! Distinctio asperiores necessitatibus placeat dolores temporibus nesciunt quis! Quas alias praesentium explicabo?</p>

        <h5 className=''>Emil Guluzade</h5>
      </div>
      <div className='coritem d-flex  flex-column  align-items-center '>
      <i class="fa-solid fa-quote-right"></i>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sapiente consequatur quo laudantium modi libero illo debitis! Distinctio asperiores necessitatibus placeat dolores temporibus nesciunt quis! Quas alias praesentium explicabo?</p>

        <h5 className=''>Emil Guluzade</h5>
      </div><div className='coritem d-flex  flex-column  align-items-center '>
      <i class="fa-solid fa-quote-right"></i>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sapiente consequatur quo laudantium modi libero illo debitis! Distinctio asperiores necessitatibus placeat dolores temporibus nesciunt quis! Quas alias praesentium explicabo?</p>

        <h5 className=''>Emil Guluzade</h5>
      </div><div className='coritem d-flex  flex-column  align-items-center '>
      <i class="fa-solid fa-quote-right"></i>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sapiente consequatur quo laudantium modi libero illo debitis! Distinctio asperiores necessitatibus placeat dolores temporibus nesciunt quis! Quas alias praesentium explicabo?</p>

        <h5 className=''>Emil Guluzade</h5>
      </div>
      
    </Slider>





      </div>
    </section>
  )
}

export default Tester