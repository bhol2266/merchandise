import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { getProductCart } from "../lib/Product_API";
import MerchContext from "../context/MerchContext";
import { setCookies, getCookie } from "cookies-next";





const Bill_Invoice = () => {


    const router = useRouter()

    const { AddressForCheckoutIndex, addressArray } = useContext(MerchContext);

    const [totalAmount, settotalAmount] = useState('');
    const [totalDiscountAmount, settotalDiscountAmount] = useState('');
    const [totalMRP, settotalMRP] = useState('');
    const [couponDiscount, setcouponDiscount] = useState(0);
    const [deliveryCharge, setdeliveryCharge] = useState('');
    const [COUPONCODE, setCOUPONCODE] = useState('');
    const [CouponBtn, setCouponBtn] = useState("APPLY COUPON");
    const [NumberOfItems, setNumberOfItems] = useState('');


    const [checkoutRoute, setcheckoutRoute] = useState('');


    useEffect(async () => {
        if (window.location.pathname === '/mybag') {
            setcheckoutRoute('/mybag')
        }

        try {
            const response = await getProductCart()
            if (response.sucess) {
                const billdetails = response.data.cartTotal
                settotalAmount(billdetails.totalBill)
                settotalMRP(billdetails.totalMrp)
                settotalDiscountAmount(billdetails.totalDiscount)
                setdeliveryCharge(billdetails.deliveryCharges)
                setNumberOfItems(billdetails.totalQuantity)
            }
        } catch (error) {
            console.log(error)
        }

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
        if (checkoutRoute === '/mybag') {
            router.push('/checkout')
        } else {

            if (addressArray.length === 0) {
                alert('Add address')
                return
            }



            handlePayment();

        }
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
                    const verifyUrl = "/api/razorpayVerify";
                    const { data } = await axios.post(verifyUrl, response);

                    const { signatureIsValid, razorpay_order_id, razorpay_payment_id } = data;
                    afterPaymentisDone(razorpay_order_id, razorpay_payment_id)

                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#3399cc",
            },
            prefill: {
                name: getCookie('firstname') + getCookie('lastname'),
                email: getCookie('email'),
                contact: "9108825914",
            },
        };
        const rzp1 = await new window.Razorpay(options);
        rzp1.open();
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



    const afterPaymentisDone = async (razorpay_order_id, razorpay_payment_id) => {
        await addPaymentDetails(cartId, totalAmount, razorpay_payment_id, razorpay_order_id, shippingId).then(res => {
            router.push('/paymentsuccessfull')
        }).catch(error => {
            console.log(error);
        })


    }



    return (



        <div className={`${checkoutRoute === '/mybag' ? " lg:w-[350px]" : " lg:w-[450px]"} xl:w-[400px] lg:h-[400px] h-[320px] sm:w-[400px] w-full  rounded-[10px] border-[1px] border-[#BBBBBB]  mt-[10px] md:mt-[0px] py-[40px] mx-auto lg:mx-0 sticky top-10`}>


            <h1 className='px-[20px] font-inter font-semibold text-[12px] lg:text-[18px] text-[#323232]'>TOTAL PRICE</h1>

            <div className='mt-[12px] lg:mt-[16px] flex items-center justify-between px-[20px] pb-[14px] border-b-[0.5px] border-[#E5E5E5]'>
                <h1 className=' text-[11px] lg:text-[14px] text-[#323232] font-inter'>ITEMS ({NumberOfItems})</h1>
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

            {/* <div className='mt-[12px] lg:mt-[16px] flex items-start justify-between px-[20px] pb-[14px] border-b-[0.5px] border-[#E5E5E5]'>
            <h1 className=' text-[11px] lg:text-[14px] text-[#323232] font-inter'>APPLY COUPON</h1>
            <div className='flex flex-col items-end'>
                <input type='text' value={COUPONCODE} onChange={e => (setCOUPONCODE(e.target.value.toUpperCase()))} placeholder='Enter Promocode' className='text-center w-[115px] lg:w-[171px] lg:h-[30px]  h-[20px] border-[1px] border-[#323232] rounded-[5px] text-[11px] lg:text-[16px] text-[#323232] font-inter' />
                <h1 onClick={applyCouponfunc} className='mt-[7px] text-[10px] lg:text-[12px]  font-inter cursor-pointer hover:text-red-500 underline text-red-700 '>{CouponBtn}</h1>

            </div>

        </div> */}

            {/* <div className='mt-[12px] lg:mt-[16px] flex items-center justify-between px-[20px] pb-[14px] border-b-[0.5px] border-[#E5E5E5]'>
            <h1 className=' text-[11px] lg:text-[14px] text-[#323232] font-inter'>COUPON DISCOUNT</h1>
            <h1 className=' text-[11px] lg:text-[14px] text-[#323232] font-inter'>{couponDiscount} INR</h1>
        </div> */}
            <div className='mt-[14px] flex items-center justify-between px-[20px] pb-[14px]  border-[#E5E5E5]'>
                <h1 className=' text-[12px] lg:text-[16px] text-[#323232] font-inter'>TOTAL AMOUNT</h1>
                <h1 className=' text-[12px] lg:text-[16px] text-[#323232] font-inter'>{totalAmount} INR</h1>
            </div>

            <div className='px-8 lg:px-16 my-4 lg:mt-12'>
                <button onClick={checkout} className='w-full  lg:text-[16px]   text-white h-[40px] bg-[#54BAB9] hover:bg-[#458b8a]  rounded-[5px] text-center  font-inter font-semibold'>
                    {checkoutRoute === '/mybag' ? "PROCEED TO CHECKOUT" : "PROCEED TO PAYMENT"}
                </button>
            </div>
        </div>



    )
};
export default Bill_Invoice;