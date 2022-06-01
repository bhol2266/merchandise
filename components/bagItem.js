import React, { useState } from 'react'
import { MinusIcon } from '@heroicons/react/solid'
import { PlusIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/outline'
// import { HeartIcon } from '@heroicons/react/solid'

export const BagItem = () => {

    const [itemQuantity, setitemQuantity] = useState(1)
    return (
        <div className='w-[400px] lg:w-[850px] flex items-center justify-between pb-[15px] mb-[15px] lg:pb-[20px] lg:mb-[20px] border-b-[1px] border-[#EAEAEA] shadow'>

            <div className=' flex'>
                <img className='w-[100px] h-[122px] lg:w-[181px] lg:h-[220px]' src='./homepageImages/woman2.png'></img>
                <div className='ml-[10px] lg:ml-[16px] flex flex-col justify-between'>
                    <h2 className='font-inter text-[#19191D] text-[12px] lg:text-[18px]'>Jet Black Half Sleeve T-Shirt</h2>
                    <div className='flex items-center  space-x-1 justify-start mt-[5px]'>
                        <h2 className='font-inter  text-[13px] lg:text-[24px] text-[#19191D]'>₹499</h2>
                        <h3 className='font-inter text-[9px] lg:text-[13px] text-[#787885] line-through '>₹799</h3>

                        <h3 className='text-[#C25050] font-inter text-[9px] lg:text-[16px] ml-12px'>30% OFF</h3>
                    </div>
                    <div className='mb-2'>
                        <h2 className='font-inter font-medium text-[#323232] text-[9px] lg:text-[14px]'>Size: (M)</h2>
                        <h2 className='font-inter font-medium text-[#323232] text-[9px] lg:text-[14px]'>Colour : Sky Yellow</h2>
                    </div>

                    <div className='flex items-center justify-around lg:W-[112px] w-[86px] h-[30px] rounded-md border-[1px] border-[#E5E5E5] shadow'>
                        <MinusIcon onClick={() => { setitemQuantity(itemQuantity - 1) }} className='w-[7px] lg:w-[9px] text-[#313131] cursor-pointer' />
                        <span className='font-manrope text-[11px] lg:text-[14px] text-[#313131] '>{itemQuantity > 0 ? itemQuantity : 1}</span>
                        <PlusIcon onClick={() => { setitemQuantity(itemQuantity + 1) }} className='w-[7px] lg:w-[9px] text-[#313131] cursor-pointer' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-between  h-[122px] p-1'>
                <XIcon className='w-[20px] lg:w-[30px] text-[#454545] cursor-pointer' />
                <HeartIcon className='w-[20px] lg:w-[30px] text-[#B0888C] cursor-pointer' />
            </div>
        </div>
    )
}
