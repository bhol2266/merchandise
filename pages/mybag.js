import { Router, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { BagItem } from '../components/bagItem'
import { GetbagItems, applyCoupon } from '../lib/serverConfig';
import Head from 'next/head';
import Script from 'next/script';
const Mybag = () => {

    const router = useRouter()
    const [bagitems, setbagitems] = useState([])
    const [cartItemId, setcartItemId] = useState([]);
    const [totalAmount, settotalAmount] = useState();
    const [totalDiscountAmount, settotalDiscountAmount] = useState();
    const [totalMRP, settotalMRP] = useState();
    const [couponDiscount, setcouponDiscount] = useState(0);
    const [deliveryCharge, setdeliveryCharge] = useState();
    const [COUPONCODE, setCOUPONCODE] = useState('');
    const [CouponBtn, setCouponBtn] = useState("APPLY COUPON");

    useEffect(async () => {
        await GetbagItems().then(res => {
            console.log(res);

            settotalDiscountAmount(res.cart[0].discountPrice)
            settotalMRP(res.cart[0].itemBill)
            settotalAmount(res.cart[0].totalBill)

            try {
                setcouponDiscount(res.cart[0].discountCoupen.discount)
                setCOUPONCODE(res.cart[0].discountCoupen.copenCode)
                setCouponBtn("REMOVE COUPON")

            } catch (error) {

            }


            var array = []
            var cartitemIdArray = []
            res.cart[0].items.map(obj => {
                array.push(obj)
            })
            res.cart.map(item => {
                cartitemIdArray.push(item.id)
            })
            setcartItemId(cartitemIdArray)
            setbagitems(array)
        }).catch(err => {
            console.log(err);
        })

    }, [])



    const applyCouponfunc = async () => {

        if (COUPONCODE.length < 3) {
            alert("Error Coupon Code")
            return
        }

        await applyCoupon(COUPONCODE).then(res => {
            if (CouponBtn === 'APPLY COUPON') {
                settotalDiscountAmount(res.applyCoupen.discountPrice)
                settotalAmount(res.applyCoupen.totalBill)
                setcouponDiscount(res.applyCoupen.coupenDiscount)
                setCouponBtn("REMOVE COUPON")
            } else {
                settotalDiscountAmount(res.applyCoupen.discountPrice)
                settotalAmount(res.applyCoupen.totalBill + couponDiscount)
                setcouponDiscount(0)
                setCouponBtn("APPLY COUPON")
                setCOUPONCODE('')
            }


        }).catch(err => {
            console.log(err);
        })


    }
    const checkout = () => {
        if (bagitems) {
            router.push('/checkout')
        }
    }

    return (
        <div className='px-[13px] lg:px-[45px]  mx-auto'>

            <div className='flex items-center justify-between lg:text-[22px] lg:px-[10px] '>
                <h1 className='text-[#323232] lg:text-[22px] text-[18px] font-inter'>MY BAG</h1>

                <div className='lg:w-[260px] h-[17px] flex items-center my-[20px] mx-2'>
                    <p className='lg:h-[20px] lg:w-[20px] w-[10px] h-[10px] rounded-full bg-[#54BAB9]'></p>
                    <span className='lg:w-[92px] w-[46px] border-b-[1.5px] lg:border-b-[2px] border-[#54BAB9]'></span>
                    <p className='lg:h-[20px] lg:w-[20px] border-[1px] border-[#54BAB9] w-[10px] h-[10px] rounded-full '></p>
                    <span className='lg:w-[92px] w-[46px] border-b-[1.5px] lg:border-b-[2px] border-[#ffffff]'></span>
                    <p className='lg:h-[20px] lg:w-[20px] border-[1px] border-[#54BAB9] w-[10px] h-[10px] rounded-full '></p>

                </div>
            </div>

            <div className=' mx-auto  md:flex  lg:justify-between md:space-x-4 lg:space-x-4 xl:space-x-56  '>

                {/* Item  */}
                <div className='items-center  flex flex-col md:grow'>

                    {bagitems && bagitems.map((item, index) => {
                        return (
                            <BagItem key={item.cartItemid} cartID={cartItemId[index]} productdetails={item} />

                        )
                    })

                    }

                </div>

                <div className=' lg:h-[500px] h-[420px] md:w-[300px]  mb-4 lg:w-[400px] rounded-[10px] border-[1px] border-[#BBBBBB]  mt-[10px] md:mt-[0px] py-[20px] mx-auto lg:mx-0 sticky top-10'>
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
                            <input type='text' value={COUPONCODE} onChange={e => (setCOUPONCODE(e.target.value.toUpperCase()))} placeholder='Enter Promocode' className='text-center w-[115px] lg:w-[171px] lg:h-[30px]  h-[20px] border-[1px] border-[#323232] rounded-[5px] text-[11px] lg:text-[16px] text-[#323232] font-inter' />
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
                        <button onClick={checkout} className='w-full  lg:text-[16px]   text-white h-[40px] bg-[#54BAB9] hover:bg-[#458b8a]  rounded-[5px] text-center my-4 font-inter font-semibold'>
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                </div>



            </div>

        </div>
    )
}
export default Mybag


