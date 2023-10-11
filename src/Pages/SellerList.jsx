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
            <div className='mt-8 mb-8 '>               
            <form>   
                <label for="search" class="mb-2 text-lg font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative w-1/5">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="search" class="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-700 rounded-xl bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search" required/>
                    <button type="submit" class="text-white absolute right-2 bottom-2 bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Search</button>
                </div>
            </form>
            </div>

            <div className="grid grid-cols-2 gap-12 absolute right-[85px] border-gray-600 mb-24">
                <CardSL />
                <CardSL />
                <CardSL />
                <CardSL />
                <CardSL />
                <CardSL />
            </div>
            
            <div className='w-screen absolute bottom-[-1000px]'>
            <Footer/>
            </div>
            
        </section>
        </>
    )
}

export default SellerList