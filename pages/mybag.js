import React from 'react'
import { BagItem } from '../components/bagItem'

const Mybag = () => {
    return (
        <div className='px-[13px] lg:px-[45px]'>

            <div className='flex items-center justify-between'>
                <h1>MY BAG</h1>

                <div className=' h-[17px] flex items-center my-[20px] mx-2'>
                    <p className='w-[10px] h-[10px] rounded-full bg-[#54BAB9]'></p>
                    <span className='w-[46px] border-b-[1.5px] border-[#54BAB9]'></span>
                    <p className='border-[1px] border-[#54BAB9] w-[10px] h-[10px] rounded-full '></p>
                    <span className='w-[46px] border-b-[1.5px] border-[#ffffff]'></span>
                    <p className='border-[1px] border-[#54BAB9] w-[10px] h-[10px] rounded-full '></p>

                </div>
            </div>

            {/* Item  */}
            <div className=''>
                <BagItem />
                <BagItem />
                <BagItem />
                <BagItem />
                <BagItem />
            </div>

            <div className=' h-[335px] rounded-[10px] border-[1px] border-[#BBBBBB] mx-auto mt-[10px] py-[20px]'>
                <h1 className='px-[20px] font-inter font-semibold text-[12px] text-[#323232]'>TOTAL PRICE</h1>

                <div className='mt-[12px] flex items-center justify-between px-[20px] pb-[14px] border-b-[0.5px] border-[#E5E5E5]'>
                    <h1 className=' text-[11px] text-[#323232] font-inter'>ITEMS (4)</h1>
                    <h1 className=' text-[11px] text-[#323232] font-inter'>569 INR</h1>
                </div>
                <div className='mt-[12px] flex items-center justify-between px-[20px] pb-[14px] border-b-[0.5px] border-[#E5E5E5]'>
                    <h1 className=' text-[11px] text-[#323232] font-inter'>DISCOUNT</h1>
                    <h1 className=' text-[11px] text-[#323232] font-inter'>1964 INR</h1>
                </div>
                <div className='mt-[12px] flex items-center justify-between px-[20px] pb-[14px] border-b-[0.5px] border-[#E5E5E5]'>
                    <h1 className=' text-[11px] text-[#323232] font-inter'>DELIVERY CHARGES</h1>
                    <h1 className=' text-[11px] text-[#323232] font-inter'>NONE</h1>
                </div>

                <div className='mt-[12px] flex items-start justify-between px-[20px] pb-[14px] border-b-[0.5px] border-[#E5E5E5]'>
                    <h1 className=' text-[11px] text-[#323232] font-inter'>APPLY COUPONS</h1>
                    <div className='flex flex-col items-end'>
                        <h1 className='text-center w-[115px] h-[20px] border-[1px] border-[#323232] rounded-[5px] text-[11px] text-[#323232] font-inter'>AHBDGYFUBFG</h1>
                        <h1 className='mt-[7px] text-[10px] text-[#323232] font-inter cursor-pointer hover:text-red-500'>{"BROWSE COUPONS >"}</h1>

                    </div>

                </div>

                <div className='mt-[12px] flex items-center justify-between px-[20px] pb-[14px] border-b-[0.5px] border-[#E5E5E5]'>
                    <h1 className=' text-[11px] text-[#323232] font-inter'>COUPON DISCOUNT</h1>
                    <h1 className=' text-[11px] text-[#323232] font-inter'>569 INR</h1>
                </div>
                <div className='mt-[14px] flex items-center justify-between px-[20px] pb-[14px]  border-[#E5E5E5]'>
                    <h1 className=' text-[12px] text-[#323232] font-inter'>TOTAL AMMOUNT</h1>
                    <h1 className=' text-[12px] text-[#323232] font-inter'>6969 INR</h1>
                </div>
            </div>

            <button className='w-full text-white h-[40px] bg-[#54BAB9] hover:bg-[#458b8a]  rounded-[5px] text-center my-4 font-inter font-semibold mx-auto'>
                PROCEED TO CHECKOUT
            </button>


        </div>
    )
}
export default Mybag