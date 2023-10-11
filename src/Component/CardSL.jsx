import { useState } from 'react'
import { LuMapPin, LuStar } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function CardSL() {
  return (
    <>
    <div className="flex justify-center w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10 mt-8">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/src/assets/img/profile/profile1.png" alt="Juliana img"/>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Juliana Santika</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">Depok, Jawa Barat</span>
            <div className="flex mt-4 space-x-3 md:mt-6 pl-3 pr-3">
                <img className="w-16" src="/src/assets/img/instagram.png" alt="Instagram Logo"/>
                <a href="https://www.instagram.com/" className="inline-flex items-center px-4 py-2 text-lg font-medium text-center text-black hover:text-black">10k</a>
                <img className="w-16" src="/src/assets/img/tiktok.png" alt="Tiktok Logo"/>
                <a href="https://www.tiktok.com/" className="inline-flex items-center px-4 py-2 text-lg font-medium text-center text-black hover:text-black">10k</a>
            </div>
        </div>
    </div>

    </>
  )
}

export default CardSL
