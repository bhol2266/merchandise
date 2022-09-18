import { XCircleIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useContext, useEffect, useState } from 'react';
import MerchContext from '../../../context/MerchContext';
import { statesOfINdia } from '../../../Data/statesOfINdia'




const AddressModal = (props) => {

    console.log(props.data);


    const { AdressModalVisible, setAdressModalVisible } = useContext(MerchContext);


    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [mobilenumber, setmobilenumber] = useState('')
    const [state, setstate] = useState('')
    const [pincode, setpincode] = useState('')
    const [town, settown] = useState('')
    const [landmark, setlandmark] = useState('')
    const [address, setaddress] = useState('')
    const [Country, setCountry] = useState('India')
    const [alternatePhonenumber, setalternatePhonenumber] = useState('')


    // Billing Address States 
    const [sameAsShippingAddress, setsameAsShippingAddress] = useState(false)
    const [firstname_billing, setfirstname_billing] = useState(firstname)
    const [lastname_billing, setlastname_billing] = useState('')
    const [mobilenumber_billing, setmobilenumber_billing] = useState('')
    const [state_billing, setstate_billing] = useState('')
    const [pincode_billing, setpincode_billing] = useState('')
    const [town_billing, settown_billing] = useState('')
    const [landmark_billing, setlandmark_billing] = useState('')
    const [address_billing, setaddress_billing] = useState('')
    const [Country_billing, setCountry_billing] = useState('India')
    const [alternatePhonenumber_billing, setalternatePhonenumber_billing] = useState('')

    const setBillingSame_Shipping = () => {
        if (!sameAsShippingAddress) {
            setfirstname_billing(firstname)
            setlastname_billing(lastname)
            setmobilenumber_billing(mobilenumber)
            setstate_billing(state)
            setpincode_billing(pincode)
            settown_billing(town)
            setlandmark_billing(landmark)
            setaddress_billing(address)
            setCountry_billing(setCountry)
            setalternatePhonenumber_billing(alternatePhonenumber)
        } else {
            setfirstname_billing('')
            setlastname_billing('')
            setmobilenumber_billing('')
            setstate_billing('')
            setpincode_billing('')
            settown_billing('')
            setlandmark_billing('')
            setaddress_billing('')
            setCountry_billing('India')
            setalternatePhonenumber_billing('')
        }
    }





    return (

        <div className={`fixed  transition-transform duration-300 ease-out lg:top-[100px]  z-20 w-4/5 md:w-3/5 lg:w-4/5 xl:w-3/5 2xl:w-1/2 top-12 h-[800px] overflow-scroll scrollbar-hide rounded-xl mx-auto left-0 right-0 ${AdressModalVisible ? 'animate-colorModal' : 'translate-y-[1500px]'}  scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100  `}>

            <div className={`bg-white w-full  p-[20px] rounded-xl shadow-md`}>

                <h1 className='mb-5 font-inter text-[14px] lg:text-[18px] text-theme font-medium text-center'>ADD | EDIT ADDRESS</h1>


                <div className='flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 xl:space-x-24  justify-around '>


                    {/* SHIPPING ADDRESS  */}

                    <div className=' flex flex-col space-y-4 sm:w-[300px] lg:w-[300px] mb-4 w-full' >

                        <h2 className='text-[12px] lg:text-[16px] text-[#323232] font-inter  mb-2 lg:mb-6'>SHIPPING ADDRESS</h2>

                        <input value={firstname} onChange={e => setfirstname(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='First Name' />
                        <input value={lastname} onChange={e => setlastname(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Last Name' />
                        <input value={mobilenumber} onChange={e => { if (e.target.value.length <= 10) { setmobilenumber(e.target.value) } }} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Mobile Number' />


                        <div className='flex space-x-4  sm:w-[300px] lg:w-[300px] overflow-hidden'>
                            <select value={state} onChange={e => setstate(e.target.value)} className='w-[145px] text-[14px] outline-none border-b-[1px] border-[#323232] pb-1 '>
                                <option selected disabled hidden>Select State</option>

                                {statesOfINdia.map(state => {

                                    return (
                                        <option key={state} value={state} >{state}</option>

                                    )
                                })}


                            </select>
                            <input value={pincode} onChange={e => {
                                if (e.target.value.length <= 6) {
                                    setpincode(e.target.value)
                                }
                                if (e.target.value.length === 6) {
                                    searchPincode(e.target.value)
                                }
                            }} className='text-[13px] lg:text-[14px] xl:text-[16px] outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Pincode' />

                        </div>




                        <div className='w-full flex space-x-4'>
                            <input value={town} onChange={e => settown(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px]  w-full  outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Town/City' />

                            <input value={landmark} onChange={e => setlandmark(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] w-full  outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Landmark/Street' />

                        </div>

                        <input value={address} onChange={e => setaddress(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Address' />
                        <input value={alternatePhonenumber} onChange={e => { if (e.target.value.length <= 10) { setalternatePhonenumber(e.target.value) } }} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Alternate Phone Number' />
                        <input className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='India' value='India' />

                    </div>


                    {/* BILLING ADDRESS  */}


                    <div className={`w-full flex flex-col space-y-4 sm:w-[300px] lg:w-[300px] mb-6 ${sameAsShippingAddress ? "pointer-events-none  text-gray-400 " : ""}`} >

                        <div className='flex items-center justify-between space-x-2 '>
                            <h2 className='text-[12px] lg:text-[16px] text-[#323232] font-inter mt-[20px] mb-4 lg:mb-6 w-full'>BILLING ADDRESS</h2>

                            <div onClick={setBillingSame_Shipping} className='flex w-[150px] space-x-3 items-center pointer-events-auto'>
                                <label className="switch  ">
                                    <input onChange={e => setsameAsShippingAddress(e.target.checked)} checked={sameAsShippingAddress} type="checkbox" className='' />
                                    <span className="slider round"></span>
                                </label>
                                <label className='text-[12px]  w-32 text-black'>Same as Billing Address</label>
                            </div>
                        </div>

                        <input value={firstname_billing} onChange={e => setfirstname_billing(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='First Name' />
                        <input value={lastname_billing} onChange={e => setlastname_billing(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Last Name' />
                        <input value={mobilenumber_billing} onChange={e => { if (e.target.value.length <= 10) { setmobilenumber_billing(e.target.value) } }} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Mobile Number' />


                        <div className='flex space-x-4 sm:w-[300px] lg:w-[300px] overflow-hidden'>
                            <select value={state_billing} onChange={e => setstate_billing(e.target.value)} className='w-[145px] text-[14px] outline-none border-b-[1px] border-[#323232] pb-1 '>
                                <option selected disabled hidden>Select State</option>

                                {statesOfINdia.map(state => {
                                    return (
                                        <option key={state} value={state} >{state}</option>

                                    )
                                })}

                            </select>
                            <input value={pincode_billing} onChange={e => {
                                if (e.target.value.length <= 6) {
                                    setpincode_billing(e.target.value)
                                }
                                if (e.target.value.length === 6) {
                                    searchPincode(e.target.value)
                                }
                            }} className='text-[13px] lg:text-[14px] xl:text-[16px] outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Pincode' />

                        </div>




                        <div className='w-full flex space-x-4'>
                            <input value={town_billing} onChange={e => settown_billing(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px]  w-full  outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Town/City' />

                            <input value={landmark_billing} onChange={e => setlandmark_billing(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] w-full  outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Landmark/Street' />

                        </div>

                        <input value={address_billing} onChange={e => setaddress_billing(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Address' />
                        <input value={alternatePhonenumber_billing} onChange={e => { if (e.target.value.length <= 10) { setalternatePhonenumber_billing(e.target.value) } }} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Alternate Phone Number' />
                        <input value={Country_billing} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='India' />

                    </div>

                </div>







                <button onClick={() => { setAdressModalVisible(!AdressModalVisible) }} className={`lg:w-[260px] w-[232px] block mx-auto py-1.5 bg-[#54BAB9] text-[14px] lg:text-[16px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer mt-5`}>Confirm</button>

            </div>

        </div>


    )
};
export default AddressModal;