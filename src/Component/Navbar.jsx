import { useState } from 'react'
import logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className='w-screen h-32 bg-[#D988B9] px-16'>
        <div className='w-[475px] h-full'>
            <div className='grid grid-cols-3 h-full'>

                <div className='w-28 h-auto'>
                    <img src={logo} alt="" />
                </div>
                <div className="hidden md:flex space-x-4 col-span-2 py-12">
                    <Link href="#" className="text-white font-medium hover:text-white">Home</Link>
                    <Link href="#" className="text-white font-medium hover:text-white">Order</Link>
                    <Link href="#" className="text-white font-medium hover:text-white">About Us</Link>
                    <Link href="#" className="text-white font-medium hover:text-white">Contact</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
