import React, { useContext } from 'react';
import "./Css/Product.css";
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import { Shopcontext } from '../Context/Shopcontext';
import { useParams } from 'react-router-dom';
import ProductImage from '../Components/ProductImage/ProductImage';
import Related from '../Components/RelatedItem/Related';
import Title from '../Components/Title/Title';

export default function Product() {
    const {all_products} = useContext(Shopcontext);
    const {productId} = useParams();
    const productvalue = all_products.find((el)=> el.id === Number(productId));
  return (
    <div  className='product'>
        <Breadcrum  name={productvalue.name} category={productvalue.category}/>
        <ProductImage id={productvalue.id} image ={productvalue.image}  name={productvalue.name} category={productvalue.category} new_price={productvalue.new_price} old_price={productvalue.old_price}/>
        <Title title="POPULAR IN WOMEN"/>
       <Related/>
    </div>
  )
}
