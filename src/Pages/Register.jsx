import { useState } from 'react'
import Navbar from '../Component/Navbar'
import { Link } from "react-router-dom";
import backgroundSix from '../assets/img/background/bg6.png'
import backgroundSeven from '../assets/img/background/bg7.png'

function Register() {
    return (
      <>
        <section className='body-font font-poppins w-screen h-full bg-primary'>
            <Navbar />

            <div className=''>
            <div className='absolute top-32 left-0'>
                <img src={backgroundSix} className='w-[620px] h-auto' alt="" />
            </div>
            <div className='absolute bottom-[-405px] right-0'>
                <img src={backgroundSeven} className='w-[700px] h-auto' alt="" />   
            </div>
            </div>

            <div className='flex pl-24 pr-24 pb-24 mt-20'>
              <div className='mt-8 w-full h-auto bg-white rounded-3xl shadow-2xl shadow-silver-500 pb-52'>
                <p className='text-5xl font-bold text-black text-center mt-48'>Sign Up</p>
                <div className=''>
                <label for="name" className="block mb-2 text-lg font-medium text-black text-left mt-16 ml-[450px]">Name</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-600 text-gray-900 text-lg ml-[450px] rounded-lg focus:ring-black-500 focus:border-black-500 block w-2/5 px-6 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" required></input>
                <label for="password" class="block mb-2 text-lg font-medium text-black text-left mt-4 ml-[450px]">Pasword</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-600 text-gray-900 text-lg ml-[450px] rounded-lg focus:ring-black-500 focus:border-black-500 block w-2/5 px-6 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="•••••••••" required/>
                <button type="submit" class="text-white bg-secondary font-medium rounded-[16px] text-lg w-1/5  px-5 py-3 mt-10 text-center ml-[605px]">Sign Up</button>
                <p className='text-xl font-medium text-black text-center mt-8 justify-center'>Already have an account? <Link href="#" className="text-black hover:text-black"> Sign In</Link></p>
                </div>
              </div>
            </div>
        </section>
      </>
    )
}

export default Register