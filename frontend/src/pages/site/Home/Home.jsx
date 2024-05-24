import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import MainContext from '../../../context/context'
import Banner from '../../../components/Sections/Banner/Banner'
import Menu from '../../../components/Sections/Menu/Menu'
import Welcome from '../../../components/Sections/Welcome/Welcome'
import Service from '../../../components/Sections/Service/Service'
import Tester from '../../../components/Sections/Tester/Tester'

const Home = () => {
    const {data,setData} = useContext(MainContext)
    return (
    <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Welcome></Welcome>
<Tester></Tester>
            <Service></Service>
            <Menu></Menu>
            
    </>
    )
}

export default Home
        