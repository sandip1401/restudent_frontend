import React from 'react'
import { ImLocation } from "react-icons/im";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Popular_dishes from './components/Popular_dishes'
import Menu from './components/Menu'
import Reviews from './components/Review';

function LocationButton(){
  return(
    <div>
    <a 
      href="https://maps.app.goo.gl/Rq71WV1QYvyUKT8s7"
      target='_blank'
      rel="noopener noreferrer"
      className="fixed flex items-center gap-1 bottom-6 right-6 bg-green-400 text-black font-semibold px-5 py-3 rounded-full shadow-xl hover:bg-green-500 active:scale-95 transition-all duration-200">
        <ImLocation size={20}/>
      Restudent Location
    </a>
    
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <div className='min-h-screen'>
              <Navbar/>
              <Hero/>
              <Popular_dishes/>
              <LocationButton/>
              <About/>
              <Reviews/>
              <Contact/>
              <Footer/>
            </div>
          } 
        />

        {/* Menu Page */}
        <Route 
          path="/menu" 
          element={
            <div className='min-h-screen'>
              <Navbar/>
              <Menu/>
              <Footer/>
            </div>
          } 
        />

          <Route path='/' element={<div className='min-h-screen'><Navbar />
              <Hero />
              <Popular_dishes />
              <LocationButton />
              <About />
              <Reviews />
              <Contact />
              <Footer /></div>}/>
          
          <Route path='/menu' element={<div className='min-h-screen'><Menu/></div>}/>

          <Route path='/about' element={<div className='min-h-screen'><Navbar />
              <About />
              <Footer /></div>} />
          <Route path='/contact' element={<div><Navbar />
              <Contact />
              <Footer /></div>}/>
      </Routes>
    </Router>
  )
}
