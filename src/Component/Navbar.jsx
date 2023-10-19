import { useState } from 'react'
import logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";
import { Popover } from '@headlessui/react'
import { HiMenuAlt3 } from "react-icons/hi";

function Navbar() {
  return (
    <>
      <div className='w-screen h-32 bg-[#D988B9] lg:px-16 px-6'>
        <div className='lg:w-full lg:flex lg:item-center lg:justify-between w-full h-full'>
            <div className='lg:flex lg:justify-start lg:gap-8 h-full flex justify-between items-center'>
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
                      <Link to="#" className="text-white font-medium hover:text-white">About Us</Link>
                      <Link to="#" className="text-white font-medium hover:text-white">Contact</Link>
                    </div>

                    <img src="/solutions.jpg" alt="" />
                  </Popover.Panel>
                </Popover>
                <div className="hidden md:flex space-x-4 col-span-2 py-12">
                    <Link to="/" className="text-white font-medium hover:text-white">Home</Link>
                    <Link to="/order" className="text-white font-medium hover:text-white">Order</Link>
                    <Link to="/about" className="text-white font-medium hover:text-white">About Us</Link>
                    <Link to="#" className="text-white font-medium hover:text-white">Contact</Link>
                </div>
            </div>
            <div className='flex justify-center items-center'>
              <Link to="/profile">
                <img class="w-14 h-auto rounded-full" src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="Rounded avatar"></img>
              </Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar