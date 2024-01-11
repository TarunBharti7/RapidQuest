import React, { useState } from 'react'
import HomePage from './component/HomePage'
import HeroSection from './component/HeroSection'
import SideBar from './component/SideBar'
import Compare from './component/Compare'


const App = () => {

  const [display, setDisplay] = useState(true)

  const handle = () => {
    setDisplay(!display)
    console.log("Click me");
  }

  return (
    <>
      <div className='lg:flex lg:justify-around sm:relative'>
        <div>
          < HomePage  setDisplayFun={handle}  />
        </div>

        <div className='lg:grow sm:relative'>
          <HeroSection />
          <div 
            className={`${display ? "hidden" : "block"} 
            lg:block fixed top-0 left-0 right-0 bg-white pt-14 
            lg:static` }
          >
            <Compare />
          </div>
        </div>

        <div 
          className={`${display ? "hidden" : "block"} 
          lg:block fixed top-80 left-0 right-0 bg-white mt-14
          lg:static`}
        >
          <SideBar setDisplayFun={handle}/>
        </div>
      </div>


    </ >
  )
}

export default App