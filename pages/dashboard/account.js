import React, { useContext, useEffect, useState } from 'react'

import { LogoutIcon } from '@heroicons/react/solid'
import Link from 'next/link';
import { statesOfINdia } from '../../Data/statesOfINdia';
import Cookies from 'js-cookie'

import { useRouter } from 'next/router';
import MerchContext from '../../context/MerchContext';
import { setCookies, getCookie } from "cookies-next";
import { postUserinfo, getUserinfo, postAccountInfo, getAccountInfo } from "../../lib/Creator_API";
import { ToastContainer, toast } from 'react-toastify';



const Account = () => {


    async function fetchData() {
        try {
            const response = await getUserinfo()
            console.log(response);
            if (response.success) {
                console.log(response);
                setfirstName(response.data.firstName)
                setlastName(response.data.lastName)
                setphone(response.data.mobileNumber)
                setcountry(response.data.country)
                setyoutubeLink(response.data.socialMedia.youtubeLink)
                setfbLink(response.data.socialMedia.fbLink)
                setinstaLink(response.data.socialMedia.instagram)
                setotherLink(response.data.socialMedia.other)

               
            }
        } catch (error) {
            console.log(error)
        }

        try {
            const response = await getAccountInfo()
            console.log(response);
            if (response.success) {
                console.log(response);
                setaccountNumber(response.data.bankAccountNumber)
                setIFSC(response.data.bankIfscCode)
                setaccountName(response.data.accountHolderName)
                setupiID(response.data.upiId)
            }
        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        fetchData()
    }, []);

    const { NavbarUserORcreator, setNavbarUserORcreator } = useContext(MerchContext)
    const route = useRouter()
    const [MenuChanger, setMenuChanger] = useState('INFO');



    // Creators Info

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [artistName, setartistName] = useState('');
    const [phone, setphone] = useState('');
    const [country, setcountry] = useState('India');
    const [state, setstate] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [youtubeLink, setyoutubeLink] = useState('');
    const [fbLink, setfbLink] = useState('');
    const [instaLink, setinstaLink] = useState('');
    const [otherLink, setotherLink] = useState('');

    console.log(state);


    // Bank details

    const [accountNumber, setaccountNumber] = useState();
    const [IFSC, setIFSC] = useState();
    const [accountName, setaccountName] = useState();
    const [upiID, setupiID] = useState();


    const logout = () => {

        Cookies.remove('refreshToken')
        Cookies.remove('accessToken')
        Cookies.set('role', 'user')
        Cookies.remove('email')
        Cookies.remove('name')


        setNavbarUserORcreator('')
        window.open(process.env.FRONTEND_URL, "_self");
    }

    const submitFormAccountDetails = async () => {

        if (firstName === '') {
            toast.info("Enter firstName")
            return
        }

        if (lastName === '') {
            toast.info("Enter lastName")
            return
        }
        if (phone === '') {
            toast.info("Enter phone")
            return
        }
        if (state === '') {
            toast.info("Select State")
            return
        }



        let data = {
            firstName: firstName,
            lastName: lastName,
            mobileNumber: phone,
            country: country,
            state: state,
            socialMedia: {
                youtube: youtubeLink,
                instagram: instaLink,
                facebook: fbLink,
                other: otherLink
            }
        }



        try {
            const response = await postUserinfo(data)
            console.log(response);
            if (response.success) {
                console.log(response);
            }
        } catch (error) {
            console.log(error)
        }


    }

    const submitFormABankDetails = async () => {

        if (IFSC === '') {
            toast.info("Enter IFSC")
            return
        }
        if (accountName === '') {
            toast.info("Enter accountName")
            return
        }
        if (accountNumber === '') {
            toast.info("Enter accountNumber")
            return
        }
        if (upiID === '') {
            toast.info("Enter upiID")
            return
        }

        let data = {
            bankAccountNumber: accountNumber,
            bankIfscCode: IFSC,
            accountHolderName: accountName,
            upiId: upiID,

        }



        try {
            const response = await postAccountInfo(data)
            console.log(response);
            if (response.success) {
                console.log(response);
            }
        } catch (error) {
            console.log(error)
        }



    }



    return (

        <div className='mx-[14px] lg:mx-[30px] xl:mx-[50px] 2xl:mx-[80px] my-[15px] mb-16 '>

            <div className='flex items-center justify-between'>
                <h1 className='font-inter text-[#323232] text-[14px] lg:text-[22px]'>ACCOUNT</h1>


                <div className='flex items-center justify-center space-x-2 lg:space-x-4 lg:ml-[300px] xl:ml-[500px] 2xl:ml-[600px]'>
                    <h1 onClick={() => { setMenuChanger('INFO') }} className={`cursor-pointer font-inter text-[#000000] text-[10px] lg:text-[15px] ${MenuChanger === 'INFO' ? "underline" : ""}`}>User Info</h1>
                    <h1 onClick={() => { setMenuChanger('BANK') }} className={`cursor-pointer font-inter text-[#000000] text-[10px] lg:text-[15px] ${MenuChanger === 'BANK' ? "underline" : ""}`}>Bank Details</h1>
                </div>


                <button onClick={logout} className='flex lg:scale-125 items-center justify-center px-4 py-2 font-inter text-[10px] text-white rounded-[5px] bg-[#54BAB9]'>
                    <LogoutIcon className='h-4 text-white mr-1' />
                    Logout
                </button>
            </div>

            <h1 className='font-inter text-[#323232] text-[12px] lg:text-[16px] mt-3 lg:mt-1'>Manage User Info & Banking Details</h1>





            <div className='flex  items-start justify-center mt-6 lg:justify-between '>


                <img className=' hidden md:inline  w-1/2 xl:w-3/5 pt-[40px]  xl:mr-12 xl:pr-6 mr-8' src="/creator/poster_high.png" alt="" />


                {MenuChanger === 'INFO' &&

                    <div className='w-full mx-auto  sm:w-4/5 md:w-full  2xl:w-2/5 xl:w-4/5'>

                        <div className='flex items-center justify-between space-x-4 mt-4'>

                            <div className='w-full '>
                                <label className='block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>First Name</label>
                                <input className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={firstName} onChange={(e) => { setfirstName(e.target.value) }} id='First Name' name='First Name' placeholder='Kim Jong UN' type='text' />

                            </div>

                            <div className='w-full '>

                                <label className='block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Last Name</label>
                                <input className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={lastName} onChange={(e) => { setlastName(e.target.value) }} id='Last Name' name='Last Name' placeholder='Kim Jong UN' type='text' />

                            </div>

                        </div>




                        {/* <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Artist Name</label>
                        <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={artistName} onChange={(e) => { setartistName(e.target.value) }} id='Artist Name' name='Artist Name' placeholder='Kim Jong UN' type='text' /> */}



                        <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Phone</label>
                        <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={phone} onChange={(e) => { setphone(e.target.value) }} id='Phone' name='Phone' placeholder='9876543210' type='number' />



                        <div className='flex items-center justify-between space-x-4 mt-4'>

                            <div className='w-full '>
                                <label className='block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Country</label>
                                <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={country} onChange={(e) => { setcountry(e.target.value) }} id='Country' name='Country' placeholder='India' type='text' />
                            </div>


                            <div className='w-full '>


                                <label className=' block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>State</label>

                                <select value={state} onChange={e => setstate(e.target.value)} className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full'>
                                    <option selected disabled hidden>Select State</option>

                                    {statesOfINdia.map(item => {
                                        return (
                                            <option key={item} >{item}</option>

                                        )
                                    })}

                                </select>

                            </div>

                        </div>


                        {/* <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>E-Mail</label>
                        <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={email} onChange={(e) => { setemail(e.target.value) }} id='email' name='email' placeholder='abcd@gmail.com' type='email' />
 */}


                        {/* <div className='flex items-center justify-between space-x-4 mt-4'>

                            <div className='w-full '>
                                <label className='block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Password</label>
                                <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={password} onChange={(e) => { setpassword(e.target.value) }} id='password' name='password' placeholder='*********' type='password' />

                            </div>

                            <div className='w-full '>

                                <label className='block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Confirm Password</label>
                                <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }} id='confirmPassword' name='confirmPassword' placeholder='*********' type='password' />


                            </div>

                        </div> */}








                        <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Youtube Channel Link</label>
                        <input className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={youtubeLink} onChange={(e) => { setyoutubeLink(e.target.value) }} id='youtubeLink' name='youtubeLink' placeholder='https://www.youtube.com/c/kundan' type='text' />



                        <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Facebook Channel Link</label>
                        <input className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={fbLink} onChange={(e) => { setfbLink(e.target.value) }} id='fbLink' name='fbLink' placeholder='https://www.facebook.com/kundan' type='text' />



                        <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Instagram Channel Link</label>
                        <input className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={instaLink} onChange={(e) => { setinstaLink(e.target.value) }} id='instaLink' name='instaLink' placeholder='https://www.instagram.com/kundan' type='text' />



                        <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Other Link</label>
                        <input className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={otherLink} onChange={(e) => { setotherLink(e.target.value) }} id='otherLink' name='otherLink' placeholder='https://' type='text' />



                        <div className='mt-6 flex item-center justify-end mx-1 lg:mx-2'>
                            {/* <div className='flex items-center justify-center space-x-2'>
                                <h2 className='font-inter font-medium text-[#323232] text-[14px] lg:text-[16px]'>Forgot Password ?</h2>

                                <Link href='/' className='font-inter font-medium text-[#323232] text-[14px] lg:text-[16px] underline'>
                                    Click Here
                                </Link>

                            </div> */}

                            <button onClick={submitFormAccountDetails} className='lg:mr-2 lg:scale-150  px-4 py-2 font-inter text-[10px] text-white rounded-[5px] bg-[#54BAB9]'>
                                Confirm
                            </button>
                        </div>


                    </div>
                }


                {MenuChanger === 'BANK' &&

                    <div className='w-full mx-auto  sm:w-4/5 md:w-full  2xl:w-2/5 mb-[500px] '>


                        <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Bank Account Number</label>
                        <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={accountNumber} onChange={(e) => { setaccountNumber(e.target.value) }} id='accountNumber' name='accountNumber' placeholder='4456456456+956+56+564' type='text' />


                        <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>IFSC Code</label>
                        <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={IFSC} onChange={(e) => { setIFSC(e.target.value) }} id='IFSC Code' name='IFSC Code' placeholder='HDFC54878674' type='text' />

                        <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>Account Holder Name</label>
                        <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={accountName} onChange={(e) => { setaccountName(e.target.value) }} id='Account Holder Name' name='Account Holder Name' placeholder='KimJONG' type='text' />


                        <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>UPI Id</label>
                        <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={upiID} onChange={(e) => { setupiID(e.target.value) }} id='Account Holder Name' name='Account Holder Name' placeholder='1234567890@upi' type='text' />





                        <div className='mt-6 flex item-center justify-end mx-1 lg:mx-2'>

                            <button onClick={submitFormABankDetails} className='lg:mr-2 lg:scale-150  px-4 py-2 font-inter text-[10px] text-white rounded-[5px] bg-[#54BAB9]'>
                                Confirm
                            </button>
                        </div>


                    </div>

                }



            </div>





        </div>
    )
};
export default Account;

export async function getServerSideProps({ req, res }) {
    try {
        const cookieExists = getCookie("role", { req, res });
        const emailExists = getCookie("email", { req, res });


        if (cookieExists === 'creator' && typeof emailExists !== 'undefined') {

        } else {
            return { redirect: { destination: "/partner_with_us" } };
        }
        return { props: {} };
    } catch (err) {
        return { props: {} };
    }
}