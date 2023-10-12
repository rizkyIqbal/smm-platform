import { useState } from 'react'
import Navbar from '../Component/Navbar'
import jumbotron from '../assets/img/jumbotron.png'
// import Card from '../Component/Card'
import Card from '../Component/Card';
import CardSMM from '../Component/CardSMM';
import backgroundFirst from '../assets/img/background/bg1.png'
import backgroundSecond from '../assets/img/background/bg2.png'
import backgroundThird from '../assets/img/background/bg3.png'
import backgroundFourth from '../assets/img/background/bg4.png'
import backgroundFifth from '../assets/img/background/bg5.png'
import Footer from '../Component/Footer';

function Dashboard() {
  return (
    <>
    <section className='body-font font-poppins w-screen sm:overflow-x-hidden'>
        <Navbar />
        <div className='flex'>
            <div className='absolute -z-20'>
                <img src={backgroundFirst} className='w-[1220px] h-auto' alt="" />
            </div>
            <div className='absolute -z-20 h-auto top-[1000px]'>
                <div className='w-screen grid justify-items-end'>
                    <img src={backgroundSecond} className='w-[700px] bg-cover h-auto' alt="" />
                </div>
            </div>
            <div className='absolute -z-20 left-[200px] h-auto top-[1700px]'>
                <img src={backgroundThird} className='w-44 h-auto' alt="" />
            </div>
            <div className='absolute -z-20 h-auto top-[2000px]'>
                <div className='w-screen grid justify-items-start'>
                    <img src={backgroundFourth} className='w-[700px] h-auto' alt="" />
                </div>
            </div>
            <div className='absolute -z-20 right-[200px] h-auto top-[2500px]'>
                <img src={backgroundThird} className='w-44 h-auto' alt="" />
            </div>
            <div className='absolute -z-20 right-[0px] h-auto top-[2800px]'>
                <img src={backgroundFifth} className='w-[700px] h-auto' alt="" />
            </div>
            <div className="w-full text-white">
                <div className='w-full h-[500px] lg:h-[600px] bg-primary'>
                    <div className='lg:flex lg:justify-between lg:px-24 px-12 py-12 w-full h-full'>
                        <div className=''>
                            <p className='text-5xl lg:text-8xl font-bold text-white'>Start Your <br />Social Media </p>
                            <div className='lg:w-[500px]'>
                                <p className='text-lg pt-8 text-white-500'>Lorem ipsum dolor sit amet consectetur. Pellentesque orci pellentesque at pharetra. Lorem ipsum dolor sit amet consectetur. Pellentesque.</p>
                            </div>
                            <button className='mt-10 bg-primary border-1 border-white px-12 py-4 hover:border-none hover:bg-white hover:text-primary'>
                                <p className='text-lg font-semibold'>Get Started</p>
                            </button>
                        </div>
                        <div className='hidden lg:flex lg:justify-center'>
                            <img className='pr-48' src={jumbotron} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[980px] text-black'>
            <div className='w-full flex justify-center px-12'>
                <div className='mt-24'>
                    <p className='text-lg text-black font-bold text-center'>SOCIOBOX</p>
                    <p className='text-4xl text-black text-center pt-1'>Best Rating Influencer</p>
                </div>
            </div>
            <div className='mt-24 grid grid-cols-4'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='flex justify-center mt-32'>
                <button className='btn bg-transparent border-[3px] border-primary text-primary text-lg font-bold px-16 py-4 hover:bg-primary hover:border-[3px] hover:border-white hover:text-white'>See All</button>
            </div>
        </div> 
        <div className='h-[980px] text-black'>
            <div className='w-full flex justify-center px-12'>
                <div className='mt-24'>
                    <p className='text-lg text-black font-bold text-center'>SOCIOBOX</p>
                    <p className='text-4xl text-black text-center pt-1'>Best Rating Social Media Management</p>
                </div>
            </div>
            <div className='mt-24 grid grid-cols-4'>
                <CardSMM />
                <CardSMM />
                <CardSMM />
                <CardSMM />
            </div>
            <div className='flex justify-center mt-32'>
                <button className='btn bg-transparent border-[3px] border-primary text-primary text-lg font-bold px-16 py-4 hover:bg-primary hover:border-[3px] hover:border-white hover:text-white'>See All</button>
            </div>
        </div>
        <div className='h-[490px] mt-28 text-black'>
            <div className='w-screen flex lg:px-32 lg:justify-start'>
                <img src="https://global-uploads.webflow.com/5f0082d019150187c1bdb9ca/63905f1323b53092e08df14e_company%20(1).webp" alt="" className='lg:flex hidden' />
                <div className='w-screen lg:ml-12'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='text-4xl font-medium'>Why SOCIOBOX?</p>
                    </div>
                    <div className='w-full flex justify-center px-12 lg:px-0 lg:w-[800px] lg:justify-start'>
                        <p className='text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur. Pellentesque orci pellentesque at pharetra. Lorem ipsum dolor sit amet consectetur. Pellentesque. Lorem ipsum dolor sit amet consectetur. Pellentesque orci pellentesque at pharetra. Lorem ipsum dolor sit amet consectetur. Pellentesque.Lorem ipsum dolor sit amet consectetur. Pellentesque orci pellentesque at pharetra. Lorem ipsum dolor sit amet consectetur. Pellentesque.</p>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <button className='btn w-44 bg-transparent border-[3px] border-primary text-primary text-lg font-bold hover:bg-primary hover:border-[3px] hover:border-white hover:text-white'>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <Footer />

    </section>
    </>
  )
}

export default Dashboard