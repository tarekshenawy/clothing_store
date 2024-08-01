import React, { useContext } from 'react';
import './Cartitems.css';
import cartcross from "../Images/cart_cross_icon.png"

import { Shopcontext } from '../../Context/Shopcontext';

export default function Cartitems() {
    const{all_products,cartitems,removeCart,gettotalfunction}=useContext(Shopcontext);
  return (
    <div className='cart_container'>

        <div className='cart_titles'>
            <p>Products</p>
            <p >Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>

        <hr></hr>
      
            {
                all_products.map((e)=>{
                 
                    if(cartitems[e.id]>0){
                        return(
                           
                                 <div className='item_details'>
                                            <img src={e.image} alt='' width="60px"></img>
                                        <p className='cart_name'>{e.name}</p>
                                        <p>{e.new_price}</p>
                                        <p>{cartitems[e.id]}</p>
                                    <p>{e.new_price * cartitems[e.id]}</p>
                                    <img src={cartcross}  alt='' className='cross'  onClick= {()=>{removeCart(e.id)}} ></img>

                            </div>
                        )
                        
                        
                    }
                  
})
            }
          
            <div className='cart_bottom'>
             
                <div className='cart_total'>

                <h2>Cart Totals</h2>

                            <div className='subtotal'>
                                <p>Substotal</p>
                                <p>${gettotalfunction()}</p>
                            </div>

                            <hr></hr>
                            <div className='shipping'>
                                <p>shipping fee</p>
                                <p>free</p>
                            </div>

                            <hr></hr>
                            <div className='total'>
                                <p>Total</p>
                                <p>${gettotalfunction()}</p>
                            </div>

                            <hr></hr>
                            <button>Processed To Checkout</button>
                </div>

                <div className='promocode'>
                    <p>if you have a promocode . enter it here</p>
                    <div className='promo_input'>
                        <input type='text' placeholder='Enter promocode'></input>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </div>
            
          

            
            
       

    </div>
  )
}
