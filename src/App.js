import React from "react";
import "./style.css";
import Header from './Components/Header';
import Subheader from './Components/Subheader';
import Card from './Components/Card';
import {BrowserRouter,Routes,Route} from "react-router-dom";
//We make jsfiles under SubheaderComp so that folder structure does not become large
import Mobile from './Components/SubheaderComp/Mobile'
import Shirt from './Components/SubheaderComp/Shirt'
import Shoes from './Components/SubheaderComp/Shoes'
import Electronics from './Components/SubheaderComp/Electronics'
import Books from './Components/SubheaderComp/Books'
 import Home from './Components/Home' 
 import Footer from './Components/Footer'
  import Cart from './Components/SubheaderComp/Cart'
 import {useState} from "react"
export default function App() {
let [inputState,setInputState]=useState('SAMPLE')
 let [cart,setCart]=useState([])

 
// let filtercart=cart.map((ele)=>ele.type=="shirt")
function addToCart(product){
//function addToCart along with logic building
  console.log("clicked on cart",product)
//now using find method to check whether product exist in cart or not
  let productcart=cart.find((ele)=>ele.id===product.id)

  if(productcart){
    setCart(cart.map((ele)=>ele.id===product.id)?{...productcart,quantity:productcart.quantity+1}:ele)
    console.log(setCart)
  }

  else{
    setCart([...cart,{...product,quantity:1}])
  }

}



// console.log(cart)
  return (
    <>
    
    <BrowserRouter>
    <Header setInputState={{setInputState,cart}}/>
    {/* we will pass a state from App.js(parent) to Header.js(Child) */}
    <Subheader />
    <Routes>
      <Route path="/" element={<Card inputState={{inputState,addToCart}}/>}/>
       <Route path="/Card" element={<Card inputState={{inputState,addToCart}}  />}/>
       <Route path="/cartPage" element={<Cart cart={{cart,addToCart}}/>}/>
      <Route path="/mob" element={<Mobile/>}/>
      <Route path="/electronic" element={<Electronics/>}/>
      <Route path="/Shirt" element={<Shirt/>}/>
      <Route path="/Shoes" element={<Shoes/>}/>
      <Route path="/Book" element={<Books/>}/>
      <Route path="/cartPage" element={<Cart cart={{cart,addToCart}}/>}/>
    </Routes>
   <Footer/>
    </BrowserRouter>
    
    
    </>
  );
}  
