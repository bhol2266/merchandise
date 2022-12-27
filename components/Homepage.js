import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { Itemlist } from './Itemlist'
import LoginMenu from './LoginMenu'
import { Navigation } from './Navigation'
import { QueryG } from '../lib/serverConfig'


const featuredCreators = [
    {
        name: "Don't know who?",
        image: "happyman.png",
        payload: {}
    },
    {
        name: "Nina",
        image: "woman.png",
        payload: {}
    },
    {
        name: "Steph",
        image: "woman2.png",
        payload: {}
    },
    {
        name: "Alina",
        image: "woman3.png",
        payload: {}
    },
]



export const Homepage = () => {



    return (
        <div className='relative'>

            <div className='py-8  bg-partner_with_us w-full bg-no-repeat bg-cover  flex flex-col  items-left justify-start space-y-2  lg:space-y-4 xl:py-8'>


                <div className=' px-6 md:px-8 xl:px-28 2xl:px-36 text-[12px] md:text-[16px] lg:text-[22px] xl:text-[28px] 2xl:text-[36px] tracking-[0.2em] lg:tracking-[0.3em]'>
                    <h2 className=' text-[#323232] font-inter  font-bold '>GET ALL YOUR FAVOURITE CONTENT CREATOR'S </h2>

                    <div className='flex flex-wrap whitespace-nowrap lg:space-x-2 '>
                        <h2 className=' text-theme font-inter  font-bold '>MERCHANDISE</h2>
                        <h2 className=' text-[#323232] font-inter  font-bold ml-2 '>IN ONE PLACE</h2>
                    </div>
                </div>


                <h2 className='text-[10px] md:text-[12px] text-[#323232] font-inter sm:text-left lg:text-[18px] text-center  px-6 md:px-8 xl:px-28 2xl:px-36 tracking-[0.1em]'>A simple solution for creating and selling products that engage
                    your fans and help you monetize your content.
                    No cost, no hassle, no risk.</h2>

                <img src='./creator/poster_high.png' className='pt-6 cursor-pointer object-cover w-4/5  sm:w-3/5 xl:w-2/5 block mx-auto'></img>
            </div>

            <div className='px-[12px]  mt-[12px] lg:mt-[30px] flex flex-col lg:flex-row lg:justify-around lg:px-[50px] lg:mr-[100px]'>
                <img src='./homepageImages/banner2.png' className='cursor-pointer h-[228px] object-cover w-full lg:h-[450px] lg:w-[800px] '></img>

                <div className=' flex flex-col  lg:justify-around lg:pt-4 items-center'>
                    <h1 className='mt-[20px]   font-bold text-[12px] w-[145px] text-center mx-auto font-inter lg:w-[217px] h-[52px] lg:text-[18px]'>JOIN US & SELL YOUR
                        OWM MERCHANDISE</h1>

                    <h2 className='px-[12px] w-[338px]  font-light text-[12px]  text-center mx-auto font-inter lg:w-[400px]  lg:text-[16px] lg:px-[30px] '>Now you can join us & sell your own merchandise
                        completely free without any hidden charges. Create your
                        own Brand & Monetize. Join us today & become
                        a part of our evergrowing
                        Closm Family.</h2>

                    <Link href='/partner_with_us'>
                        <button className='mt-6 lg:mt-0 w-[180px] block h-[40px] lg:w-[220px] lg:h-[50px] lg:text-[20px] bg-[#54BAB9] rounded text-white px-[28px]  font-inter font-black mx-auto  '>JOIN</button>
                    </Link>
                </div>
            </div>

            {/* {items &&
                <div className='sm:px-[12px] xs:px-[20px] px-[10px] lg:px-[50px]'>
                    <Itemlist items={items} />
                </div>
            } */}


            <div className='px-[12px] lg:px-[50px] mx-auto  sm:flex sm:items-center sm:justify-around lg:mt-10  my-4 mb-12 lg:'>

                <div className='flex flex-col justify-around'>

                    <h1 className='font-inter text-[12px] lg:text-[18px] font-bold  mt-[20px] w-[168] h-[38px] lg:mb-8 mx-auto text-center'>
                        WANT TO PLACE BULK
                        ORDERS ?
                    </h1>

                    <h2 className=' font-inter font-light text-[12px] lg:text-[15px] lg:mb-12 text-center mx-auto px-6 md:px-12 2xl:px-[100px] 3xl:px-[200px]'>We are now accepting bulk orders. For any query please contact us on support@closm.com. We will reach out to you.
                    </h2>
                    <Link href='/policy'>
                        <button className='w-[180px] block h-[40px] lg:w-[220px] lg:h-[50px] lg:text-[20px] bg-[#54BAB9] rounded text-white px-[28px]  font-inter font-black mx-auto mt-8  lg:mt-[40px]'>PLACE ORDERS</button>
                    </Link>

                </div>


                <img src='./homepageImages/banner3.png' className='cursor-pointer h-[290px] sm:h-[150px] md:h-[200px] object-cover xl:w-[800px] xl:h-[520px] lg:w-[500px] lg:h-[400px] mt-3 lg:mt-0'></img>


            </div>

            <div className='mx-[12px] mb-4 lg:mx-[50px]'>

                <h2 className='w-[160px] lg:w-[271px] font-inter text-[13px]  mb-4 lg:mt-16'>FEATURED CREATORS</h2>

                <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 lg:grid-cols-4 lg:gap-16'>
                    {featuredCreators.map(item => {
                        return (
                            <div key={item.name}>
                                <img src={`./homepageImages/${item.image}`} className='cursor-pointer w-[170px] h-[170px] lg:w-[300px] lg:h-[300px] object-cover'></img>
                                <h1 className='font-inter text-[12px] mt-[6px] text-center mx-auto lg:hidden'>{item.name}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div className='my-[20px] text-[16px] font-bold lg:text-[36px] lg:font-medium'>
                <h1 className=' text-[#54BAB9] font-Abhayalibre text-center w-fit mx-auto tracking-[0.5em]	'>CLOSM MAKES EVERYDAY</h1>
                <h1 className=' text-[#54BAB9] mb-[10px] font-Abhayalibre text-center w-fit mx-auto tracking-[0.5em]	'>AWESOME</h1>
            </div>





        </div>





    )
}
