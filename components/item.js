import React from 'react'
import Link from 'next/link'


export const Item = (obj) => {
    const { name, price, mrp, discount,img } =obj.details
    return (
        <div className='w-[170px] lg:w-[250px] mb-2'>
            <Link href="/">
                <a className='rounded'>
                    <img src={`./homepageImages/${img}.png`} className='cursor-pointer h-[207px] lg:w-[250px] lg:h-[305px] '></img>

                    <div className='ml-[7px]'>
                        <h1 className='font-inter text-[11px] lg:text-[16px] text-[#19191D]  py-1'>{name}
                        </h1>
                        <div className='flex items-center  space-x-1 justify-start'>
                            <h2 className='font-inter  text-[13px] lg:text-[24px] text-[#19191D]'>₹{price}</h2>
                            <h3 className='font-inter text-[9px] lg:text-[13px] text-[#787885] line-through '>₹{mrp}</h3>
                        </div>
                        <div className='flex justify-between items-start'>
                            <h2 className='font-inter  text-[13px] lg:text-[16px] text-[#C25050] py-1'>{discount}% OFF</h2>
                           
                        </div>

                    </div>
                </a>
            </Link>
        </div>
    )
}
