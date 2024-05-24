import React from 'react'
import Header from '../../layout/site/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/site/Footer/Footer'

const SiteRoot = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default SiteRoot
