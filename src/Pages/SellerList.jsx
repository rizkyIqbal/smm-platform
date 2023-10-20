import { useState } from 'react'
import Navbar from '../Component/NavbarLogged'
import Footer from '../Component/Footer';
import CardSL from '../Component/CardSL';
import {BsInstagram} from 'react-icons/bs'
import {BiLogoTiktok} from 'react-icons/bi'
import {GoBook} from 'react-icons/go'
import {FiClipboard} from 'react-icons/fi'
import { AiFillStar } from "react-icons/ai";
import {IoLocationSharp} from "react-icons/io5"
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react'

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
const sellersSMM = [
    {
        name: "Solutive.id",
        location: "Depok, Jawa Barat",
        lowerPrice : "350.000",
        highestPrice : "550.000",
        rating: "3.9",
        estTime: 2,
        queuePerson: 4,
        igFollower : "10k",
        tiktokFollower: "10K",
        photo: "https://storage.googleapis.com/neat-element-283712.appspot.com/company/logo/25885/20221019_JC1648216541621_Logo-Mark-Solutive-JPG-6.2.jpg"
    },{
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
    },{
        name: "Solutive.id",
        location: "Depok, Jawa Barat",
        lowerPrice : "350.000",
        highestPrice : "550.000",
        rating: "3.9",
        estTime: 2,
        queuePerson: 4,
        igFollower : "10k",
        tiktokFollower: "10K",
        photo: "https://storage.googleapis.com/neat-element-283712.appspot.com/company/logo/25885/20221019_JC1648216541621_Logo-Mark-Solutive-JPG-6.2.jpg"
    },{
        name: "Solutive.id",
        location: "Depok, Jawa Barat",
        lowerPrice : "350.000",
        highestPrice : "550.000",
        rating: "3.9",
        estTime: 2,
        queuePerson: 4,
        igFollower : "10k",
        tiktokFollower: "10K",
        photo: "https://storage.googleapis.com/neat-element-283712.appspot.com/company/logo/25885/20221019_JC1648216541621_Logo-Mark-Solutive-JPG-6.2.jpg"
    },{
        name: "Solutive.id",
        location: "Depok, Jawa Barat",
        lowerPrice : "350.000",
        highestPrice : "550.000",
        rating: "3.9",
        estTime: 2,
        queuePerson: 4,
        igFollower : "10k",
        tiktokFollower: "10K",
        photo: "https://storage.googleapis.com/neat-element-283712.appspot.com/company/logo/25885/20221019_JC1648216541621_Logo-Mark-Solutive-JPG-6.2.jpg"
    },{
        name: "Solutive.id",
        location: "Depok, Jawa Barat",
        lowerPrice : "350.000",
        highestPrice : "550.000",
        rating: "3.9",
        estTime: 2,
        queuePerson: 4,
        igFollower : "10k",
        tiktokFollower: "10K",
        photo: "https://storage.googleapis.com/neat-element-283712.appspot.com/company/logo/25885/20221019_JC1648216541621_Logo-Mark-Solutive-JPG-6.2.jpg"
    },{
        name: "Solutive.id",
        location: "Depok, Jawa Barat",
        lowerPrice : "350.000",
        highestPrice : "550.000",
        rating: "3.9",
        estTime: 2,
        queuePerson: 4,
        igFollower : "10k",
        tiktokFollower: "10K",
        photo: "https://storage.googleapis.com/neat-element-283712.appspot.com/company/logo/25885/20221019_JC1648216541621_Logo-Mark-Solutive-JPG-6.2.jpg"
    },
    
];



