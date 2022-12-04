import React, { useContext } from 'react'
import Link from 'next/link'
import { deleteProductWishlist } from '../../lib/Product_API'
import MerchContext from '../../context/MerchContext'

export const Item = ({ obj }) => {

    const { mrp, discountPrice, productName, productDescription, _id, img, color } = obj
    const { soldUnits, inProgrssUnits, cancelledUnits, closmCharges, totalProfit, category } = obj
    

    

    const { soldPageSelector } = useContext(MerchContext)



  

    return (
        <div className='select-none'>
            <Link href={`/product/${_id}`}>
                <div className='rounded flex flex-col '>
                    <img src={color[0].imageUrl[0]} className='cursor-pointer object-contain'></img>

                    <div className=''>
                        <h1 className='font-inter text-[11px] lg:text-[16px] text-[#19191D]  py-1 pr-4'>{productName}
                        </h1>
                        <div className='flex items-center  space-x-1 justify-start'>
                            <h2 className='font-inter  text-[13px] lg:text-[24px] text-[#19191D]'>₹{discountPrice}</h2>
                            <h3 className='font-inter text-[9px] lg:text-[13px] text-[#787885] line-through '>₹{mrp}</h3>
                        </div>
                        {/* <div className='flex justify-between items-start'>
                            <h2 className='font-inter  text-[13px] lg:text-[16px] text-[#C25050] py-1'>{discountPercent.toString().substring(0, discountPercent.toString().indexOf('.')).replace('.', '')}% OFF</h2>

                        </div> */}

                    </div>

                </div>
            </Link>
            {/* <button onClick={removeItemFromWishlist} className='lg:py-1 text-sm lg:text-md py-[2px] border-[1px] rounded-md my-1  font-inter border-theme w-full'>Remove Item</button> */}


            {soldPageSelector === 'sold_units' &&
                <div className='py-1'>
                    <div className='flex items-center justify-between mb-1 mt-1'>
                        <h1 className='font-inter text-[11px] lg:text-[16px] text-[#19191D]  py-1 pr-4'>Sold Units</h1>
                        <h1 className='font-inter text-[11px] lg:text-[16px] text-[#19191D]  py-1 pr-4'>{soldUnits}
                        </h1>
                    </div>
                    <div className='flex items-center justify-between mb-1'>
                        <h1 className='font-inter text-[11px] lg:text-[16px] text-[#19191D]  py-1 pr-4'>Closm Charges</h1>
                        <h1 className='font-inter text-[11px] lg:text-[16px] text-[#19191D]  py-1 pr-4'>₹ {closmCharges}
                        </h1>
                    </div>
                    <div className='flex items-center justify-between mb-1'>
                        <h1 className='font-inter text-[11px] lg:text-[16px] text-[#19191D]  py-1 pr-4'>Total Profit</h1>
                        <h1 className='font-inter text-[11px] lg:text-[16px] text-[#19191D]  py-1 pr-4'>₹ {totalProfit}
                        </h1>
                    </div>
                </div>
            }

            {soldPageSelector === 'inprogress_units' &&
                <div className='flex items-center justify-between py-1'>
                    <h1 className='font-inter text-[11px] lg:text-[16px] text-[#19191D]  py-1 pr-4'>In Progress</h1>
                    <h1 className='font-inter text-[11px] lg:text-[16px] text-[#19191D]  py-1 pr-4'>{inProgrssUnits}
                    </h1>
                </div>
            }

            {soldPageSelector === 'cancelled_units' &&
                <div className='flex items-center justify-between py-1'>
                    <h1 className='font-inter text-[11px] lg:text-[16px] text-[#19191D]  py-1 pr-4'>Cancelled Units</h1>
                    <h1 className='font-inter text-[11px] lg:text-[16px] text-[#19191D]  py-1 pr-4'>{cancelledUnits}
                    </h1>
                </div>
            }
        </div>
    )
}
