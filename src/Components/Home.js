import React from 'react'
import Header from './Header';
import Subheader from './Subheader'
import Card from './Card'
import {BrowserRouter,Routes,Route} from "react-router-dom";


export default function Home() {
  return (
    <>
    <Header/>
    <Subheader/>
    <Card/>
</>
  )
}
