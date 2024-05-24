import React, { useContext, useEffect } from 'react'
import MainContext from '../../../context/context';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { MAIN_URL } from '../../../config/config';

const Products = () => {
    const {data,setData}=useContext(MainContext)

    function deleteItem(id){

    axios.delete(`${MAIN_URL}${id}`).then((res)=>{
      setData([...data.filter((item)=>item._id!= id)])
    })
    }
  return (
    <table class=" mt-5  container table table-hover table-danger table-striped-columns">
      <Helmet>
      <title>
    Products
      </title>
    </Helmet>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>
              <img src={item.image} alt="" width="100px" height="100px" />
            </td>
            <td>{item.title}</td>
            <td>{item.category}</td>

            <td>{item.description}</td>

            <td>{item.price}$</td>
            <td>
              <button
                onClick={() => {
                  deleteItem(item._id);
                }}
                className="btn btn-danger "
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Products
