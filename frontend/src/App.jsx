
import React from 'react'
import Navbar from "./components/Navar.jsx/Navbar";
import Hero from "./components/Hero/Hero";
import Banner1 from './components/Banner/Banner1';
import Paart2 from './components/Part2/Paart2';
import Paart3 from "./components/Part3/Paart3"
import Paart4 from "./components/Part4/Paart4"
import Paart5 from "./components/Part5/Paart5"
import Paart6 from "./components/Part6/Paart6"
 import Paart7 from "./components/Part7/Paart7"

const App = () => {
  return (
    <div className ="overflow-x-hidden">
      <Navbar/>  
      
      <Hero/>
      <Banner1/>
      <Paart2/>
      <Paart3/>
      <Paart4/>
      <Paart7/>
      <Paart5/>
      <Paart6/>
    </div>
  )
}

export default App;
