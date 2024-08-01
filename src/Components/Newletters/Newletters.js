import React from 'react';
import "./Newletters.css";

export default function Newletters() {
  return (
    <div className='newletters' >
        <h1> Get Exclusive Offers ON Your Email</h1>
        <p> Subscribe to our newletters and stay updated</p>
        <div className='newsletters_login'>
            <input type='email' placeholder='Enter email id'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
