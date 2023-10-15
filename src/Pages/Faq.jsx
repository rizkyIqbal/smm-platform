import { useState } from 'react'
import Navbar from '../Component/Navbar'
import jumbotron from '../assets/img/jumbotron.png'
// import Card from '../Component/Card'
import Card from '../Component/Card';
import CardSMM from '../Component/CardSMM';
import faq from '../assets/img/faq/faq.png'
import Footer from '../Component/Footer';

import { Disclosure } from '@headlessui/react'
import { BiChevronDown } from "react-icons/bi";
// import { ChevronUpIcon } from '@heroicons/react/20/solid'

const generals = [
    {
        title: "Why do UMKM business need SocioBox",
        answer: "UMKM business need SocioBox to enhance brand visibility, interact with potential customers, build brand awareness, and effectively promotore their products or sevices in the digital age.",
    },
];

const services = [
    {
        title: "Is your service suitable for my small business",
        answer: "Yes, We Soecifically offer Sociobox services designed for UMKM, we understand the budget and resource constraint that small business face and we tailor our strategies to meet your needs",
    },
    {
        title: "How can I get started with your service?",
        answer: "You can reach out to us through the contact form on our website or by sending an email to sociobox@gmail.com. We will proptly respond to your inquiries and schedule an initial consultation to understand your needs",
    },
    {
        title: "Do you offer social media advertising services?",
        answer: "Yes, we offer social media advertising services that can help increase visibility and drive traffic to your website or products",
    }
];

const others = [
    {
        title: "Do you manage all social media platforms?",
        answer: "We can manage several social media platform depending on your needs. We will design a strategy that is most relevant to your business",
    },
    {
        title: "How can I be assured that my business information and data will be secure?",
        answer: "We take data privacy and security seriously. We follow best practices to mantain the confidentiality of your business information and safeguard your data form security threats",
    },
];

function Faq() {
  return (
    <>
    <section className='body-font font-poppins w-screen sm:overflow-x-hidden text-black'>
        <Navbar />
        <div className='mt-24 mx-32'>
            <div className='flex  justify-between'>
                <div className=''>
                    <p className='text-5xl font-semibold'>FAQ</p>
                    <div className='w-[500px]'>
                    <p className='text-xl mt-2 text-gray-500'>Have questions about our platform? We have answers! Here are some general responses that may be helpful.</p>
                    </div>
                </div>
                <img src={faq} className='w-[720px] h-auto' alt="" />
            </div>

            <div>
                <div className="w-full px-4 pt-16">
                    <p className='text-2xl'>General</p>
                    <div className="w-full pt-4">
                        {generals.map((general) => (
                            <div className="mx-0 w-full rounded-2xl bg-white py-2">
                                <Disclosure>
                                {({ open }) => (
                                    <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <span>{general.title}</span>
                                        <BiChevronDown
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        {general.answer}
                                    </Disclosure.Panel>
                                    </>
                                )}
                                </Disclosure>
                            </div>
                        ))}
                    </div>
                    <p className='text-2xl mt-10'>Services</p>
                    <div className="w-full pt-4">
                        {services.map((service) => (
                            <div className="mx-0 w-full rounded-2xl bg-white py-2">
                                <Disclosure>
                                {({ open }) => (
                                    <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <span>{service.title}</span>
                                        <BiChevronDown
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        {service.answer}
                                    </Disclosure.Panel>
                                    </>
                                )}
                                </Disclosure>
                            </div>
                        ))}
                    </div>
                    <div className='mb-32'>
                        <p className='text-2xl mt-10'>Others</p>
                        <div className="w-full pt-4">
                            {others.map((other) => (
                                <div className="mx-0 w-full rounded-2xl bg-white py-2">
                                    <Disclosure>
                                    {({ open }) => (
                                        <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>{other.title}</span>
                                            <BiChevronDown
                                            className={`${
                                                open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            {other.answer}
                                        </Disclosure.Panel>
                                        </>
                                    )}
                                    </Disclosure>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />

    </section>
    </>
  )
}

export default Faq