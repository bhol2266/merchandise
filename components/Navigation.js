import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import LoginMenu from './LoginMenu'
import videosContext from '../context/videos/videosContext'
import { useRouter } from 'next/router'

export const Navigation = () => {
    const { youtuberLogo } = useContext(videosContext)

    const router = useRouter()

   


    return (
        <div className='shadow-lg'>
            <h1 className='font-manrope text-[9px] lg:text-[14px] text-center text-white bg-[#54BAB9] py-2'>
                USE COUPON  “  GHSGDHSSAHGAH9678  “  TO GET EXTRA 20% DISCOUNT
            </h1>



            <div className='flex justify-between px-[20px] lg:px-[55px] h-[65px] items-center '>
                <Link href="/">
                    <img src={router.pathname === "/"?"/logo.png":youtuberLogo} className='cursor-pointer  h-[25px] md:h-[30px]'></img>
                </Link>

                <div className='flex space-x-[15px] sm:space-x-[30px] lg:space-x-[50px] items-center justify-center'>
                    <Link href="/">
                        <img src='/homepageImages/search.png' className='cursor-pointer w-[20px] h-[20px]'></img>
                    </Link>
                    <Link href="/product">
                        <img src='/homepageImages/cloth.png' className='cursor-pointer w-[20px] h-[20px]'></img>
                    </Link>

                    <LoginMenu />

                    <Link href="/mybag">
                        <img src='/homepageImages/cart.png' className='cursor-pointer w-[20px] h-[20px]'></img>
                    </Link>

                </div>
            </div>
        </div>
    )
}
