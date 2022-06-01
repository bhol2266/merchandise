import React, { useContext, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import videosContext from '../context/videos/videosContext'

export const LoginForm = () => {

    const { loginSidebar, setloginSidebar, singUpForm_Sidebar, setsingUpForm_Sidebar, signUpFormOTP_Sidebae, setsignUpFormOTP_Sidebar } = useContext(videosContext)

    const [Email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [sidebarclose, setsidebarclose] = useState(true)


    const validateEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        return (false)
    };


    const closeSidebar = () => {
        setloginSidebar(false)
        setsingUpForm_Sidebar(false)
        setsignUpFormOTP_Sidebar(false)

    }

    const ClickHereHandler = () => {
        setloginSidebar(false)
        setsingUpForm_Sidebar(true)
    }



    return (
        <div className={` overflow-hidden flex shadow-lg fixed top-0 right-0  z-10 bg-white ${loginSidebar ? "w-[330px]" : "w-0"} transition-all duration-300 `}>
            <img src='./signUpFormBar.png' className='min-w-[54px] h-screen'></img>

            <div className='ml-[28px]'>
                <div className='flex items-center  mt-[32px]  justify-between '>
                    <h1 className='text-[24px] text-[#BE8024] font-delius cursor-pointer lg:text-[30px] '>Clossum</h1>
                    <XCircleIcon onClick={closeSidebar} className='h-[36px] text-[#8e8e8e] cursor-pointer' />
                </div>



                <h2 className='mt-[50px] font-inter text-[18px] text-[#323232]'>
                    LOGIN
                </h2>

                <input onChange={(e) => { setEmail(e.target.value); console.log() }} className='text-[#323232] pb-1  outline-none border-[#323232] border-b-[1px] w-[220px] mt-[31px]' type='text' placeholder='E-Mail/Phone' />


                <input onChange={e => setpassword(e.target.value)} className='text-[#323232] w-[220px] pb-1 border-[#323232] border-b-[1px] outline-none mt-[23px]' type='password' placeholder='Password' />



                {/* Bottom */}

                <button className='font-normal text-[14px] text-center w-[154px] h-[30px] mt-[20px] mx-auto text-white hover:bg-[#519d9b] bg-[#54BAB9] rounded-[5px]  ml-[30px]'>Login</button>

                <div className='flex items-center mt-[35px] space-x-[10px] ml-[15px]'>
                    <h2 className='text-center  font-inter text-[#313131] text-[13px] '>Forgot Password ?</h2>

                    <h2 onClick={ClickHereHandler} className='text-center  font-inter text-[#313131] text-[13px] cursor-pointer hover:text-red-500'>Click Here</h2>
                </div>

                <div className='w-[73px] h-[51px] mx-auto mt-[41px] ml-[60px]'>
                    <h2 className='text-center  font-inter text-[#323232] text-[11px]'>Continue with</h2>
                    <div className='mt-[26px] flex justify-between'>
                        <Link href='\'>
                            <img src='./login/google.png' className='h-[25px] w-[25px] cursor-pointer'></img>
                        </Link>


                        <Link href='\'>
                            <img src='./login/facebook.png' className='h-[25px] w-[25px] cursor-pointer'></img>
                        </Link>

                    </div>

                </div>

                <div className='flex items-center mt-[150px] space-x-[10px] ml-[15px]'>
                    <h2 className='text-center  font-inter text-[#313131] text-[13px]'>New user ?</h2>

                    <button className='font-normal text-[14px] text-center w-[80px] h-[30px]  border-[1px] border-[#54BAB9] rounded-[5px] hover:bg-[#519d9b] hover:text-white '>Sign Up</button>
                </div>

            </div>

            <div>

            </div>


        </div>
    )
}
