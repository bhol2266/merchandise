import Link from 'next/link'
import React, { useState } from 'react'
import { Item } from './item'
import LoginMenu from './LoginMenu'


const items = [
    {
        name: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        img: "item1"
    },
    {
        name: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        img: "item2"
    },
    {
        name: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        img: "item3"
    },
    {
        name: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        img: "item4"
    },
    {
        name: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        img: "item1"
    },
    {
        name: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        img: "item2"
    },
    {
        name: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        img: "item3"
    },
    {
        name: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        img: "item4"
    },
]

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
            <h1 className='font-manrope text-[9px] text-center py-2 pb-5 text-white bg-[#54BAB9] h-[25px]'>
                USE COUPON  “  GHSGDHSSAHGAH9678  “  TO GET EXTRA 20% DISCOUNT
            </h1>



            <div className='flex justify-between px-[20px] h-[65px] items-center '>
                <Link href="/">
                    <h1 className='text-[25px] text-[#BE8024] font-delius cursor-pointer '>Closm</h1>
                </Link>

                <div className='flex space-x-8 items-center justify-center'>
                    <Link href="/">
                        <img src='./homepageImages/search.png' className='cursor-pointer w-[20px] h-[20px]'></img>
                    </Link>
                    <Link href="/">
                        <img src='./homepageImages/cloth.png' className='cursor-pointer w-[20px] h-[20px]'></img>
                    </Link>

                    <LoginMenu />
                    <Link href="/">
                        <img src='./homepageImages/cart.png' className='cursor-pointer w-[20px] h-[20px]'></img>
                    </Link>

                </div>
            </div>

            <div className=' h-[665px] bg-banner w-full bg-no-repeat bg-cover flex items-center justify-center'>

                <div className='w-[332px] h-[132px] flex flex-col left-[100px]'>
                    <div className='mx-auto mb-[38px] flex justify-around space-x-6'>
                        <button className='content-center font-bold rounded w-[120px] h-[40px] bg-[#54BAB9] px-[28px]  text-white font-inter hover:bg-[#3f9897]'>Search</button>
                        <button className='content-center font-bold rounded w-[120px] h-[40px] bg-[#54BAB9] px-[28px]  text-white font-inter hover:bg-[#3f9897]'>Print</button>
                    </div>

                    <h2 className='text-[12px] text-[#f5f5f5] font-SFuiDisplay'>A simple solution for creating and selling products that engage
                        your fans and help you monetize your content.
                        No cost, no hassle, no risk.</h2>
                </div>
            </div>

            <div className='px-[12px] h-[440px] mt-[12px] flex flex-col'>
                <img src='./homepageImages/banner2.png' className='cursor-pointer h-[228px] object-cover w-full'></img>

                <h1 className='my-[20px] font-semibold text-[12px] w-[145px] text-center mx-auto font-SFuiDisplay'>JOIN US & SELL YOUR
                    OWM MERCHANDISE</h1>

                <h2 className='px-[12px] font-light text-[12px] text-center mx-auto font-SFuiDisplay'>Now you can join us & sell your own merchandise
                    completely free without any hidden charges. Create your
                    own Brand & Monetize. Join us today & become
                    a part of our evergrowing
                    Closm Family.</h2>

                <button className='content-center w-[180px] h-[40px] bg-[#54BAB9] rounded text-white px-[28px]  font-inter font-bold mx-auto mt-[20px]'>JOIN</button>
            </div>
            <div className='flex px-[13px] items-center justify-between my-[20px]'>
                <h1 className='font-inter text-[13px]'>ALL PRODUCTS</h1>
                <div className='flex items-center space-x-1 cursor-pointer'>
                    <img src='./homepageImages/filter.png' className='cursor-pointer w-[14px] h-[14px]'></img>
                    <h1 className='font-inter text-[13px]'>FILTER</h1>

                </div>
            </div>

            {/* Products list  */}
            <div className='px-[12px] grid grid-cols-2 w-fit gap-x-6 mx-auto  gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
                {items.map(obj => {
                    return (
                        <Item key={obj.name} details={obj} />
                    )
                })}
            </div>

            <div className='h-[555px] px-[12px] '>

                <h1 className='font-SFuiDisplay text-[12px] font-semibold  mt-[20px] w-[168] h-[38px] ml-[20px]'>
                    WANT TO PLACE BULK
                    ORDERS ?
                </h1>

                <h2 className='w-[251px] h-[139px] font-SFuiDisplay font-light text-[12px] ml-[20px]'>In publishing and graphic
                    design, Lorem ipsum is a placeholder
                    text commonly used to demonstrate
                    the visual form of a document or a
                    typeface without relying on meaningful
                    content. Lorem ipsum may be used as
                    a placeholder before the final copy is
                </h2>

                <button className='content-center w-[180px] h-[40px] bg-[#54BAB9] rounded text-white px-[28px]  font-inter font-bold mx-auto mb-[20px]   ml-[20px]'>PLACE ORDERS
                </button>

                <img src='./homepageImages/banner3.png' className='cursor-pointer h-[260px] object-cover'></img>

                <h2 className='w-[160px] font-inter text-[13px] mt-[20px]'>FEATURED CREATORS</h2>

            </div>

            <div className='grid grid-cols-2 gap-4 mx-auto w-fit mb-8'>
                {featuredCreators.map(item => {
                    return (
                        <div key={item.name}>
                            <img src={`./homepageImages/${item.image}`} className='cursor-pointer w-[170px] h-[170px] object-cover'></img>
                            <h1 className='font-inter text-[12px] mt-[6px] text-center mx-auto'>{item.name}</h1>
                        </div>
                    )
                })}
            </div>





        </div>





    )
}
