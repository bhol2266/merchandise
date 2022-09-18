import { Router, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { BagItem } from '../components/bagItem'
import { GetbagItems, applyCoupon } from '../lib/serverConfig';
import Head from 'next/head';
import Script from 'next/script';
import { getProductCart, deleteProductCart } from '../lib/Product_API'
import { BeatLoader } from 'react-spinners';
import Bill_Invoice from '../components/Bill_Invoice';


const Mybag = () => {




    const router = useRouter()
    const [bagitems, setbagitems] = useState([])
    const [cartItemId, setcartItemId] = useState([]);

    const [beatloader, setbeatloader] = useState(true);

    useEffect(async () => {
        try {
            const response = await getProductCart()
            console.log(response);

            if (response.sucess) {
                setbeatloader(false)
                setbagitems(response.data.cartData.products)
            }
        } catch (error) {
            setbeatloader(false)
            console.log(error)
        }

    }, [])






    if (beatloader) {
        return (
            <div className="flex justify-center items-center w-full h-[500px] mt-3 ">
                <BeatLoader loading size={20} color={'#54BAB9'} />
            </div>
        )
    }

    return (
        <div className='px-[13px] lg:px-[45px]  mx-auto select-none mb-[200px]'>

            <div className='flex items-center justify-between lg:text-[22px] lg:px-[10px] '>
                <h1 className='text-[#323232] lg:text-[22px] text-[18px] font-inter'>MY BAG</h1>

                <div className='lg:w-[260px] h-[17px] flex items-center my-[20px] mx-2'>
                    <p className='lg:h-[20px] lg:w-[20px] w-[10px] h-[10px] rounded-full bg-[#54BAB9]'></p>
                    <span className='lg:w-[92px] w-[46px] border-b-[1.5px] lg:border-b-[2px] border-[#54BAB9]'></span>
                    <p className='lg:h-[20px] lg:w-[20px] border-[1px] border-[#54BAB9] w-[10px] h-[10px] rounded-full '></p>
                    <span className='lg:w-[92px] w-[46px] border-b-[1.5px] lg:border-b-[2px] border-[#ffffff]'></span>
                    <p className='lg:h-[20px] lg:w-[20px] border-[1px] border-[#54BAB9] w-[10px] h-[10px] rounded-full '></p>

                </div>
            </div>

            <div className=' mx-auto  md:flex md:space-x-12 lg:space-x-12  lg:justify-between xl:justify-around  xl:space-x-56  '>

                {/* Item  */}
                <div className='items-center  flex flex-col md:grow xl:grow-0 xl:w-1/2'>

                    {bagitems && bagitems.map((item, index) => {
                        return (
                            <BagItem key={item.cartItemid} cartID={cartItemId[index]} productdetails={item} />

                        )
                    })

                    }

                </div>

                
                <Bill_Invoice />



            </div>

        </div>
    )
}
export default Mybag


