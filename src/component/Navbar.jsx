import React from 'react';
import { GoHome } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { PiButterflyFill } from "react-icons/pi";

const Navbar = () => {
  return (
    // Using react icon
    <div className='flex justify-around mt-4 mb-4 lg:flex-col lg:w-14 lg:gap-5 lg:pt-2 lg:pl-3'>
        <PiButterflyFill className='hidden lg:block text-indigo-600 text-3xl p-1 rounded-lg hover:bg-indigo-700 hover:text-white '/>

        <GoHome className='text-slate-600 text-3xl p-1 rounded-lg hover:bg-indigo-700 hover:text-white lg:order-3'/>
        <FaRegNewspaper className='text-slate-600 text-3xl p-1 rounded-lg hover:bg-indigo-700 hover:text-white lg:order-4'/>
        <CgMenuGridO className='text-slate-600 text-3xl p-1 rounded-lg hover:bg-indigo-700 hover:text-white lg:order-5'/>
        <BsPerson className='text-slate-600 text-3xl p-1 rounded-lg hover:bg-indigo-700 hover:text-white lg:order-6'/>
        <IoSearchSharp className='text-slate-600 text-3xl p-1 rounded-lg hover:bg-indigo-700 hover:text-white lg:order-2 lg:mb-10'/>
    </div>
  )
}

export default Navbar