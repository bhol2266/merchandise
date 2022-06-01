import React, { useContext } from 'react'
import Link from 'next/link'
import LoginMenu from './LoginMenu'


export const Navigation = () => {

    return (
        <div className='shadow-lg'>
            <h1 className='font-manrope text-[9px] lg:text-[14px] text-center text-white bg-[#54BAB9] py-2'>
                USE COUPON  “  GHSGDHSSAHGAH9678  “  TO GET EXTRA 20% DISCOUNT
            </h1>



            <div className='flex justify-between px-[20px] lg:px-[55px] h-[65px] items-center '>
                <Link href="/">
                    <h1 className='text-[25px] text-[#BE8024] font-delius cursor-pointer lg:text-[30px] '>Closm</h1>
                </Link>

                <div className='flex space-x-[50px] items-center justify-center'>
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
        </div>
    )
}
