import { useRouter } from "next/router";
import { useEffect, useState } from "react";



const Address = (props) => {


    const indexPositon = props.index + 1

    const { firstName, lastName, mobileNumber, alter_MobileNumber, state, pincode, city, landmark, fullAddress, country } = props.data.shippingAddress
   
    const billingAdress = props.data.billingAddress


    return (


        <div className="font-inter my-3 ">

            <div className="flex items-center justify-between  text-[14px] xl:text-[16px] mb-3">
                <h1 className=" text-theme">Address {indexPositon}</h1>
                <h1 className=" text-theme">Default Address</h1>
            </div>

            <div className="lg:space-x-6 xl:space-x-[140px] lg:flex items-center justify-between text-[12px] xl:text-[14px] text-[#323232]">
                <div className="">
                    <h2 className="mb-2">{firstName} {lastName}</h2>
                    <p className="w-3/5 lg:w-full">{landmark}, {fullAddress}, {city}, {pincode}, {state}, {country}, {mobileNumber}</p>
                    <div className="flex items-start justify-between mt-2">

                        <h2 className="">{pincode},{city}</h2>
                        <h2 className="">(Shipping)</h2>
                    </div>
                </div>

                <div className="mt-6 xl:mt-0 ">
                    <h2 className="mb-2">{billingAdress.firstName} {billingAdress.lastName}</h2>
                    <p className="w-3/5 lg:w-full">{billingAdress.landmark}, {billingAdress.fullAddress}, {billingAdress.city}, {billingAdress.pincode}, {billingAdress.state}, {billingAdress.country}, {billingAdress.mobileNumber}</p>

                    <div className="flex items-start justify-between mt-2">

                        <h2 className="">{billingAdress.pincode},{billingAdress.city}</h2>
                        <h2 className="">(Billing)</h2>
                    </div>
                </div>
            </div>

            

        </div>
    )
};
export default Address;