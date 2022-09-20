import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'

//Three components of Preview page
import Preview_Edit from '../../components/customise/Preview_Edit'
import Publish from '../../components/customise/Publish'
import PublishedProducts from '../../components/customise/publishedProducts'
import Script from 'next/script';
import dynamic from "next/dynamic";
import { setCookies, getCookie } from "cookies-next";



import MerchContext from '../../context/MerchContext'



const Preview = () => {


    const { customisePageSelector, setcustomisePageSelector } = useContext(MerchContext);


    

    return (
        <div className='mx-[14px] lg:mx-[30px] xl:mx-[50px] 2xl:mx-[80px] my-[15px] mb-16 '>
          

            {/* Navbar  */}
            <div className='flex items justify-between mb-4  lg:mb-[10px]'>
                <h1 className='text-[16px] lg:text-[18px] font-inter text-[#323232]'>ACCOUNT</h1>
                <div className='flex items-center justify-between space-x-3 lg:space-x-6'>
                    <h2 onClick={() => { setcustomisePageSelector('PREVIEW') }} className={`hover:text-blue-700 cursor-pointer ${customisePageSelector === 'PREVIEW' ? "underline" : ""} text-[12px] lg:text-[14px] text-[#323232] font-inter`}>Preview & Edit</h2>
                    <h2 onClick={() => { setcustomisePageSelector('PUBLISH') }} className={`hover:text-blue-700 cursor-pointer ${customisePageSelector === 'PUBLISH' ? "underline" : ""} text-[12px] lg:text-[14px] text-[#323232] font-inter`}>Publish</h2>
                    <h2 onClick={() => { setcustomisePageSelector('PUBLISHED_PRODUCT') }} className={`hover:text-blue-700 cursor-pointer ${customisePageSelector === 'PUBLISHED_PRODUCT' ? "underline" : ""} text-[12px] lg:text-[14px] text-[#323232] font-inter`}>Published Products</h2>
                </div>
            </div>




            {customisePageSelector === 'PREVIEW' &&
                <Preview_Edit />
            }


            {customisePageSelector === 'PUBLISH' &&
                <Publish />
            }

            {customisePageSelector === 'PUBLISHED_PRODUCT' &&
                <PublishedProducts />
            }




        </div>
    )
}


export default Preview

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