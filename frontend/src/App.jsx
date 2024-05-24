import { RouterProvider, createBrowserRouter } from "react-router-dom";
      import { useState, useEffect } from "react";
      import ROUTES from "./routes/routes";
      import MainContext from "./context/context";
      import { MAIN_URL } from "./config/config";
import { HelmetProvider } from "react-helmet-async";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {
    const [data, setData] = useState([]);
    const router = createBrowserRouter(ROUTES);
    const [basket, setBasket] = useState( localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []);
    const [wishlist, setWishlist] = useState( localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : []);

    useEffect(() => {
      localStorage.setItem("basket", JSON.stringify(basket));
      localStorage.setItem("wishlist", JSON.stringify(wishlist));

    }, [basket,wishlist]);
  
  useEffect(() => {
    axios.get(MAIN_URL).then((res) => {
      setData([...res.data]);
    });
  }, []);

  function addToBasket(id) {
    let basketItem = basket.find((x) => x._id == id);

    if (!basketItem) {
      let target = data.find((x) => x._id == id);
    
      let newItem = {
        ...target,
        count: 1,
        totalPrice: target.price,
      };
      setBasket([...basket, newItem]);
    } else {
      basketItem.count += 1;
      basketItem.totalPrice += basketItem.price;
      setBasket([...basket]);
    }
  }

function toggleWishList(id) {
  let wishItem=wishlist.find(x=>x._id==id)

  if (!wishItem) {
    let target=data.find(x=>x._id==id)
setWishlist([...wishlist,{...target}])
alert("Item Added To WishList")
  } else {
setWishlist([...wishlist.filter(x=>x._id!=id)])
alert("Item Deleted From WishList")
    
  }
}

  function deleteFromBasket(id) {
    let target = basket.find((x) => x._id == id);
    if (target.count <= 1) {
      setBasket([...basket.filter((x) => x._id != id)]);
    } else {
      target.count -= 1;
      target.totalPrice -= target.price;
      setBasket([...basket]);
    }
  }

  

    const contextData = {
      data, setData,addToBasket, deleteFromBasket, basket, setBasket,toggleWishList,wishlist
    }

    return (
        <>
        <MainContext.Provider value={contextData}>
                <HelmetProvider>
                    <RouterProvider router={router} />
                </HelmetProvider>
            </MainContext.Provider>
        </>
    );
}

export default App;
