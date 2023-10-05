import { useState } from 'react'
import Navbar from '../Component/Navbar'
import jumbotron from '../assets/img/jumbotron.png'

function Dashboard() {
  return (
    <>
    <section className='body-font font-poppins'>
        <Navbar />
        <div className='w-screen h-[600px] bg-[#D988B9]'>
            <div className='grid grid-cols-2 px-24 py-12 w-full h-full'>
                <div className=''>
                    <p className='text-8xl font-bold text-white'>Start Your <br />Social Media </p>
                    <div className='w-[400px]'>
                        <p className='text-lg pt-8 text-white-300'>Lorem ipsum dolor sit amet consectetur. Pellentesque orci pellentesque at pharetra. Lorem ipsum dolor sit amet consectetur. Pellentesque.</p>
                    </div>
                    <button className='mt-10 bg-[#D988B9] border-1 border-white px-12 py-4'>
                        <p className='text-lg font-semibold'>Get Started</p>
                    </button>
                </div>
                <div className='flex justify-center'>
                    <img src={jumbotron} alt="" />
                </div>
            </div>
        </div>
        <div className='w-screen h-screen bg-white flex justify-center'>
            <p className='text-xl'>SOCIOBOX</p>
        </div>
    </section>
    </>
  )
}

export default Dashboard
