import { Fragment, useState } from 'react'
import Navbar from '../Component/Navbar'
import { Link } from "react-router-dom";
import backgroundSix from '../assets/img/background/bg6.png'
import backgroundSeven from '../assets/img/background/bg7.png'
import { Dialog, Transition } from '@headlessui/react'
import { BsFillCheckCircleFill } from 'react-icons/bs'


function Register() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
    }

    return (
      <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="font-poppins mt-8">
                      <p className="text-lg font-semibold text-secondary flex justify-center">Selamat! Anda telah Berhasil Mendaftar</p>
                      <p className="text-lg text-gray-700 flex justify-center">Silahkan Login agar dapat menggunakan</p>
                      <p className="text-lg text-gray-700 flex justify-center">layanan kami.</p>
                    </div>
                    <div className='opacity-40 absolute top-12 left-44 -z-50'>
                    <BsFillCheckCircleFill color='#D988B9' fontSize="100px" />
                    </div>
                  </div>

                  <div className="mt-8 mb-4 flex justify-center">
                  <Link to="/login"> 
                    <button
                      type="button"
                      className="rounded-md border border-transparent bg-secondary px-4 py-2 text-lg font-medium text-white hover:bg-primary"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      
        <section className='body-font font-poppins w-screen h-full bg-primary'>
            <Navbar />
{/* 
            <div className=''>
            <div className='absolute top-32 left-0'>
                <img src={backgroundSix} className='w-[620px] h-auto' alt="" />
            </div>
            <div className='absolute bottom-[-405px] right-0'>
                <img src={backgroundSeven} className='w-[700px] h-auto' alt="" />   
            </div>
            </div> */}

            <div className='flex pl-24 pr-24 pb-24 mt-20'>
              <div className='mt-8 w-full h-auto bg-white rounded-3xl shadow-2xl shadow-silver-500 pb-52'>
                <p className='text-5xl font-bold text-black text-center mt-48'>Sign Up</p>
                <div className='px-[465px]'>
                  <label for="name" className="block mb-2 text-lg font-medium text-black text-left mt-16 justify-center">Name</label>
                  <input type="text" id="name" className="bg-white w-[482px] border border-gray-400 text-gray-900 text-lg rounded-lg focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Your Name" required></input>
                  <label for="password" class="block mb-2 text-lg font-medium text-black text-left mt-4 ">Pasword</label>
                  <input type={isPasswordVisible ? "text" : "password"} id="password" class="bg-white w-[482px] border border-gray-400 text-gray-900 text-lg  rounded-lg focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black " placeholder="•••••••••" required/>
                  <button className="absolute top-[690px] left-[980px] " onClick={togglePasswordVisibility}>
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
                  <button type="submit" onClick={openModal} class="w-[220px] text-white bg-secondary font-medium rounded-[16px] text-lg  px-5 py-3 mt-10 text-center ml-32">Sign Up</button>
                  <p className='text-xl font-medium text-black w-[489px] text-center mt-8 m'>Already have an account? <Link to="/login" className="text-black hover:text-black"> Sign In</Link></p>
                </div>
              </div>
            </div>
        </section>
      </>
    )
}

export default Register