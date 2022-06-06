import React from 'react'
import { OrderItem } from '../components/OrderItem'
import { ArrowDownIcon } from '@heroicons/react/outline'
import { FilterIcon } from '@heroicons/react/outline'

const Order = () => {
    return (
        <div className='px-[14px] lg:px-[50px] py-[15px]'>

            <div className='flex items-center space-x-[19px] item-center justify-between w-full  mb-[16px]'>
                <h2 className='text-[14px] lg:text-[22px] text-[#323232] font-inter font-semibold'>ORDERS</h2>
                <div className='flex items-center space-x-[6px] cursor-pointer'>
                    <FilterIcon className='h-[20px] lg:h-[24px]' />
                    <h2 className='text-[14px] lg:text-[18px] text-[#323232] font-inter'>FILTER</h2>
                </div>
            </div>


            <div className='flex  flex-wrap  items-center justify-between  xl:space-y-[40px] md:space-y-[40px] mb-8'>
                
                <OrderItem orderDetails={{ name: 'Jet Black Half Sleeve T-Shirt', img: './homepageImages/woman.png', price: "599", mrp: "799", size: "M", colour: "Red", quantity: "1", deliveryMessage: "Delivery bt Saturday 20 October" }} />


                <OrderItem orderDetails={{ name: 'Jet Black Half Sleeve T-Shirt', img: './homepageImages/woman3.png', price: "599", mrp: "799", size: "M", colour: "Red", quantity: "1", deliveryMessage: "Cancelled" }} />


                <OrderItem orderDetails={{ name: 'Jet Black Half Sleeve T-Shirt', img: './homepageImages/woman2.png', price: "599", mrp: "799", size: "M", colour: "Red", quantity: "1", deliveryMessage: "Delivery bt Saturday 20 October" }} />



            </div>
        </div>
    )
}

export default Order