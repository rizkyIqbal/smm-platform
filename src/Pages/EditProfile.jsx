import { useState } from 'react'
import Navbar from '../Component/NavbarLogged';
import Footer from '../Component/Footer';
import profile11 from '../assets/img/profile/profile11.png';

function EditProfile () {
    return (
        <>
        <section className='body-font font-poppins w-screen h-full bg-white'>
            <Navbar />
            <div className='relative'>
                <p className="text-[48px] font-extrabold text-black absolute top-28 left-44">Edit Profile</p>
                <img className=" w-[170px] h-[165px] mb-3 absolute top-60 left-56 rounded-full shadow-lg " src={profile11} alt=""/>
                <button  className="w-fit h-auto absolute top-[430px] left-56 bg-secondary hover:bg-primary text-lg text-white">Select Photo</button>
                <p className="text-[40px] font-bold text-black absolute top-60 left-[460px] ">Personal Data</p>

                <div className='absolute top-80 left-[460px] '>
                    <label for="bname" className='text-2xl font-medium text-black tracking-widest'>Business Name</label>
                    <input type="text" id="bname" className="bg-white border border-gray-900 text-lg rounded-2xl focus:ring-black-500 focus:border-black-500 block w-[370px] mt-2 px-6 py-3 text-black" placeholder="Your Business Name" required></input>
                </div>

                <div className='absolute top-[440px] left-[460px] '>
                    <label for="fname" className='text-2xl font-medium text-black tracking-widest'>Full Name</label>
                    <input type="text" id="fname" className="bg-white border border-gray-900 text-lg rounded-2xl focus:ring-black-500 focus:border-black-500 block w-[370px] mt-2 px-6 py-3 text-black" placeholder="Your Full Name" required></input>
                </div>

                <div className='absolute top-[440px] left-[980px] '>
                    <label for="email" className='text-2xl font-medium text-black tracking-widest'>Email</label>
                    <input type="text" id="email" className="bg-white border border-gray-900 text-lg rounded-2xl focus:ring-black-500 focus:border-black-500 block w-[370px] mt-2 px-6 py-3 text-black" placeholder="Your Email" required></input>
                </div>

                <div className='absolute top-[560px] left-[460px] '>
                    <label for="addres" className='text-2xl font-medium text-black tracking-widest'>Address</label>
                    <input type="text" id="addres" className="bg-white border border-gray-900 text-lg rounded-2xl focus:ring-black-500 focus:border-black-500 block w-[370px] h-[100px] mt-2 px-6 py-3 text-black" placeholder="Address" required></input>
                </div>

                <div className='absolute top-[560px] left-[980px] '>
                    <label for="phone" className='text-2xl font-medium text-black tracking-widest'>No Handphone</label>
                    <input type="text" id="phone" className="bg-white border border-gray-900 text-lg rounded-2xl focus:ring-black-500 focus:border-black-500 block w-[370px] mt-2 px-6 py-3 text-black" placeholder="Your Full Name" required></input>
                </div>

                <button className="w-fit h-auto absolute top-[800px] left-[500px] w-[250px] bg-secondary hover:bg-primary text-2xl font-bold text-white">Cancel</button>
                <button className="w-fit h-auto absolute top-[800px] left-[1000px] w-[250px] bg-secondary hover:bg-primary text-2xl font-bold text-white">Save</button>
            </div>

            <div className="absolute bottom-[-700px] w-screen">
                <Footer />
            </div>
        </section>
        </>
    )
}

export default EditProfile