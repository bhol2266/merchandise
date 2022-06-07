import React, { useContext, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import videosContext from '../context/videos/videosContext'
import { VerifyOTP } from '../lib/serverConfig'
import { GetToken } from '../lib/CookieLib'
import Router, { useRouter } from 'next/router';

export const SignUpFormOTP = () => {
    const router = useRouter();


    const { loginSidebar, setloginSidebar, singUpForm_Sidebar, setsingUpForm_Sidebar, signUpFormOTP_Sidebae, setsignUpFormOTP_Sidebar, OTPemail, setOTPemail, loggedIn, setloggedIn } = useContext(videosContext)

    const [Email, setEmail] = useState('')
    const [OTP, setOTP] = useState(null)




    const closeSidebar = () => {
        setloginSidebar(false)
        setsingUpForm_Sidebar(false)
        setsignUpFormOTP_Sidebar(false)

    }

    const verifyOTP = async (e) => {
        e.preventDefault()
        const jsonMessage = await VerifyOTP(OTP, GetToken())
        console.log(jsonMessage);
        if (jsonMessage.success === true) {
            closeSidebar()
            setloggedIn(true)
            router.push('/')
            return
        }
        if (jsonMessage.error === true) {
            alert(jsonMessage.message)
        }
    }

    return (
        <div className={` overflow-hidden flex shadow-lg absolute top-0 right-0  z-50 bg-white ${signUpFormOTP_Sidebae ? "w-[330px]" : "w-[330px]"} transition-all duration-300 `}>
            <img src='./signUpFormBar.png' className='w-[54px] h-screen bg-gradient-to-r from-[#ffffff] to-[#9DA667] '></img>

            <div className='ml-[28px]'>
                <div className='flex items-center  mt-[32px]  justify-between '>
                    <h1 className='text-[24px] text-[#BE8024] font-delius cursor-pointer lg:text-[30px] '>Clossum</h1>
                    <XCircleIcon onClick={closeSidebar} className='h-[36px] text-[#8e8e8e] cursor-pointer' />
                </div>



                <h2 className='mt-[50px] font-inter text-[16px] text-[#323232]'>
                    Enter Verification Code
                </h2>

           

                <div>
                    <h2 className='font-inter text-[11px] w-[210px] h-[26px] mt-[21px]'>
                        {`Please enter the 4-digit code we sent to
                        ${OTPemail}.`}
                    </h2>

                    <h3 className='text-[#001857] text-[11px] font-inter mt-[8px] cursor-pointer hover:text-[#0044ff]'>Need Help ?</h3>



                    <div className="divOuter mt-[20px]">
                        <div className="divInner">
                            <input onChange={e => { setOTP(e.target.value); console.log(e.target.value); }} className="partitioned" type="text" maxLength="4" />
                        </div>
                    </div>

                </div>





                {/* Bottom */}
                <h2 className='text-center w-[220px]  font-inter text-[12px] mt-[54px]'>By continuing, you agree to Clossum&apos;s
                    Terms of Use and Privacy Policy.
                </h2>
                <button onClick={verifyOTP} className='font-normal text-[14px] text-center w-[154px] h-[30px] mt-[18px] mx-auto text-white hover:bg-[#519d9b] bg-[#54BAB9] rounded-[5px]  ml-[30px]'>Continue</button>

                <div className='w-[73px] h-[51px] mx-auto mt-[31px] ml-[60px]'>
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

                <div className='flex items-center mt-[40px] space-x-[10px] ml-[15px]'>
                    <h2 className='text-center  font-inter text-[#313131] text-[13px]'>Existing user ?</h2>

                    <button className='font-normal text-[14px] text-center w-[80px] h-[30px]  border-[1px] border-[#54BAB9] rounded-[5px] hover:bg-[#519d9b] hover:text-white '>Sign In</button>
                </div>

            </div>

            <div>

            </div>


        </div>
    )
}
