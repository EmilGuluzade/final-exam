import React, { useContext, useEffect, useState } from 'react'
            import { useParams } from 'react-router'      
import axios from 'axios'
import MainContext from '../../../context/context'
import { MAIN_URL } from '../../../config/config'
import { Helmet } from 'react-helmet-async'

const Detail = () => {
  const [detail,setDetail]=useState([])
    const {id}=useParams()

    useEffect(() => {
          axios.get(`${MAIN_URL}${id}`)
          .then((res) => {
            setDetail(res.data);

          })
          
      }, []);
      
    const {data,setData,setBasket,addToBasket}=useContext(MainContext)
  return (
    <div className="container d-flex  mt-5 py-5 ">
    <Helmet>
      <title>
        Detail
      </title>
    </Helmet>
      <div className="col-6 d-flex justify-content-center  ">
        <img width="400px" height="400px" src={detail.image} alt=""/>
      </div>
      <div className="col-6 d-flex flex-column justify-content-center ">
        <h3>{detail.title}</h3>
        <h4>{detail.price}$</h4>
        <p>{detail.description}</p>
        <div>
          <button className="btn btn-success "
            onClick={()=>{
                addToBasket(detail._id)
                
            }}
          >Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Detail
