
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import { statesOfINdia } from "../Data/statesOfINdia";
import { putAddress, postAddress } from "../lib/Address_API";
import MerchContext from "../context/MerchContext";





const AddressForm = (props) => {

    const { seteditAddress } = useContext(MerchContext);


    const [firstTimeAddressSave, setfirstTimeAddressSave] = useState(false);



    const [shippingAddressId, setshippingAddressId] = useState();
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
    const [firstname_billing, setfirstname_billing] = useState('')
    const [lastname_billing, setlastname_billing] = useState('')
    const [mobilenumber_billing, setmobilenumber_billing] = useState('')
    const [state_billing, setstate_billing] = useState('')
    const [pincode_billing, setpincode_billing] = useState('')
    const [town_billing, settown_billing] = useState('')
    const [landmark_billing, setlandmark_billing] = useState('')
    const [address_billing, setaddress_billing] = useState('')
    const [Country_billing, setCountry_billing] = useState('India')
    const [alternatePhonenumber_billing, setalternatePhonenumber_billing] = useState('')

    useEffect(() => {

        if (typeof props.data === 'undefined') {
            setfirstTimeAddressSave(true)
        } else {



            setshippingAddressId(props.data._id)

            setfirstname(props.data.shippingAddress.firstName)
            setlastname(props.data.shippingAddress.lastName)
            setalternatePhonenumber(props.data.shippingAddress.alter_MobileNumber)
            settown(props.data.shippingAddress.city)
            setmobilenumber(props.data.shippingAddress.mobileNumber)
            setpincode(props.data.shippingAddress.pincode)
            setaddress(props.data.shippingAddress.fullAddress)
            setlandmark(props.data.shippingAddress.landmark)
            setstate(props.data.shippingAddress.state)

            setfirstname_billing(props.data.billingAddress.firstName)
            setlastname_billing(props.data.billingAddress.lastName)
            setalternatePhonenumber_billing(props.data.billingAddress.alter_MobileNumber)
            settown_billing(props.data.billingAddress.city)
            setmobilenumber_billing(props.data.billingAddress.mobileNumber)
            setpincode_billing(props.data.billingAddress.pincode)
            setaddress_billing(props.data.billingAddress.fullAddress)
            setlandmark_billing(props.data.billingAddress.landmark)
            setstate_billing(props.data.billingAddress.state)
        }
    }, [])


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


    const updateAddress = async () => {
        var data = {
            shippingAddress: {
                firstName: firstname,
                lastName: lastname,
                mobileNumber: mobilenumber,
                alter_MobileNumber: alternatePhonenumber,
                state: state,
                pincode: pincode,
                city: town,
                landmark: landmark,
                fullAddress: address,
                country: 'India'
            },
            billingAddress: {
                firstName: firstname_billing,
                lastName: lastname_billing,
                mobileNumber: mobilenumber_billing,
                alter_MobileNumber: alternatePhonenumber_billing,
                state: state_billing,
                pincode: pincode_billing,
                city: town_billing,
                landmark: landmark_billing,
                fullAddress: address_billing,
                country: 'India'
            }
        }


        if (firstTimeAddressSave) {
            if (!firstname) {
                alert("Enter firstname")
                return
            }
            if (!lastname) {
                alert("Enter lastname")
                return
            }
            if (!mobilenumber) {
                alert("Enter Mobile number")
                return
            }
            if (!state) {
                alert("Select state")
                return
            }
            if (!pincode) {
                alert("Enter pincode")
                return
            }
            if (!town) {
                alert("Enter town")
                return
            }
            if (!landmark) {
                alert("Enter landmark")
                return
            }
            if (!address) {
                alert("Enter address")
                return
            }

            try {
                const response = await postAddress(data)
                console.log(response);
                if (response.sucess) {
                    window.location.reload()
                }
            } catch (error) {
                console.log(error)
            }

        }

        const newData = Object.assign({ addressId: shippingAddressId }, data);
        try {
            const response = await putAddress(newData)
            console.log(response);
            if (response.sucess) {
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }


    }


    
    const searchPincode = async (code) => {
        const response = await fetch(`https://api.postalpincode.in/pincode/${code}`)

        const message = await response.json()
        console.log(message[0].Status);
        if (message[0].Status === "Error") {
            alert("Pincode Error")
        }


    }





    return (

        <div className="mb-6 w-full  sm:w-[400px] lg:w-fit ">
            <div className='flex flex-col lg:flex-row items-start   xl:space-x-12  justify-around lg:justify-start lg:space-x-8 xl:justify-start '>


                {/* SHIPPING ADDRESS  */}

                <div className=' flex flex-col space-y-4  mb-4 w-full lg:w-fit' >

                    <h2 className='text-[12px] lg:text-[16px] text-[#323232] font-inter  mb-2 lg:mb-6'>SHIPPING ADDRESS</h2>

                    <input value={firstname} onChange={e => setfirstname(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] lg:w-[260px] xl:w-full  w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='First Name' />

                    <input value={lastname} onChange={e => setlastname(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] lg:w-[260px] xl:w-full  w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Last Name' />
                    
                    <input value={mobilenumber} onChange={e => { if (e.target.value.length <= 10) { setmobilenumber(e.target.value) } }} className='text-[13px] lg:text-[14px] xl:text-[16px] lg:w-[260px] xl:w-full  w-full outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Mobile Number' />


                    <div className='flex space-x-4   overflow-hidden lg:w-[260px] xl:w-full'>
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
                        }} className='text-[13px] lg:text-[14px] xl:text-[16px] lg:w-[260px] xl:w-full outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Pincode' />

                    </div>




                    <div className='w-full flex space-x-4 lg:w-[260px] xl:w-full'>
                        <input value={town} onChange={e => settown(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px]   w-full  outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Town/City' />

                        <input value={landmark} onChange={e => setlandmark(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] w-full  outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Landmark/Street' />

                    </div>

                    <input value={address} onChange={e => setaddress(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] lg:w-[260px] xl:w-full  w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Address' />
                    <input value={alternatePhonenumber} onChange={e => { if (e.target.value.length <= 10) { setalternatePhonenumber(e.target.value) } }} className='text-[13px] lg:text-[14px] xl:text-[16px] lg:w-[260px] xl:w-full  w-full outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Alternate Phone Number' />
                    <input className='text-[13px] lg:text-[14px] xl:text-[16px] lg:w-[260px] xl:w-full  w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='India' value='India' />

                </div>


                {/* BILLING ADDRESS  */}


                <div className={` w-full lg:w-fit flex flex-col space-y-4  mb-6 ${sameAsShippingAddress ? "pointer-events-none  text-gray-400 " : ""}`} >

                    <div className='flex items-center lg:items-start justify-between space-x-2 mb-[11.5px] mt-[20px]  lg:mt-[0px] lg:mb-[22px] 2xl:mb-[22px]'>

                        <h2 className='text-[12px] lg:text-[16px] text-[#323232] font-inter  lg:mt-[0px]  w-full'>BILLING ADDRESS</h2>

                        <div onClick={setBillingSame_Shipping} className='flex w-full lg:w-fit space-x-3 items-center pointer-events-auto '>
                            <label className="switch  ">
                                <input onChange={e => setsameAsShippingAddress(e.target.checked)} checked={sameAsShippingAddress} type="checkbox" className='' />
                                <span className="slider round"></span>
                            </label>
                            <label className='lg:hidden xl:inline text-[12px]  w-32 text-black'>Same as Billing Address</label>
                        </div>
                    </div>

                    <input value={firstname_billing} onChange={e => setfirstname_billing(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] lg:w-[260px] xl:w-full  w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='First Name' />
                    <input value={lastname_billing} onChange={e => setlastname_billing(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] lg:w-[260px] xl:w-full  w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Last Name' />
                    <input value={mobilenumber_billing} onChange={e => { if (e.target.value.length <= 10) { setmobilenumber_billing(e.target.value) } }} className='text-[13px] lg:text-[14px] xl:text-[16px] lg:w-[260px] xl:w-full  w-full outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Mobile Number' />


                    <div className='flex space-x-4  overflow-hidden lg:w-[260px] xl:w-full'>
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
                        }} className='text-[13px] lg:text-[14px] xl:text-[16px]  outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Pincode' />

                    </div>




                    <div className='w-full flex space-x-4 lg:w-[260px] xl:w-full'>
                        <input value={town_billing} onChange={e => settown_billing(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px]  w-full  outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Town/City' />

                        <input value={landmark_billing} onChange={e => setlandmark_billing(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] w-full  outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Landmark/Street' />

                    </div>

                    <input value={address_billing} onChange={e => setaddress_billing(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] lg:w-[260px] xl:w-full  w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Address' />
                    <input value={alternatePhonenumber_billing} onChange={e => { if (e.target.value.length <= 10) { setalternatePhonenumber_billing(e.target.value) } }} className='text-[13px] lg:text-[14px] xl:text-[16px] lg:w-[260px] xl:w-full  w-full outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Alternate Phone Number' />
                    <input value={Country_billing} className='text-[13px] lg:text-[14px] xl:text-[16px] lg:w-[260px] xl:w-full  w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='India' />

                </div>



            </div>



            <div className="grid grid-cols-2 gap-3 lg:w-[260px] lg:ml-auto">

                <button onClick={updateAddress} className="bg-theme rounded text-white mx-auto w-full  block  py-1 font-inter text-[12px] lg:text-[14px]">Save</button>

                <button onClick={() => { window.location.reload()}} className="bg-theme rounded text-white mx-auto w-full  block  py-1 font-inter text-[12px] lg:text-[14px]">Cancel</button>
            </div>
        </div>
    )

};
export default AddressForm;