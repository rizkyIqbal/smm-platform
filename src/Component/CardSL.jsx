import { useState } from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BiLogoTiktok} from 'react-icons/bi'
import {GoBook} from 'react-icons/go'
import {FiClipboard} from 'react-icons/fi'
import { AiFillStar } from "react-icons/ai";
import {IoLocationSharp} from "react-icons/io5"

function CardSL() {
  return (
    <>
    <div className="flex justify-center w-[288px] bg-white border border-gray-400 rounded-lg shadow">
        <div className="flex flex-col items-center pb-10 mt-8 -mb-4">
            <img className="w-36 h-36 mb-3 rounded-full shadow-lg" src="/src/assets/img/profile/profile1.png" alt="Juliana img"/>
            <h5 className=" text-[16px] font-medium text-gray-900">Juliana Santika</h5>
            <div className="flex">
              <IoLocationSharp color='grey' fontSize="16px"/>
              <span className="text-[10px] text-gray-500">Depok, Jawa Barat</span>
            </div>
            <div className="flex space-x-3 md:mt-2 pl-3 pr-3 text-sm font-bold text-center text-primary">
              <p>Rp. 350.000 -  700.000</p>
            </div>
            <div className="flex mt-4 space-x-2 md:mt-2 justify-center">
              <FiClipboard color='' fontSize="16px" />
              <p className="inline-flex items-center  text-xs font-medium text-center text-black">1 Week</p>
              <GoBook color='' fontSize="16px" />
              <p className="inline-flex items-center text-xs font-medium text-center text-black">5 People</p>
            </div>
            <div className="flex space-x-2 md:mt-2 justify-center">
              <AiFillStar color='gold' fontSize="24px"/>
              <p className="inline-flex items-center text-xs font-medium text-center text-black">3.9 | 15 orders</p>
            </div>
            <div className="flex space-x-2 md:mt-2 justify-center ">
                <BsInstagram color='' fontSize="24px" />
                <a href="https://www.instagram.com/" className="inline-flex items-center text-xs font-medium text-center text-black hover:text-black">10k</a>
                <BiLogoTiktok color='' fontSize="24px" />
                <a href="https://www.tiktok.com/" className="inline-flex items-center text-sm font-medium text-center text-black hover:text-black">10k</a>
            </div>
        </div>
    </div>

    </>
  )
}

export default CardSL
