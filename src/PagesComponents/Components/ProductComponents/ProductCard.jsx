import React from 'react'
import ImageLazyLoading from '../ImageLazyLoading'
import { SearchOutline, HeartOutline } from 'react-ionicons'
import { MdBalance } from "react-icons/md";
import { TbBasketMinus } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { ImEye } from "react-icons/im";

function ProductCard({data}) {


const AddProductToCart = async()=>{
   try {
    
   } catch (error) {
    
   }    
}


const AddproductToWishList = ()=>{
    try {
    
    } catch (error) {
     
    }  
}

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + '...';
  }
  return str;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  return (
    <div className="product-box">
    <div className="image">
        <ImageLazyLoading source={data.images.length > 0 ? data.images[0].file_name : "https://img.freepik.com/premium-vector/modern-flat-icon-landscape_203633-11062.jpg"  }  />
        <div className="overlay">
          <div className="flex"> 
                <div><TbBasketMinus /> </div> 
                 <Link to={`/product_details?item=${data.content._id}`}><div className="fa fa-heart"><ImEye color='black' /></div></Link> 
                <div className="fa fa-balance-scale"><MdBalance /> </div>
            </div>
        </div>
    </div>
    <Link to={`/product_details?item=${data.content._id}`}>
       <div className="p-name">{truncateString(data.content.product_name,  50)}</div>
    </Link>
    <div className="description"><p>{truncateString(data.content.product_description, 30)}</p></div>
    <div className="flex">
        <div><h1>{data.content.product_price}</h1></div>
        <div><h5><s>{data.content.product_oldprice}</s></h5></div>
    </div>
</div>
  )
}

export default ProductCard