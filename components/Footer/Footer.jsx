import React from 'react'
import { FaFacebookSquare,FaHeadphones } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter,FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white px-5 relative z-50'>
    <section className='max-w-[1200px] mx-auto text-white'>
        <div className='grid md:grid-cols-3 py-5'>
            {/*first col*/}
            <div className='py-8 px-4'>
                <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3'>Join us</h1>
                <p>
                    Get Exclusive <span className='font-bold'>Update</span>
                    straight to your inbox
                </p>
                <br />
                <div className='flex items-center h-10'>
                <input type='text'
                    className='py-1 px-3 w-full h-[100%] inline-block focus:outline-none
                    focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2'
                    placeholder='Email'
                />
                <button className='border-white border-2 px-3 py-1 rounded-md'>OK</button>
            </div>
        </div>

        {/*second col */}

        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
            <div>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold mb-3'>quick links</h1>
                    <ul className='flex flex-col gap-3'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Packages</a></li>
                        <li><a href='#'>Contact</a></li>

                    </ul>

                </div>
            </div>


            <div>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold mb-3'>quick links</h1>
                    <ul className='flex flex-col gap-3'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Packages</a></li>
                        <li><a href='#'>Contact</a></li>

                    </ul>

                </div>
            </div>

            <div>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold mb-3'>Contact links</h1>
               
                </div>
                <div className='space-y-3'>
                <div className='flex items-center gap-2'>
                <FaLocationDot />
                <p>Chennai</p>
                </div>
                <div className='flex items-center gap-2'>
                <FaHeadphones />
                <p>123546642</p>
                </div>
                <div className='flex items-center gap-2'>
                <IoMail />
                <p>gmail</p>
                </div>
            </div>
            </div>
        </div>

        


        </div>
        <div className='hidden sm:block'>
            <div className='flex w-full justify-between items-center py-6 border-t-2 border-gray-400'>
                <span className='text-sm text-gray-400'>
                    Copyright &copy; 2024 by rithi
                </span>
                <div className='flex items-center justify-center gap-4 pb-4'>
                <a href='#'><FaInstagram className='text-4xl' /></a>
                <a href='#'><FaFacebookSquare className='text-4xl' /></a>
                <a href='#'><FaSquareTwitter className='text-4xl' /></a>


                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Footer