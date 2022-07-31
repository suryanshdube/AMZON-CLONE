import React from 'react'
import './Card.css'
import data from './Object.js'
export default function Card(){
return(
  <>
  <div className="parent">
    {
 data.map((ele)=> {
return(
  <>
  <div className="Card">
  <div className="Image-Container">
    <img src={ele.image}/>
</div>

<div className="Card-Container">
  <div className="details">{ele.type}</div>
  <div className="type">{ele.details}</div>
  <div className="Price">{ele.Price}</div></div>
  <button className="Cart">Add to Cart</button>
  </div>
  </>

  );
 })
   }
   </div>
</>
)
  }
{ /* obj.map((ele) 
   <div className="maincard">
<div className="card">
<div className="cardimage">
  <img src="https://th.bing.com/th?id=OPA.VPW7FMQ6QUcYjg474C474&o=5&pid=21.1&h=226&rs=1"/></div>
 <div className="cardcontainerdetails">
   <div className="price">Rs 3756</div> 
    <div className="Details">WROGN MEN BLACK SOLID JACKET <span class="brand">   AMAZON BRAND</span></div>
   <div className="price">Price :Rs 3756</div>
   <div className="Quantity"><span class="Avail">Available piece</span>:4 pcs</div>
   <div className="button">
   <button class="Cart" >Add to Cart</button></div>
</div>
</div>
<div className="card">
<div className="cardimage">
  <img src="https://th.bing.com/th?id=OPA.NyS7jNg1kFAsTQ474C474&o=5&pid=21.1&h=226&rs=1"/></div>
 <div className="cardcontainerdetails">
   <div className="price">Rs 3756</div> 
    <div className="Details">Nikeman White Printed Standard Fit <span class="brand">   AMAZON BRAND</span></div>
   <div className="price">Price :Rs 3756</div>
   <div className="Quantity"><span class="Avail">Available piece</span>:4 pcs</div>
   <div className="button">
   <button  >Add to Cart</button></div>
</div>
</div>  
  </div>   */}
  
 
