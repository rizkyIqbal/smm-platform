import { useState } from 'react'
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import profile11 from '../assets/img/profile/profile11.png';
import {ImExit} from 'react-icons/im';
import { BiSolidEdit } from 'react-icons/bi'
import { Link } from 'react-router-dom';

function Profile () {
    return (
        <>
        <section className='body-font font-poppins w-screen h-full bg-white'>
            <Navbar />
            <div className='relative'>
                <p className="text-[48px] left-52 font-extrabold text-black absolute top-28">Profile User</p>
                <div className="absolute top-48 left-40 flex justify-center  w-[373px] h-[425px] bg-primary rounded-[60px]">
                    <div className='flex flex-col items-center'>
                        <img className=" w-[170px] h-[165px] mb-3 rounded-full shadow-lg mt-12" src={profile11} alt=""/>
                        <h5 className=" text-[22px] font-bold text-black">Khoirun Nisa B</h5>
                        <div className='flex'>
                            <ImExit className="mt-24" color='black' fontSize="40px" />
                            <p className="inline-flex text-[22px] font-bold text-black mt-24 ml-4">Log Out</p>
                        </div>
                        
                    </div>
                </div>

                <div className="absolute top-48 left-[600px] border border-gray-700 w-[863px] h-[401px] rounded-[60px]">
                    <div className='flex'>
                        <p className="text-3xl font-semibold text-black mt-[52px] ml-8">Bussines Name :</p>
                        <p className="text-2xl text-black mt-[54px] ml-8">Batik Ciprat</p>
                    </div>
                    <div className='flex'>
                        <p className="text-3xl font-semibold text-black mt-12 ml-8">Address :</p>
                        <p className="text-2xl text-black mt-[50px] ml-8">Jl. Ahmad Yani, Purwokerto Barat, Jawa Tengah</p>
                    </div>
                    <div className='flex'>
                        <p className="text-3xl font-semibold text-black mt-12 ml-8">No Handphone :</p>
                        <p className="text-2xl text-black mt-[50px] ml-8">085804113716</p>
                    </div>
                    <div className='flex'>
                        <p className="text-3xl font-semibold text-black mt-12 ml-8">Email :</p>
                        <p className="text-2xl text-black mt-[50px] ml-8">khoirunnisabsy1410@gmail.com</p>
                    </div>
                    <Link to="/edit">
                    <BiSolidEdit className="absolute top-4 right-4" color='black' fontSize="50px" />
                    </Link>
                </div>
            </div>
            <div className="absolute bottom-[-400px] w-screen">
                <Footer />
            </div>
            
        </section>
        </>
    )
}

export default Profile