import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export default function Item(props) {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={()=>window.scroll(0,0)} src={props.image} alt=''></img></Link>
        <p>{props.name}</p>
        <span>${props.new_price}</span> <span className='old'>${props.old_price}</span>


    </div>
  )
}
