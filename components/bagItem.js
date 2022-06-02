import React, { useState } from 'react'
import { MinusIcon } from '@heroicons/react/solid'
import { PlusIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/outline'
// import { HeartIcon } from '@heroicons/react/solid'

export const BagItem = () => {

    const [itemQuantity, setitemQuantity] = useState(1)
    return (
        <div className='w-full h-[140px]   justify-between lg:h-[240px] lg:w-full flex items-center  pb-[15px] mb-[15px] lg:pb-[20px] lg:mb-[20px] border-b-[1px] border-[#EAEAEA] shadow '>

            <div className='flex h-full'>
                <img className='w-[100px] h-[122px] lg:h-[220px]  lg:w-[181px] ' src='./homepageImages/woman2.png'></img>

                <div className='ml-[10px] lg:ml-[16px]  pt-2 h-full  flex flex-col justify-between'>
                    <div>
                        <h2 className='font-inter text-[#19191D] text-[12px] lg:text-[18px]'>Jet Black Half Sleeve T-Shirt</h2>

                        <div className='flex items-center lg:mt-1    space-x-1 justify-start '>
                            <h2 className='font-inter  text-[13px] lg:text-[24px] text-[#19191D]'>₹499</h2>
                            <h3 className='font-inter text-[9px] lg:text-[13px] text-[#787885] line-through '>₹799</h3>
                            <h3 className='text-[#C25050] font-inter text-[9px] lg:text-[16px] ml-12px'>30% OFF</h3>
                        </div>
                        <div className='mt-1 lg:mt-8'>
                            <h2 className='font-inter font-medium text-[#323232] text-[9px] lg:text-[14px]'>Size: (M)</h2>
                            <h2 className='font-inter font-medium text-[#323232] text-[9px] lg:text-[14px]'>Colour : Sky Yellow</h2>
                        </div>
                    </div>

                    <div className='flex items-center justify-around lg:w-[120px] lg:h-[36px] w-[86px] h-[30px] rounded-md border-[1px] border-[#E5E5E5] shadow'>
                        <MinusIcon onClick={() => { setitemQuantity(itemQuantity - 1) }} className='w-[10px] lg:w-[14px] text-[#313131] cursor-pointer' />
                        <span className='font-manrope text-[11px] lg:text-[16px] text-[#313131] '>{itemQuantity > 0 ? itemQuantity : 1}</span>
                        <PlusIcon onClick={() => { setitemQuantity(itemQuantity + 1) }} className='w-[10px] lg:w-[14px] text-[#313131] cursor-pointer' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col  h-full justify-between '>
                <XIcon className='w-[20px] mr-[5px] mt-[3px] lg:w-[30px] text-[#454545] cursor-pointer' />
                <HeartIcon className='w-[20px] lg:w-[30px] mr-[5px] text-[#B0888C] cursor-pointer' />
            </div>
        </div>
    )
}
