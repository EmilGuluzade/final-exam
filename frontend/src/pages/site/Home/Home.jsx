import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import MainContext from '../../../context/context'

const Home = () => {
    const {data,setData} = useContext(MainContext)
    return (
    <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>Home page
            </div>
    </>
    )
}

export default Home
        