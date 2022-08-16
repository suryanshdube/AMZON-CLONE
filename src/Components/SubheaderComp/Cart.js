import React from 'react'
import data from '../Object'
import '../Card.css'


export default function Cart({cart}) {
 return(
 <>
  
  <div  className="parent">{
    cart.cart.length===0
    ?<div> There is no product in cart</div>
 : cart.cart.map((ele)=>{
  return(
    <>
    <div className="Card">
    <div className="Image-Container">
      <img src={ele.image}/>
  </div>

  <div className="Card-Container">
    <div className="details">{ele.type}</div>
    <div className="type">{ele.details}</div>
    <div className="Price">{ele.Price}</div>
    <button  className="Cart" onClick={()=>cart.addToCart(ele)}>Remove Cart</button>
    {/* //we have tp put arrow function in order to call a function directly  */}
    </div>
    </div>
    </>
  
    );
   })}
 </div>
 </>
)}

