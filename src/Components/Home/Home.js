import React from 'react';
import "./Home.css";
import hand_icon from "../Images/hand_icon.png";
import arrow_icon from "../Images/arrow.png";
import home_image from "../Images/home.png";

export default function Home() {
  return (
    <div className='home'>
        <div className='col1'>
            <p>NEW ARRIVALS ONLY</p>
            <h2>new <img src={hand_icon} alt=''></img></h2>
            <h2>Collections</h2>
            <h2>for Everyone</h2>
            <button>
                Latest Collections <img src={arrow_icon} alt='' width="20px" className='col1_arrow'></img>
            </button>

        </div>
        <div className='col2'>
           
                <img src={home_image} alt=''></img>
      

        </div>
    </div>
  )
}
