import React, { useState } from 'react'
import BarChartPage from './BarChartPage.jsx'
import { UserData } from './Constant.jsx'

const HeroSection = () => {
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
        <div className='mb-8 mt-10 lg:mt-14 lg:mx-10'>
            {/* Retirement Section */}
            <div className='pl-7 mb-4'>
                <p className='font-serif text-xs font-bold text-indigo-700'>Retirement Income</p>
                <h1 className='text-xl font-bold font-sans text-slate-800'>Starting Year 2056</h1>
            </div>

            {/* My Goal */}
            <div className='pl-7 pr-7 lg:flex lg:justify-between lg:gap-10'>
                <div className='flex-grow'>
                    <h1 className='text-3xl font-extrabold text-slate-800 lg:text-xl'>$300,000</h1>
                    <p className='font-medium text-slate-500 pt-2 pb-3 text-sm lg:text-xs'>My Goal</p>
                    <div className='h-[2px] bg-indigo-300 rounded-md'></div>
                </div>
                <div className='flex gap-10 justify-between mb-6 mt-5 lg:mt-1 lg:flex-grow '>
                    <div className='w-full'>
                        <h1 className='text-2xl font-bold text-slate-800 lg:font-extrabold lg:text-xl'>59%</h1>
                        <p className='font-medium text-slate-500 pt-2 pb-2 text-sm lg:text-xs'>Goal Achieved</p>
                        <div className='h-[2px] bg-indigo-300 rounded-md '></div>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-2xl font-bold text-slate-800 lg:text-xl'>K 300</h1>
                        <p className='font-medium text-slate-500 pt-2 pb-2 text-sm lg:text-xs'>Est. Monthly Income</p>
                        <div className='h-[2px] bg-indigo-300 rounded-md'></div>
                    </div>
                </div>
            </div>

            {/* Contributions Overtime */}
            <div className='px-7 pt-4'>
                <h1 className='text-base font-bold text-slate-800 mb-4 '>Contributions Overtime</h1>
                <div className='flex justify-between '>
                    <div className='lg:flex lg:gap-3 lg:mt-1'>
                        <div className='h-2 w-3 rounded-lg bg-indigo-800 '></div>
                        <p className='text-slate-500 font-medium pt-1 text-sm lg:mt-[-8px] lg:text-xs'>Employer</p>
                        <h1 className='font-extrabold text-slate-800 text-lg lg:mt-[-7px] lg:text-sm'>$73,500</h1>
                    </div>
                    <div className='lg:flex lg:gap-3 lg:mt-1'>
                        <div className='h-2 w-3 rounded-lg bg-indigo-500'></div>
                        <p className='text-slate-500 font-medium pt-1 text-sm lg:mt-[-8px] lg:text-xs'>Employee</p>
                        <h1 className='font-extrabold text-slate-800 text-lg lg:mt-[-7px] lg:text-sm'>$52,500</h1>
                    </div>
                    <div className='lg:flex lg:gap-3 lg:mt-1'>
                        <div className='h-2 w-3 rounded-lg bg-indigo-300'></div>
                        <p className='text-slate-500 font-medium pt-1 text-sm lg:mt-[-8px] lg:text-xs'>Total Interest</p>
                        <h1 className='font-extrabold text-slate-800 text-lg lg:mt-[-7px] lg:text-sm'>$244,313</h1>
                    </div>
                </div>
            </div>
            <BarChartPage charData={userData} />
        </div>
    )
}

export default HeroSection