import React from 'react'
            import { Link } from 'react-router-dom'
            
            const Header = () => {
              return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5 ">
                    <div className="collapse navbar-collapse    d-flex justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                            <li className="nav-item"><Link className="nav-link" to="/admin">Products</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/admin/add">Add</Link></li>
                        </ul>
                    </div>
                </div>
                </nav>
              )
            }
            
            export default Header