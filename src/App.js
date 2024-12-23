import React, { useState} from 'react';
import  ContextSlide from './utiles/ContextSlide';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Info from './components/Info';
import About from './components/About';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [item,setItem]=useState('');
  function clickItem(y){
    setItem(y)
  }
function changeSlide(x){
  setActiveStep(x)
}
  return (
    <>
    
      <ContextSlide.Provider value={{activeStep,changeSlide,item,clickItem}}>
        <Navbar />
        <Header />
        <Info />
        <Gallery/>
        <About/>
        <Footer/>
      </ContextSlide.Provider>
    </>

  )
}

export default App;
