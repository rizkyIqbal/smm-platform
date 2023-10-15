import { useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer';
import DropdownSD from '../Component/DropdownSD';
import profile2 from '../assets/img/profile/profile2.png';
import { IoLocationOutline } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';
import Fashion from '../assets/img/fashion.png';
import Food from '../assets/img/food.png';
import Handicraft from '../assets/img/handicraft.png';
import { BsPerson } from 'react-icons/bs';
import { IoPricetagOutline } from 'react-icons/io5';
import {BsInstagram} from 'react-icons/bs'
import {BiLogoTiktok} from 'react-icons/bi'

function SellerDetail () {
    return (
        <>
        <section className='body-font font-poppins w-screen h-full bg-white'>
            <Navbar/>
            <DropdownSD />
            
            <div className="relative">
            <img src={profile2} className='w-[571px] h-[410px] absolute top-12 left-60' alt="" />
            <img src={profile2} className='w-[270px] h-[229] absolute top-[485px] left-60' alt="" />
            <img src={profile2} className='w-[270px] h-[229] absolute top-[485px] left-[540px]' alt="" />
            </div>

            <div className="relative">
                <h1 className=" text-[40px] font-bold text-black absolute top-14 left-[900px]">Juliana Santika</h1>
                <div className="flex absolute top-28 left-[900px]">
                    <IoLocationOutline color='black' fontSize="36px"/>
                    <span className="text-[22px] text-black font-bold">Depok, Jawa Barat</span>
                </div>
                <p className="text-[22px] text-black absolute top-[170px] left-[910px]">Lifestyle</p>
                <div className="flex space-x-2 md:mt-2 absolute top-[200px] left-[910px]">
                    <AiFillStar color='gold' fontSize="28px"/>
                    <p className="inline-flex items-center text-[22px] text-center text-black">3.9 | 15 orders</p>
                </div>
                <h1 className=" text-[32px] font-bold text-black absolute top-[280px] left-[910px]">Business Category</h1>
                <img src={Fashion} className='w-[198px] h-[200px] absolute top-[330px] left-[910px]' alt="" />
                <img src={Food} className='w-[132px] h-[200px] absolute top-[330px] left-[1125px]' alt="" />
                <img src={Handicraft} className='w-[349px] h-[117px] absolute top-[565px] left-[910px]' alt="" />
                <p className='text-20px font-bold absolute top-[535px] left-[980px] text-black'>Fashion</p>
                <p className='text-20px font-bold absolute top-[535px] left-[1170px] text-black'>Food</p>
                <p className='text-20px font-bold absolute top-[685px] left-[1040px] text-black'>Handicraft</p>
            </div>

            <div className='relative'>
                <h1 className=" text-[32px] font-bold text-black absolute top-[900px] left-[390px]">List of Service</h1>
                <div className='w-[490px] h-[170px] absolute top-[970px] left-[255px] border border-gray-400'>
                    <div className="flex ml-32 mb-3 mt-5">
                        <IoLocationOutline color='black' fontSize="36px"/>
                        <span className="text-[22px] text-black ml-4">Instagram Post</span>
                    </div>
                    <div className="flex ml-32 mb-3">
                        <BsPerson color='black' fontSize="36px"/>
                        <span className="text-[22px] text-black ml-4">10 k</span>
                    </div>
                    <div className="flex ml-32 mb-3">
                        <IoPricetagOutline color='black' fontSize="36px"/>
                        <span className="text-[22px] text-black ml-4">Rp. 350.000</span>
                    </div>
                    <button className="absolute top-[110px] right-[15px] text-[16px] text-black rounded-2xl border border-primary hover:bg-primary">Pilih Project</button>
                    <BsInstagram color='' fontSize="80px" className='absolute top-[46px] left-[24px]' />
                </div>
                <div className='w-[490px] h-[170px] absolute top-[1165px] left-[255px] border border-gray-400'>
                    <div className="flex ml-32 mb-2 mt-5">
                        <IoLocationOutline color='black' fontSize="36px"/>
                        <span className="text-[22px] text-black ml-4">Tiktok Post</span>
                    </div>
                    <div className="flex ml-32 mb-2">
                        <BsPerson color='black' fontSize="36px"/>
                        <span className="text-[22px] text-black ml-4">81.5 k</span>
                    </div>
                    <div className="flex ml-32 mb-2">
                        <IoPricetagOutline color='black' fontSize="36px"/>
                        <span className="text-[22px] text-black ml-4">Rp. 700.000</span>
                    </div>
                    <button className="absolute top-[110px] right-[15px] text-[16px] text-black rounded-2xl border border-primary hover:bg-primary">Pilih Project</button>
                    <BiLogoTiktok color='' fontSize="96px" className='absolute top-[38px] left-[24px]' />
                </div>
            </div>

            <div className='relative'>
                <h1 className=" text-[32px] font-bold text-black absolute top-[820px] left-[920px]">Price List</h1>
                <div className='w-[440px] h-[138px] absolute top-[885px] left-[900px] border border-gray-400'>
                    <p className='text-[22px] font-bold text-black ml-4'>Food</p>
                    <p className='text-[22px] text-black ml-4'>Rp. 350.000 - 500.000</p>
                    <p className='text-[22px] text-black ml-4'>Preparation (1-2 Days)</p>
                    <p className='text-[22px] text-black ml-4'>5 Orders | 2 Completed | 3 Process</p>
                </div>
                <div className='w-[440px] h-[138px] absolute top-[1040px] left-[900px] border border-gray-400'>
                    <p className='text-[22px] font-bold text-black ml-4'>Fashion</p>
                    <p className='text-[22px] text-black ml-4'>Rp. 400.000 - 700.000</p>
                    <p className='text-[22px] text-black ml-4'>Preparation (1-2 Days)</p>
                    <p className='text-[22px] text-black ml-4'>10 Orders | 5 Completed | 5 Process</p>
                </div>
                <div className='w-[440px] h-[138px] absolute top-[1200px] left-[900px] border border-gray-400'>
                    <p className='text-[22px] font-bold text-black ml-4'>Handicraft</p>
                    <p className='text-[22px] text-black ml-4'>Rp. 350.000 - 450.000</p>
                    <p className='text-[22px] text-black ml-4'>Preparation (3 Days)</p>
                    <p className='text-[22px] text-black ml-4'>0 Deals</p>
                </div>
            </div>
            
            <div className='w-screen absolute bottom-[-1150px]'>
            <Footer/>
            </div>
        </section>
        </>
    )
}

export default SellerDetail