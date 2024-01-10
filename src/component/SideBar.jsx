import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import CircleRating from './CircleRating';

const SideBar = () => {
    const [percentage, setPercentage] = useState(12);
    const [age, setAge] = useState(65)
    return (
        <div className='mb-14'>
            {/* <RxCross1 className='fixed top-7 right-7 text-3xl'/> */}

            {/* Compare */}
            <div className='px-7'>
                <h1 className='text-base font-bold text-slate-800'>How do i compare to my peers?</h1>
                <p className='font-medium text-xs text-slate-600 pb-2'>These numbers represent current goal achievement</p>

                <div className='py-1 '>
                    <label className='text-sm font-bold text-slate-700 pr-7'>Age: </label>
                    <select className='text-sm font-medium text-slate-700' name="" id="age">
                        <option value="30">Under 30</option>
                        <option value="50">Under 50</option>
                    </select>
                    <div className='h-[1px] bg-slate-300 my-2'></div>
                </div>

                <div className=''>
                    <label className='text-sm font-bold text-slate-700 pr-4'>Salary: </label>
                    <select className='text-sm font-medium text-slate-700' name="" id="salary">
                        <option value="k">K 20 - K 30</option>
                        <option value="k">K 40 - K 50</option>
                    </select>
                    <div className='h-[2px] bg-slate-300 my-2'></div>
                </div>

                <div className='pt-1'>
                    <label className='text-sm font-bold text-slate-700 pr-2'>Gender: </label>
                    <select className='text-sm font-medium text-slate-700' name="" id="gemder">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <div className='h-[1.5px] bg-slate-300 mt-2'></div>
                </div>
            </div>

            {/* Circle */}
            <div className='px-7 flex justify-between mb-20'>
                <CircleRating rating={78} value={"Average"} />
                <CircleRating rating={95} value={"Top"} />
                <CircleRating rating={59} value={"Me"} />
            </div>

            {/* Retirement Strategy */}
            <div className='px-7 bg-slate-100 pt-3 rounded-3xl'>
                <h1 className='text-base font-bold text-slate-800 mb-3'>Retirement Strategy</h1>

                <p className='text-sm font-bold text-slate-700 py-1 '>Employee Contribution</p>
                <input
                    type="range" 
                    min={1}
                    max={20}
                    value={percentage}
                    className='cursor-pointer w-56 h-1 '
                    onChange={(e) => { setPercentage(e.target.value) }}
                />
                <label className='text-sm font-bold text-slate-700 py-1 pl-10 '>{percentage} %</label>

                <p className='text-sm font-bold text-slate-700 py-1'>Retirement Age</p>
                <input
                    min={5}
                    max={100}
                    value={age}
                    className='cursor-pointer w-56 h-1 range-sm'
                    onChange={(e) => { setAge(e.target.value) }}
                    type="range"
                />
                <label className='text-sm font-bold text-slate-700 py-1 pl-10'>{age}</label>

                <div className='flex justify-between py-2'>
                    <p className='text-sm font-bold text-slate-700 py-1'>Employer Contribution</p>
                    <p className='text-sm font-bold text-slate-700 py-1'>8.4%</p>
                </div>

                <div className='flex justify-between py-2'>
                    <p className='text-sm font-bold text-slate-700 py-1'>Interest Rate</p>
                    <p className='text-sm font-bold text-slate-700 py-1'>5%</p>
                </div>
            </div>
            <button className='bg-indigo-700 w-full text-white py-4 font-semibold rounded-sm'>Update</button>
        </div>
    )
}

export default SideBar