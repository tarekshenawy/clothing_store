import React, { useContext} from 'react';
import dropdown_icon from "../Components/Images/dropdown_icon.png";
import "./Css/Shopcategory.css";
import { Shopcontext } from '../Context/Shopcontext';
import Item from '../Components/Item/Item';


export default function Shopcategory(props) {
const{all_products}=useContext(Shopcontext);


  
  return (
    <div className='shopcategory'>
      <img src={props.banner} alt='' className='banner'></img>

      <div className='shopcategory_indexsort'>
            <p>Showing 1-12 out of 54 </p>
            <div className='shopcategory_sort'>
              <p>Sort by</p>
              <img src={dropdown_icon} alt='' className='drop'></img>
            </div>
      </div>

      <div className='shopcategory_products'>
        {all_products.map((el,index) =>{
            if(props.category === el.category){
          
            return(
              <Item key={index} image={el.image} id={el.id} name={el.name} new_price={el.new_price} old_price={el.old_price}/>
           
            )
          }
           

         
          
})}
      </div>
    
    </div>
  )
}
