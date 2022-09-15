import { getProductWishlist } from '../lib/Product_API'
import MerchContext from '../context/MerchContext'
import { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { setCookies, getCookie } from "cookies-next";
import { Itemlist } from '../components/wishlist/Itemlist'
import { BeatLoader } from 'react-spinners';




const Wishlist = ({ logInCheck }) => {

    const { setloginSidebar } = useContext(MerchContext)
    const [beatloader, setbeatloader] = useState(true);

    const [productlist, setproductlist] = useState([]);

    useEffect(async () => {
        try {
            const response = await getProductWishlist()
            console.log(response);
            if (response.sucess) {
                setproductlist(response.data.wishlists)
                setbeatloader(false)
            } else {
                setbeatloader(false)
                console.log(response.message)
            }
        } catch (error) {
            console.log(error)
            setbeatloader(false)
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
                <h1 className="font-inter text-[22px] text-[#323232] w-full text-center mt-[200px] mb-4 ">Please Login First to see wishlist</h1>

                <button onClick={() => {
                    setloginSidebar(true)
                }} className='font-inter text-[16px] font-medium px-6 py-2 bg-[#54BAB9] text-white rounded cursor-pointer'>Login</button>
            </div>
        )
    }
    if (productlist.length === 0) {
        return (
            <div className='flex flex-col items-center justify-center mb-[500px]'>
                <h1 className="font-inter text-[22px] text-[#323232] w-full text-center mt-[200px] mb-4 ">No products in Wishlist</h1>
            </div>
        )
    }



    return (

        <div>
            <h1 className="font-inter text-[22px] text-[#323232] px-[26px] my-[36px]">WISHLIST</h1>

            {productlist &&
                <div className=' sm:px-[12px] xs:px-[20px] px-[10px] lg:px-[50px]'>
                    <Itemlist items={productlist} header={false} />
                </div>
            }

        </div>
    )
}
export default Wishlist;


export async function getServerSideProps({ req, res }) {

    let logInCheck = false


    const cookieExists = getCookie("role", { req, res });
    const emailExists = getCookie("email", { req, res });

    if (cookieExists === 'user' && typeof emailExists !== 'undefined') {
        logInCheck = true
    }

    return {
        props: {
            logInCheck: logInCheck

        },
    }



}
