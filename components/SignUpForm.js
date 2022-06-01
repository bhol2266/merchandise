import React, { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'


export const SignUpForm = () => {

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
            <img src='./signUpFormBar.png' className='min-w-[54px] h-screen'></img>

            <div className='ml-[28px]'>
                <div className='flex items-center  mt-[32px]  justify-between '>
                    <h1 className='text-[24px] text-[#BE8024] font-delius cursor-pointer lg:text-[30px] '>Clossum</h1>
                    <XCircleIcon onClick={closeSidebar} className='h-[36px] text-[#8e8e8e] cursor-pointer' />
                </div>



                <h2 className='mt-[50px] font-inter text-[18px] text-[#323232]'>
                    SIGN UP
                </h2>

                <div className='flex space-x-4 items-center mt-[23px] border-[#323232] border-b-[1px]  w-[220px]'>
                    <input onChange={(e) => { setEmail(e.target.value); console.log() }} className='text-[#323232] pb-1  outline-none ' type='text' placeholder='E-Mail' />
                    {Email.length > 10 &&
                        <>
                            <CheckCircleIcon className={`text-green-400 h-[16px] ${validateEmail(Email) ? "" : "hidden"}`} />
                            <XCircleIcon className={`text-red-400 h-[16px] ${!validateEmail(Email) ? "" : "hidden"}`} />
                        </>
                    }

                </div>
                <input onChange={e => setfirstName(e.target.value)} className='text-[#323232] w-[220px] pb-1 border-[#323232] border-b-[1px] outline-none mt-[23px]' type='text' placeholder='First Name' />

                <input onChange={e => setlastName(e.target.value)} className='text-[#323232] w-[220px] pb-1 border-[#323232] border-b-[1px] outline-none mt-[23px]' type='text' placeholder='Last Name' />

                <input onChange={e => setphone(e.target.value)} className='text-[#323232] w-[220px] pb-1 border-[#323232] border-b-[1px] outline-none mt-[23px]' type='number' placeholder='Phone' maxLength={10} />

                <input onChange={e => setpassword(e.target.value)} className='text-[#323232] w-[220px] pb-1 border-[#323232] border-b-[1px] outline-none mt-[23px]' type='password' placeholder='Password' />

                <input onChange={e => setconfirmPassword(e.target.value)} className='text-[#323232] w-[220px] pb-1 border-[#323232] border-b-[1px] outline-none mt-[23px]' type='password' placeholder='Confirm Password' />


                {/* Bottom */}
                <h2 className='text-center w-[220px]  font-inter text-[12px] mt-[54px]'>By continuing, you agree to Clossum&apos;s
                    Terms of Use and Privacy Policy.
                </h2>
                <button className='font-normal text-[14px] text-center w-[154px] h-[30px] mt-[18px] mx-auto text-white hover:bg-[#519d9b] bg-[#54BAB9] rounded-[5px]  ml-[30px]'>Continue</button>

                <div className='flex items-center mt-[35px] space-x-[10px] ml-[15px]'>
                    <h2 className='text-center  font-inter text-[#313131] text-[13px]'>Existing user ?</h2>

                    <button className='font-normal text-[14px] text-center w-[80px] h-[30px]  border-[1px] border-[#54BAB9] rounded-[5px] hover:bg-[#519d9b] hover:text-white '>Sign In</button>
                </div>

            </div>

            <div>

            </div>


        </div>
    )
}
