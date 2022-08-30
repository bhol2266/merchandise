import React, { useState } from 'react'
import { TrashIcon, ChevronRightIcon, EyeOffIcon } from '@heroicons/react/solid'
export default function PublishedItem(props) {


    const { id, title, price, mrp, discount, description, img } = props.data;

    const viewClick = () => {

    }

    const deleteClick = () => {

    }

    return (
        <div className='flex items-start justify-center lg:justify-between w-full space-x-2 lg:space-x-6 lg:h-[250px] '>

            <div className='lg:h-full  lg:min-w-[205px]'>

                <img className='w-[150px] lg:h-full lg:w-fit object-contain' src={`./homepageImages/${img}.png`} alt='publishedItemImage' />

                <button className='lg:hidden w-[150px] lg:w-[180px] 2xl:w-[200px] rounded-[5px] border-[1px] border-[#AAAAAA] px-3 py-2 mt-2 flex items-center text-[12px] lg:text-[15px] text-[#323232]'>
                    Product Orders
                    <ChevronRightIcon className='h-4 lg:h-6 text-black ml-3' />
                </button>
            </div>



            <div className='lg:min-w-[350px] 
            xl:w-[400px] 2xl:w-[450px] flex flex-col  lg:h-full '>

                <div className='font-inter w-full flex  flex-col justify-between space-y-[7px]  h-full'>

                    <div>
                        <p className='hidden lg:flex font-medium text-[15px] text-[#323232] pl-3 mb-1'>Product Name</p>
                        <input className='w-full border-[1px] border-[#AAAAAA] text-[10px] text-[#323232] lg:text-[14px] py-[6px] lg:py-[9px] px-[11px] placeholder:text-gray-200] outline-none rounded-[5px] ' type='text' id='productName' name='productName' placeholder='Product Name' value={title} />
                    </div>


                    <div>
                        <p className='hidden lg:flex font-medium text-[15px] text-[#323232] pl-3 mb-1'>Discounted Price</p>
                        <input className='w-full border-[1px] border-[#AAAAAA] text-[10px] text-[#323232] lg:text-[14px] py-[6px] lg:py-[9px] px-[11px] placeholder:text-gray-200] outline-none rounded-[5px] ' type='number' id='Discounted Price' name='Discounted Price' placeholder='Discounted Price' value={discount} />
                    </div>

                    <div>
                        <p className='hidden lg:flex font-medium text-[15px] text-[#323232] pl-3 mb-1'>Original Price</p>
                        <input className='w-full border-[1px] border-[#AAAAAA] text-[10px] text-[#323232] lg:text-[14px] py-[6px] lg:py-[9px] px-[11px] placeholder:text-gray-200] outline-none rounded-[5px] ' type='number' id='Original Price' name='Original Price' placeholder='Original Price' value={price} />
                    </div>

                    <textarea id="message" name="message" placeholder="Product Description" rows="4" cols="50" className=' lg:hidden w-full border-[1px] border-[#AAAAAA] text-[10px] text-[#323232] lg:text-[14px] py-[6px] lg:py-[9px] px-[11px] placeholder:text-gray-200] outline-none rounded-[5px] ' >{description}</textarea>
                </div>


                <div className='lg:hidden flex items-center justify-end w-full space-x-3 lg:space-x-6 pt-2 lg:pt-4'>
                    <img onClick={viewClick} className='cursor-pointer w-[30px] lg:w-[40px] object-contain' src={`./creator/view.png`} alt='view' />
                    <img onClick={deleteClick} className='cursor-pointer w-[30px] lg:w-[40px] object-contain' src={`./creator/delete.png`} alt='view' />
                </div>

            </div>



            <div className='lg:w-full'>
                <p className='hidden lg:flex font-medium text-[15px] text-[#323232] pl-3 mb-1'>Product Description</p>

                <textarea id="message" name="message" placeholder="Product Description" rows="9" cols="50" className='hidden h-[221px] lg:flex w-full border-[1px] border-[#AAAAAA] text-[10px] text-[#323232] lg:text-[14px] py-[6px] lg:py-[9px] px-[11px] placeholder:text-gray-200] outline-none rounded-[5px] mb-2' >{description}</textarea>
            </div>



            <div className='hidden lg:w-fit pl-2 2xl:w-full 2xl:pl-0  lg:flex flex-col justify-between items-end h-full py-1 '>

                <button className=' w-[150px] lg:w-[180px] 2xl:w-[200px] rounded-[5px] border-[1px] border-[#AAAAAA] px-3 py-2 mt-2 flex items-center justify-center text-[12px] lg:text-[15px] text-[#323232] '>
                    Product Orders
                    <ChevronRightIcon className='h-4 lg:h-6 text-black ml-3' />
                </button>

                <div>

                    <button className=' w-[150px] lg:w-[180px] 2xl:w-[200px] rounded-[5px] border-[1px] border-[#54BAB9] px-3 py-2 mt-2 flex items-center text-[12px] lg:text-[15px] text-[#323232]'>
                        <EyeOffIcon className='h-4 lg:h-6 text-black mr-1 2xl:ml-3' />
                        Unpublish Product
                    </button>

                    <button className=' w-[150px] lg:w-[180px] 2xl:w-[200px] rounded-[5px] border-[1px] border-[#C25050] px-3 py-2 mt-2 flex  items-center text-[12px] lg:text-[15px] text-[#C25050]'>
                        <TrashIcon className='h-4 lg:h-6 text-[#C25050] mr-1 2xl:ml-3' />
                        Remove Product
                    </button>
                </div>
            </div>


        </div>
    )
}
