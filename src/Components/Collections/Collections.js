import React from 'react';
import "./Collections.css";
import new_collections from "../Images/new_collections";
import Item from '../Item/Item';

export default function Collections() {
  return (
    <div className='collections'>
     
        <div className='new_collections'>
            {
                new_collections.map((el,index)=>{
                    return(
                        <Item key={index} image={el.image} id={el.id} name={el.name} new_price={el.new_price} old_price={el.old_price}/>

                    )
                })
            }

        </div>

    </div>
  )
}
