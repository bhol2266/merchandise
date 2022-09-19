import { getProductWishlist } from '../lib/Product_API'
import MerchContext from '../context/MerchContext'
import { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { setCookies, getCookie } from "cookies-next";
import { Itemlist } from '../components/sold/Itemlist'
import { BeatLoader } from 'react-spinners';
import Link from 'next/link';
import { getUnitTraking } from '../lib/Creator_API';



const Sold = ({ logInCheck }) => {

    const { setloginSidebar, soldPageSelector, setsoldPageSelector } = useContext(MerchContext)
    const [beatloader, setbeatloader] = useState(true);

    const [productlist, setproductlist] = useState([]);

    useEffect(async () => {
        try {
            const response = await getUnitTraking()
            if (response.success) {
                setproductlist(response.data.trackUnits)
                setbeatloader(false)
            }
        } catch (error) {
            setbeatloader(false)
            console.log(error)
        }
    }, []);


    if (beatloader) {
        return (
            <div className="flex justify-center items-center w-full h-[500px] mt-3 ">
                <BeatLoader loading size={20} color={'#54BAB9'} />
            </div>
        )
    }

    if (!logInCheck) {
        return (
            <div className='flex flex-col items-center justify-center mb-[500px]'>
                <h1 className="font-inter text-[22px] text-[#323232] w-full text-center mt-[200px] mb-4 ">Please Login First to see Sold Items</h1>

                <button onClick={() => {
                    setloginSidebar(true)
                }} className='font-inter text-[16px] font-medium px-6 py-2 bg-[#54BAB9] text-white rounded cursor-pointer'>Login</button>
            </div>
        )
    }
    if (productlist.length === 0) {
        return (
            <div className='flex flex-col items-center justify-center mb-[500px]'>
                <h1 className="font-inter text-[22px] text-[#323232] w-full text-center mt-[200px] mb-4 ">No products in Sold Items</h1>
            </div>
        )
    }



    return (

        <div className='mx-[14px] lg:mx-[30px] xl:mx-[50px] 2xl:mx-[80px] my-[15px] mb-16 '>

            <div className='flex items-center justify-between  mb-[20px]'>

                <h1 className="font-inter text-[16px] lg:text-[22px] text-[#323232] ">ACCOUNT</h1>

                <div className="flex  items-center justify-start space-x-2 sm:space-x-3 lg:space-x-6">
                    <p onClick={() => { setsoldPageSelector('sold_units') }} className={`${soldPageSelector === 'sold_units' ? "underline" : ""} font-inter text-[10px] lg:text-[14px] text-[#323232]   cursor-pointer`}>
                        Sold Units                        </p>

                    <p onClick={() => { setsoldPageSelector('inprogress_units') }} className={`${soldPageSelector === 'inprogress_units' ? "underline" : ""} font-inter text-[10px] lg:text-[14px] text-[#323232]   cursor-pointer`}>
                        Inprogress Units
                    </p>

                    <p onClick={() => { setsoldPageSelector('cancelled_units') }} className={`${soldPageSelector === 'cancelled_units' ? "underline" : ""} font-inter text-[10px] lg:text-[14px] text-[#323232]   cursor-pointer`}>
                        Cancelled Units
                    </p>
                </div>
            </div>

            {productlist &&
                <div className=' '>
                    <Itemlist items={productlist} />
                </div>
            }

        </div>
    )
}
export default Sold;


export async function getServerSideProps({ req, res }) {

    let logInCheck = false


    const cookieExists = getCookie("role", { req, res });
    const accessToken = getCookie("accessToken", { req, res });

    if (cookieExists === 'creator' && typeof accessToken !== 'undefined' && accessToken.length > 20) {
        logInCheck = true
    }

    return {
        props: {
            logInCheck: logInCheck

        },
    }



}
