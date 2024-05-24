import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../layout/admin/Header/Header'

const AdminRoot = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default AdminRoot
