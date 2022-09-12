import React from "react";
import Header from "../components/Header";
import "./Explain.css"


function Explain (){
    return(
        <>
        <Header/>
<div className="complete">
    <div className="main-container-2">
        <div className="first-container">
            <a href="\\" id="link-shop">Back to Shop</a>
        </div>
        <div className="second-container">
            <a href="\\" id="link-basket">Items added to basket</a>
        </div>

    </div>
    <br/><br/>

    <div className="main-container-3">
        <div className="multiple-images">
                <img src="/images/img-11_ccexpress.png" alt="img" height="80px" border= "1px double black"/>
                <img src="/images/img-02.png" alt="img" height="100px" border= "1px solid black;"/>
                <img src="/images/img-03.png" alt="img" height="100px" border= "1px solid black;"/>
 

        </div>
        <div className="single-image">
            <img src="/images/img-04.png" alt="img" width="400px" height="400px"  background-color="gray;"/>

        </div>
        <br/><br/>

        <div className="area-of-text">
            <h5 id="heading-5">Eye wear</h5>
            <p className="text">Burnik</p>
            <p className="text">Computer glasses can help prevent headache, dry eyes, blurred vision and eye strain.
            </p>
            <p className="text">  lens width and frame size:</p>
            <form className="first-form">
                <label for="size"> -Select size-</label>
                <select name="size" id="size">
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </form>

            <form className="first-form">
                <label for="color">choose color</label>
                <input type="color" value=" red"/>
            </form>

            <p id="para"> $240.00</p>
            <div>
        <a href="http:" className="last-button" >Item remove from basket</a>
        </div>
        </div>



    </div>



</div>
</>
)
};

export default Explain;