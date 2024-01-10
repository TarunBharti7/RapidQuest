import React from 'react'

const HeroSection = () => {
    return (
        <div className='mb-8 mt-10'>
            {/* Retirement Section */}
            <div className='pl-7 mb-4'>
                <p className='font-serif text-xs font-bold text-indigo-700'>Retirement Income</p>
                <h1 className='text-xl font-bold font-sans text-slate-800'>Starting Year 2056</h1>
            </div>

            {/* My Goal */}
            <div className='pl-7 pr-7 '>
                <h1 className='text-3xl font-extrabold text-slate-800 '>$300,000</h1>
                <p className='font-medium text-slate-500 pt-2 pb-3 text-sm'>My Goal</p>
                <div className='h-[1.5px] bg-indigo-300 rounded-md'></div>
                <div className='flex gap-10 justify-between mb-6 mt-5'>
                    <div className='w-full'>
                        <h1 className='text-2xl font-bold text-slate-800 '>59%</h1>
                        <p className='font-medium text-slate-500 pt-2 pb-2 text-sm'>Goal Achieved</p>
                        <div className='h-[2px] bg-indigo-300 rounded-md '></div>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-2xl font-bold text-slate-800 '>K 300</h1>
                        <p className='font-medium text-slate-500 pt-2 pb-2 text-sm'>Est. Monthly Income</p>
                        <div className='h-[2px] bg-indigo-300 rounded-md'></div>
                    </div>
                </div>
            </div>

            {/* Contributions Overtime */}
            <div className='px-7 pt-4'>
                <h1 className='text-base font-bold text-slate-800 mb-4 '>Contributions Overtime</h1>
                <div className='flex justify-between '>
                    <div>
                        <div className='h-2 w-3 rounded-lg bg-indigo-800'></div>
                        <p className='text-slate-500 font-medium pt-1 text-sm'>Employer</p>
                        <h1 className='font-extrabold text-slate-800 text-lg'>$73,500</h1>
                    </div>
                    <div>
                        <div className='h-2 w-3 rounded-lg bg-indigo-500'></div>
                        <p className='text-slate-500 font-medium pt-1 text-sm'>Employee</p>
                        <h1 className='font-extrabold text-slate-800 text-lg'>$52,500</h1>
                    </div>
                    <div>
                        <div className='h-2 w-3 rounded-lg bg-indigo-300'></div>
                        <p className='text-slate-500 font-medium pt-1 text-sm'>Total Interest</p>
                        <h1 className='font-extrabold text-slate-800 text-lg'>$244,313</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection