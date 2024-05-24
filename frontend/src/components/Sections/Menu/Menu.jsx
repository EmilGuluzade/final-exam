import React, { useContext, useState } from 'react'
import "./Menu.scss"
import MainContext from '../../../context/context';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { MAIN_URL } from '../../../config/config';
const Menu = () => {
  const { data, setData,addToBasket,toggleWishList } = useContext(MainContext)
  const [inpVal, setInpVal] = useState("")
  console.log(data)
  const [sortBy, setSortBy] = useState(null)
  function filterData(str) {
    switch (str) {
      case "all":
        axios.get(MAIN_URL).then(res=>{setData([...res.data])})
        break;
      case "brunch":
        axios.get(MAIN_URL).then(res=>{  setData([...res.data.filter(x => x.category.includes("brunch") )])})
      

        break;
      case "lunch":
        axios.get(MAIN_URL).then(res=>{  setData([...res.data.filter(x => x.category.includes("lunch") )])})


        break;

      case "dinner":
        axios.get(MAIN_URL).then(res=>{  setData([...res.data.filter(x => x.category.includes("dinner") )])})


        break;
      default:
        break;
    }
  }

  return (
    <section className='menu'>
      <div className="container">
        <div className="section__heading">
          <div className="section__heading-img">
            <i class="fa-solid fa-bell-concierge" style={{ color: "#ffffff" }}></i>
          </div>
          <div className="section__heading-title">
            <h2>Our Menu</h2>
          </div>
        </div>


        <div className="menu_filter">
          <ul>
            <li><button onClick={() => filterData("all")} >All</button></li>
            <li><button onClick={() => filterData("brunch")}>Brunch</button></li>
            <li><button onClick={() => filterData("lunch")}>Lunch</button></li>
            <li> <button onClick={() => filterData("dinner")}>Dinner</button></li>
          </ul>

          <input type="text" className=' my-2 ' placeholder='search' value={inpVal} onChange={(e) => setInpVal(e.target.value)} />

       <div className="menu_buttons">
       <button className='btn btn-secondary mx-2' onClick={() => setSortBy({ field: "title", asc: true })}>A_Z</button>
          <button className='btn btn-secondary mx-2' onClick={() => setSortBy({ field: "title", asc: false })}>Z_A</button>
          <button className='btn btn-secondary mx-2' onClick={() => setSortBy({ field: "price", asc: false })}> Low To High</button>

          <button className='btn btn-secondary mx2' onClick={() => setSortBy({ field: "price", asc: true })}>High To Low</button>

          <button className='btn btn-secondary mx-2' onClick={() => setSortBy(null)}>default</button>


       </div>

        </div>

        <div className="menu_cards">

          {
            data.filter(x => x.title.toLowerCase().includes(inpVal.toLowerCase()))
              .sort((a, b) => {
                if (!sortBy) {

                } else if (sortBy.asc == true) {
                  return (a[sortBy.field] > b[sortBy.field]) ? 1 : ((b[sortBy.field] > a[sortBy.field]) ? -1 : 0)
                } else if (sortBy.asc == false) {
                  return (a[sortBy.field] < b[sortBy.field]) ? 1 : ((b[sortBy.field] < a[sortBy.field]) ? -1 : 0)
                }
              })
              .map((item, index) => (
                <div className="menu_card col-lg-6 col-md-12 p-3 ">
                  <Link to={`/detail/${item._id}`}><h5>{item.title}</h5></Link>

                  <div className=' d-flex align-items-center justify-content-between flex-wrap   '>
                   <div className=' d-flex '>
                   <span className='card_des'>{item.description} 	</span><div className='dotted'>....................................</div>  <span className='card_price'>{item.price}$ </span>
                   </div>

                    <div>
                    <button onClick={() => addToBasket(item._id)} className='btn btn-success mx-2   '>Card</button><button onClick={() => toggleWishList(item._id)} className='btn btn-danger '> Wish</button>
                    </div>
                  </div>
                </div>
              )

              )
          }



        </div>
      </div>
    </section>
  )
}

export default Menu