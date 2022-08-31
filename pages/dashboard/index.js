import React from "react";
import Link from "next/link";
import { Itemlist } from "../../components/Itemlist";

const Dashboard = () => {

    const creatorName = 'HELLO KIMJONG'
    const totalBalance = '75000'
    const totalItemsSold = '5842'
    const productlist = []
    const productid = ''


    return (
        <div className='mx-[14px] lg:mx-[30px] xl:mx-[50px] 2xl:mx-[80px] my-[15px] mb-16 '>

            <div className="my-6">
                <h1 className="font-inter font-medium text-[16px] lg:text-[18px] text-[#323232] text-left">{creatorName}</h1>
                <h2 className="font-inter font-semibold text-[10px] lg:text-[12px] text-[#A6A6A6] text-left mt-[1px] ml-[1px]">WELCOME BACK</h2>
            </div>



            <div className=" flex flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-between ">




                <div className="p-[30px]  flex flex-col justify-between  items-start h-[275px] lg:h-[350px] 2xl:h-[300px] sm:w-[470px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px] ">

                    <div className="flex items-center justify-between">

                        <div>
                            <h2 className="font-inter font-medium text-[12px] lg:text-[14px] text-[#323232] text-left mt-[1px]">Publish Products</h2>

                            <h2 className="pr-4 lg:pr-1 font-inter text-[10px] lg:text-[13px] text-[#6C6C6C] text-left mt-[5px]">Complete your Home Page & Create a new Product that you want to Publish
                            </h2>
                        </div>
                        <img className="h-[65px] w-[65px] mx-4" src="./creator/dashboard/random.png" alt="img" />
                    </div>

                    <div className="flex flex-col items-start justify-start space-y-2">
                        <Link href='/'>
                            <a className="font-inter text-[10px] lg:text-[14px] text-[#323232]  underline">
                                Preview & Edit
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className="font-inter text-[10px] lg:text-[14px] text-[#323232]  underline">
                                Publish Products
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className="font-inter text-[10px] lg:text-[14px] text-[#323232]  underline">
                                Published Products
                            </a>
                        </Link>
                    </div>


                </div>



                <div className="p-[30px]  flex flex-col justify-between  h-[275px] lg:h-[350px] 2xl:h-[300px] sm:w-[470px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px]  items-start">

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



                    <Link className="" href='/'>
                        <a className="font-inter text-[10px] lg:text-[14px] text-[#323232] text-left  underline">Withdraw Amount</a>
                    </Link>



                </div>



                <div className="p-[30px]  flex flex-col justify-between  items-start h-[275px] lg:h-[350px] 2xl:h-[300px] sm:w-[470px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px] ">
                    <div className="flex items-center justify-between">

                        <div>
                            <h2 className="font-inter font-medium text-[12px] lg:text-[14px] text-[#323232] text-left mt-[1px]">Track Units</h2>

                            <h2 className="pr-4 lg:pr-1 font-inter text-[10px] lg:text-[13px] text-[#6C6C6C] text-left mt-[5px]">Track your Profit , Charges &
                                Withdraw Amount to your Bank Account</h2>


                        </div>
                        <img className="h-[65px] w-[65px] mx-4" src="./creator/dashboard/box.png" alt="img" />
                    </div>


                    <div className="">
                        <h2 className="font-inter text-[10px] lg:text-[16px] text-[#323232] text-left mt-[20px]">Total Units Sold</h2>
                        <h2 className="font-inter text-[14px]  lg:text-[20px] text-[#323232] text-left mt-[10px]">{totalItemsSold}</h2>
                    </div>


                    <div className="mt-6 flex flex-col items-start justify-start space-y-2">
                        <Link href='/'>
                            <a className="font-inter text-[10px] lg:text-[14px] text-[#323232]  underline">
                                Sold Units
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className="font-inter text-[10px] lg:text-[14px] text-[#323232]  underline">
                                Inprogress Units
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className="font-inter text-[10px] lg:text-[14px] text-[#323232]  underline">
                                Cancelled Units
                            </a>
                        </Link>
                    </div>



                </div>

            </div>







            <div className="mt-6">
                <h2 className="font-inter font-semibold text-[12px
] lg:text-[14px] text-[#323232] text-left mt-[1px] ml-[1px] mb-3">Published Products
                </h2>


                <Itemlist items={productlist} productid={productid} />

            </div>



        </div>
    )
};
export default Dashboard;