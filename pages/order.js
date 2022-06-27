import React, { useEffect, useState } from 'react'
import { OrderItem } from '../components/OrderItem'
import { ArrowDownIcon } from '@heroicons/react/outline'
import { FilterIcon } from '@heroicons/react/outline'
import { getOrderedItems, } from '../lib/serverConfig'



const Order = () => {

    const [OrderItems, setOrderItems] = useState([]);


    useEffect(async () => {
        await getOrderedItems().then(res => {
            var array = []
            res.transactionLogtype.map(obj => {
                var shippingid = obj.shippingAddress.id
                var shippingDate = obj.shippingDate
                var orderId = obj.orderId
                obj.cart.items.map(obj => {
                    obj['shippingid'] = shippingid
                    obj['shippingDate'] = shippingDate
                    obj['orderId'] = orderId
                    array.push(obj)
                })
            })

            setOrderItems(array)
        }).catch(err => {
            console.log(err);
        })




    }, [])



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


                {OrderItems.map(obj => {
                    return (
                        <OrderItem key={obj.product.id} orderDetails={obj} />
                    )
                })}



            </div>
        </div>
    )
}

export default Order


