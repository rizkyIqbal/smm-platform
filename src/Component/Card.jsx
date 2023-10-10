import { useState } from 'react'
import logo from '../assets/img/logo.png'
import { LuMapPin, LuStar } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
    <div className='flex justify-center'>
        <div className='w-60'>
            <img src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="" />
            <div className='mt-6'>
                <p className='text-lg font-medium'>Zahra Sabilla Yahya</p>
                <p className='text-secondary text-lg font-bold'>Rp. 60.000</p>
            </div>
            <div className='flex text-gray-500 mt-1'>
                <LuMapPin className='mt-1'/>
                <p className='ml-2'>Jakarta Selatan</p>
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
    </>
  )
}

export default Card
