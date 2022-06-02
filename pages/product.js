import React, { useState } from 'react'
import { MinusIcon } from '@heroicons/react/solid'
import { PlusIcon } from '@heroicons/react/solid'
import { Itemlist } from '../components/Itemlist'

const slideImages = ["image1", "image2", "image3"]
const colorsAvailable = [
    { name: "r1", selected: false },
    { name: "r2", selected: true },
    { name: "r3", selected: false },
    { name: "r1", selected: false },
    { name: "r5", selected: false },
    { name: "r6", selected: false },
]
const sizeAvailable = [
    { name: "S", selected: false },
    { name: "M", selected: true },
    { name: "L", selected: false },
    { name: "XL", selected: false },
    { name: "2XL", selected: false }]

const Product = () => {
    const [itemQuantity, setitemQuantity] = useState(1)
    const [pincode, setpincode] = useState('31245')


    const checkPincode = () => {

    }
    return (
        <div className='px-[15px] lg:px-[45px] my-[15px]'>
            <div className='lg:h-[450px] md:flex md:space-x-8 md:justify-around sm:items-center sm:justify-between'>
                <div className=' h-[316px] sm:justify-around md:h-[380px] lg:h-full  flex items-center justify-between sm:space-x-3'>

                    <div className='flex flex-col h-full  justify-between lg:hidden'>
                        {slideImages.map(image => {
                            return (
                                <img key={image} cla src={`./product/${image}.png`} className='h-[95px] ' ></img>
                            )
                        })}
                    </div>

                    <div className='overflow-scroll flex items-center'>
                        <img cla src='./product/image.png' className='h-full w-[259px] lg:w-[442px] ' ></img>
                        <img cla src='./product/image.png' className='h-full w-[259px] lg:w-[442px] ' ></img>
                        <img cla src='./product/image.png' className='h-full w-[259px] lg:w-[442px] ' ></img>
                    </div>
                </div>

                <div className='grow'>
                    <div className='mt-[15px] pb-[15px] border-b-[0.5px] border-[#CCCCCC] '>
                        <div className='w-full flex items-center justify-between'>
                            <h2 className='font-inter text-[#19191D] text-[14px] lg:text-[18px]'>Jet Black Half Sleeve T-Shirt</h2>
                            <h3 className='text-[#C25050] font-inter text-[14px] lg:text-[16px] ml-12px'>30% OFF</h3>
                        </div>

                        <div className='flex items-center space-x-1 justify-start '>
                            <h2 className='font-inter  text-[15px] lg:text-[24px] font-semibold text-[#19191D]'>₹499</h2>
                            <h3 className='font-inter text-[10px] lg:text-[13px] text-[#787885] line-through '>₹799</h3>
                        </div>
                    </div>

                    <div className='mt-[15px]'>
                        <div className='flex items-center space-x-[10px]'>
                            <h1 className='text-[11px] text-[#444444]'>Choose Colour</h1>
                            <h1 className='font-inter font-semibold text-[11px] text-[#07002F]'>(Beige White)</h1>
                        </div>
                        <div className='mt-[15px] flex items-center space-x-[6px] pb-[15px] border-b-[0.5px] border-[#CCCCCC]'>
                            {colorsAvailable.map(image => {
                                return (
                                    <img key={image.name} cla src={`./product/${image.name}.png`} className={`h-[35px] ${image.selected ? "border-[2px]" : ""} border-[#54BAB9] rounded-lg`} ></img>

                                )
                            })}
                        </div>

                    </div>

                    <div className='mt-[15px] pb-[15px] border-b-[0.5px] border-[#CCCCCC] '>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[11px] text-[#5A5A5A] font-inter'>Choose Size</h1>
                            <div className='flex items-center space-x-1'>
                                <img src='./product/size_chart.svg'></img>
                                <h1 className='cursor-pointer text-[10px] text-[#54BAB9] font-inter'>Size Chart</h1>
                            </div>
                        </div>

                        <div className='mt-[15px] flex items-center space-x-[17px]'>
                            {sizeAvailable.map(size => {
                                return (
                                    <div key={size.name} className={`${size.selected ? "border-[2px] border-[#54BAB9]" : "border-[1px] border-[#E5E5E5] cursor-pointer"} h-[35px] w-[35px] rounded-lg  flex items-center justify-center`}>
                                        <h1 className='text-[11px] font-poppins font-light text-[#313131] text-center'>{size.name}</h1>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className='mt-[15px] pb-[15px] flex items-center justify-between '>
                        <div>
                            <h1 className='font-inter text-[11px] text-[#5A5A5A]'>Quantity</h1>
                            <div className='mt-[8px] flex items-center justify-around lg:w-[120px] lg:h-[36px] w-[86px] h-[30px] rounded-md border-[1px] border-[#E5E5E5] shadow'>
                                <MinusIcon onClick={() => { setitemQuantity(itemQuantity - 1) }} className='w-[10px] lg:w-[14px] text-[#313131] cursor-pointer' />
                                <span className='font-manrope text-[11px] lg:text-[16px] text-[#313131] '>{itemQuantity > 0 ? itemQuantity : 1}</span>
                                <PlusIcon onClick={() => { setitemQuantity(itemQuantity + 1) }} className='w-[10px] lg:w-[14px] text-[#313131] cursor-pointer' />
                            </div>
                        </div>

                        <div>
                            <h1 className='font-inter text-[9px] text-[#1B1B1B] w-[171px] pr-4'>Enter PIN code to check delivery time &
                                Pay on Delivery Availability</h1>
                            <div className='mt-[10px] flex items-center justify-between  border-b-[0.5px] border-[#969696]'>
                                <input className='outline-none text-[11px] text-[#5A5A5A]' onChange={e => setpincode(e.target.value)} type='number' placeholder='Enter Pincode' />
                                <h1 className='font-inter text-[11px] text-[#323232] cursor-pointer' onClick={checkPincode}>Check</h1>
                            </div>

                        </div>
                    </div>


                    <div className='flex items-center'>
                        <img src='./homepageImages/heart.png' className='mr-[9px] w-[40px] p-[4px] rounded border-[1px] border-[#CACACA]'></img>
                        <button className='grow lg:text-[16px]   text-white h-[40px] bg-[#54BAB9] hover:bg-[#458b8a]  rounded-[5px] text-center my-4 font-inter font-semibold'>
                            ADD TO BAG
                        </button>
                    </div>
                </div>
            </div>

            <div className='mt-[20px] px-2'>
                <div className='flex items-center space-x-[25px]'>
                    <h2 className='text-[13px] text-[#787885] font-inter'>Description</h2>
                    <h2 className='cursor-pointer font-inter text-[#54BAB9] text-[13px] border-b-[1.5px] border-[#54BAB9]'>Return Policy</h2>
                </div>

                <h2 className='text-[12px] font-DMsans mt-[13px] text-[#313131]'>Return Policy</h2>
                <div className='space-x-2 flex items-center pl-2 mt-[6px]'>
                    <span className='w-1 h-1 mt-[3px] rounded-full bg-black text-[10px]'></span>
                    <p className='text-[10px]'>100% Cotton</p>
                </div>
                <div className='space-x-2 flex items-center pl-2 mt-[4px]'>
                    <span className='w-1 h-1 mt-[3px] rounded-full bg-black text-[10px]'></span>
                    <p className='text-[10px]'>Made In India</p>
                </div>

                <h1 className='text-[10px] font-inter text-[#313131] mt-[8px] leading-[20px]'>
                    Amp your style with this YUMM Men&apos;s Round Neck Varsity Half Sleeve T-Shirt.
                    Style this t-shirt with a pair of jeans andsliders for a get-together with friends.
                    Country of Origin : India

                    REGULAR FIT

                    Fitted at Chest and Straight on Waist Down

                    180 GSM SJ COTTON, COTTON LYCRA

                    Classic, lightweight jersey fabric comprising 100% cotton.
                </h1>

            </div>

            <div className='sm:px-[12px] xs:px-[20px] px-[10px] lg:px-[50px]'>
                <Itemlist />
            </div>
        </div>
    )
}

export default Product