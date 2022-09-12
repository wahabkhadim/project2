import React from "react";
import Header from "../components/Header";
import "./cart.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearAll, decreaseQuantity, increaseQuantity } from "../actions/actions";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const derivedCartItems=useSelector((state)=>state.cart.cartItems)
  const derivedQuantityOfCart=useSelector((state)=>state.cart.totalQuantity)
  const derivedPriceOfCart=useSelector((state)=>state.cart.totalAmount)

  const history=useNavigate()

  console.log(derivedCartItems)
  const dispatch=useDispatch()
  

  const handleCartPlus=(id)=>{
    dispatch(increaseQuantity(id))

  }
  const handleCartMinus=(id)=>{
    dispatch(decreaseQuantity(id))
  }
  const handleClearALL=()=>{
    dispatch(clearAll())
  }
  const handleClose=()=>{
    history('/shop')
  }
  const handleShop=()=>{
    history('/shop')
  }
  return (
    <>
      <Header />
      <div >
        <nav class="nav justify-content-center border" >
          <button class="nav-link active" onClick={handleShop}>
            GO TO SHOP
          </button>
          <p class="nav-link active" href="#">
            Total Quantity: {derivedQuantityOfCart}
          </p>
                    <h3 class="nav-link active" href="#">
            Total Price:{derivedPriceOfCart}
          </h3>


         <button class="nav-link" onClick={handleClearALL} >
            clear AL
          </button>
          <button class="nav-link " onClick={handleClose} >
            Close
          </button>
        </nav>
      </div>
      { derivedCartItems.map((item)=>(
              <div class="card mb-3 main-card "   key={item.id}>
              <img class="card-img-top" src={item.img_src} alt="Card  cap"/>
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.description}</p>
                <p class="card-text">{item.quantity}</p>
                <p class="card-text"><small class="text-muted">{Number(item.price) * item.quantity}</small></p> 
                <button onClick={()=>handleCartPlus(item.id)} class="card-text">+</button>
                <button onClick={()=>handleCartMinus(item.id)} class="card-text">-</button>           
              </div>
            </div>     
      )) }
      <div>
      </div>
    </>
  );
};

export default Cart;
