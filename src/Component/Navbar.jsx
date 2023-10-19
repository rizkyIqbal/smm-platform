import { useState } from 'react'
import logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";
import { Popover } from '@headlessui/react'
import { HiMenuAlt3 } from "react-icons/hi";

function Navbar() {
  return (
    <>
      <div className='w-screen h-32 bg-[#D988B9] lg:px-16 px-6'>
        <div className='lg:w-[475px] w-full h-full'>
            <div className='lg:grid lg:grid-cols-3 h-full flex justify-between items-center'>
                <div className='w-28 h-auto'>
                    <img src={logo} alt="" /> 
                </div>
                {/* <div>
                  test
                </div> */}
                <Popover className="lg:hidden relative">
                  <Popover.Button>
                    <HiMenuAlt3 fontSize="2.5rem"/>
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10">
                    <div className="grid grid-cols-2">
                      <Link to="/" className="text-white font-medium hover:text-white">Home</Link>
                      <Link to="/order" className="text-white font-medium hover:text-white">Order</Link>
                      <Link to="/about" className="text-white font-medium hover:text-white">About Us</Link>
                      <Link to="/contact" className="text-white font-medium hover:text-white">Contact</Link>
                    </div>

                    <img src="/solutions.jpg" alt="" />
                  </Popover.Panel>
                </Popover>
                <div className="hidden md:flex space-x-4 col-span-2 py-12">
                    <Link to="/" className="text-white font-medium hover:text-white">Home</Link>
                    <Link to="/order" className="text-white font-medium hover:text-white">Order</Link>
                    <Link to="/about" className="text-white font-medium hover:text-white">About Us</Link>
                    <Link to="/contact" className="text-white font-medium hover:text-white">Contact</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar