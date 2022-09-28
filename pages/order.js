import React, { useContext, useEffect, useState } from 'react'
import { OrderItem } from '../components/OrderItem'
import { ArrowDownIcon } from '@heroicons/react/outline'
import { FilterIcon } from '@heroicons/react/outline'
import { getOrderedItems, } from '../lib/serverConfig'
import { orderGet_API } from '../lib/Order_API'
import { BeatLoader } from 'react-spinners';
import { setCookies, getCookie } from "cookies-next";
import MerchContext from '../context/MerchContext'


const Order = ({ logInCheck }) => {

    const [OrderItems, setOrderItems] = useState([]);
    const [beatloader, setbeatloader] = useState(true);
    const { setloginSidebar } = useContext(MerchContext)


    useEffect(async () => {


        try {
            const response = await orderGet_API()
            if (response.sucess) {
                setbeatloader(false)
                setOrderItems(response.data.orders)
            }
        } catch (error) {
            setbeatloader(false)
            console.log(error)
        }

    }, [])

  

    if (!logInCheck) {
        return (
            <div className='flex flex-col items-center justify-center mb-[500px]'>
                <h1 className="font-inter text-[22px] text-[#323232] w-full text-center mt-[200px] mb-4 ">Please Login First to see OrderItems</h1>

                <button onClick={() => {
                    setloginSidebar(true)
                }} className='font-inter text-[16px] font-medium px-6 py-2 bg-[#54BAB9] text-white rounded cursor-pointer'>Login</button>
            </div>
        )
    }

    if (beatloader) {
        return (
            <div className="flex justify-center items-center w-full h-[500px] mt-3 ">
                <BeatLoader loading size={20} color={'#54BAB9'} />
            </div>
        )
    }



    return (
        <div className='px-[14px] lg:px-[50px] py-[15px]'>

            <div className='flex items-center space-x-[19px] item-center justify-between w-full  mb-[16px]'>
                <h2 className='text-[18px] lg:text-[22px] text-[#323232] font-inter '>ORDERS</h2>
                <div className='flex items-center space-x-[6px] cursor-pointer'>
                    <FilterIcon className='h-[20px] lg:h-[24px]' />
                    <h2 className='text-[14px] lg:text-[18px] text-[#323232] font-inter'>FILTER</h2>
                </div>
            </div>


            <div className='flex  flex-wrap  items-center justify-between  xl:space-y-[40px] md:space-y-[40px] mb-8'>


                {OrderItems.map(obj => {
                    return (
                        <OrderItem key={obj._id} orderDetails={obj} />
                    )
                })}



            </div>
        </div>
    )
}

export default Order

export async function getServerSideProps({ req, res }) {

    let logInCheck = false


    const cookieExists = getCookie("role", { req, res });
    const accessToken = getCookie("accessToken", { req, res });


    if (cookieExists === 'user' && typeof accessToken !== 'undefined' && accessToken.length > 20) {
        logInCheck = true
    }

    return {
        props: {
            logInCheck: logInCheck

        },
    }



}



