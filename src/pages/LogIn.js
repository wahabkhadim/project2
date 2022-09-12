import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loggedIn } from "../actions/actions";


const LogIn = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [add2,setadd2]=useState("")

  const history=useNavigate()
  const dispatch=useDispatch()

  const user=useSelector((state)=>state.users.userList)
  // console.log(user)

  const handleEmail=(e)=>{
      setEmail(e.target.value)
  }
  const handlePassword=(event)=>{
      setPassword(event.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("email",Email,"Password",Password)
    const loginUser=user.filter(item=> item.Email===Email && item.Password===Password  )
    console.log(loginUser)
    if(loginUser.length){
      dispatch(loggedIn(loginUser))
      history('/shop')

    }
    else{
      alert("please fill correct info")

    }

  }
  return (
    <div>
      <div className="second-div">
        <div className="cont-1">
          <div className="first-logo">
            <img
              src="/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
              alt="img"
            />
          </div>

          <div className="sign-up-div">
            <Link to="/Home" class="button-tag">
              {" "}
              Sign-in
            </Link>

            <Link to="/Signup" class="button-tag">
              {" "}
              Sign-up
            </Link>
          </div>

          <div className="basket-div">
            <img
              src="/images/020202.png"
              alt="img"
              width="40px"
              height="35px"
            />
          </div>
        </div>

        <br />

        <br />

        <br />

        <br />

        <br />

        <div className="form-container">
          <div>
            <h2>Sign into Salinaka</h2>

            <form className=" form-class " onSubmit={handleSubmit} >
              <label htmlFor="email"> Email:</label>

              <input
                type="email"
                placeholder="      text@example.com"
                onChange={handleEmail}
                value={Email}
              />

              <label htmlFor="pass">password: </label>

              <input
                type="password"
                placeholder="    your password here"
                onChange={handlePassword}
                value={Password}
              />

              <br />

              <a
                href="https://www.google.com.pk/"
                className="button-style"
                id="forgot"
              >
                {" "}
                forgot password
              </a>

              <button type="submit" id="signnn">
                Sign in
              </button>
            </form>
          </div>
        </div>

        <div className="vl"> </div>

        <div className="table-container">
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="button"
                    value="  Sign into Facebook  "
                    id="button-1"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="button"
                    value=" Sign in with Google "
                    id="button-2"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="button"
                    value="  Sign in with Github "
                    id="button-3"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="footer-first">
        <p className="footer-para">Don't have an account?</p>

        <Link to="/Signup" id="lasttt-02">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
