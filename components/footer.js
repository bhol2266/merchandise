import React from 'react'
import Link from 'next/link'


export const Footer = () => {
  return (
    <div className='h-[165px] bg-[#1E2833]'>
      <div className='flex items-center w-[200px] justify-around mx-auto pt-[25px]'>
        <Link href='/'>
          <a>
            <img className='w-[25px] h-[25px]' src='./footer/twitter.png'></img>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <img className='w-[25px] h-[25px]' src='./footer/facebook.png'></img>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <img className='w-[25px] h-[25px]' src='./footer/insta.png'></img>
          </a>
        </Link>
      </div>


      <div className='w-[200px] mx-auto text-white font-DMsans'>
        <div className='flex items-center justify-around mb-3 mt-8  '>
          <h1 className='hover:text-red-500 cursor-pointer text-[12px]'>Refund Policy</h1>
          <h1 className='hover:text-red-500 cursor-pointer text-[12px]'>Support</h1>
        </div>
        <div className='flex items-center justify-around '>
          <h1 className='hover:text-red-500 cursor-pointer text-[12px]'>Terms of Use</h1>
          <h1 className='hover:text-red-500 cursor-pointer text-[12px]'>Privacy Policy</h1>
        </div>
      </div>

      <h2 className='font-DMsans text-[10px] text-[#999999] text-center sticky mt-2 left-0 right-0'>© 2022 closm.com</h2>
    </div>
  )
}
