import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { 
  BrowserRouter,
  Routes,
  Route
 } 
 from 'react-router-dom';
import Explain from './pages/Explain';
import Signup from './pages/Signup';
import Shop from "./pages/Shop"
import store from './store';
import { Provider } from "react-redux"
import LogIn from './pages/LogIn';
import Cart from "./pages/Cart"


ReactDOM.render(
  <Provider store={store} >
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Home" element={<LogIn/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/Explain" element={<Explain/>}/>
      <Route path="Signup"   element={<Signup/>}/>
      <Route path="cart"   element={<Cart/>}/>
    </Routes>
    
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

