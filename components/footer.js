import React from 'react'
import Link from 'next/link'


export const Footer = () => {
  return (
    <div className='h-[165px] lg:h-[175px] bg-[#1E2833]'>
      <div className='flex items-center w-[200px] justify-around mx-auto pt-[25px]'>
        <Link href='/'>
          <a>
            <img className='w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]' src='./footer/twitter.png'></img>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <img className='w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]' src='./footer/facebook.png'></img>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <img className='w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]' src='./footer/insta.png'></img>
          </a>
        </Link>
      </div>


      <div className='w-[200px] mx-auto text-white font-DMsans text-[12px]  lg:text-[15px]'>
        <div className='flex items-center justify-around mb-3 mt-8  '>
          <h1 className='hover:text-red-500 cursor-pointer '>Refund Policy</h1>
          <h1 className='hover:text-red-500 cursor-pointer '>Support</h1>
        </div>
        <div className='flex items-center justify-around '>
          <h1 className='hover:text-red-500 cursor-pointer '>Terms of Use</h1>
          <h1 className='hover:text-red-500 cursor-pointer '>Privacy Policy</h1>
        </div>
      </div>

      <h2 className='font-DMsans text-[10px]  text-[#c0c0c0] text-center mx-auto mt-2  '>© 2022 closm.com</h2>
    </div>
  )
}
