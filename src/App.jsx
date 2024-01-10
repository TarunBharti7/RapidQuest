import React from 'react'
import HomePage from './component/HomePage'
import HeroSection from './component/HeroSection'
import SideBar from './component/SideBar'
import Compare from './component/Compare'


const App = () => {

  return (
    <>
      <div className='lg:flex lg:justify-around'>
        <div>
          < HomePage />
        </div>

        <div className='lg:grow'>
          <HeroSection />
          <Compare />
        </div>

        <div>
          <SideBar />
        </div>
      </div>


    </ >
  )
}

export default App