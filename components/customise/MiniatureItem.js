import React from 'react'
import Link from 'next/link'


export const MiniatureItem = ({ obj }) => {
    const { price, mrp, discount, title, description, id, img } = obj


    const imageUrl = "/homepageImages/" + img + '.png'



    return (
        <div className=''>
            <Link href={`/product/${id}`} className='rounded flex flex-col '>
                <img src={imageUrl} className='cursor-pointer aspect-[item] '></img>

                <div className='ml-[7px]'>
                    <h1 className='font-inter text-[10px]   text-[#19191D]  py-1'>{title}
                    </h1>
                    <div className='flex items-center  space-x-1 justify-start'>
                        <h2 className='font-inter  text-[13px]  text-[#19191D]'>₹{price}</h2>
                        <h3 className='font-inter text-[9px]  text-[#787885] line-through '>₹{mrp}</h3>
                    </div>
                    <div className='flex justify-between items-start'>
                        <h2 className='font-inter  text-[11px]  text-[#C25050] py-1'>{discount}% OFF</h2>

                    </div>

                </div>
            </Link>
        </div>
    )
}
