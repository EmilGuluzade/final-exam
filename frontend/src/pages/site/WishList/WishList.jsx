import React, { useContext, useEffect } from 'react'
import MainContext from '../../../context/context';
import { Helmet } from 'react-helmet-async';

const Basket = () => {

    const {toggleWishList,wishlist}=useContext(MainContext)
  return (
    <div className="container my-5  " style={{minHeight:"700px"}}>
    <Helmet>
      <title>
      WishList
      </title>
    </Helmet>
    <table class="table my-5 table-success   ">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Description</th>

          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {wishlist.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>
              <img src={item.image} alt="" width="100px" height="100px" />
            </td>
            <td>{item.title}</td>
            <td>{item.price}$</td>

            <td>{item.description}</td>
            <td>
              <button
                onClick={() => {
                  toggleWishList(item._id);
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
  </div>
  )
}

export default Basket