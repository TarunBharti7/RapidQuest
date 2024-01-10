import React, { useState } from 'react'
import HomePage from './component/HomePage'
import HeroSection from './component/HeroSection'
import BarChartPage from './component/BarChartPage'
import { UserData } from './component/Constant'


const App = () => {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: '',
        data: UserData.map((data) => data.userGain),
        backgroundColor: ['#0800A3'],
        barThickness: 12,
      },
      {
        label: '',
        data: UserData.map((data) => data.userGain),
        backgroundColor: ['#4935FF'],
        barThickness: 12,
      },
      {
        label: '',
        data: UserData.map((data) => data.userGain),
        backgroundColor: ['#85AFFF'],
        barThickness: 12,
      },
    ],
  });

  return (
    <div>
      < HomePage />

      <HeroSection />
      <BarChartPage charData={userData} />

    </div >
  )
}

export default App