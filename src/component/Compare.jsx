import React from 'react'
import CircleRating from './CircleRating';


const Compare = () => {
    return (
        <div>
            {/* Compare */}
            <div className='px-7 lg:mx-10'>
                <h1 className='text-base font-bold text-slate-800'>How do i compare to my peers?</h1>
                <p className='font-medium text-xs text-slate-500 pb-2'>These numbers represent current goal achievement</p>

                <div className='lg:flex lg:justify-between lg:gap-16 lg:mt-3 '>
                    <div>
                        <div className='py-1 '>
                            <label className='text-sm font-bold text-slate-700 pr-7'>Age: </label>
                            <select className='text-sm font-medium text-slate-700 bg-transparent' name="" id="age">
                                <option value="30">Under 30</option>
                                <option value="50">Under 50</option>
                            </select>
                            <div className='h-[1px] bg-slate-300 my-2'></div>
                        </div>

                        <div className=''>
                            <label className='text-sm font-bold text-slate-700 pr-4'>Salary: </label>
                            <select className='text-sm font-medium text-slate-700 bg-transparent' name="" id="salary">
                                <option value="k">K 20 - K 30</option>
                                <option value="k">K 40 - K 50</option>
                            </select>
                            <div className='h-[2px] bg-slate-300 my-2'></div>
                        </div>

                        <div className='pt-1'>
                            <label className='text-sm font-bold text-slate-700 pr-2'>Gender: </label>
                            <select className='text-sm font-medium text-slate-700 bg-transparent' name="" id="gemder">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <div className='h-[1.5px] bg-slate-300 mt-2'></div>
                        </div>
                    </div>


                    {/* Circle */}
                    <div className='px-7 flex justify-between mb-20 lg:flex-grow lg:mx-0 lg:mt-[-20px]'>
                        <CircleRating rating={78} value={"Average"} />
                        <CircleRating rating={95} value={"Top"} />
                        <CircleRating rating={59} value={"Me"} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Compare