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
    const sellersSMM = [
        {
            name: "Solutive",
            location: "Depok, Jawa Barat",
            lowerPrice : "350.000",
            highestPrice : "550.000",
            rating: "3.9",
            estTime: 2,
            queuePerson: 4,
            igFollower : "10k",
            tiktokFollower: "10K",
            photo: "https://media.licdn.com/dms/image/C4D0BAQELTpYHM7FTgQ/company-logo_200_200/0/1651631677008/solutivecreative_logo?e=2147483647&v=beta&t=-DDqnSDPqVilFl_2Kq3pSZBvsHjPq-6zSXAUcOcifkY"
        },
        {
            name: "IFrame",
            location: "Malang, Jawa TImur",
            lowerPrice : "100.000",
            highestPrice : "1.000.000",
            rating: "4.2",
            estTime: 1,
            queuePerson: 2,
            igFollower : "15k",
            tiktokFollower: "18K",
            photo: "https://www.diykamera.com/wp-content/uploads/2020/11/IframeCreativeAgency.png"
        },
        {
            name: "Minotour",
            location: "Sabang, Bali",
            lowerPrice : "350.000",
            highestPrice : "550.000",
            rating: "2.7",
            estTime: 3,
            queuePerson: 12,
            igFollower : "7k",
            tiktokFollower: "11K",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQu4f62AGv6kNs2q74sjY3V-DJaVy1lZKOCjsd65-gJd63vnQfYNlsaXrn3MLheOWgp8&usqp=CAU"
        },
        {
            name: "PaDi UMKM",
            location: "Malang, Jawa TImur",
            lowerPrice : "100.000",
            highestPrice : "1.000.000",
            rating: "4.1",
            estTime: 1,
            queuePerson: 2,
            igFollower : "14k",
            tiktokFollower: "17K",
            photo: "data:image/jpeg;base64,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"
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
            {sellersSMM.map((seller) => (
                <div className='flex justify-center'>
                <div className='w-60'>
                    <img src={seller.photo} alt="" className='w-96'/>
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
                {/* <CardSMM />
                <CardSMM />
                <CardSMM />
                <CardSMM /> */}
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