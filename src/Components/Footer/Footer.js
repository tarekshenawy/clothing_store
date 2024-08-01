import React from 'react';
import "./Footer.css";
import logo from "../Images/shopping-bag.png"
import instgram from "../Images/instagram_icon.png";
import pintester from "../Images/pintester_icon.png";
import whatsapp from "../Images/whatsapp_icon.png";

export default function Footer() {
  return (
    <div className='footer'>
        <div className='logo'>
            <img src={logo} alt='' width="60px"></img>
            <h2>Clothing store</h2>
        </div>
        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    <div className='footer_icon'>
        <img src={instgram} alt=''></img>
        <img src={pintester} alt=''></img>
        <img src={whatsapp} alt=''></img>
    </div>
    
    <hr></hr>
  
    <p>Copyright @ 2024 All-Right Reserved</p>
    

</div>
  )
}
