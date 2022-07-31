import React from 'react' 
import './subheader.css'

export default function Header(){
  return(
  <>
  <div className="Subhead">
    <div className="navtext">
      <img src="https://uxwing.com/wp-content/themes/uxwing/download/03-editing-user-action/three-horizontal-lines.svg"/>
     <a href="#" className="Sellers"> All </a>
      
     {/* <a href="#" className="Sellers">Mobiles</a>
     <a href="#" className="Sellers">Customer Service</a>
     <a href="#" className="Sellers">Today's Deals</a>
     <a href="#" className="Sellers">Books</a>
     <a href="#" className="Sellers">Best Sellers</a> */}
       <div className="Sellers"> Mobiles</div>
      <div className="Sellers"> Customer Service </div>
      <div className="Sellers">Today's Deals</div>
      <div className="Sellers">Books</div>
      <div className="Sellers">Electronics</div>
      <div className="Sellers">Prime </div>
      <div className="Sellers">Fashion</div>
      <div className="Sellers">New Releases</div>
      <div className="Sellers">Home Kitchen</div>
       <div className="Sellers">Amazon Pay</div>
    </div>
    <div className="imagenavbar">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/Day_of/SWM/PC_SWM_EN._CB631880389_.jpg"/>
  </div>
  </div> 
  </>
  )
}
