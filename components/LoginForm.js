import React, { useContext, useEffect, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import MerchContext from '../context/MerchContext'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'



export const LoginForm = () => {

    const router = useRouter()

    const { loginSidebar, setloginSidebar } = useContext(MerchContext)



    const closeSidebar = () => {
        setloginSidebar(false)

    }



    const SignIn = async (route) => {
        Cookies.set('role', 'user', { expires: 7 })
        router.push(`/api/${route}`)

    }



    return (
        <div className={` overflow-hidden flex flex-col justify-between shadow-lg fixed top-0 right-0  z-10 bg-loginLayout_bg ${loginSidebar ? "w-[330px] xl:w-[400px]" : "w-0"} transition-all duration-300 h-screen bg-no-repeat bg-cover	`}>

            <div className='px-[28px]  w-full'>
                <div className='flex items-center  mt-[32px]  justify-between '>
                    <h1 className='text-[24px] text-[#54BAB9] font-delius cursor-pointer lg:text-[30px] '>Closm</h1>
                    <XCircleIcon onClick={closeSidebar} className='text-[#54BAB9] h-[30px]  cursor-pointer' />
                </div>



                <h2 className='mt-[50px] font-inter text-[18px] text-[#323232]'>
                    SIGN UP / SIGN IN
                </h2>


                <div className='mt-[86px] w-fit mx-auto  flex flex-col items-start space-y-12'>

                    <div onClick={() => SignIn('user/google')}
                        className='flex items-center space-x-4 cursor-pointer py-2 px-3 rounded-md bg-white'>
                        <img src='/login/google.png' className='lg:h-[38px] lg:w-[38px] h-[28px] w-[28px] cursor-pointer'></img>
                        <h2 className='font-medium font-inter text-[#323232] text-[11px] lg:text-[16px]'>Continue with Google</h2>
                    </div>


                    <div onClick={() => SignIn('user/facebook')}
                        className='flex items-center space-x-4 cursor-pointer py-2 px-3 rounded-md bg-white'>
                        <img src='/login/facebook.png' className='lg:h-[38px] lg:w-[38px] h-[28px] w-[28px] cursor-pointer'></img>
                        <h2 className='font-medium font-inter text-[#323232] text-[11px] lg:text-[16px]'>Continue with Facebook</h2>
                    </div>





                </div>

            </div>




            <img src='/creator/poster2.png' className='px-[28px]  cursor-pointer absolute bottom-[70px] right-0 left-0 '></img>



        </div>
    )
}
