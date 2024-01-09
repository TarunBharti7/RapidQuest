import React from 'react';
import { GoHome } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    // Using react icon
    <div className='flex justify-around mt-4 mb-4 '>
        <GoHome className='text-slate-600 text-3xl p-1 rounded-lg hover:bg-indigo-700 hover:text-white'/>
        <FaRegNewspaper className='text-slate-600 text-3xl p-1 rounded-lg hover:bg-indigo-700 hover:text-white'/>
        <CgMenuGridO className='text-slate-600 text-3xl p-1 rounded-lg hover:bg-indigo-700 hover:text-white'/>
        <BsPerson className='text-slate-600 text-3xl p-1 rounded-lg hover:bg-indigo-700 hover:text-white'/>
        <IoSearchSharp className='text-slate-600 text-3xl p-1 rounded-lg hover:bg-indigo-700 hover:text-white'/>
    </div>
  )
}

export default Navbar