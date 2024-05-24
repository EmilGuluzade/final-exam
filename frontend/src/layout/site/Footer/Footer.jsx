import React from 'react'
import "./Footer.scss"
const Footer = () => {
    return (
        <footer class="footer-section">


            <div class="footer-bg-area set-bg" data-setbg="img/footer-bg.jpg" >
                <div class="contact-form-area">
                    <div class="container">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="contact-form-warp">
                                <div className="section__heading">
                                    <div className="section__heading-img">
                                        <i class="fa-solid fa-drumstick-bite" style={{ color: "#000000" }}></i>
                                    </div>
                                    <div className="section__heading-title   ">
                                        <h2 className=' text-dark my-5'>Contact </h2>
                                    </div>
                                </div>

                                <form class="contact-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="email" placeholder="E-mail" />
                                        </div>
                                        <div class="col-md-12">
                                            <textarea placeholder="Message"></textarea>
                                            <div class="text-center">
                                                <button class="site-btn">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    Copyright ©<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script>document.write(new Date().getFullYear());</script>2024 All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>

                </div>
            </div>
        </footer>
    )
}

export default Footer
