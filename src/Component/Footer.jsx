import { useState } from 'react'
import logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="p-4 bg-primary sm:py-6 sm:px-32">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="#" className="flex items-center">
                        <img src={logo} className="mr-3 h-24" alt="Sociobox Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">SMM Platform</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-2">
                    <div>
                        <h2 className="mb-6 text-md font-semibold text-gray-900 dark:text-white text-white">
                            Company
                        </h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="text-white font-normal hover:text-white">About Us</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="text-white font-normal hover:text-white">Our Sevice</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-md font-semibold text-gray-900 dark:text-white text-white">
                            Get In Touch
                        </h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#"
                                    className="text-white font-normal hover:text-white">FAQ</a>
                            </li>
                            <li>
                              <a href="#" className="text-white font-normal hover:text-white">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-32 mb-6">
                <p className='text-white text-md text-center font-medium'>All Right Reserved 2023. Copyright PT.Social Media Management</p>
            </div>
        </footer>
    </>
  )
}

export default Footer
