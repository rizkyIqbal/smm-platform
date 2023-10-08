import { useState } from 'react'
import Navbar from '../Component/Navbar'
import jumbotron from '../assets/img/jumbotron.png'
import Footer from '../Component/Footer'

function Login() {
    return (
      <>
        <section className='body-font font-poppins w-screen h-full bg-primary'>
            <Navbar />

            <div className='flex pl-24 pr-24'>
              <div className='mt-8 w-full h-auto bg-white rounded-l-3xl shadow-lg'>
                <p className='text-5xl font-bold text-black text-center mt-40'>Log In</p>
                <div>
                <p className='text-lg font-medium text-black text-left mt-16 ml-24'>Name</p>
                <input className='text-lg font-medium text-black text-left ml-24 mt-2' type="text" name="name" />
                <p className='text-lg font-medium text-black text-left mt-4 ml-24'>Password</p>
                <input className='text-lg font-medium text-black text-left ml-24 mt-2' type="text" name="password" />
                </div>
              </div>
              <div className='mt-8 w-full h-auto bg-secondary rounded-r-3xl shadow-lg '>
                <div className='flex justify-center mt-20 mb-20'>
                  <img className='' src={jumbotron} alt="" />
                </div>
              </div>
            </div>

        </section>
      </>
    )
}

export default Login