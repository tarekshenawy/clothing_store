import React, { useContext, useState } from 'react';
import "./Navbar.css";
import logo from "../Images/shopping-bag.png";
import cart_image from "../Images/cart_icon.png";
import { Link } from 'react-router-dom';
import { Shopcontext } from '../../Context/Shopcontext';

import arrow_top from '../../Components/Images/up-arrow.png';
import arrow_down from "../../Components/Images/down-arrow.png";

export default function Navbar() {
  const [state,setState]=useState("shop");
  const {getcountcart}=useContext(Shopcontext);
  const [menuitem,setMenuitem]=useState(false);
  return (
   <nav>
    <div className='nav-left'>
    <img src={logo} alt='' width="45px" ></img>
    <Link to="/"><h2>Clothing store</h2></Link>

    </div>

   <ul className={menuitem ? "show" : ""}>
   <li onClick={()=>setState("shop")}> <Link to="/">shop</Link> {state === "shop" ? <hr/> : <></>} </li>
    <li onClick={()=>setState("men")} ><Link to="/mens">Men</Link> {state === "men" ? <hr/> : <></>}</li>
    <li onClick={()=>setState("women")} ><Link to="/womens">Women</Link> {state === "women" ? <hr/> : <></>}</li>
    <li onClick={()=>setState("kids")}><Link to="/kids">Kids</Link> {state === "kids" ? <hr/> : <></>}</li>
   </ul>
   <img src={menuitem ? arrow_top: arrow_down } alt='' className='menu_icon' onClick={()=>setMenuitem(!menuitem)}></img>

    <div className='nav-end'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_image} alt='' width="35px"></img></Link>
        <div className='count'>{getcountcart()}</div>
    </div>

   </nav>
  )
}
