import React from "react";
import Link from "next/link";

const Dashboard = () => {

    const creatorName = 'HELLO KIMJONG'


    return (
        <div className='mx-[14px] lg:mx-[30px] xl:mx-[50px] 2xl:mx-[80px] my-[15px] mb-16 '>

            <div className="mt-6">
                <h1 className="font-inter font-medium text-[16px] text-[#323232] text-left">{creatorName}</h1>
                <h2 className="font-inter font-semibold text-[10px] text-[#A6A6A6] text-left mt-[1px]">WELCOME BACK</h2>
            </div>



            <div className="flex flex-col items-start justify-start">


                <div className="p-[30px] ">

                    <div className="flex items-center justify-between">

                        <div>
                            <h2 className="font-inter font-medium text-[12px] text-[#323232] text-left mt-[1px]">Publish Products</h2>

                            <h2 className="font-inter text-[10px] text-[#6C6C6C] text-left mt-[5px]">Complete your Home Page & Create
                                a new Product that you want to Publish</h2>
                        </div>
                        <img className="h-[55px] w-[55px] mx-4" src="./creator/dashboard/random.png" alt="img" />
                    </div>

                    <div className="mt-8 flex flex-col items-start justify-start space-y-2">
                        <Link href='/'>
                            <a className="font-inter text-[10px] text-[#323232]  underline">
                                Preview & Edit
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className="font-inter text-[10px] text-[#323232]  underline">
                                Publish Products
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className="font-inter text-[10px] text-[#323232]  underline">
                                Published Products
                            </a>
                        </Link>
                    </div>


                </div>

                
            </div>


        </div>
    )
};
export default Dashboard;