import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import LoginMenu from './LoginMenu'
import MerchContext from '../context/MerchContext'
import { useRouter } from 'next/router'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import { getYoutubersProductsList } from '../lib/Creator_API'

export const CreatorNavbar = () => {
    const { youtuberLogo, setyoutuberLogo, NavbarUserORcreator, setNavbarUserORcreator } = useContext(MerchContext)




    const router = useRouter()




    useEffect(async () => {

        try {
            const response = await getYoutubersProductsList('kundan')
            if (response.sucess) {
                let logo = response.data.creatorLogo

                if (!logo.includes('https://')) {
                    logo = 'https://' + logo
                }
                setyoutuberLogo(logo)
                youtuberName = response.data.creatorName
                productlist = response.data.products
            } else {
                console.log(response.message)
            }
        } catch (error) {
            console.log(error)
        }



    }, [])





    return (
        <div className={`shadow-lg select-none ${NavbarUserORcreator === 'creator' ? "" : "hidden"}`}>
            <h1 className='font-manrope text-[9px] lg:text-[14px] text-center text-white bg-[#54BAB9] py-2'>
                USE COUPON  “  GHSGDHSSAHGAH9678  “  TO GET EXTRA 20% DISCOUNT
            </h1>



            <div className='flex justify-between px-[20px] lg:px-[55px] h-[65px] items-center '>
                <Link href="/dashboard">
                    <img src={youtuberLogo} className='cursor-pointer  h-[40px] md:h-[40px]'></img>
                </Link>


                <div className={` flex space-x-[30px] sm:space-x-[30px] lg:space-x-[50px] items-center justify-center`}>
                    <Link href='/dashboard'>
                        <a className='font-inter text-[12px] lg:text-[16px]  text-[##323232]'>
                            Dashboard
                        </a>
                    </Link>

                    <Link href='/dashboard/account'>
                        <a className='font-inter text-[12px] lg:text-[16px]  text-[##323232]'>
                            Account
                        </a>
                    </Link>

                </div>

            </div>
        </div >
    )
}
