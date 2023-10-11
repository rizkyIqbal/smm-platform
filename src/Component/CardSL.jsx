import { useState } from 'react'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {BiLogoTiktok} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'
import {BiTask} from 'react-icons/bi'
import { AiFillStar } from "react-icons/ai";

function CardSL() {
  return (
    <>
    <div className="flex justify-center max-w-sm bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div className="flex flex-col items-center pb-10 mt-8 -mb-8">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/src/assets/img/profile/profile1.png" alt="Juliana img"/>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Juliana Santika</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">Depok, Jawa Barat</span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <BsFillPersonFill color='' fontSize="40px" />
              <p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black">1 Week</p>
            </div>
            <div className="flex mt-4 space-x-3 md:mt-6">
            <BiTask color='' fontSize="40px" />
              <p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black">5 People</p>
            </div>
            <div className="flex space-x-3 md:mt-6 pl-3 pr-3 text-sm font-medium text-center text-black">
              <p>Rp. 350.000 -  700.000</p>
            </div>
            <div className="flex space-x-3 md:mt-6">
              <AiFillStar color='gold' fontSize="40px"/>
              <p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black">3.9 | 15 Deals</p>
            </div>
            <div className="flex mt-4 space-x-3 md:mt-6 pl-3 pr-3">
                <BiLogoInstagramAlt color='' fontSize="45px" />
                <a href="https://www.instagram.com/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black hover:text-black">10k</a>
                <BiLogoTiktok color='' fontSize="45px" />
                <a href="https://www.tiktok.com/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black hover:text-black">10k</a>
            </div>
        </div>
    </div>

    </>
  )
}

export default CardSL
