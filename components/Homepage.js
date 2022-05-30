import Link from 'next/link'
import React, { useState } from 'react'
import { Item } from './item'
import { Itemlist } from './itemlist'
import { Navigation } from './Navigation'



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
        <div className=''>

            <Navigation />

            <div className=' h-[665px] bg-banner w-full bg-no-repeat bg-cover lg:bg-banner_wide flex lg:h-[560px] items-center justify-center'>

                <div className='w-[332px] h-[132px] lg:w-[584px] lg:h-[212px] flex flex-col left-[100px]'>
                    <div className='mx-auto mb-[38px] flex justify-around space-x-6'>
                        <button className='content-center font-black rounded w-[120px] h-[40px] bg-[#54BAB9] px-[28px]  text-white font-inter hover:bg-[#3f9897] lg:w-[200px] lg:h-[60px] lg:text-[24px]'>SEARCH</button>
                        <button className='content-center font-black rounded w-[120px] h-[40px] bg-[#54BAB9] px-[28px]  text-white font-inter hover:bg-[#3f9897] lg:w-[200px] lg:h-[60px] lg:text-[24px]'>PRINT</button>
                    </div>

                    <h2 className='text-[12px] text-[#f5f5f5] font-SFuiDisplay text-center lg:text-[20px]  mx-auto'>A simple solution for creating and selling products that engage
                        your fans and help you monetize your content.
                        No cost, no hassle, no risk.</h2>
                </div>
            </div>

            <div className='px-[12px] h-[440px] mt-[12px] lg:mt-[30px] flex flex-col lg:flex-row lg:justify-around lg:px-[45px] lg:mr-[100px] '>
                <img src='./homepageImages/banner2.png' className='cursor-pointer h-[228px] object-cover w-full lg:h-[520px] lg:w-[800px]'></img>

                <div className='lg:w-[338px] lg:h-[450px] flex flex-col  lg:justify-between lg:pt-4'>
                    <h1 className='mt-[20px]   font-bold text-[12px] w-[145px] text-center mx-auto font-SFuiDisplay lg:w-[217px] h-[52px] lg:text-[18px]'>JOIN US & SELL YOUR
                        OWM MERCHANDISE</h1>

                    <h2 className='px-[12px] w-[338px]  h-[92px] font-light text-[12px] text-center mx-auto font-SFuiDisplay lg:w-[260px] lg:h-[180px] lg:text-[18px] lg:px-[30px] lg:mb-14  mb-2'>Now you can join us & sell your own merchandise
                        completely free without any hidden charges. Create your
                        own Brand & Monetize. Join us today & become
                        a part of our evergrowing
                        Closm Family.</h2>

                    <button className='w-[180px] h-[40px] lg:w-[250px] lg:h-[60px] lg:text-[24px] bg-[#54BAB9] rounded text-white px-[28px]  font-inter font-black mx-auto hover:bg-[#3f9897]'>JOIN</button>
                </div>
            </div>

            <div className='flex px-[13px] items-center justify-between my-[20px]  lg:mt-[120px] lg:px-[50px]'>
                <h1 className='font-inter text-[13px] lg:text-[22px]'>FEATURED PRODUCTS</h1>
                <h1 className='font-inter text-[13px] text-[#54BAB9] lg:text-[22px] cursor-pointer hover:text-red-400'>SEE ALL</h1>

            </div>

            <Itemlist />

            <div className='h-[525px] sm:h-[400px] lg:h-[520px] px-[12px] lg:px-[50px] mx-auto  sm:flex sm:items-center sm:justify-around lg:mt-10 '>

                <div className='ml-[20px]'>
                    <h1 className='font-SFuiDisplay text-[12px] lg:text-[18px] font-bold  mt-[20px] w-[168] h-[38px] lg:mb-8 '>
                        WANT TO PLACE BULK
                        ORDERS ?
                    </h1>

                    <h2 className='w-[251px] h-[139px] font-SFuiDisplay font-light text-[12px] lg:text-[15px] lg:mb-12'>In publishing and graphic
                        design, Lorem ipsum is a placeholder
                        text commonly used to demonstrate
                        the visual form of a document or a
                        typeface without relying on meaningful
                        content. Lorem ipsum may be used as
                        a placeholder before the final copy is
                    </h2>

                    <button className='w-[180px] h-[40px] lg:w-[250px] lg:h-[60px] lg:text-[24px] bg-[#54BAB9] rounded text-white px-[28px]  font-inter font-black mx-auto '>PLACE ORDERS</button>

                </div>

                <img src='./homepageImages/banner3.png' className='cursor-pointer h-[260px] sm:h-[200px] object-cover xl:w-[800px] xl:h-[520px] lg:w-[500px] lg:h-[400px] mt-3 lg:mt-0'></img>


            </div>

            <h2 className='w-[160px] lg:w-[271px] font-inter text-[13px] lg:text-[22px] mx-[12px] mb-4 lg:mx-[50px] lg:my-[50px]'>FEATURED CREATORS</h2>

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mx-auto w-fit mb-8 lg:grid-cols-4 lg:gap-16'>
                {featuredCreators.map(item => {
                    return (
                        <div key={item.name}>
                            <img src={`./homepageImages/${item.image}`} className='cursor-pointer w-[170px] h-[170px] lg:w-[300px] lg:h-[300px] object-cover'></img>
                            <h1 className='font-inter text-[12px] mt-[6px] text-center mx-auto lg:hidden'>{item.name}</h1>
                        </div>
                    )
                })}
            </div>


            <div className='my-[20px] text-[16px] font-bold lg:text-[36px] lg:font-medium'>
                <h1 className=' text-[#54BAB9] font-Abhayalibre text-center w-fit mx-auto tracking-[0.5em]	'>CLOSM MAKES EVERYDAY</h1>
                <h1 className=' text-[#54BAB9] mb-[10px] font-Abhayalibre text-center w-fit mx-auto tracking-[0.5em]	'>AWESOME</h1>
            </div>





        </div>





    )
}
