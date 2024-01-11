import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";

const SideBar = ({ setDisplayFun }) => {
    
    const [percentage, setPercentage] = useState(12);
    const [age, setAge] = useState(65)

    return (
        <div className='mb-14 lg:mt-4 lg:rounded-xl lg:pr-12 lg:ml-4'>
            <RxCross1 className='fixed top-7 right-7 text-2xl lg:hidden'
                onClick={setDisplayFun}
            />



            {/* Retirement Strategy */}
            <div className='px-7 bg-slate-100 pt-3 rounded-3xl lg:bg-gray-50 lg:pt-10'>
                <h1 className='text-base font-bold text-slate-800 mb-3 lg:mb-6'>Retirement Strategy</h1>

                <p className='text-sm font-bold text-slate-700 py-1 lg:py-3'>Employee Contribution</p>
                <input
                    type="range"
                    min={1}
                    max={20}
                    value={percentage}
                    className='cursor-pointer w-56 h-1 '
                    onChange={(e) => { setPercentage(e.target.value) }}
                />
                <label className='text-sm font-bold text-slate-700 py-1 pl-10 '>{percentage} %</label>

                <p className='text-sm font-bold text-slate-700 py-1 lg:py-3'>Retirement Age</p>
                <input
                    min={5}
                    max={100}
                    value={age}
                    className='cursor-pointer w-56 h-1 range-sm'
                    onChange={(e) => { setAge(e.target.value) }}
                    type="range"
                />
                <label className='text-sm font-bold text-slate-700 py-1 pl-10'>{age}</label>

                <div className='hidden h-[1.5px] bg-slate-200 mt-7  mr-7 mb-3 lg:mr-0 lg:block'></div>

                <div className='flex justify-between py-2'>
                    <p className='text-sm font-bold text-slate-700 py-1  lg:py-2'>Employer Contribution</p>
                    <p className='text-sm font-bold text-slate-700 py-1'>8.4%</p>
                </div>

                <div className='flex justify-between py-2 lg:pb-7'>
                    <p className='text-sm font-bold text-slate-700 py-1'>Interest Rate</p>
                    <p className='text-sm font-bold text-slate-700 py-1'>5%</p>
                </div>
            </div>
            <div className='lg:bg-gray-50 lg:pb-6 lg:rounded-xl'>
                <div className='lg:flex lg:justify-center'>
                    <button className='bg-indigo-700 w-full text-white py-4 font-semibold rounded-sm lg:w-64 lg:rounded-2xl'>Update</button>
                </div>
                {/* hidden element in mobile */}
                <p className='hidden lg:block text-center text-indigo-600 font-bold text-sm pt-4'>View Help Docs {">"} </p>
            </div>

            {/* hidden element in mobile */}
            <div className='hidden lg:block pl-7 border-l-2 border-indigo-500'>
                <p className='text-sm font-semibold text-slate-500'>Are you considering a </p>
                <p className='text-sm font-bold text-slate-700'>Housing Advance</p>
                <p className='text-xs font-medium text-slate-400'>Limited time reduced interest</p>
                <p className='text-xs font-bold text-indigo-700 pt-2'>Learn More {" >"}</p>
            </div>

        </div>
    )
}

export default SideBar