import React, { useState } from 'react';
import ImageLazyLoading from '../ImageLazyLoading'; 
import { TrashOutline } from 'react-ionicons'


function ProductCartComponent({data}){
    const [ProductAmount, setProductAmount] = useState(1);

const IncreaseProductAmount = async()=>{
    try {
        
    } catch (error) {
        
    }
}


const RemoveProductFromCart = async()=>{
    try {
        
    } catch (error) {
        
    }
}


  return (
    <div className='product-cart-el'>
        <div className="pr-box">
             <div className="image">
                 <ImageLazyLoading source={data.Image} />
             </div>
             <div className="details">
                 <h3>nome do produto aqui</h3>
                  <span>Alpini</span>
                  <div className="actions">
                    <input type="number"  value={ProductAmount} min={1} onChange={(e)=>setProductAmount(e.target.value)}  className="form-control" />
                    <div className="price"><h5>€145.00</h5></div>
                   <div className="delete"><button className='btn'><TrashOutline/></button></div>
                </div>
             </div> 
        </div> 
    </div>
  )
}

export default ProductCartComponent