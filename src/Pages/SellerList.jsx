import { useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer';
import CardSL from '../Component/CardSL';

const categories = ['Category 1', 'Category 2', 'Category 3'];

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

            
            <div className='pl-32 relative'>
                <div className='flex p-4 absolute top-8 justify-center w-80 border border-gray-500 rounded-t-3xl'>
                    <button className="justify-center text-white bg-secondary font-medium w-52 rounded-xl text-lg p-1 text-center inline-flex items-center flex" type="button">Kategori<svg class="w-2.5 h-2.5 ml-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                    </button>
                </div>

                <div className='p-4 absolute top-[102px] w-80 border border-gray-500 rounded-none'>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-8 h-8 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"/>
                        <label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Food</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-8 h-8 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"/>
                        <label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Fashion</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-8 h-8 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"/>
                        <label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Kitchenware</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-8 h-8 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"/>
                        <label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Sport</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-8 h-8 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"/>
                        <label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Others</label>
                    </div>
                    <div className='flex p-3 -ml-3 items-center justify-center w-80'>
                        <button className="justify-center text-white bg-secondary font-medium w-52  rounded-xl text-lg p-1 text-center inline-flex items-center flex" type="button">Influencer<svg class="w-2.5 h-2.5 ml-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                        </button>
                    </div>
                </div>

                <div className='p-4 absolute top-[436px] w-80 border border-gray-500 rounded-none'>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-8 h-8 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"/>
                        <label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">IG Nano (5k-15k)</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-8 h-8 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"/>
                        <label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">IG Micro (50k-200k)</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-8 h-8 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"/>
                        <label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">IG Macro (300k-500k)</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-8 h-8 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"/>
                        <label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">IG Mega (500k++)</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-8 h-8 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"/>
                        <label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Tiktok Nano (5k-15k)</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-8 h-8 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"/>
                        <label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Tiktok Micro (50k-200k)</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-8 h-8 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"/>
                        <label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Tiktok Macro (300k-500k)</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-8 h-8 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"/>
                        <label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Tiktok Mega (500k++)</label>
                    </div>
                    <div className='flex p-3 -ml-3 items-center justify-center w-80'>
                        <button className="justify-center text-white bg-secondary font-medium w-52  rounded-xl text-lg p-1 text-center inline-flex items-center flex" type="button">Gender<svg class="w-2.5 h-2.5 ml-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                        </button>
                    </div>
                </div>
                <div className='p-4 absolute top-[915px] w-80 border border-gray-500 rounded-b-xl'>
                <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-8 h-8 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"/>
                        <label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Laki-laki</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-8 h-8 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"/>
                        <label for="default-checkbox" class="ml-2 text-lg font-medium text-gray-900">Perempuan</label>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-16 absolute right-[155px] border-gray-600 mt-8">
                <CardSL />
                <CardSL />
                <CardSL />
                <CardSL />
                <CardSL />
                <CardSL />
            </div>
            
            <div className='w-screen absolute bottom-[-1150px]'>
            <Footer/>
            </div>
            
        </section>
        </>
    )
}

export default SellerList