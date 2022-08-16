import React from 'react'

//Now make the link working  as connection is established
import {Link} from "react-router-dom"
import './Mobile.css'
import data1 from './Object1'
import '../subheader.css'
 function Mobile() {
  return (
     <>
     <div className="Mobil">
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/AugART2022/Teaser1/LP/Rv2/PC_1500x700.jpg"/></div>
     <div className="parent">
{
 data1.map((ele)=> {
return(
  <>
  <div className="Card">
  <div className="Image-Container">
    <img src={ele.image}/>
</div>

<div className="Card-Container">
  <div className="details">{ele.badge}</div>
  <div className="type">{ele.text}</div>
  <div className="Price">{ele.Price}</div></div>
  <button className="Cart">Add to Cart</button>
  </div>
  </>

  );
 })
   }
   </div> 

</>

  )}

  export default Mobile;
  