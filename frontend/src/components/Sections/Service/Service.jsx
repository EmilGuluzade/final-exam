import React from 'react'
import "./Service.scss"
const Service = () => {
    return (
        <section class="services-section spad">
            <div class="container">
                <div className="section__heading">
                    <div className="section__heading-img">
                        <i class="fa-solid fa-calendar-days" style={{ color: "#000000" }}></i>

                    </div>
                    <div className="section__heading-title   ">
                        <h2 className=' text-dark my-5'>Welcome </h2>
                    </div>
                </div>
                <div class="row services">
                    <div class="col-lg-3 col-md-6 service-item">
                    <i class="fa-solid fa-mug-hot" style={{ color: "#EAC45E" }}></i>
                        <h3>Breakfast</h3>
                        <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 service-item">
                    <i class="fa-solid fa-cake-candles" style={{ color: "#EAC45E" }}></i>
                        <h3>Brunch</h3>
                        <p>Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 service-item">
                    <i class="fa-solid fa-bowl-rice" style={{ color: "#EAC45E" }}></i>
                        <h3>Lunch</h3>
                        <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 service-item">
                    <i class="fa-solid fa-hamburger" style={{ color: "#EAC45E" }}></i>

                        <h3>Dinner</h3>
                        <p>Aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendreri.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service