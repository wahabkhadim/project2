import React, { useState } from "react";
import "./Signup.css"
import {Link} from "react-router-dom"
import { addUser } from "../actions/actions";
import { useDispatch } from "react-redux";


const Signup = () => {
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const [FullName,setFullName]=useState('')
    const [userData,setuserData]=useState([])

    const dispatch=useDispatch()


    const handleEmail=(e)=>{
    setEmail(e.target.value)
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    const handleFullName=(e)=>{
        setFullName(e.target.value)
    }
    const click=()=>{
        const obj={
            FullName:FullName,
            Email:Email,
            Password:Password
        }
        const updated = [...userData,obj]
        setuserData(updated)
        dispatch(addUser(obj))
        setEmail('')
        setFullName('')
        setPassword('')
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(Email && Password && FullName){
            click()
        }
        else{
            alert("incomplete info")
        }
    }


  return (
    <div>
    <div className="cont-1">
     <div className="first-logo">
       <img src="/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png" alt="img"/>
     </div>

   
       <div className="sign-up-div">
          <Link to="/Home" class="button-tag">Sign-in</Link>
          <Link to="/Signup"class="button-tag">Sign-up</Link>

       </div>

       <div className="basket-div">
           <img src="/images/020202.png" alt="img" width="40px" height="35px"/>

       </div>
      

    </div>
       <br/>
       <br/>
       <br/>
       <br/>

       <br/>




    <div className="form-container">
    <div>
          <h2 >Sign into Salinaka</h2>
           <form className=" form-class " >
             <label htmlFor="name">Full Name</label>
             <input type="text" name="your full name" placeholder="      your full name here" onChange={handleFullName} value={FullName}/>
             <label htmlFor="email"> Email:</label>
             <input type="email" name="your email" placeholder="      text@example.com" onChange={handleEmail} value={Email} />
             <label htmlFor="pass">password: </label>
             <input type="password" name="password" placeholder="    your password here" onChange={handlePassword} value={Password}/>
             <br/><br/>
             <div className="style-tag">
         <button type="submit" id="sign-09" onClick={handleSubmit}>Sign up</button>
         </div>
         </form>
       </div>
       </div>
         
     
 
    

     <div className="footer-laast">
         <p className="footer-para">
             Don't have an account?
             </p>
             <input type="button" value="Sign up" id="lasttt"/>
     </div>




</div>


    
  )
}

export default Signup




