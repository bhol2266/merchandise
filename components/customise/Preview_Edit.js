import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { XCircleIcon, ArrowRightIcon } from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import Canvas from './Canvas'
import ColorModal from './ColorModal'
import MerchContext from '../../context/MerchContext';





const Preview_Edit = () => {






    return (
        <div className=' lg:flex items-center lg:items-start justify-between'>





            <Canvas />



            {/* PRICE and NAME  */}
            <div className='mt-[40px] lg:mt-0 sm:w-4/5 md:w-3/5 lg:w-[280px] xl:w-[480px]  mx-auto lg:mx-0 '>
                <h2 className='text-[14px] lg:text-[16px] font-inter text-[#323232] mb-[21px] '>PRICE & NAME</h2>

                <div className='flex-fles-col space-y-1 mb-[15px]'>
                    <h3 className='text-[12px] lg:text-[14px] font-inter font-medium text-[#323232] '>Product Name</h3>
                    <input className='w-full border-[1px] border-[#AAAAAA] rounded-[5px] px-[10px] py-[12px] text-[11px] lg:text-[13px]  text-[#323232]  font-inter outline-none' type="text" name="Product Name" id="Product Name" placeholder='Kim Jong UN' />
                </div>




                <div className='flex-fles-col space-y-1 mb-[15px]'>
                    <h3 className='text-[12px] lg:text-[14px]  font-inter font-medium text-[#323232] '>Discounted Price</h3>
                    <input className='w-full border-[1px] border-[#AAAAAA] rounded-[5px] px-[10px] py-[12px] text-[11px] lg:text-[13px]  text-[#323232]  font-inter outline-none line-through' type="text" name="Product Name" id="Product Name" placeholder='₹599' />
                </div>

                <div className='flex-fles-col space-y-1 mb-[15px]'>
                    <h3 className='text-[12px] lg:text-[14px]  font-inter font-medium text-[#323232] '>Original Price</h3>
                    <input className='w-full border-[1px] border-[#AAAAAA] rounded-[5px] px-[10px] py-[12px] text-[11px] lg:text-[13px]  text-[#323232]  font-inter outline-none' type="text" name="Product Name" id="Product Name" placeholder='₹499' />
                </div>

                <div className='flex-fles-col space-y-1 mb-[15px]'>
                    <h3 className='text-[12px] lg:text-[14px]  font-inter font-medium text-[#323232] '>Product Description</h3>
                    <input className='w-full border-[1px] border-[#AAAAAA] rounded-[5px] px-[10px] py-[12px] text-[11px] lg:text-[13px]  text-[#323232]  font-inter outline-none' type="text" name="Product Name" id="Product Name" placeholder='fghfgdshfgjh' />
                </div>

                <div className='flex items-center justify-between mx-2'>
                    <input className='mr-2 lg:scale-125' type="checkbox" />

                    <div className='flex items-center flex-wrap space-x-1'>
                        <h2 className='text-[#323232] font-inter font-medium text-[12px] lg:text-[14px] '>By Continuing, You Agree to Closm’s</h2>
                        <h2 className='text-[#323232] font-inter font-medium text-[12px] lg:text-[14px]  underline cursor-pointer hover:text-red-500'>Terms of Use, </h2>
                        <h2 className='text-[#323232] font-inter font-medium text-[12px] lg:text-[14px]  underline cursor-pointer hover:text-red-500'>Privacy Policy </h2>
                        <h2 className='text-[#323232] font-inter font-medium text-[12px] lg:text-[14px]  underline cursor-pointer hover:text-red-500'>& Creators Agreement </h2>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-2 mt-[20px]'>
                    <button className='text-[#323232] font-Mont font-medium text-[12px] lg:text-[14px]  rounded-[5px] border-[1px] border-[#54BAB9] py-[10px] px-[15px]'>Preview</button>
                    <button className=' font-Mont font-medium text-[12px] lg:text-[14px]  rounded-[5px] border-[1px] border-[#54BAB9] py-[10px] px-[15px] bg-[#54BAB9] text-white'>Publish</button>
                </div>

            </div>


        </div>
    )
};
export default Preview_Edit;