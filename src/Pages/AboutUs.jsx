import { useState } from "react";
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer';
import about1 from '../assets/img/about-us/about1.png'
import about2 from '../assets/img/about-us/about2.png'
import about3 from '../assets/img/about-us/about3.png'
import about4 from '../assets/img/about-us/about4.png'
import about5 from '../assets/img/about-us/about5.png'

function AboutUs() {
    return (
        <>
        <section className='body-font font-poppins w-screen h-full bg-white'>
            <Navbar />

            <div className="relative">
                <p className="text-[48px] text-black font-extrabold absolute top-20 left-[440px]">ABOUT US.</p>

                <div className='xl:w-[835px] absolute top-32 left-[440px]'>
                    <p className='text-xl pt-8 text-gray-600'>Welcome to Socio Box, your trusted partner in harnessing the power of social media for small and medium-sized businesses. We understand that UMKM form the backbone of our economy, and we are dedicated to helping you thrive in the digital age.</p>
                </div>

                <div className="xl:w-[117px] absolute top-[170px] left-[200px] tracking-widest">
                    <p className="text-xl font-medium text-black mt-1">About Us.</p>
                    <p className="text-xl font-medium text-black mt-1">Our team,</p>
                    <p className="text-xl font-medium text-black mt-1">Press.</p>
                </div>

                <img className='w-full h-[719px] absolute top-[360px]' src={about1} alt="" />
                
                <div className="xl:w-[474px] absolute top-[1270px] left-[180px] tracking-wider">
                    <p className="text-3xl font-semibold text-black">“Our work does make sense </p>
                    <p className="text-3xl font-semibold text-black mt-4">only if it is a faithful witness</p> 
                    <p className="text-3xl font-semibold text-black mt-4">of his time”</p>
                    <p className="text-xl text-gray-500 mt-2">Jean-Philipphe Nuel. Director</p>
                </div>

                <img className='w-[585px] h-[356px] absolute top-[1170px] left-[840px]' src={about2} alt="" />

                <div className="absolute top-[1600px] left-[150px] bg-primary w-[1300px] h-[448px]">
                    <p className="text-4xl font-semibold text-white tracking-widest ml-24 mt-[215px]">OUR VISION</p>
                    <div className="ml-[450px] -mt-[130px]">
                        <p className="text-xl text-gray-600 ">Empowering UMKM for a Digital Tomorrow.</p>
                        <p className="text-xl text-gray-600 mt-2">At Socio Box, we envision a world where every Usaha Mikro, Kecil, dan</p>
                        <p className="text-xl text-gray-600 mt-2">Menengah (UMKM) business has the tools, knowledge, and confidence to </p>
                        <p className="text-xl text-gray-600 mt-2">thrive in the digital landscape. We aspire to be the catalyst for UMKM </p>
                        <p className="text-xl text-gray-600 mt-2">success, leading them towards a prosperous and sustainable future in the</p>
                        <p className="text-xl text-gray-600 mt-2">digital era.</p>
                    </div>
                </div>

                <div className="absolute top-[2100px] left-[150px] bg-primary w-[1300px] h-[448px]">
                    <p className="text-4xl font-semibold text-white tracking-widest ml-24 mt-[215px]">OUR MISSION</p>
                    <div className="ml-[450px] -mt-[190px]">
                        <p className="text-xl text-gray-600 ">Our Mission - Your Success</p>
                        <p className="text-xl text-gray-600 mt-2">Our mission is to empower UMKM businesses through effective social</p>
                        <p className="text-xl text-gray-600 mt-2">media management and digital marketing solutions. We are committed</p>
                        <p className="text-xl text-gray-600 mt-2">to helping UMKM businesses grow their online presence, reach a wider</p>
                        <p className="text-xl text-gray-600 mt-2">audience, and achieve their business goals, we leverage our expertise in</p>
                        <p className="text-xl text-gray-600 mt-2">social media management to provide UMKM businesses with strategic</p>
                        <p className="text-xl text-gray-600 mt-2">insights, personalized strategies, and hands-on support,  in the ever-</p>
                        <p className="text-xl text-gray-600 mt-2">evolving digital landscape, we stay at the forefront of industry trends and</p>
                        <p className="text-xl text-gray-600 mt-2">technology to ensure our clients remain competitive.</p>
                    </div>
                </div>

                <div className="absolute top-[2550px] left-[150px] w-[1300px] h-[448px]">
                    <p className="text-4xl font-semibold text-black tracking-widest ml-24 mt-[215px]">OUR VALUES</p>
                    <div className="ml-[450px] -mt-[130px]">
                        <p className="text-xl text-gray-600 ">At Socio Box, we are a passionate and dedicated team committed to</p>
                        <p className="text-xl text-gray-600 mt-2">elevating the online presence of UMKM (Usaha Mikro, Kecil, dan</p>
                        <p className="text-xl text-gray-600 mt-2">Menengah) businesses. Our team brings a diverse range of skills,</p>
                        <p className="text-xl text-gray-600 mt-2">expertise, and experiences to help you achieve success in the digital</p>
                        <p className="text-xl text-gray-600 mt-2">world.</p>
                    </div>
                </div>

            </div>

            <div className='w-screen absolute bottom-[-3250px]'>
                <Footer/>
            </div>
        </section>
        </>
    )
}

export default AboutUs