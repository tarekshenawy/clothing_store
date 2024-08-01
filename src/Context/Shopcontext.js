import React, { createContext, useState } from "react";
import all_products from "../Components/Images/all_product";


export const Shopcontext = createContext(null);

const getdefaultcart =()=>{
    let cart ={};
    for (let i=0 ; i< all_products.length+1 ; i++){
        cart[i]=0;
      
        }
        return cart;

}


const Shopcontextprovider =(props)=>{
    const [cartitems,setCartitems]=useState(getdefaultcart());

    const Addtocart =(itemId)=>{
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
     

    }
    const removeCart =(itemId)=>{
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const gettotalfunction =()=>{
        let totalamount = 0;
      
        for (const item in cartitems){
            if(cartitems[item]>0){
                let totalinfom = all_products.find((product)=> product.id=== Number(item));
                totalamount+= totalinfom.new_price * cartitems[item];

            }
           
        }
        return  totalamount;
    }

    
    const getcountcart =()=>{
        let totalcart = 0;
        for( const item in cartitems){
            if(cartitems[item]>0){
                totalcart += cartitems[item];
               

            }

        }
        return totalcart;
    }

    const contextvalues = {all_products,cartitems,Addtocart,removeCart,gettotalfunction,getcountcart};
    return(
        <Shopcontext.Provider value={contextvalues}>
        
        {props.children}

    </Shopcontext.Provider>

    )
    
}
export default Shopcontextprovider;