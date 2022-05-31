import React from 'react'

export const OrderItem = ({ orderDetails }) => {
    const { name, img, price, mrp, size, colour, quantity } = orderDetails;
    console.log(img)
    return (
        <div>
            <div className='flex bg-red-200 h-[122px] m-[13px]'>
                <img src='./homepageImages/item1.png' className='cursor-pointer h-[122px] w-[100px] lg:w-[181px] lg:h-[220px] mb-2'></img>
             
                <div className='flex flex-col justify-between ml-[7px] bg-green-300 w-full'>
                    <h1 className='font-inter text-[12px] lg:text-[16px] text-[#19191D]  py-1'>{name} </h1>

                    <div className='justify-start  lg:text-start mt-3 '>
                        <h2 className='font-inter text-[#19191D] lg:text-[14px] text-[8px] font-medium'>Size: {size}</h2>
                        <h2 className='font-inter text-[#19191D] lg:text-[14px] text-[8px] font-medium'>Colour: {colour}</h2>
                        <h2 className='font-inter text-[#19191D] lg:text-[14px] text-[8px] font-medium'>Quantity: {quantity}</h2>
                    </div>

                    <div className='flex items-center justify-between mr-2'>
                        <div className='flex items-center  space-x-1 justify-start  lg:text-start '>
                            <h2 className='font-inter  text-[18px] lg:text-[24px] text-[#000000]'>₹{price}</h2>
                            <h3 className='font-inter text-[9px] lg:text-[13px] text-[#787885] line-through '>₹{mrp}</h3>
                        </div>
                        <h2 className='brightness-150 justify-start  lg:text-start  text-[#323232] font-inter text-[8px] lg:text-[14px] '>Delivery by saturday 20 october</h2>
                    </div>


                </div>
            </div>

            <div className='flex flex-col items-start justify-between'>

            </div>

        </div>
    )
}
