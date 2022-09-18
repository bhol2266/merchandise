import { noSSR } from 'next/dynamic'
import React, { useContext, useEffect, useState } from 'react'
import { addAddress, updateAddress } from '../lib/serverConfig'
import Head from 'next/head'
import Script from 'next/script'
import axios from 'axios';
import { GetbagItems, applyCoupon, addPaymentDetails } from '../lib/serverConfig';
import { getCookie } from 'cookies-next'
import Router, { useRouter } from 'next/router'
import { postAddress, getAddress, putAddress, deletetAddress } from '../lib/Address_API'
import SavedAddress from '../components/SavedAddress'
import { PlusIcon } from '@heroicons/react/solid'
import AddressModal from '../components/customise/Modals/AdressModal'
import MerchContext from '../context/MerchContext'
import AddressForm from '../components/AddressForm'
import Bill_Invoice from '../components/Bill_Invoice'


const CheckOut = () => {

    const router = useRouter()
    const { editAddress, seteditAddress, editAddressArrayIndex, addressArray, setaddressArray } = useContext(MerchContext);



    useEffect(async () => {
        try {
            const response = await getAddress()
            if (response.data !== 'error') {
                setaddressArray(response.data.address)
            }
        } catch (error) {
            console.log(error)
        }
        return

    }, [])







    const newAddressOnClick = () => {
        seteditAddress(true)
    }


    return (
        <div className='p-[13px] lg:px-[45px] lg:py-[20px] mb-[250px]'>
            <Head>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
            </Head>
            <Script type="application/javascript" crossorigin="anonymous" src={` https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/sInflX13949396370624.js`} />



            <h2 className='font-semibold text-[14px] lg:text-[22px] text-[#323232] font-inter mb-4'>ADDRESS</h2>
            {/* <button onClick={() => { setopenSavedAddress(!openSavedAddress) }} className='text-[12px] font-inter underline text-theme'>View Saved Address</button> */}


            <div className='flex flex-col lg:flex-row items-center lg:items-start  justify-between  lg:space-x-6 xl:justify-between xl:px-[70px]  2xl:px-[110px]'>

                {editAddress &&
                    <AddressForm data={addressArray[editAddressArrayIndex]} />

                }


                {!editAddress &&

                    <div className='sm:w-[400px] lg:w-3/4 xl:w-1/2 lg:mr-6 xl:mr-16 lg:space-y-12'>
                        {addressArray.map((obj, index) => {

                            return (
                                <SavedAddress key={obj._id} data={obj} index={index} />
                            )

                        })}

                        <button onClick={newAddressOnClick} className="font-inter my-6 space-x-2 flex items-center justify-start">
                            <h2 className="underline font-medium text-[12px] lg:text-[14px]">Add New Address</h2>
                            <PlusIcon className="text-theme h-[18px] lg:h-[20px]" />
                        </button>
                    </div>
                }



             
                <Bill_Invoice/>
            </div>


        </div>
    )
}
export default CheckOut

