import { useState } from 'react'
import Navbar from '../Component/Navbar'
import jumbotron from '../assets/img/jumbotron.png'
import { Link } from "react-router-dom";
import backgroundSix from '../assets/img/background/bg6.png'
import backgroundSeven from '../assets/img/background/bg7.png'



function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
    }
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
                <input type={isPasswordVisible ? "text" : "password"} id="password" class="bg-white border border-gray-400 text-black text-lg ml-32 rounded-lg focus:ring-black-500 focus:border-black-500 block w-4/6 px-6 py-3 " placeholder="•••••••••"  required></input>
                <button className="absolute top-[700px] left-[630px] " onClick={togglePasswordVisibility}>
                  {isPasswordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
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