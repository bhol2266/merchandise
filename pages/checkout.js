import React, { useState } from 'react'

const statesOfINdia = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]
const CheckOut = () => {

    const second = ''

    const [firstname, setfirstname] = useState(second)
    const [lastname, setlastname] = useState(second)
    const [mobilenumber, setmobilenumber] = useState(second)
    const [state, setstate] = useState(second)
    const [pincode, setpincode] = useState(second)
    const [town, settown] = useState(second)
    const [landmark, setlandmark] = useState(second)
    const [address, setaddress] = useState(second)
    const [alternatePhonenumber, setalternatePhonenumber] = useState(second)

    return (
        <div className='p-[13px] lg:px-[45px] lg:py-[20px] '>
            <h2 className='font-semibold text-[14px] lg:text-[22px] text-[#323232] font-inter'>ADDRESS</h2>
            <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between '>

                <div className='flex flex-col space-y-4 sm:w-[300px] lg:w-[300px] mb-4' >

                    <h2 className='text-[12px] lg:text-[16px] text-[#323232] font-inter mt-[20px] mb-2 lg:mb-6'>SHIPPING ADDRESS</h2>

                    <input onChange={e => setfirstname(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='First Name' />
                    <input onChange={e => setlastname(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Last Name' />
                    <input onChange={e => setmobilenumber(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Mobile Number' />


                    <div className='w-full flex space-x-4 sm:w-[300px] lg:w-[300px]'>
                        <select onChange={e => setstate(e.target.value)} className=' text-[13px] outline-none border-b-[1px] border-[#323232] pb-1 w-full'>
                            <option value="none" selected disabled hidden>Select State</option>

                            {statesOfINdia.map(state => {
                                return (
                                    <option key={state} value={state} >{state}</option>

                                )
                            })}

                        </select>
                        <input onChange={e => setpincode(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Pincode' />

                    </div>



                    <div className='w-full flex space-x-4'>
                        <input onChange={e => settown(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px]  w-full  outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Town/City' />

                        <input onChange={e => setlandmark(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] w-full  outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Landmark/Street' />

                    </div>

                    <input onChange={e => setmobilenumber(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Address' />
                    <input onChange={e => setmobilenumber(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Alternate Phone Number' />
                    <input onChange={e => setmobilenumber(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='India' value='India' />

                </div>

                <div className='flex flex-col space-y-4 sm:w-[300px] lg:w-[300px] mb-6' >

                    <div className='flex items-center justify-between space-x-6'>
                        <h2 className='text-[12px] lg:text-[16px] text-[#323232] font-inter mt-[20px] mb-4 lg:mb-6 w-full'>BILLING ADDRESS</h2>
                        <div className="flex justify-center">
                            <div className="form-check form-switch flex items-center space-x-2">
                                <input className=" form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top  bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                <label className="text-[12px] form-check-label inline-block text-gray-800" htmlFor="flexSwitchCheckChecked">Same as Shipping Address</label>
                            </div>
                        </div>
                    </div>

                    <input onChange={e => setfirstname(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='First Name' />
                    <input onChange={e => setlastname(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Last Name' />
                    <input onChange={e => setmobilenumber(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Mobile Number' />


                    <div className='w-full flex space-x-4 '>
                        <select onChange={e => setstate(e.target.value)} className='w-full text-[13px] outline-none border-b-[1px] border-[#323232] pb-1 '>
                            <option value="none" selected disabled hidden>Select State</option>

                            {statesOfINdia.map(state => {
                                return (
                                    <option key={state} value={state} >{state}</option>

                                )
                            })}

                        </select>
                        <input onChange={e => setpincode(e.target.value)} className='w-full text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px]  outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Pincode' />

                    </div>



                    <div className='w-full flex space-x-4'>
                        <input onChange={e => settown(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px]  w-full  outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Town/City' />

                        <input onChange={e => setlandmark(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] w-full  outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Landmark/Street' />

                    </div>

                    <input onChange={e => setmobilenumber(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Address' />
                    <input onChange={e => setmobilenumber(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Alternate Phone Number' />
                    <input onChange={e => setmobilenumber(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='India' value='India' />

                </div>


                <div className='w-full lg:h-fit h-[420px] sm:w-[300px] lg:w-[400px]   rounded-[10px] border-[1px] border-[#BBBBBB]  mt-[10px] md:mt-[0px] py-[20px] lg:py-[10px] mx-auto lg:mx-0 sticky top-10'>
                    <h1 className='px-[20px] font-inter font-semibold text-[12px] lg:text-[18px] text-[#323232]'>TOTAL PRICE</h1>

                    <div className='mt-[12px] lg:mt-[16px] flex items-center justify-between px-[20px] pb-[14px] lg:px-[16px] lg:pb-[12px] border-b-[0.5px] border-[#E5E5E5]'>
                        <h1 className=' text-[11px] lg:text-[12px] text-[#323232] font-inter'>ITEMS (4)</h1>
                        <h1 className=' text-[11px] lg:text-[12px] text-[#323232] font-inter'>569 INR</h1>
                    </div>
                    <div className='mt-[12px] lg:mt-[16px] flex items-center justify-between px-[20px] pb-[14px] lg:px-[16px] lg:pb-[12px] border-b-[0.5px] border-[#E5E5E5]'>
                        <h1 className=' text-[11px] lg:text-[12px] text-[#323232] font-inter'>DISCOUNT</h1>
                        <h1 className=' text-[11px] lg:text-[12px] text-[#323232] font-inter'>1964 INR</h1>
                    </div>
                    <div className='mt-[12px] lg:mt-[16px] flex items-center justify-between px-[20px] pb-[14px] lg:px-[16px] lg:pb-[12px] border-b-[0.5px] border-[#E5E5E5]'>
                        <h1 className=' text-[11px] lg:text-[12px] text-[#323232] font-inter'>DELIVERY CHARGES</h1>
                        <h1 className=' text-[11px] lg:text-[12px] text-[#323232] font-inter'>NONE</h1>
                    </div>

                    <div className='mt-[12px] lg:mt-[16px] flex items-start justify-between px-[20px] pb-[14px] lg:px-[16px] lg:pb-[12px] border-b-[0.5px] border-[#E5E5E5]'>
                        <h1 className=' text-[11px] lg:text-[12px] text-[#323232] font-inter'>APPLY COUPONS</h1>
                        <div className='flex flex-col items-end'>
                            <h1 className='text-center w-[115px] lg:w-[150px] lg:h-[25px]  h-[20px] border-[1px] border-[#323232] rounded-[5px] text-[11px] lg:text-[14px] text-[#323232] font-inter'>AHBDGYFUBFG</h1>
                            <h1 className='mt-[7px] text-[10px] lg:text-[10px] text-[#323232] font-inter cursor-pointer hover:text-red-500'>{"BROWSE COUPONS >"}</h1>

                        </div>

                    </div>

                    <div className='mt-[12px] lg:mt-[16px] flex items-center justify-between px-[20px] pb-[14px] lg:px-[16px] lg:pb-[12px] border-b-[0.5px] border-[#E5E5E5]'>
                        <h1 className=' text-[11px] lg:text-[12px] text-[#323232] font-inter'>COUPON DISCOUNT</h1>
                        <h1 className=' text-[11px] lg:text-[12px] text-[#323232] font-inter'>569 INR</h1>
                    </div>
                    <div className='mt-[14px] flex items-center justify-between px-[20px] pb-[14px] lg:px-[16px] lg:pb-[12px]  border-[#E5E5E5]'>
                        <h1 className=' text-[12px] lg:text-[16px] text-[#323232] font-inter'>TOTAL AMOUNT</h1>
                        <h1 className=' text-[12px] lg:text-[16px] text-[#323232] font-inter'>6969 INR</h1>
                    </div>

                    <div className='px-8 lg:px-16'>
                        <button className='w-full  lg:text-[16px]   text-white h-[40px] bg-[#54BAB9] hover:bg-[#458b8a]  rounded-[5px] text-center my-2 font-inter font-semibold'>
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Address