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
import { BeatLoader } from 'react-spinners';


const CheckOut = ({ logInCheck }) => {

    const router = useRouter({ logInCheck })
    const { editAddress, seteditAddress, editAddressArrayIndex, addressArray, setaddressArray } = useContext(MerchContext);
    const [beatloader, setbeatloader] = useState(true);
    const { setloginSidebar } = useContext(MerchContext)

    async function fetchData() {
        try {
            const response = await getAddress()
            if (response.data !== 'error') {
                setaddressArray(response.data.address)
                setbeatloader(false)

            }
        } catch (error) {
            console.log(error)
            setbeatloader(false)

        }
        return
      }

    useEffect( () => {
        fetchData()

    }, [])







    const newAddressOnClick = () => {
        seteditAddress(true)
    }

    if (beatloader) {
        return (
            <div className="flex justify-center items-center w-full h-[500px] mt-3 ">
                <BeatLoader loading size={20} color={'#54BAB9'} />
            </div>
        )
    }

    if (!logInCheck) {
        return (
            <div className='flex flex-col items-center justify-center mb-[500px]'>
                <h1 className="font-inter text-[22px] text-[#323232] w-full text-center mt-[200px] mb-4 ">Please Login First to see Address</h1>

                <button onClick={() => {
                    setloginSidebar(true)
                }} className='font-inter text-[16px] font-medium px-6 py-2 bg-[#54BAB9] text-white rounded cursor-pointer'>Login</button>
            </div>
        )
    }


    return (

        <div className='p-[13px] lg:px-[45px] lg:py-[20px] mb-[250px]'>
            <Head>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
            </Head>
            <Script type="application/javascript" crossorigin="anonymous" src={` https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/sInflX13949396370624.js`} />



            <h2 className='text-[14px] lg:text-[22px] text-[#323232] font-inter mb-4'>ADDRESS</h2>
     


            <div className='flex flex-col lg:flex-row items-center lg:items-start  justify-between  lg:space-x-6 xl:space-x-14 xl:justify-between   2xl:px-[110px]'>

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


