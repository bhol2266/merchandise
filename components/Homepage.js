import Link from 'next/link'
import React, { useState } from 'react'
import { HomepageLoginMenu } from './homepageLoginMenu'
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

export const Homepage = () => {

    // const [openLoginMenu, setopenLoginMenu] = useState(false)
    // const openLoginMenuOnClick = () => {
    //     if (openLoginMenu) {
    //         setopenLoginMenu(false)
    //     } else {
    //         setopenLoginMenu(true)
    //     }
    // }
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

            <img src='./homepageImages/banner.png' className='cursor-pointer px-[12px]  w-full object-contain'></img>

            <div className='flex px-[13px] items-center justify-between my-[20px]'>
                <h1 className='font-inter text-[13px]'>ALL PRODUCTS</h1>
                <div className='flex items-center space-x-1 cursor-pointer'>
                    <img src='./homepageImages/filter.png' className='cursor-pointer w-[14px] h-[14px]'></img>
                    <h1 className='font-inter text-[13px]'>FILTER</h1>

                </div>
            </div>

            {/* Products list  */}
            <div className='px-[12px] grid grid-cols-2 w-fit gap-x-6 mx-auto  gap-y-6 sm:grid-cols-3 md:grid-cols-4 '>
                {items.map(obj => {
                    return (
                        <Item key={obj.name} details={obj} />
                    )
                })}
            </div>





        </div>





    )
}
