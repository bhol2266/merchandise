

import Link from "next/link";
import { useEffect, useState } from "react";
import { setCookies, getCookie } from "cookies-next";






const Partner_with_us = () => {

    useEffect(() => {

        console.log(window.innerWidth);

        if (window.innerWidth >= 750) {
            setBanner('./creator/launch2.png')
            setPoster('./creator/poster2.png')
        }
    }, [])


    const updateCookie = async () => {
        setCookies('role', "creator")
    }




    const [openLogin, setopenLogin] = useState(false);

    const [Banner, setBanner] = useState('./creator/launch1.png')
    const [Poster, setPoster] = useState('./creator/poster1.png')

    return (
        <div className="bg-creator_bg px-[22px] pt-[40px] bg-no-repeat bg-cover ">

            <div className="sm:flex sm:flex-col items-center">

                <img className="lg:w-[733px] w-[300px] mb-[15px]  " src={Banner} alt="banner" />

                <h1 className="sm:w-3/4 lg:w-[741px] lg:text-[16px] sm:text-[12px] sm:text-center sm:mt-4 font-inter font-medium text-[#323232] text-[10px] ">Now you can join us & sell your own merchandise. Create your own Brand & Monetize.Join us today & become a part of our evergrowing Closm Family.</h1>
            </div>



            <div className="h-[100px] mt-[50px] relative">


                {!openLogin &&

                    <button onClick={() => { setopenLogin(!openLogin) }} className="block w-fit mx-auto  font-inter font-black text-white text-[15px] lg:text-[20px] px-[37px] py-[11px] bg-[#54BAB9] rounded-[5px]  transition-all translate-x-2">GET STARTED</button>
                }



                <div className={` w-fit mx-auto my-12 ${openLogin ? 'opacity-100 relative' : 'opacity-0'} transition-all duration-500 lg:scale-125`}>
                    <p className="mb-[18px] font-inter font-medium text-[#323232] text-[10px] block mx-auto w-fit">Continue With</p>
                    <div className="flex items-center space-x-3">
                        <Link href='/api/google/'>
                            <img onClick={updateCookie} className="bg-white w-[50px] p-[10px] shadow-md rounded-2xl cursor-pointer mb-[15px]" src="./login/google.png" alt="" />
                        </Link>
                        <Link href='/api/facebook/'>
                            <img onClick={updateCookie} className="bg-white w-[50px] p-[10px] shadow-md rounded-2xl cursor-pointer mb-[15px] " src="./login/facebook.png" alt="" />
                        </Link>

                    </div>
                </div>


                {!openLogin &&
                    <div className="text-[#323232] font-inter font-medium text-[10px] flex items-center justify-center space-x-1 my-[40px] sm:scale-125 absolute lg:-bottom-[30px] -bottom-[20px] right-0 left-0">
                        <p>Already a User ?</p>

                        <p onClick={() => setopenLogin(!openLogin)} className="cursor-pointer underline hover:text-red-500"> SIGN IN</p>

                    </div>
                }

            </div>
            <img className="w-full lg:w-[737px] sm:w-3/4 mt-[50px] pb-16 block mx-auto" src={Poster} alt="" />

        </div>
    )
};
export default Partner_with_us;




export async function getServerSideProps({ req, res }) {
    try {
        const cookieExists = getCookie("role", { req, res });

        console.log(cookieExists);
        if (cookieExists === 'creator') {
            return { redirect: { destination: "/dashboard" } };
        }
        return { props: {} };
    } catch (err) {
        return { props: {} };
    }
}
