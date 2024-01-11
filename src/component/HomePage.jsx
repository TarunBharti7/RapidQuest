import React  from 'react'
import Navbar from './Navbar'
import { CiBellOn } from "react-icons/ci";
import { WiDegrees } from "react-icons/wi";
import { RiLogoutBoxRLine } from "react-icons/ri";

const HomePage = ({ setDisplayFun }) => {


    return (
        <div className="relative lg:bg-slate-50 lg:flex lg:pr-4">
            <div className="fixed bottom-0 left-0 right-0 bg-white lg:relative">
                <Navbar />
            </div>

            {/* Bell icon */}
            <div 
                className="fixed top-7 right-7 text-3xl  lg:fixed lg:left-3 lg:bottom-24 lg:top-auto text-gray-500"
            >
                <CiBellOn onClick={setDisplayFun}/>
            </div>

            <div className="fixed top-3 right-2 text-5xl text-sky-700 lg:fixed lg:left-3 lg:bottom-24 lg:top-auto">
                <WiDegrees onClick={setDisplayFun}/>
            </div>

            {/* hidden element in mobile */}
            <div className='hidden lg:block text-3xl lg:fixed lg:left-3 lg:bottom-10 lg:top-auto text-gray-500'>
                <RiLogoutBoxRLine/>
            </div>

            <div>
                {/* Profile Photo */}
                <div className='flex mt-8'>
                    <img
                        className='rounded-full h-16 m-5 lg:ml-9 lg:mt-3'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRXOat2wRgu6aCu4dR6nrZ8BKsdQnFWwkPg&usqp=CAU" alt=""
                    />
                    <div>
                        <h1 className='font-bold font-serif mt-8 text-2xl text-slate-800 lg:mt-6'>Hi Mike,</h1>
                        <p className='font-medium font-sans text-slate-700 text-xs'>welcome back.</p>
                    </div>
                </div>

                {/* Today Balance Card*/}
                <div className='bg-slate-100 m-7 rounded-xl lg:mt-0 lg:bg-slate-50'>
                    <p className='font-semibold pl-7 pt-7 text-base font-serif text-slate-700 lg:text-sm'>Today</p>
                    <h1 className='font-extrabold text-3xl font-sans pl-7 pt-2 pb-2 text-slate-800 lg:text-2xl'>$19,892</h1>
                    <p className='font-medium pl-7 text-slate-500 text-sm lg:text-xs'>Account Balance</p>
                    <div className='flex pt-5 lg:flex-col lg:pt-2'>
                        <div className='pl-7'>
                            <h6 className='text-xl font-bold text-slate-800 lg:text-lg'>$4000</h6>
                            <p className='font-medium text-slate-500 text-sm lg:text-xs'>Year-to-Date</p>
                        </div>
                        <div className='pl-10 lg:pl-7 lg:pt-2'>
                            <h6 className='text-xl font-bold text-slate-800 lg:text-lg'>$1892</h6>
                            <p className='font-medium text-slate-500 text-sm lg:text-xs'>Total Interest</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-8 lg:w-48 lg:mt-4'>
                        <button className='bg-indigo-700 text-white w-full pt-3 pb-3 ml-7 mr-7 mb-7 rounded-lg hover:bg-indigo-800 '>I want to...</button>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className='bg-slate-100 m-7 rounded-xl  pb-10 lg:bg-slate-50'>
                    <h1 className='text-lg font-bold pl-7 text-slate-800 pt-6 lg:pt-0 lg:text-base'>Recent Transactions</h1>
                    <div>
                        <p className='font-medium text-slate-500 pl-7 pt-5 text-sm lg:text-xs'>2020-07-01</p>
                        <h2 className='font-bold text-slate-800 pl-7 text-sm lg:text-xs'>Withdrawal Transfer to Bank-XX11</h2>
                        <div className='h-[1.5px] bg-slate-300 mt-3 ml-7 mr-7 mb-5 lg:mr-0'></div>
                    </div>
                    <div>
                        <p className='font-medium text-slate-500 pl-7 text-sm lg:text-xs'>2020-07-01</p>
                        <h2 className='font-bold text-slate-800 pl-7 text-sm lg:text-xs'>Withdrawal Transfer to Bank-XX11</h2>
                        <div className='h-[1.5px] bg-slate-300 mt-3 ml-7 mr-7 mb-5 lg:mr-0'></div>
                    </div>
                    <div>
                        <p className='font-medium text-slate-500 pl-7 text-sm lg:text-xs'>2020-07-01</p>
                        <h2 className='font-bold text-slate-800 pl-7 text-sm lg:text-xs'>Withdrawal Transfer to Bank-XX11</h2>
                        <div className='h-[1.5px] bg-slate-300 mt-3 ml-7 mr-7 lg:mr-0'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage