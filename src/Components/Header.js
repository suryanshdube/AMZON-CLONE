import React ,{useState}from 'react' 
import './header.css'
import {Link} from 'react-router-dom'
export default function Header({setInputState}){
 //console.log(state)
 let [start,setStart]=useState('')
  function manageinput(e){
    let{value}=e.target

    console.log(value);
    setInputState.setInputState(value)
    setStart(value)
  }
  return(
  <>
  <div className="Head">
   <Link to="/Card" ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png"/></Link>

    <div className="text">
    <div className="Hello">Hello </div>
    <div className="Select">Select your address</div>
    </div>
    <div className="HeaderSearch">
      <div className="dropdown">{start}</div>
      <input className="searchbar" type="text" placeholder="Enter Product" onChange={manageinput}/>
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

    <div className="cartbox">
      <div className="carttext">cart</div>
      <Link to="/cartPage"><div className="number">{setInputState.cart.length}</div></Link>
    </div>
    </div>
    </>
  )
}
