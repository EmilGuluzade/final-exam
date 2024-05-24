import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
const Header = () => {




    return (
        <header className='header d-flex justify-content-between '>
            <div className="header__logo d-flex ">
                <h2>Pulse</h2>
                
                <span className='dot'>.</span>

                <i class="fa-solid fa-bars" style={{color:"#ffffff"}}></i>
            </div>
            <div className="header__nav">
                <nav>
                <ul className='nav-list'>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li><Link to="/wishlist" >Wishlist</Link></li>
                    <li><Link to="/basket" >Basket</Link></li>
                    <li><Link to="/admin" >Admin</Link></li>
                </ul>
                </nav>
            </div>
<div className="header__right">
    <span className='reserv '>Reservation</span>
    <span className="numberr"><i class="fa-solid fa-phone" style={{color: "#ffffff"}}></i> 652-345 3222 11</span>
</div>
        </header>
    )
}

export default Header