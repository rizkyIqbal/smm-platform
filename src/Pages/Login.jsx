import { useState } from 'react'
import Navbar from '../Component/Navbar'
import jumbotron from '../assets/img/jumbotron.png'
import { Link } from "react-router-dom";
import backgroundSix from '../assets/img/background/bg6.png'
import backgroundSeven from '../assets/img/background/bg7.png'

function Login() {
    return (
      <>
        <section className='body-font font-poppins w-screen h-full bg-primary'>
            <Navbar />

            {/* <div className=''>
            <div className='absolute top-32 left-0'>
                <img src={backgroundSix} className='w-[620px] h-auto' alt="" />
            </div>
            <div className='absolute bottom-[-412px] right-0'>
                <img src={backgroundSeven} className='w-[700px] h-auto' alt="" />   
            </div>
            </div> */}

            <div className='flex pl-24 pr-24 pb-24 mt-32'>
              <div className='mt-8 w-full h-auto bg-white rounded-l-3xl shadow-2xl shadow-silver-500 pb-52'>
                <p className='text-5xl font-bold text-black text-center mt-44'>Log In</p>
                <div>
                <label for="name" className="block mb-2 text-lg font-medium text-black text-left mt-10 ml-32">Name</label>
                <input type="text" id="name" className="bg-white border border-gray-400 text-lg ml-32 rounded-lg focus:ring-black-500 focus:border-black-500 block w-4/6 px-6 py-3 text-black" placeholder="Your Name" required></input>
                <label for="password" class="block mb-2 text-lg font-medium text-black text-left mt-4 ml-32">Pasword</label>
                <input type="password" id="password" class="bg-white border border-gray-400 text-black text-lg ml-32 rounded-lg focus:ring-black-500 focus:border-black-500 block w-4/6 px-6 py-3 " placeholder="•••••••••"  required></input>
                <Link to="/order">
                  <button type="submit" class="text-white bg-secondary font-medium rounded-[16px] text-lg w-4/12  px-5 py-3 mt-10 text-center ml-[255px]">Login</button>
                </Link>
                <p className='text-xl font-medium text-black text-center mt-8 justify-center'>Don't have account yet? <Link to="/register" className="text-black hover:text-black">Sign Up</Link></p>
                
                </div>
              </div>
              <div className='mt-8 w-full h-auto bg-secondary rounded-r-3xl shadow-2xl shadow-silver-500'>
                <div className='flex justify-center mt-32 mb-20'>
                  <img className='' src={jumbotron} alt="" />
                </div>
              </div>
            </div>

        </section>
      </>
    )
}

export default Login