import { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../Component/NavbarLogged'
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
import { LuMapPin, LuStar } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";

function Dashboard() {
    const sellers = [
        {
            name: "Juliana Santika",
            location: "Depok, Jawa Barat",
            lowerPrice : "350.000",
            highestPrice : "550.000",
            rating: "3.9",
            estTime: 2,
            queuePerson: 4,
            igFollower : "10k",
            tiktokFollower: "10K",
            photo: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
        },
        {
            name: "Budi Doremi",
            location: "Malang, Jawa TImur",
            lowerPrice : "100.000",
            highestPrice : "1.000.000",
            rating: "4.2",
            estTime: 1,
            queuePerson: 2,
            igFollower : "15k",
            tiktokFollower: "18K",
            photo: "https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg   "
        },
        {
            name: "Muhammad Billy",
            location: "Sabang, Bali",
            lowerPrice : "350.000",
            highestPrice : "550.000",
            rating: "2.7",
            estTime: 3,
            queuePerson: 12,
            igFollower : "7k",
            tiktokFollower: "11K",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQMup2MDZL19URJdW2rnUQAJu8TLQ6MrpgHpz4qY0XewFMPiUfLknKO8_1_FjwkIGPr0&usqp=CAU"
        },
        {
            name: "Marcell",
            location: "Malang, Jawa TImur",
            lowerPrice : "100.000",
            highestPrice : "1.000.000",
            rating: "4.1",
            estTime: 1,
            queuePerson: 2,
            igFollower : "14k",
            tiktokFollower: "17K",
            photo: "https://cdn140.picsart.com/39063465592866053138.webp?type=webp"
        },
    ];
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
                            <div className='lg:w-[580px]'>
                                <p className='text-lg pt-8 text-white-500'>Welcome to SocioBox  Optimizing MSME Digital Marketing. We are here to support the growth and success of Micro, Small and Medium Enterprises (MSMEs) businesses through effective digital marketing strategies.</p>
                            </div>
                            <Link to="/login">
                                <button className='mt-10 bg-primary border-1 border-white px-12 py-4 text-white hover:border-none hover:bg-white hover:text-primary'>
                                    <p className='text-lg font-semibold'>Get Started</p>
                                </button>
                            </Link>
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
            {sellers.map((seller) => (
                <div className='flex justify-center'>
                    <div className='w-60'>
                        <img src={seller.photo} alt="" />
                        <div className='mt-6'>
                            <p className='text-lg font-medium'>{seller.name}</p>
                            <p className='text-secondary text-lg font-bold'>Rp. {seller.lowerPrice}</p>
                        </div>
                        <div className='flex text-gray-500 mt-1'>
                            <LuMapPin className='mt-1'/>
                            <p className='ml-2'>{seller.location}</p>
                        </div>
                        <div className='flex mt-1'>
                            <AiFillStar color='gold' fontSize="1.3rem"/>
                            <AiFillStar color='gold' fontSize="1.3rem"/>
                            <AiFillStar color='gold' fontSize="1.3rem"/>
                            <AiFillStar color='gold' fontSize="1.3rem"/>
                            <AiFillStar color='gold' fontSize="1.3rem"/>
                        </div>
                    </div>
                </div>
            ))}
                {/* <Card />
                <Card />
                <Card />
                <Card /> */}
            </div>
            <div className='flex justify-center mt-32'>
                <Link to="/seller">
                    <button className='btn bg-transparent border-[3px] border-primary text-primary text-lg font-bold px-16 py-4 hover:bg-primary hover:border-[3px] hover:border-white hover:text-white'>See All</button>
                </Link>
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
                <Link to="/seller">
                    <button className='btn bg-transparent border-[3px] border-primary text-primary text-lg font-bold px-16 py-4 hover:bg-primary hover:border-[3px] hover:border-white hover:text-white'>See All</button>
                </Link>
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
                        <p className='mt-4 mb-4 text-lg text-gray-500'>Social media provides a direct and immediate channel to engage with your target audience. It allows you to connect with your customers, answer their questions, and respond to their feedback in real-time, fostering a sense of community and trust. Social media is a powerful tool for sharing content. It allows you to distribute blog posts, videos, infographics, and other valuable content to a wider audience, increasing the chances of your content going viral. Your competitors are likely already using social media for their marketing efforts. By managing your social media effectively, you can gain a competitive edge in your industry.</p>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <Link to='/contact'>
                            <button className='btn w-44 bg-transparent border-[3px] border-primary text-primary text-lg font-bold hover:bg-primary hover:border-[3px] hover:border-white hover:text-white'>
                                Contact Us
                            </button>
                        </Link>
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