function SellerList() {
    const [selectedIndex, setSelectedIndex] = useState(0);
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

                

                
                <Tab.Group>
                <div className='flex justify-center mb-12'>
                    <div className='w-fit bg-gray-100 p-1 rounded-lg'>
                    <Tab.List>
                        <div className='flex gap-3'>
                        <Tab
                        onClick={() => setSelectedIndex(0)} // Set the selected index on click
                        className={`cursor-pointer ${
                            selectedIndex === 0 ? "bg-primary text-white" : " text-black"
                        } p-2`}
                        >
                            Influencer
                        </Tab>
                        <Tab
                        onClick={() => setSelectedIndex(1)} // Set the selected index on click
                        className={`cursor-pointer ${
                            selectedIndex === 1 ? "bg-primary text-white" : " text-black"
                        } p-2`}
                        >
                            Social Media Management
                        </Tab>
                        </div>
                    </Tab.List>
                    </div>
                </div>


                <Tab.Panels>
                    <Tab.Panel>
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

                        <div className='p-4 top-[436px] w-80 border border-gray-500 rounded-none'>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">IG Nano (5k-15k)</label>
                            </div>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">IG Micro (50k-200k)</label>
                            </div>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">IG Macro (300k-500k)</label>
                            </div>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">IG Mega (500k++)</label>
                            </div>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Tiktok Nano (5k-15k)</label>
                            </div>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Tiktok Micro (50k-200k)</label>
                            </div>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Tiktok Macro (300k-500k)</label>
                            </div>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Tiktok Mega (500k++)</label>
                            </div>
                            <div className='flex p-3 -ml-3 items-center justify-center w-80'>
                                <button className="justify-center text-white bg-secondary font-medium w-52  rounded-xl text-lg p-1 text-center inline-flex items-center flex" type="button">Gender<svg class="w-2.5 h-2.5 ml-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                                </button>
                            </div>
                        </div>
                        <div className='p-4 top-[915px] w-80 border border-gray-500 rounded-b-xl'>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Laki-laki</label>
                            </div>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Perempuan</label>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-16 border-gray-600 w-fit h-fit">
                    {sellers.map((seller) => (
                        <Link to='/sellerdetail'>
                            <div className="flex justify-center w-[288px] bg-white border border-gray-400 rounded-lg shadow">
                                <div className="flex flex-col items-center pb-10 mt-8 -mb-4">
                                    <img className="w-36 h-36 mb-3 rounded-full shadow-lg" src={seller.photo} alt=""/>
                                    <h5 className=" text-[16px] font-medium text-gray-900">{seller.name}</h5>
                                    <div className="flex">
                                    <IoLocationSharp color='grey' fontSize="16px"/>
                                    <span className="text-[10px] text-gray-500">{seller.location}</span>
                                    </div>
                                    <div className="flex space-x-3 md:mt-2 pl-3 pr-3 text-sm font-bold text-center text-primary">
                                    <p>Rp. {seller.lowerPrice} - Rp. {seller.highestPrice}</p>
                                    </div>
                                    <div className="flex mt-4 space-x-2 md:mt-2 justify-center">
                                    <FiClipboard color='gray' fontSize="16px" />
                                    <p className="inline-flex items-center  text-xs font-medium text-center text-black">{seller.estTime} Week</p>
                                    <GoBook color='gray' fontSize="16px" />
                                    <p className="inline-flex items-center text-xs font-medium text-center text-black">{seller.queuePerson} People</p>
                                    </div>
                                    <div className="flex space-x-2 md:mt-2 justify-center">
                                    <AiFillStar color='gold' fontSize="24px"/>
                                    <p className="inline-flex items-center text-xs font-medium text-center text-black">{seller.rating} | 15 orders</p>
                                    </div>
                                    <div className="flex space-x-2 md:mt-2 justify-center ">
                                        <BsInstagram color='gray' fontSize="24px" />
                                        <a href="https://www.instagram.com/" className="inline-flex items-center text-xs font-medium text-center text-black hover:text-black">{seller.igFollower}</a>
                                        <BiLogoTiktok color='gray' fontSize="24px" />
                                        <a href="https://www.tiktok.com/" className="inline-flex items-center text-sm font-medium text-center text-black hover:text-black">{seller.tiktokFollower}</a>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        ))}
                    </div>
                    </div>
                    </Tab.Panel>
                    <Tab.Panel>
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

                        <div className='p-4 top-[436px] w-80 border border-gray-500 rounded-none'>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">IG Nano (5k-15k)</label>
                            </div>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">IG Micro (50k-200k)</label>
                            </div>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">IG Macro (300k-500k)</label>
                            </div>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">IG Mega (500k++)</label>
                            </div>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Tiktok Nano (5k-15k)</label>
                            </div>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Tiktok Micro (50k-200k)</label>
                            </div>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Tiktok Macro (300k-500k)</label>
                            </div>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Tiktok Mega (500k++)</label>
                            </div>
                            <div className='flex p-3 -ml-3 items-center justify-center w-80'>
                                <button className="justify-center text-white bg-secondary font-medium w-52  rounded-xl text-lg p-1 text-center inline-flex items-center flex" type="button">Gender<svg class="w-2.5 h-2.5 ml-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                                </button>
                            </div>
                        </div>
                        <div className='p-4 top-[915px] w-80 border border-gray-500 rounded-b-xl'>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Laki-laki</label>
                            </div>
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
                                </div><label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Perempuan</label>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-16 border-gray-600 w-fit h-fit">
                    {sellersSMM.map((seller) => (
                         <Link to='/sellerdetail'>
                        <div className="flex justify-center w-[288px] bg-white border border-gray-400 rounded-lg shadow">
                            <div className="flex flex-col items-center pb-10 mt-8 -mb-4">
                                <img className="w-36 h-36 mb-3 rounded-full shadow-lg" src={seller.photo} alt=""/>
                                <h5 className=" text-[16px] font-medium text-gray-900">{seller.name}</h5>
                                <div className="flex">
                                <IoLocationSharp color='grey' fontSize="16px"/>
                                <span className="text-[10px] text-gray-500">{seller.location}</span>
                                </div>
                                <div className="flex space-x-3 md:mt-2 pl-3 pr-3 text-sm font-bold text-center text-primary">
                                <p>Rp. {seller.lowerPrice} - Rp. {seller.highestPrice}</p>
                                </div>
                                <div className="flex mt-4 space-x-2 md:mt-2 justify-center">
                                <FiClipboard color='gray' fontSize="16px" />
                                <p className="inline-flex items-center  text-xs font-medium text-center text-black">{seller.estTime} Week</p>
                                <GoBook color='gray' fontSize="16px" />
                                <p className="inline-flex items-center text-xs font-medium text-center text-black">{seller.queuePerson} People</p>
                                </div>
                                <div className="flex space-x-2 md:mt-2 justify-center">
                                <AiFillStar color='gold' fontSize="24px"/>
                                <p className="inline-flex items-center text-xs font-medium text-center text-black">{seller.rating} | 15 orders</p>
                                </div>
                                <div className="flex space-x-2 md:mt-2 justify-center ">
                                    <BsInstagram color='gray' fontSize="24px" />
                                    <a href="https://www.instagram.com/" className="inline-flex items-center text-xs font-medium text-center text-black hover:text-black">{seller.igFollower}</a>
                                    <BiLogoTiktok color='gray' fontSize="24px" />
                                    <a href="https://www.tiktok.com/" className="inline-flex items-center text-sm font-medium text-center text-black hover:text-black">{seller.tiktokFollower}</a>
                                </div>
                            </div>
                        </div>
                        </Link>
                        ))}
                    </div>
                    </div>
                    </Tab.Panel>
                </Tab.Panels>
                </Tab.Group>

            <div className='w-screen absolute bottom-[-1150px]'>
            <Footer/>
            </div>
            
        </section>
        </>
    )
}

export default SellerList

