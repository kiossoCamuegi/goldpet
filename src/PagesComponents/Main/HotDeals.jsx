import React from 'react'

function HotDeals() {
  return (
    <div>
        <div className="hot-deals">
    <h1 className="title">Hot Deals</h1>
    <div className="hot-container">
        <section className="announce">
            <div className="slider-item"> 
             <a href="#">
                <img src="https://img.freepik.com/free-vector/fashion-sale-landing-page_23-2148591916.jpg" alt="#" />
              </a>
           </div>
        </section> 
      <div className="hot-box">
        <div className="image">
            <img src="../images/shop/products/popup/2-440x494.jpg" alt=""/>
            <div className="overlay">
               <div className="top">New</div>
               <div className="flex">
                   <a href="product_dets.html">
                       <div className="fa fa-eye"></div>
                   </a>
                   <div className="fa fa-heart"></div>
                   <div className="fa fa-balance-scale"></div>
               </div>
            </div>
        </div>
      <div className="dets">
          <h5>New product from wokeside</h5>
         <div className="flex">
           <div className="d-flex">
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
          </div>
          <span>(3 Reviews)</span>
         </div>
         <ul>
             <li><i className="fa fa-check"></i> Lorem ipsum dolor sit amet.</li>
             <li><i className="fa fa-check"></i> Lorem ipsum dolor sit amet.</li>
             <li><i className="fa fa-check"></i> Lorem ipsum dolor sit amet.</li>
             <li><i className="fa fa-check"></i> Lorem ipsum dolor sit amet.</li> 
         </ul>
         <button productcode="">ADD TO CART</button>
      </div>
     </div> 

    </div>
</div>
    </div>
  )
}

export default HotDeals



 