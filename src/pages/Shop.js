import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "./Shop.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, caltotalQuantity, getProductsList } from "../actions/actions";


const Shop = () => {
    const [data,setdata]=useState([
    ])
    const [add,setadd]=useState(0)
    const [value,setValue]=useState(0)

    const dispatch=useDispatch()
      


    useEffect(() => {
        dispatch(getProductsList())
    },[])

     const  addProduct= ()=>{
        setdata({data: [...data, { id: 16, img_src: "images/img-11_ccexpress.png", title: "New", description: "Sexabob", price: "240089.00" }]})
    }

    const derivedstate=useSelector((state)=>state.productList.productList)
    const cartItems=useSelector((state)=>state.cart.cartItems)
    console.log(derivedstate)

    const handleClick =(item)=>{
        dispatch(addToCart({...item, quantity: 1}))
        dispatch(caltotalQuantity())
        
    }
    let cartIds=cartItems.map((item)=>item.id)
    console.log(cartIds)
  return (
      <>
      <Header/>
              <div className="main-grid">
            <button onClick={addProduct}>Add Product</button>
            {derivedstate.map(item=>(
            <div>
            <img src={item.img_src} alt="img" width="148px" height="60px" className="img-tag" />
            <p className="para-1">{item.title}</p>
            <p className="para-2">{item.description}</p>
            <p className="para-3">{item.price}</p>
            <button disabled={cartIds.includes(item.id)}  onClick={()=>handleClick(item)} style={{width: "100px"}} className="last-button" > {cartIds.includes(item.id) ? "Already added" : "Add to basket"} </button>
        </div>
            ))}

        </div>
</>


  )
}

export default Shop;