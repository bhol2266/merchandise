import { noSSR } from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import { addAddress, getAddress, updateAddress } from '../lib/serverConfig'
import Head from 'next/head'
import Script from 'next/script'
import axios from 'axios';
import { GetbagItems, applyCoupon } from '../lib/serverConfig';
import { getCookie } from 'cookies-next'
import Router, { useRouter } from 'next/router'
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

    const router =useRouter()
    //id from database shipping adress list
    const [id, setid] = useState('')

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
    const [sameAsShippingAddress, setsameAsShippingAddress] = useState(true)
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


    //Bill Amount
    const [bagitems, setbagitems] = useState([])
    const [totalAmount, settotalAmount] = useState();
    const [totalDiscountAmount, settotalDiscountAmount] = useState();
    const [totalMRP, settotalMRP] = useState();
    const [couponDiscount, setcouponDiscount] = useState(0);
    const [deliveryCharge, setdeliveryCharge] = useState();
    const [COUPONCODE, setCOUPONCODE] = useState('Nill');
    const [CouponBtn, setCouponBtn] = useState("APPLY COUPON");

    const applyCouponfunc = async () => {

        await applyCoupon(COUPONCODE).then(res => {
            console.log(res.applyCoupen);
            settotalDiscountAmount(res.applyCoupen.discountPrice)
            settotalAmount(res.applyCoupen.totalBill)
            setcouponDiscount(res.applyCoupen.coupenDiscount)
            setCouponBtn("REMOVE COUPON")
        }).catch(err => {
            console.log(err);
        })


    }

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

    useEffect(async () => {
        await getAddress().then((res) => {
            if (res.shippingDetails) {
                setfirstname(res.shippingDetails[0].firstName)
                setlastname(res.shippingDetails[0].lastName)
                setalternatePhonenumber(res.shippingDetails[0].altPhoneNum)
                setaddress_billing(res.shippingDetails[0].billingAddress)
                settown(res.shippingDetails[0].city)
                setmobilenumber(res.shippingDetails[0].phoneNum)
                setpincode(res.shippingDetails[0].pincode)
                setaddress(res.shippingDetails[0].shippingAddress)
                setlandmark(res.shippingDetails[0].shippingAddress)
                setstate(res.shippingDetails[0].state)
                setid(res.shippingDetails[0].id)
                if (sameAsShippingAddress) {
                    setfirstname_billing(res.shippingDetails[0].firstName)
                    setlastname_billing(res.shippingDetails[0].lastName)
                    setalternatePhonenumber_billing(res.shippingDetails[0].altPhoneNum)
                    setaddress_billing(res.shippingDetails[0].billingAddress)
                    settown_billing(res.shippingDetails[0].city)
                    setmobilenumber_billing(res.shippingDetails[0].phoneNum)
                    setpincode_billing(res.shippingDetails[0].pincode)
                    setaddress_billing(res.shippingDetails[0].shippingAddress)
                    setlandmark_billing(res.shippingDetails[0].shippingAddress)
                    setstate_billing(res.shippingDetails[0].state)
                }
            }
        }).catch(error => {
            console.log(error)
        })

        await GetbagItems().then(res => {
            // console.log(res.cart[0]);

            settotalDiscountAmount(res.cart[0].discountPrice)
            settotalMRP(res.cart[0].itemBill)
            settotalAmount(res.cart[0].totalBill)
            setcouponDiscount(res.cart[0].discountCoupen.discount)
            setCOUPONCODE(res.cart[0].discountCoupen.copenCode)
            var array = []
            res.cart[0].items.map(obj => {
                array.push(obj)
            })
            setbagitems(array)
        }).catch(err => {
            console.log(err);
        })

    }, [])




    const searchPincode = async (code) => {
        const response = await fetch(`https://api.postalpincode.in/pincode/${code}`)

        const message = await response.json()
        console.log(message[0].Status);
        if (message[0].Status === "Error") {
            alert("Pincode Error")
        }


    }

    const initiatePayment = async () => {

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

        if (id) {
            await updateAddress(firstname, lastname, alternatePhonenumber, id)
        }
        else {
            await addAddress(firstname, lastname, address, mobilenumber, address_billing, town, state, pincode, alternatePhonenumber)
        }

        handlePayment();

    }


    const initPayment = async (data) => {

        const options = {
            key: "rzp_test_3W4pX0KCXjczGe",
            amount: data.amount,
            currency: data.currency,
            name: "Pay to Closm.com",
            description: "Payment",
            image: "./logo.png",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyUrl = "http://localhost:3000/api/razorpayVerify";
                    const { data } = await axios.post(verifyUrl, response);
                    const { signatureIsValid, razorpay_order_id, razorpay_payment_id } = data;
                    console.log(signatureIsValid);
                    console.log(razorpay_order_id);
                    console.log(razorpay_payment_id);
                    router.push('/paymentsuccessfull')
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#3399cc",
            },
            prefill: {
                name: getCookie('firstname ') + getCookie('lastname'),
                email: getCookie('email'),
                contact: "9108825914",
            },
        };
        const rzp1 = await new window.Razorpay(options);
        rzp1.open();
    };

    const handlePayment = async () => {

        const res = await initializeRazorpay();

        if (!res) {
            alert("Razorpay SDK Failed to load");
            return;
        }
        try {
            let parceldata = { amount: totalAmount }

            const data = await fetch("/api/razorpayInitiate",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(parceldata)
                });

            const res = await data.json();
            await initPayment(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            // document.body.appendChild(script);

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };


    return (
        <div className='p-[13px] lg:px-[45px] lg:py-[20px] '>
            <Head>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

            </Head>
            <Script type="application/javascript" crossorigin="anonymous" src={` https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/sInflX13949396370624.js`} />


            <h2 className='font-semibold text-[14px] lg:text-[22px] text-[#323232] font-inter'>ADDRESS</h2>
            <div className='flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8  justify-between '>

                <div className='flex flex-col space-y-4 sm:w-[300px] lg:w-[300px] mb-4 w-full' >

                    <h2 className='text-[12px] lg:text-[16px] text-[#323232] font-inter mt-[20px] mb-2 lg:mb-6'>SHIPPING ADDRESS</h2>

                    <input value={firstname} onChange={e => setfirstname(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='First Name' />
                    <input value={lastname} onChange={e => setlastname(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='Last Name' />
                    <input value={mobilenumber} onChange={e => { if (e.target.value.length <= 10) { setmobilenumber(e.target.value) } }} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="number" placeholder='Mobile Number' />


                    <div className='flex space-x-4  sm:w-[300px] lg:w-[300px] overflow-hidden'>
                        <select value={state} onChange={e => setstate(e.target.value)} className='w-[145px] text-[14px] outline-none border-b-[1px] border-[#323232] pb-1 '>
                            <option value="none" selected disabled hidden>Select State</option>

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
                    <input onChange={e => setCountry(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='India' value='India' />

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
                            <option value="none" selected disabled hidden>Select State</option>

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
                    <input value={Country_billing} onChange={e => setCountry_billing(e.target.value)} className='text-[13px] lg:text-[14px] xl:text-[16px] sm:w-[300px] lg:w-[300px] w-full outline-none border-b-[1px] border-[#323232] pb-1' type="text" placeholder='India' />

                </div>


                <div className='w-full lg:h-fit h-[420px] sm:w-[300px] lg:w-[400px]   rounded-[10px] border-[1px] border-[#BBBBBB]  mt-[10px] md:mt-[0px] py-[20px] lg:py-[10px] mx-auto lg:mx-0 sticky top-10'>
                    <h1 className='px-[20px] font-inter font-semibold text-[12px] lg:text-[18px] text-[#323232]'>TOTAL PRICE</h1>

                    <div className='mt-[12px] lg:mt-[16px] flex items-center justify-between px-[20px] pb-[14px] border-b-[0.5px] border-[#E5E5E5]'>
                        <h1 className=' text-[11px] lg:text-[14px] text-[#323232] font-inter'>ITEMS ({bagitems.length})</h1>
                        <h1 className=' text-[11px] lg:text-[14px] text-[#323232] font-inter'>{totalMRP} INR</h1>
                    </div>
                    <div className='mt-[12px] lg:mt-[16px] flex items-center justify-between px-[20px] pb-[14px] border-b-[0.5px] border-[#E5E5E5]'>
                        <h1 className=' text-[11px] lg:text-[14px] text-[#323232] font-inter'>DISCOUNT</h1>
                        <h1 className=' text-[11px] lg:text-[14px] text-[#323232] font-inter'>{totalDiscountAmount} INR</h1>
                    </div>
                    <div className='mt-[12px] lg:mt-[16px] flex items-center justify-between px-[20px] pb-[14px] border-b-[0.5px] border-[#E5E5E5]'>
                        <h1 className=' text-[11px] lg:text-[14px] text-[#323232] font-inter'>DELIVERY CHARGES</h1>
                        <h1 className=' text-[11px] lg:text-[14px] text-[#323232] font-inter'>{deliveryCharge}</h1>
                    </div>

                    <div className='mt-[12px] lg:mt-[16px] flex items-start justify-between px-[20px] pb-[14px] border-b-[0.5px] border-[#E5E5E5]'>
                        <h1 className=' text-[11px] lg:text-[14px] text-[#323232] font-inter'>APPLY COUPON</h1>
                        <div className='flex flex-col items-end'>
                            <input type='text' value={COUPONCODE} onChange={e => (setCOUPONCODE(e.target.value.toUpperCase()))} className='text-center w-[115px] lg:w-[171px] lg:h-[30px]  h-[20px] border-[1px] border-[#323232] rounded-[5px] text-[11px] lg:text-[16px] text-[#323232] font-inter' />
                            <h1 onClick={applyCouponfunc} className='mt-[7px] text-[10px] lg:text-[12px]  font-inter cursor-pointer hover:text-red-500 underline text-red-700 '>{CouponBtn}</h1>

                        </div>

                    </div>

                    <div className='mt-[12px] lg:mt-[16px] flex items-center justify-between px-[20px] pb-[14px] border-b-[0.5px] border-[#E5E5E5]'>
                        <h1 className=' text-[11px] lg:text-[14px] text-[#323232] font-inter'>COUPON DISCOUNT</h1>
                        <h1 className=' text-[11px] lg:text-[14px] text-[#323232] font-inter'>{couponDiscount} INR</h1>
                    </div>
                    <div className='mt-[14px] flex items-center justify-between px-[20px] pb-[14px]  border-[#E5E5E5]'>
                        <h1 className=' text-[12px] lg:text-[16px] text-[#323232] font-inter'>TOTAL AMOUNT</h1>
                        <h1 className=' text-[12px] lg:text-[16px] text-[#323232] font-inter'>{totalAmount} INR</h1>
                    </div>

                    <div className='px-8 lg:px-16'>
                        <button onClick={initiatePayment} className='w-full  lg:text-[16px]   text-white h-[40px] bg-[#54BAB9] hover:bg-[#458b8a]  rounded-[5px] text-center my-4 font-inter font-semibold'>
                            PROCEED TO PAYMENT {totalAmount}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CheckOut

