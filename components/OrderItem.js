import React, { useEffect, useState } from 'react'
import { MinusIcon } from '@heroicons/react/solid'
import { PlusIcon } from '@heroicons/react/solid'
import { ArrowDownIcon } from '@heroicons/react/outline'
import { getProductbyID } from '../lib/Product_API'




export const OrderItem = ({ orderDetails }) => {


    const { productName, size, img, discountPrice, mrp, deliveryMessage, discount, productId
        , color, quantity
    } = orderDetails.products[0];
    const { firstName, lastName, mobileNumber, alter_MobileNumber, state, pincode, city, landmark, fullAddress, country } = orderDetails.shippingAddress
    const billingAdress = orderDetails.billingAddress

    const orderDate = orderDetails.updatedAt.substring(0, 10);
    const orderId = orderDetails._id

    const dicountPriceInteger = parseInt(discountPrice);
    const mrpInteger = parseInt(mrp);
    const discountPercent = 100 - ((dicountPriceInteger * 100) / mrpInteger)



    const [imageURL, setimageURL] = useState("");







    useEffect(async () => {


        try {
            const response = await getProductbyID({
                productId: productId
            })
            if (response.sucess) {
                response.data.color.forEach(obj => {
                    if (obj.name === color) {
                        setimageURL(obj.imageUrl[0])
                    }
                })
            }
        } catch (error) {
            console.log(error)
        }

    }, []);




    const [openTracking, setopenTracking] = useState(false)
    return (
        <div className='mb-4 md:flex justify-between items-start w-full'>

            <div onClick={() => { if (window.innerWidth <= 1000) { setopenTracking(!openTracking) } }} className='flex  h-[122px] xl:h-[220px] md:h-[150px]'>

                <img src={imageURL} className='cursor-pointer h-[122px] xl:w-[181px]  xl:h-[220px] md:h-[150px]  mb-2  object-contain'></img>

                {/* Name and discountPrice,Size, Colour, Quantity   */}
                <div className='flex flex-col justify-between ml-[7px] lg:ml-6  pb-2 lg:pb-3'>
                    <div>
                        <h1 className='font-inter text-[12px] md:text-[13px] xl:text-[16px] text-[#19191D]  py-1'>{productName} </h1>

                        <div className='flex items-center lg:mt-1 space-x-1 justify-start '>
                            <h2 className='font-inter  text-[13px] md:text-[16px] xl:text-[24px] text-[#19191D]'>₹{discountPrice}</h2>
                            <h3 className='font-inter text-[9px] md:text-[10px] xl:text-[13px] text-[#787885] line-through '>₹{mrp}</h3>
                            <h3 className='text-[#C25050] font-inter text-[9px] md:text-[11px] xl:text-[13px] ml-12px'>{discountPercent.toString().substring(0, discountPercent.toString().indexOf('.')).replace('.', '')}% OFF</h3>
                        </div>

                        <h2 className='font-inter text-[#19191D] md:text-[12px] xl:text-[14px] text-[8px] font-medium mt-2'>Size: {size}</h2>
                        <h2 className='font-inter text-[#19191D] md:text-[12px] xl:text-[14px] text-[8px] font-medium'>Colour: {color.replace("_", " ")}</h2>

                        <h2 className='font-inter text-[#19191D] md:text-[12px] xl:text-[14px] text-[8px] font-medium'>Quantity : {quantity}</h2>
                    </div>


                    <h2 className={`brightness-150 text-start   text-[#323232] font-inter text-[9px] xl:text-[14px] md:text-[12px] ${deliveryMessage === "Cancelled" ? "text-red-500" : ""} `}>{orderDate}</h2>


                </div>

            </div>


            {/*  For mobile screen to medium screen size  */}
            {openTracking &&
                <div className='mt-[28px]'>
                    <h2 className='text-[11px] lg:text-[11px] text-[#323232] font-inter'>Tracking ID : {orderId}</h2>
                    <h2 className='text-[10px] lg:text-[11px] text-[#323232] font-inter mt-[10px]'>delivery Partner : Shiprocket</h2>

                    {/* tracking diagram  */}

                    <div className='flex items-center w-[180px] h-[140px]  mt-[40px] '>

                        <div className='flex flex-col items-center '>
                            <p className='lg:h-[12px] lg:w-[12px]  w-[10px] h-[10px] rounded-full border-r-[1.5px] lg:border-r-[2px] border-[#54BAB9] bg-[#54BAB9]'></p>
                            <span className='lg:h-[53px] h-[29px] border-r-[1px] lg:border-r-[2px] border-[#54BAB9]'></span>

                            <p className='lg:h-[12px] lg:w-[12px]  w-[10px] h-[10px] rounded-full border-r-[1.5px] lg:border-r-[2px] border-[#54BAB9] bg-[#54BAB9]'></p>
                            <span className='lg:h-[53px] h-[29px] border-r-[1px] lg:border-r-[2px] border-[#54BAB9]'></span>

                            <p className='lg:h-[12px] lg:w-[12px]  w-[10px] h-[10px] rounded-full border-[1.5px] lg:border-r-[2px] border-[#54BAB9] bg-[#]'></p>
                            <span className='lg:h-[53px] h-[29px] border-r-[1px] lg:border-r-[2px] border-[#54BAB9]'></span>

                            <p className='lg:h-[12px] lg:w-[12px]  w-[10px] h-[10px] rounded-full border-[1.5px] lg:border-r-[2px] border-[#54BAB9] bg-[#]'></p>


                        </div>

                        <div className=' flex flex-col  h-full '>
                            <h2 className='text-[10px] text-[#323232] font-inter ml-[30px]'>Seller is processing your order</h2>
                            <div className='ml-[30px] mt-3'>
                                <h2 className='text-[10px] text-[#323232] font-inter'>Order dispatched</h2>
                                <h2 className='text-[9px] text-[#323232] font-inter ml-2'>Delivery by 20 oct</h2>
                            </div>
                            <h2 className='text-[10px] text-[#323232] font-inter ml-[30px] mt-3'>Order recived at your</h2>
                            <h2 className='text-[10px] text-[#323232] font-inter ml-[30px] mt-6'>Out for delivery</h2>

                        </div>

                    </div>

                    {/* Shipping Address */}
                    <div className='mt-[40px] '>
                        <div >
                            <h2 className='text-[13px] lg:text-[13px] text-[#323232] font-inter'>Shipping Address</h2>
                            <h2 className='text-[10px] lg:text-[10px] text-[#323232] font-inter mt-[6px] '>{firstName} {lastName}</h2>
                            <p className='text-[10px] lg:text-[10px] text-[#323232] font-inter  w-[272px]'>{landmark}, {fullAddress}, {city}, {pincode}, {state}, {country}, {mobileNumber}</p>

                        </div>

                        <div className='mt-[20px] '>
                            <h2 className='text-[13px] lg:text-[13px] text-[#323232] font-inter'>Billing Address</h2>
                            <h2 className='text-[10px] lg:text-[10px] text-[#323232] font-inter mt-[6px] '>{billingAdress.firstName} {billingAdress.lastName}</h2>
                            <p className='text-[10px] lg:text-[10px] text-[#323232] font-inter  w-[272px]'>{billingAdress.landmark}, {billingAdress.fullAddress}, {billingAdress.city}, {billingAdress.pincode}, {billingAdress.state}, {billingAdress.country}, {billingAdress.mobileNumber}</p>


                        </div>
                    </div>

                    <div className='mt-[30px] flex items-center justify-between mb-6'>
                        <div className='flex flex-col items-center justify-center space-x-[2px] '>
                            <button className='text-[9px] text-center font-inter text-[#323232] w-[46px]'>Download Invoice</button>
                            <ArrowDownIcon className='h-[10px] text-[#323232]' />
                        </div>
                        <button className='text-[10px]  font-inter text-[#323232] w-[212px] h-[30px] text-center border-[1px] border-[#323232] rounded-[5px]'>request Cancellation</button>

                    </div>

                </div>
            }


            {/*  For medium screen to xtra large screen size  */}

            <div className='hidden md:flex flex-col justify-between items-center  xl:h-[220px] h-[150px] xl:mr-[200px] pb-2'>
                {/* tracking diagram  */}
                <div className='flex items-center mr-5'>

                    <div className='flex items-center '>
                        <p className='xl:w-[12px] xl:h-[12px] w-[10px] h-[10px] rounded-full border-[2px] border-[#54BAB9] bg-[#54BAB9]'></p>
                        <span className='w-[40px] xl:w-[53px] border-b-[2px] border-[#54BAB9]'></span>

                        <p className='xl:w-[12px] xl:h-[12px] w-[10px] h-[10px] rounded-full border-[2px] border-[#54BAB9] bg-[#54BAB9]'></p>
                        <span className='w-[40px] xl:w-[53px] border-b-[2px] border-[#54BAB9]'></span>

                        <p className='xl:w-[12px] xl:h-[12px] w-[10px] h-[10px] rounded-full border-[2px] border-[#54BAB9] bg-[#]'></p>
                        <span className='w-[40px] xl:w-[53px] border-b-[2px] border-[#54BAB9]'></span>


                        <p className='xl:w-[12px] xl:h-[12px] w-[10px] h-[10px] rounded-full border-[2px] border-[#54BAB9] bg-[#]'></p>
                    </div>

                </div>

                {/* Shipping Address */}
                <div className='xl:w-[272px] w-[200px]'>
                    <div >
                        <h2 className='xl:text-[16px] text-[13px]  text-[#323232] font-inter'>Shipping Address</h2>
                        <h2 className='xl:text-[12px] text-[10px] text-[#323232] font-inter mt-[6px] '>{firstName} {lastName}</h2>
                        <p className='xl:text-[12px] text-[10px] text-[#323232] font-inter  w-[272px]'>{landmark}, {fullAddress}, {city}, {pincode}, {state}, {country}, {mobileNumber}</p>

                    </div>

                    <div >

                    </div>

                    <div className='mt-[20px] hidden xl:flex xl:flex-col '>
                        <h2 className='xl:text-[16px] text-[13px]  text-[#323232] font-inter'>Billing Address</h2>
                        <h2 className='text-[10px] lg:text-[10px] text-[#323232] font-inter mt-[6px] '>{billingAdress.firstName} {billingAdress.lastName}</h2>
                        <p className='text-[10px] lg:text-[10px] text-[#323232] font-inter  w-[272px]'>{billingAdress.landmark}, {billingAdress.fullAddress}, {billingAdress.city}, {billingAdress.pincode}, {billingAdress.state}, {billingAdress.country}, {billingAdress.mobileNumber}</p>


                    </div>
                </div>
            </div>





            <div className='hidden md:flex flex-col justify-between  items-end xl:h-[220px] h-[150px]'>
                <div>
                    <h2 className='xl:text-[14px] text-[12px]   text-[#323232] font-inter text-right'>Tracking ID : {orderId}</h2>
                    <h2 className='xl:text-[12px] text-[10px] text-[#323232] font-inter xl:mt-[8px] mt-1 text-right'>delivery Partner : Shiprocket</h2>
                </div>

                <div className='xl:w-[212px] w-[150px] ml-auto'>
                    <div className='flex  items-center justify-center space-x-[8px] border-[1px] border-[#323232] rounded-[5px] xl:h-[30px] md:h-[25px]'>
                        <button className='xl:text-[14px] text-[11px] text-center font-inter text-[#323232] '>Download Invoice</button>
                        <ArrowDownIcon className='h-[10px] text-[#323232]' />
                    </div>
                    <button className='w-full mt-2 xl:text-[14px] text-[11px]  font-inter text-[#323232]  xl:h-[30px] md:h-[25px] text-center border-[1px] border-[#323232] rounded-[5px]'>request Cancellation</button>

                </div>
            </div>





        </div >
    )
}
