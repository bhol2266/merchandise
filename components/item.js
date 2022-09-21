import React from 'react'
import Link from 'next/link'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'


export const Item = ({ obj }) => {

    const { mrp, discountPrice, productName, productDescription, _id, img, color } = obj

    const dicountPriceInteger = parseInt(discountPrice);
    const mrpInteger = parseInt(mrp);
    
    const discountPercent = Math.round(100 - ((dicountPriceInteger * 100) / mrpInteger))




    return (
        <div className='select-none'>
            <Link href={`/product/${_id}`}>
                <a className='rounded flex flex-col '>
                    <img src={color[0].imageUrl[0]} className='cursor-pointer aspect-[item] '></img>

                    <div className='ml-[7px]'>
                        <h1 className='font-inter text-[11px] lg:text-[16px] text-[#19191D]  py-1'>{productName}
                        </h1>
                        <div className='flex items-center  space-x-1 justify-start'>
                            <h2 className='font-inter  text-[13px] lg:text-[24px] text-[#19191D]'>₹{discountPrice}</h2>
                            <h3 className='font-inter text-[9px] lg:text-[13px] text-[#787885] line-through '>₹{mrp}</h3>
                        </div>
                        <div className='flex justify-between items-start'>
                            <h2 className='font-inter  text-[13px] lg:text-[16px] text-[#C25050] py-1'>{discountPercent}% OFF</h2>

                        </div>

                    </div>
                    
                </a>
            </Link>
        </div>
    )
}
