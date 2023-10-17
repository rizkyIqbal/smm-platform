import { useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer';
import CardSL from '../Component/CardSL';
import {BsInstagram} from 'react-icons/bs'
import {BiLogoTiktok} from 'react-icons/bi'
import {GoBook} from 'react-icons/go'
import {FiClipboard} from 'react-icons/fi'
import { AiFillStar } from "react-icons/ai";
import {IoLocationSharp} from "react-icons/io5"

const categories = ['Food', 'Fashion', 'Kithcenware', 'Sport', 'Other'];
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
        photo: "/src/assets/img/profile/profile1.png"
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
        photo: "/src/assets/img/profile/profile4.jpg"
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
        photo: "/src/assets/img/profile/profile5.jpg"
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
        photo: "/src/assets/img/profile/profile6.jpg"
    },
    {
        name: "Rosianna Rizki",
        location: "Jakarta, Jawa Barat",
        lowerPrice : "350.000",
        highestPrice : "550.000",
        rating: "3.2",
        estTime: 5,
        queuePerson: 17,
        igFollower : "6k",
        tiktokFollower: "7K",
        photo: "/src/assets/img/profile/profile3.jpg"
    },
    {
        name: "Mamat",
        location: "Malang, Jawa TImur",
        lowerPrice : "100.000",
        highestPrice : "1.000.000",
        rating: "4.1",
        estTime: 1,
        queuePerson: 1,
        igFollower : "17k",
        tiktokFollower: "20K",
        photo: "/src/assets/img/profile/profile7.jpg"
    },
    {
        name: "Bella",
        location: "Semarang, Jawa Tengah",
        lowerPrice : "350.000",
        highestPrice : "550.000",
        rating: "4.9",
        estTime: 2,
        queuePerson: 4,
        igFollower : "14k",
        tiktokFollower: "16K",
        photo: "/src/assets/img/profile/profile8.jpg"
    },
    {
        name: "Abu Rizal",
        location: "Purwokerto, Jawa Tengah",
        lowerPrice : "350.000",
        highestPrice : "550.000",
        rating: "4.1",
        estTime: 6,
        queuePerson: 23,
        igFollower : "10k",
        tiktokFollower: "12K",
        photo: "/src/assets/img/profile/profile9.jpg"
    },
    {
        name: "Jody Yuantoro",
        location: "Depok, Jawa Barat",
        lowerPrice : "100.000",
        highestPrice : "1.000.000",
        rating: "3.9",
        estTime: 2,
        queuePerson: 4,
        igFollower : "22k",
        tiktokFollower: "26K",
        photo: "/src/assets/img/profile/profile10.jpg"
    },
];


function SellerList() {
    return (
        <>
        <section className='body-font font-poppins w-screen h-full bg-white'>
            <Navbar/>
                
                <div className='mt-8 mb-8 flex justify-center w-full'>               
                    <form>   
                        <label for="search" class="mb-2 text-lg font-medium text-gray-900 sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="search" class="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-700 rounded-xl bg-gray-50 focus:ring-gray-500 focus:border-gray-500" placeholder="Search" required/>
                            <button type="submit" class="text-white absolute right-2 bottom-2 bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-4 py-2">Search</button>
                        </div>
                    </form>
                </div>

                <div className="flex gap-28 justify-center">
                    <div className=''>
                        <div className='flex p-4 top-8 justify-center w-80 border border-gray-500 rounded-t-3xl'>
                            <button className="justify-center text-white bg-secondary font-medium w-52 rounded-xl text-lg p-1 text-center inline-flex items-center flex" type="button">Kategori<svg class="w-2.5 h-2.5 ml-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                            </button>
                        </div>

                        <div className='p-4 top-[102px] w-80 border border-gray-500 rounded-none'>
                            {categories.map((category) => (
                                <div class="flex items-center mb-4">
                                    <div class="inline-flex items-center">
                                        <label
                                        class="relative flex cursor-pointer items-center rounded-full p-3"
                                        for="checkbox-1"
                                        data-ripple-dark="true"
                                        >
                                        <input
                                            type="checkbox"
                                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-pink-500 hover:before:opacity-10"
                                            id="checkbox-1"
                        
                                        />
                                        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            stroke-width="1"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"
                                            ></path>
                                            </svg>
                                        </div>
                                        </label>
                                    </div>
                                    <label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">{category}</label>
                                </div>
                            ))}
                            <div className='flex p-3 -ml-3 items-center justify-center w-80'>
                                <button className="justify-center text-white bg-secondary font-medium w-52  rounded-xl text-lg p-1 text-center inline-flex items-center flex" type="button">Influencer<svg class="w-2.5 h-2.5 ml-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                                </button>
                            </div>
                        </div>
            
            <div className='w-screen absolute bottom-[-1150px]'>
            <Footer/>
            </div>
            
        </section>
        </>
    )
}

export default SellerList