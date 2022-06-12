import React from 'react'
import Link from 'next/link'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'


export const Item = ({ obj,productid }) => {
    const { price, mrp, discount, title, description } = obj.node
    const imageUrl = "https://closm.com/" + obj.node.colors[0].image[0].image



    return (
        <div className=''>
            <Link href={`/product/${productid}`}>
                <a className='rounded flex flex-col '>
                    <img src={imageUrl} className='cursor-pointer aspect-[item] '></img>

                    <div className='ml-[7px]'>
                        <h1 className='font-inter text-[11px] lg:text-[16px] text-[#19191D]  py-1'>{title}
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
