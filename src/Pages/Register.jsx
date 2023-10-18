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
                <div className='px-[600px]'>
                  <label for="name" className="block mb-2 text-lg font-medium text-black text-left mt-16 justify-center">Name</label>
                  <input type="text" id="name" className="bg-white w-full border border-gray-400 text-gray-900 text-lg rounded-lg focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Your Name" required></input>
                  <label for="password" class="block mb-2 text-lg font-medium text-black text-left mt-4 ">Pasword</label>
                  <input type="password" id="password" class="bg-white w-full border border-gray-400 text-gray-900 text-lg  rounded-lg focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black " placeholder="•••••••••" required/>
                  <button type="submit" onClick={openModal} class="w-full text-white bg-secondary font-medium rounded-[16px] text-lg  px-5 py-3 mt-10 text-center">Sign Up</button>
                  <p className='text-xl font-medium text-black text-center mt-8 justify-center'>Already have an account? <Link to="/login" className="text-black hover:text-black"> Sign In</Link></p>
                </div>
              </div>
            </div>
        </section>
      </>
    )
}

export default Register