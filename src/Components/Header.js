import React from 'react' 
import './header.css'

export default function Header(){
  return(
  <>
  <div className="Head">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png"/>

    <div className="text">
    <div className="Hello">Hello </div>
    <div className="Select">Select your address</div>
    </div>
    <div className="HeaderSearch">
      <div className="dropdown">All</div>
      <input className="searchbar" type="text" placeholder="Enter Product"/>
      <div className="navSearch"></div>
    </div>
    <div className="text">
    <div className="Hello">Hello,Sign in</div>
    <div className="Select">Accounts Lists</div>
    </div>
    <div className="text">
    <div className="Hello">Returns</div>
    <div className="Select">and Orders</div>
    </div>
  <div className="nav-cart">
    <img src="https://icon-library.com/images/shopping-icon-on-amazon/shopping-icon-on-amazon-25.jpg"/>
    </div>
    </div>
    </>
  )
}
