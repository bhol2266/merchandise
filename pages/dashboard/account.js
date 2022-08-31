import React, { useEffect, useState } from 'react'

import { LogoutIcon } from '@heroicons/react/solid'
import Link from 'next/link';

const Account = () => {

    const [MenuChanger, setMenuChanger] = useState('INFO');





    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [artistName, setartistName] = useState('');
    const [phone, setphone] = useState('');
    const [country, setcountry] = useState('');
    const [state, setstate] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [youtubeLink, setyoutubeLink] = useState('');
    const [fbLink, setfbLink] = useState('');
    const [instaLink, setinstaLink] = useState('');
    const [otherLink, setotherLink] = useState('');






    return (

        <div className='mx-[14px] lg:mx-[30px] xl:mx-[50px] 2xl:mx-[80px] my-[15px] mb-16 '>

            <div className='flex items-center justify-between'>
                <h1 className='font-inter text-[#323232] text-[14px] lg:text-[22px]'>ACCOUNT</h1>


                <div className='flex items-center justify-center space-x-2 lg:space-x-4 lg:ml-[300px] xl:ml-[500px] 2xl:ml-[600px]'>
                    <h1 onClick={() => { setMenuChanger('INFO') }} className={`cursor-pointer font-inter text-[#000000] text-[10px] lg:text-[15px] ${MenuChanger === 'INFO' ? "underline" : ""}`}>User Info</h1>
                    <h1 onClick={() => { setMenuChanger('BANK') }} className={`cursor-pointer font-inter text-[#000000] text-[10px] lg:text-[15px] ${MenuChanger === 'BANK' ? "underline" : ""}`}>Bank Details</h1>
                </div>


                <button className='flex lg:scale-125 items-center justify-center px-4 py-2 font-inter text-[10px] text-white rounded-[5px] bg-[#54BAB9]'>
                    <LogoutIcon className='h-4 text-white mr-1' />
                    Logout
                </button>
            </div>

            <h1 className='font-inter text-[#323232] text-[12px] lg:text-[16px] mt-3 lg:mt-1'>Manage User Info & Banking Details</h1>




            {MenuChanger === 'INFO' &&

                <div className='flex  items-start justify-center mt-6 lg:justify-between '>


                    <img className=' hidden md:inline  w-1/2 xl:w-3/4 pt-[40px]  xl:mr-8 mr-6' src="/creator/poster2.png" alt="" />

                    <form className='w-full mx-auto  sm:w-4/5 md:w-full  2xl:w-2/5 xl:w-4/5'>

                        <div className='flex items-center justify-between space-x-4 mt-4'>

                            <div className='w-full '>
                                <label className='block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>First Name</label>
                                <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={firstName} onChange={(e) => { setfirstName(e.target.value) }} id='First Name' name='First Name' placeholder='Kim Jong UN' type='text' />

                            </div>

                            <div className='w-full '>

                                <label className='block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Last Name</label>
                                <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={lastName} onChange={(e) => { setlastName(e.target.value) }} id='Last Name' name='Last Name' placeholder='Kim Jong UN' type='text' />

                            </div>

                        </div>




                        <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Artist Name</label>
                        <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={artistName} onChange={(e) => { setartistName(e.target.value) }} id='Artist Name' name='Artist Name' placeholder='Kim Jong UN' type='text' />



                        <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Phone</label>
                        <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={phone} onChange={(e) => { setphone(e.target.value) }} id='Phone' name='Phone' placeholder='9876543210' type='number' />



                        <div className='flex items-center justify-between space-x-4 mt-4'>

                            <div className='w-full '>
                                <label className='block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Country</label>
                                <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={country} onChange={(e) => { setcountry(e.target.value) }} id='Country' name='Country' placeholder='India' type='text' />
                            </div>


                            <div className='w-full '>
                                <label className=' block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>State</label>
                                <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={state} onChange={(e) => { setstate(e.target.value) }} id='state' name='state' placeholder='Delhi' type='text' />
                            </div>

                        </div>


                        <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>E-Mail</label>
                        <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={email} onChange={(e) => { setemail(e.target.value) }} id='email' name='email' placeholder='abcd@gmail.com' type='email' />



                        <div className='flex items-center justify-between space-x-4 mt-4'>

                            <div className='w-full '>
                                <label className='block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Password</label>
                                <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={password} onChange={(e) => { setpassword(e.target.value) }} id='password' name='password' placeholder='*********' type='password' />

                            </div>

                            <div className='w-full '>

                                <label className='block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Confirm Password</label>
                                <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }} id='confirmPassword' name='confirmPassword' placeholder='*********' type='password' />


                            </div>

                        </div>








                        <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Youtube Channel Link</label>
                        <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={youtubeLink} onChange={(e) => { setyoutubeLink(e.target.value) }} id='youtubeLink' name='youtubeLink' placeholder='https://www.youtube.com/c/kundan' type='text' />



                        <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Facebook Channel Link</label>
                        <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={fbLink} onChange={(e) => { setfbLink(e.target.value) }} id='fbLink' name='fbLink' placeholder='https://www.facebook.com/kundan' type='text' />



                        <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Instagram Channel Link</label>
                        <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={instaLink} onChange={(e) => { setinstaLink(e.target.value) }} id='instaLink' name='instaLink' placeholder='https://www.instagram.com/kundan' type='text' />



                        <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Other Link</label>
                        <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={otherLink} onChange={(e) => { setotherLink(e.target.value) }} id='otherLink' name='otherLink' placeholder='https://' type='text' />



                        <div className='mt-6 flex item-center justify-between mx-1 lg:mx-2'>
                            <div className='flex items-center justify-center space-x-2'>
                                <h2 className='font-inter font-medium text-[#323232] text-[14px] lg:text-[16px]'>Forgot Password ?</h2>

                                <Link href='/'>
                                    <a className='font-inter font-medium text-[#323232] text-[14px] lg:text-[16px] underline'>Click Here</a>
                                </Link>

                            </div>

                            <button className='lg:mr-2 lg:scale-150  px-4 py-2 font-inter text-[10px] text-white rounded-[5px] bg-[#54BAB9]'>
                                Confirm
                            </button>
                        </div>


                    </form>


                </div>

            }




        </div>
    )
};
export default Account;