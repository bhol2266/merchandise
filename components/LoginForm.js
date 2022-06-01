import React, { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'


export const LoginForm = () => {

    const [Email, setEmail] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [validateEmailState, setvalidateEmailState] = useState(null)



    const validateEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        return (false)
    };

    const closeSidebar = () => {

    }


    return (
        <div className='w-[330px] flex shadow-lg'>
            <img src='./signUpFormBar.png' className='w-[54px] h-screen bg-gradient-to-r from-[#ffffff] to-[#9DA667] '></img>

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

                    <h2 className='text-center  font-inter text-[#313131] text-[13px] cursor-pointer hover:text-red-500'>Click Here</h2>
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

                <div className='flex items-center mt-[200px] space-x-[10px] ml-[15px]'>
                    <h2 className='text-center  font-inter text-[#313131] text-[13px]'>New user ?</h2>

                    <button className='font-normal text-[14px] text-center w-[80px] h-[30px]  border-[1px] border-[#54BAB9] rounded-[5px] hover:bg-[#519d9b] hover:text-white '>Sign Up</button>
                </div>

            </div>

            <div>

            </div>


        </div>
    )
}
