import React from "react"
import "./Header.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header(){
    const history=useNavigate()

    const handleCartButton=()=>{
        history('/cart')


    }
    return(

    <div className="main-container">
        <div className="first-logo">

        <img src="/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png" alt="img"/>
        </div>

     <div className="nav-tab">
        <div>
        <Link to="/Signup" >Home</Link>
        </div>
        <div>
        <Link to="/Shop" >Shop</Link>
        </div>
        <div>
        <Link to="http:">Featured</Link>
        </div>
        <div>
        <Link to="http:" >Recommended</Link>
        </div>
     </div>

        <div className="complete-search-div">
          <div className="filter-className">
              <input type="text" value="Filter" />
            </div>
        <div className="search-div">
        <input type="search" value="Search here.." />

        </div>
        <div>
        </div>
        </div>

        <div className="basket-div">
        <button onClick={handleCartButton} > <i class="fa fa-shopping-cart"></i></button>

        </div>
        <div className="sign-up-div">
           <Link to="/Signup" id="button-tag"> Signup</Link>

        </div>

    </div>
    )
    }
export default Header;