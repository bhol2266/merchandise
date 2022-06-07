import React from 'react'
import Link from 'next/link'


export const Item = ({ obj }) => {
    const { price, mrp, discount } = obj.node
    const name = obj.node.title
    const img = "https://closm.com/" + obj.node.image[0].image

 

    return (
        <div className=''>
            <Link href="/">
                <a className='rounded flex flex-col '>
                    <img src={img} className='cursor-pointer aspect-[item] '></img>

                    <div className='ml-[7px]'>
                        <h1 className='font-inter text-[11px] lg:text-[16px] text-[#19191D]  py-1'>{name}
                        </h1>
                        <div className='flex items-center  space-x-1 justify-start'>
                            <h2 className='font-inter  text-[13px] lg:text-[24px] text-[#19191D]'>₹{price}</h2>
                            <h3 className='font-inter text-[9px] lg:text-[13px] text-[#787885] line-through '>₹{mrp}</h3>
                        </div>
                        <div className='flex justify-between items-start'>
                            <h2 className='font-inter  text-[13px] lg:text-[16px] text-[#C25050] py-1'>{discount} OFF</h2>

                        </div>

                    </div>
                </a>
            </Link>
        </div>
    )
}
