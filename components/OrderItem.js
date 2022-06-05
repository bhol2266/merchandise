import React, { useState } from 'react'
import { MinusIcon } from '@heroicons/react/solid'
import { PlusIcon } from '@heroicons/react/solid'
import { ArrowDownIcon } from '@heroicons/react/outline'

export const OrderItem = ({ orderDetails }) => {
    const [itemQuantity, setitemQuantity] = useState(1)
    const { name, img, price, mrp, size, colour, quantity, deliveryMessage } = orderDetails;

    const [openTracking, setopenTracking] = useState(false)
    return (
        <div className=' mb-4'>

            <div onClick={() => setopenTracking(!openTracking)} className='flex  h-[122px] lg:h-[220px]'>

                <img src={img} className='cursor-pointer h-[122px] w-[100px] lg:w-[181px] lg:h-[220px] mb-2'></img>

                {/* Name and Price,Size, Colour, Quantity   */}
                <div className='flex flex-col justify-between ml-[7px] '>
                    <div>
                        <h1 className='font-inter text-[12px] lg:text-[16px] text-[#19191D]  py-1'>{name} </h1>

                        <div className='flex items-center lg:mt-1    space-x-1 justify-start '>
                            <h2 className='font-inter  text-[13px] lg:text-[24px] text-[#19191D]'>₹499</h2>
                            <h3 className='font-inter text-[9px] lg:text-[13px] text-[#787885] line-through '>₹799</h3>
                            <h3 className='text-[#C25050] font-inter text-[9px] lg:text-[16px] ml-12px'>30% OFF</h3>
                        </div>

                        <h2 className='font-inter text-[#19191D] lg:text-[14px] text-[8px] font-medium mt-2'>Size: {size}</h2>
                        <h2 className='font-inter text-[#19191D] lg:text-[14px] text-[8px] font-medium'>Colour: {colour}</h2>

                        <h2 className='font-inter text-[#19191D] lg:text-[14px] text-[8px] font-medium'>Quantity : {quantity}</h2>
                    </div>


                    <h2 className={`brightness-150 text-start   text-[#323232] font-inter text-[9px] lg:text-[14px] ${deliveryMessage === "Cancelled" ? "text-red-500" : ""} `}>{deliveryMessage}</h2>


                </div>

            </div>


            {openTracking &&
                <div className='mt-[28px]'>
                    <h2 className='text-[11px] lg:text-[11px] text-[#323232] font-inter'>Tracking ID : 63546253675364</h2>
                    <h2 className='text-[10px] lg:text-[11px] text-[#323232] font-inter mt-[10px]'>delivery Partner : Shiprocket</h2>

                    {/* tracking diagram  */}

                    <div className='flex items-center w-[180px] h-[140px]  mt-[40px] '>

                        <div className='flex flex-col items-center '>
                            <p className='lg:h-[12px] lg:w-[12px]  w-[10px] h-[10px] rounded-full border-r-[1.5px] lg:border-r-[2px] border-[#54BAB9] bg-[#54BAB9]'></p>
                            <span className='lg:h-[53px] h-[29px] border-r-[1px] lg:border-r-[2px] border-[#54BAB9]'></span>

                            <p className='lg:h-[12px] lg:w-[12px]  w-[10px] h-[10px] rounded-full border-r-[1.5px] lg:border-r-[2px] border-[#54BAB9] bg-[#54BAB9]'></p>
                            <span className='lg:h-[53px] h-[29px] border-r-[1px] lg:border-r-[2px] border-[#54BAB9]'></span>

                            <p className='lg:h-[12px] lg:w-[12px]  w-[10px] h-[10px] rounded-full border-[1.5px] lg:border-r-[2px] border-[#54BAB9] bg-[#]'></p>
                            <span className='lg:h-[53px] h-[29px] border-r-[1px] lg:border-r-[2px] border-[#54BAB9]'></span>

                            <p className='lg:h-[12px] lg:w-[12px]  w-[10px] h-[10px] rounded-full border-[1.5px] lg:border-r-[2px] border-[#54BAB9] bg-[#]'></p>


                        </div>

                        <div className=' flex flex-col  h-full'>
                            <h2 className='text-[10px] text-[#323232] font-inter ml-[30px]'>Seller is processing your order</h2>
                            <div className='ml-[30px] mt-3'>
                                <h2 className='text-[10px] text-[#323232] font-inter'>Order dispatched</h2>
                                <h2 className='text-[9px] text-[#323232] font-inter ml-2'>Delivery by 20 oct</h2>
                            </div>
                            <h2 className='text-[10px] text-[#323232] font-inter ml-[30px] mt-3'>Order recived at your</h2>
                            <h2 className='text-[10px] text-[#323232] font-inter ml-[30px] mt-6'>Out for delivery</h2>

                        </div>

                    </div>

                    {/* Shipping Address */}
                    <div className='mt-[40px] '>
                        <div >
                            <h2 className='text-[13px] lg:text-[13px] text-[#323232] font-inter'>Shipping Address</h2>
                            <h2 className='text-[10px] lg:text-[10px] text-[#323232] font-inter mt-[6px] w-[272px]'>SLorem Ipsum is simply dummy
                                text of the printing and typesetting industry. Lorem
                                Ipsum has been the industry&apos;s standard dummy text ever
                                since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. .</h2>

                        </div>

                        <div className='mt-[20px] '>
                            <h2 className='text-[13px] lg:text-[13px] text-[#323232] font-inter'>Billing Address</h2>
                            <h2 className='text-[10px] lg:text-[10px] text-[#323232] font-inter mt-[6px] w-[272px]'>SLorem Ipsum is simply dummy
                                text of the printing and typesetting industry. Lorem
                                Ipsum has been the industry&apos;s standard dummy text ever
                                since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. .</h2>

                        </div>
                    </div>

                    <div className='mt-[30px] flex items-center justify-between '>
                        <div className='flex flex-col items-center justify-center space-x-[2px] '>
                            <button className='text-[9px] text-center font-inter text-[#323232] w-[46px]'>Download Invoice</button>
                            <ArrowDownIcon className='h-[10px] text-[#323232]' />
                        </div>
                        <button className='text-[10px]  font-inter text-[#323232] w-[212px] h-[30px] text-center border-[1px] border-[#323232] rounded-[5px]'>request Cancellation</button>

                    </div>

                </div>
            }


        </div >
    )
}
