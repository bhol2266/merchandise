import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Itemlist } from "../../components/Itemlist";
import MerchContext from "../../context/MerchContext";
import Cookies from 'js-cookie'
import { setCookies, getCookie } from "cookies-next";
import { getUnitTraking } from "../../lib/Creator_API";
import { getPublishedProducts } from "../../lib/Creator_API";
import Script from "next/script";
import Head from "next/head";
import { toast } from "react-toastify";

const Dashboard = () => {


    const [productlist, setproductlist] = useState([]);
    const { setcustomisePageSelector, setNavbarUserORcreator, soldPageSelector, setsoldPageSelector } = useContext(MerchContext)
    const [creatorName, setcreatorName] = useState('');
    const [totalBalance, settotalBalance] = useState('0');
    const [totalItemsSold, settotalItemsSold] = useState('0');

    async function fetchData() {
        try {
            const response = await getUnitTraking()
            if (response.success) {
                let itemCount = 0
                response.data.trackUnits.map(product => {
                    itemCount = itemCount + parseInt(product.soldUnits);
                })
                settotalItemsSold(itemCount)
            }
        } catch (error) {
            console.log(error)
        }


        try {
            const response = await getPublishedProducts()
            if (response.success) {
                setproductlist(response.data.products)
            }


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setNavbarUserORcreator('creator')
        setcreatorName('HELLO' + " " + Cookies.get('name').substring(0, Cookies.get('name').indexOf(" ")).toUpperCase())

        fetchData()


    }, []);





    return (
        <div className='mx-[14px] lg:mx-[30px] xl:mx-[50px] 2xl:mx-[80px] my-[15px] mb-16 '>


            <div className="my-6">
                <h1 className="font-inter font-medium text-[16px] lg:text-[18px] text-[#323232] text-left">{creatorName}</h1>
                <h2 className="font-inter font-semibold text-[10px] lg:text-[12px] text-[#A6A6A6] text-left mt-[1px] ml-[1px]">WELCOME BACK</h2>
            </div>



            <div className="space-y-4 lg:space-y-0 lg:space-x-4 flex flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-between ">




                <div className="p-[30px]  flex flex-col justify-between  items-start h-[275px] lg:h-[350px] 2xl:h-[300px] sm:w-[470px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px]  border-[1px] border-gray-300 rounded-lg shadow-lg">

                    <div className="flex items-center justify-between">

                        <div>
                            <h2 className="font-inter font-medium text-[12px] lg:text-[14px] text-[#323232] text-left mt-[1px]">Publish Products</h2>

                            <h2 className="pr-4 lg:pr-1 font-inter text-[10px] lg:text-[13px] text-[#6C6C6C] text-left mt-[5px]">Complete your Home Page & Create a new Product that you want to Publish
                            </h2>
                        </div>
                        <img className="h-[65px] w-[65px] mx-4" src="./creator/dashboard/random.png" alt="img" />
                    </div>

                    <div className="flex flex-col items-start justify-start space-y-2">
                        <Link href='/dashboard/preview'>
                            <div onClick={() => { setcustomisePageSelector('PREVIEW') }} className="font-inter text-[10px] lg:text-[14px] text-[#323232]  underline">
                                Preview & Edit
                            </div>
                        </Link>
                        <Link href='/dashboard/preview'>
                            <div onClick={() => { setcustomisePageSelector('PUBLISH') }} className="font-inter text-[10px] lg:text-[14px] text-[#323232]  underline">
                                Publish Products
                            </div>
                        </Link>
                        <Link href='/dashboard/preview'>
                            <div onClick={() => { setcustomisePageSelector('PUBLISHED_PRODUCT') }} className="font-inter text-[10px] lg:text-[14px] text-[#323232]  underline">
                                Published Products
                            </div>
                        </Link>
                    </div>


                </div>



                <div className="p-[30px]  flex flex-col justify-between  h-[275px] lg:h-[350px] 2xl:h-[300px] sm:w-[470px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px]  items-start border-[1px] border-gray-300 rounded-lg shadow-lg">

                    <div className="flex items-center justify-between">

                        <div>
                            <h2 className="font-inter font-medium text-[12px] lg:text-[14px] text-[#323232] text-left mt-[1px]">Track Your Earnings</h2>

                            <h2 className="pr-4 lg:pr-1 font-inter text-[10px] lg:text-[13px] text-[#6C6C6C] text-left mt-[5px]">Track your Profit , Charges &
                                Withdraw Amount to your Bank Account</h2>




                        </div>
                        <img className="h-[65px] w-[65px] mx-4" src="./creator/dashboard/money.png" alt="img" />
                    </div>

                    <div className="pb-[70px]">

                        <h2 className="font-inter text-[10px] lg:text-[16px] text-[#323232] text-left mt-[20px]">Total Balance</h2>
                        <h2 className="font-inter text-[14px]  lg:text-[20px] text-[#323232] text-left mt-[10px]">₹{totalBalance}</h2>
                    </div>



                    <h1 className="cursor-pointer font-inter text-[10px] lg:text-[14px] text-[#323232] text-left  underline" onClick={()=>{toast.error('Insufficient fund')}} >
                        Withdraw Amount
                    </h1>



                </div>



                <div className="p-[30px]  flex flex-col justify-between  items-start h-[275px] lg:h-[350px] 2xl:h-[300px] sm:w-[470px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px]  border-[1px] border-gray-300 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between">

                        <div>
                            <h2 className="font-inter font-medium text-[12px] lg:text-[14px] text-[#323232] text-left mt-[1px]">Track Units</h2>

                            <h2 className="pr-4 lg:pr-1 font-inter text-[10px] lg:text-[13px] text-[#6C6C6C] text-left mt-[5px]">Track your Profit and Sold Units ,Inprogess and Cancelled Units</h2>


                        </div>
                        <img className="h-[65px] w-[65px] mx-4" src="./creator/dashboard/box.png" alt="img" />
                    </div>


                    <div className="">
                        <h2 className="font-inter text-[10px] lg:text-[16px] text-[#323232] text-left mt-[20px]">Total Units Sold</h2>
                        <h2 className="font-inter text-[14px]  lg:text-[20px] text-[#323232] text-left mt-[10px]">{totalItemsSold}</h2>
                    </div>


                    <div className="mt-6 flex flex-col items-start justify-start space-y-2">
                        <Link href='/sold'>
                            <div onClick={() => { setsoldPageSelector('sold_units') }} className="font-inter text-[10px] lg:text-[14px] text-[#323232]  underline">
                                Sold Units
                            </div>
                        </Link>
                        <Link href='/sold'>
                            <div onClick={() => { setsoldPageSelector('inprogress_units') }} className="font-inter text-[10px] lg:text-[14px] text-[#323232]  underline">
                                Inprogress Units
                            </div>
                        </Link>
                        <Link href='/sold'>
                            <div onClick={() => { setsoldPageSelector('cancelled_units') }} className="font-inter text-[10px] lg:text-[14px] text-[#323232]  underline">
                                Cancelled Units
                            </div>
                        </Link>
                    </div>



                </div>

            </div>







            <div className="mt-6">
                {/* <h2 className="font-inter font-semibold text-[12px
] lg:text-[14px] text-[#323232] text-left mt-[1px] ml-[1px] mb-3">Published Products
                </h2> */}

                {productlist.length > 0 &&
                    <Itemlist items={productlist} />
                }

            </div>



        </div>
    )
};
export default Dashboard;


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