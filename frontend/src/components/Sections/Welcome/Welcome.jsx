import React from 'react'
import "./Welcome.scss"
const Welcome = () => {
    return (
        <section class="inter-section spad">
            <div class="container">
                <div className="section__heading">
                    <div className="section__heading-img">
                        <i class="fa-solid fa-calendar-days" style={{ color: "#000000" }}></i>

                    </div>
                    <div className="section__heading-title   ">
                        <h2 className=' text-dark my-5'>Welcome </h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 intro-item">
                        <h3>2002</h3>
                        <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. </p>
                    </div>
                    <div class="col-md-4 intro-item">
                        <h3>2010</h3>
                        <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
                    </div>
                    <div class="col-md-4 intro-item">
                        <h3>2018</h3>
                        <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. </p>
                    </div>
                </div>
                <div class="text-center">
                    <img src="	https://preview.colorlib.com/theme/pulse/img/sign.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Welcome