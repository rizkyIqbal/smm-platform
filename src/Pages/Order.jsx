import { useState } from 'react'
import Navbar from '../Component/Navbar'
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

function Order() {
  return (
    <>
    <section className='body-font font-poppins w-screen sm:overflow-x-hidden'>
        <Navbar />

        <Footer />
    </section>
    </>
  )
}

export default Order