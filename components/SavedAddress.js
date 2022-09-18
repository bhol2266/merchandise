import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import MerchContext from "../context/MerchContext";
import { defaultAddress, deletetAddress } from "../lib/Address_API";



const SavedAddress = (props) => {




    const { editAddress, seteditAddress, editAddressArrayIndex, seteditAddressArrayIndex, AddressForCheckoutIndex, setAddressForCheckout, addressArray, setaddressArray } = useContext(MerchContext);


    const indexPositon = props.index

    const { firstName, lastName, mobileNumber, alter_MobileNumber, state, pincode, city, landmark, fullAddress, country } = props.data.shippingAddress

    const billingAdress = props.data.billingAddress

    const editOnclick = () => {
        seteditAddressArrayIndex(indexPositon)
        seteditAddress(true)
    }

    const deleteOnclick = async () => {
        const data = {
            addressId: props.data._id
        }
        try {
            const response = await deletetAddress(data)
            console.log(response);

            if (response.sucess) {
                window.location.reload()
            }

        } catch (error) {
            console.log(error)
        }
    }

    const setBorderOnclick = () => {
        setAddressForCheckout(indexPositon)
    }


    const setAsdefaultOnclick = async () => {
        let array = []

        addressArray.forEach(element => {
            array.push(element._id)
        })

        array.splice(indexPositon, 1)
        array.unshift(addressArray[indexPositon]._id);

        const data = {
            addressId: array
        }


        try {
            const response = await defaultAddress(data)
            console.log(response);

            if (response.sucess) {
                window.location.reload()
            }

        } catch (error) {
            console.log(error)
        }
    }




    return (


        <div onClick={setBorderOnclick} className={`select-none font-inter my-6 lg:my-0 ${indexPositon === AddressForCheckoutIndex ? "border-[2px] border-theme" : ""} p-4 rounded-md  cursor-pointer`}>

            <div className="flex items-start justify-between  text-[14px] xl:text-[16px] mb-3">
                <h1 className=" text-theme">Address {indexPositon + 1}</h1>

                {indexPositon === 0 &&
                    <h1 className=" text-theme">Default Address</h1>
                }
                {indexPositon !== 0 &&
                    <h1 onClick={setAsdefaultOnclick} className="underline cursor-pointer">Set as Default</h1>
                }

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

            <div className="grid grid-cols-2 gap-3 md:w-[250px] md:ml-auto mt-3 md:mt-4 lg:mt-6 xl:mt-8">

                <button onClick={editOnclick} className="border-theme border-[1px] text-[12px] lg:text-[14px] font-inter rounded px-3 py-1">
                    Edit
                </button>
                <button onClick={deleteOnclick} className="border-theme border-[1px] text-[12px] lg:text-[14px] font-inter rounded px-3 py-1">
                    Delete
                </button>
            </div>



        </div>
    )
};
export default SavedAddress;