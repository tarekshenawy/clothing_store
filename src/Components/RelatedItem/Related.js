import React from 'react';
import './Related.css';
import data from "../Images/data";
import Item from '../Item/Item';

export default function Related() {
  return (
    <div className='related'>
      
        <div className='Related_items'>
        {
            data.map((el,index)=>{
                return(
                    <Item key={index} image={el.image} id={el.id} name={el.name} new_price={el.new_price} old_price={el.old_price}/>
                )
            })
        }

        </div>
       

    </div>
  )
}
