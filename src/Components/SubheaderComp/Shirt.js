import React from 'react'
import data from'../Object'
export default function Footer() {
    console.log(data)
  const shirttype= data.filter(ele=>ele.type=="Shirt")
  console.log(shirttype)
  {
  return(
    <>
    <div className="parent">
      {
   shirttype.map((ele)=> {
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
}
