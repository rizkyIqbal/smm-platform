import { useState } from "react";
import Navbar from '../Component/NavbarLogged'
import Footer from '../Component/Footer';
import { IoLocationOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';

function ContactUs() {
    return (
        <>
        <section className='body-font font-poppins w-screen h-full bg-white text-black'>
            <Navbar />

            <div className="px-32 py-12">
                <p className="text-3xl font-medium">Contact Us</p>
                <div className="w-full px-12 py-12">
                    <div className="flex flex-col justify-center  drop-shadow-xl w-full h-full bg-white px-12 py-12">
                        <p className="text-2xl text-center">Contact</p>
                        <div className="flex justify-center">
                            {/* <img src="https://images.bisnis.com/posts/2018/07/23/819644/google8sah.jpg" alt="" className="w-96 justify-center "/> */}
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63824.949709079265!2d104.0606994!3d1.1175794499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d988dc34cd0ecb%3A0xe373ee32cae6412!2sBatam%20Kota%2C%20Batam%20City%2C%20Riau%20Islands!5e0!3m2!1sen!2sid!4v1696926080530!5m2!1sen!2sid"
                            width="100%"
                            height="600"
                            allowFullScreen="true"
                            loading="lazy"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        </div>
                        <div className="flex justify-center gap-32 mt-12">
                            <div className="flex flex-row">
                                <IoLocationOutline color='black' fontSize="24px"/>
                                <div className="w-44">
                                    <p>Jl. Panglima Sudirman No.58, Kronggahan, Kec.Mejayan, Kab. Madiun, Jawa Timur 63513</p>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <BsTelephone color='black' fontSize="24px"/>
                                <p>+628580411316</p>
                            </div>
                            <div className="flex flex-row">
                                <CiMail color='black' fontSize="24px"/>
                                <p>sociobox@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </section>
        </>
    )
}

export default ContactUs