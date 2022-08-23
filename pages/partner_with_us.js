


import Link from "next/link";
import { useState } from "react";






const Partner_with_us = () => {

    const [openLogin, setopenLogin] = useState(false);


    return (
        <div className="bg-creator_bg px-[22px] pt-[40px] bg-no-repeat bg-cover ">

            <div className="sm:flex sm:flex-col items-center">

                <img className="w-[300px]   mb-[15px] " src="./creator/launch.png" alt="" />

                <h1 className="sm:w-3/4 sm:text-[12px] sm:text-center sm:mt-4 font-inter font-medium text-[#323232] text-[10px] ">Now you can join us & sell your own merchandise. Create your own Brand & Monetize.Join us today & become a part of our evergrowing Closm Family.</h1>
            </div>



            <div className="h-[100px] mt-[90px]">


                {!openLogin &&

                    <button onClick={() => { setopenLogin(!openLogin) }} className="block w-fit mx-auto  font-inter font-black text-white text-[15px] px-[37px] py-[11px] bg-[#54BAB9] rounded-[5px]  animate-movement">GET STARTED</button>
                }

                {openLogin &&

                    <div className="block w-fit mx-auto my-12 ">
                        <p className="mb-[18px] font-inter font-medium text-[#323232] text-[10px] block mx-auto w-fit">Continue With</p>
                        <div className="flex items-center space-x-3">
                            <Link href='/'>
                                <img className="bg-white w-[50px] p-[10px] shadow-md rounded-2xl cursor-pointer mb-[15px]" src="./login/google.png" alt="" />
                            </Link>
                            <Link href='/'>
                                <img className="bg-white w-[50px] p-[10px] shadow-md rounded-2xl cursor-pointer mb-[15px]  transition ease-in-out hover:translate-y-2 duration-200 " src="./login/facebook.png" alt="" />
                            </Link>

                        </div>
                    </div>
                }

                {!openLogin &&
                    <div className="text-[#323232] font-inter font-medium text-[10px] flex items-center justify-center space-x-1 my-[40px] sm:scale-125">
                        <p>Already a User ?</p>

                        <Link href='/'>
                            <a className="underline hover:text-red-500"> SIGN IN</a>
                        </Link>
                    </div>
                }

            </div>
            <img className="w-full mt-[50px] pb-16" src="./creator/poster1.png" alt="" />

        </div>
    )
};
export default Partner_with_us;