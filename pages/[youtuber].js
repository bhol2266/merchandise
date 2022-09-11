import React, { useContext, useEffect, useState } from 'react'
import { Footer } from '../components/footer'
import { Itemlist } from '../components/Itemlist'
import { Navigation } from '../components/Navigation'
import { QueryG } from '../lib/serverConfig'
import Router, { useRouter } from 'next/router'
import MerchContext from '../context/MerchContext'
import { getYoutubersProductsList } from '../lib/Creator_API'

function Youtuber({ youtuberName, banner, logo, productlist, youtuberNotFound }) {
    const router = useRouter();

    const pages = ['1', '2', '3', '4', '5', '6', '7']
    const { setyoutuberLogo } = useContext(MerchContext);

   
    useEffect(() => {
        setyoutuberLogo(logo)
    }, [])

    return (
        <div>
            {!youtuberNotFound && <div>
                <img src={banner} className='cursor-pointer w-full h-48  px-[12px] lg:px-[50px] rounded   md:hidden mt-[15px]'></img>
                <img src={banner} alt={'https://' + banner} className='cursor-pointer w-full h-[330px] px-[12px]  lg:px-[50px]   rounded hidden md:flex mt-[25px]'></img>


                {productlist &&
                    <div className=' sm:px-[12px] xs:px-[20px] px-[10px] lg:px-[50px]'>
                        <Itemlist items={productlist} />
                    </div>
                }

                <div className='flex space-x-3 my-16 items-center justify-around w-3/4 lg:w-1/2 mx-auto'>
                    {pages.map(page => {
                        return (
                            <>
                                <h1 className={`w-[30px] h-[30px] text-center rounded-full text-[18px] font-manrope bg-[#E9E9E9] text-[#313131]  ${page == '1' ? 'bg-theme text-whitte' : ''}`} key={page}>{page}</h1>
                            </>
                        )
                    })}
                </div>


            </div>
            }
            {youtuberNotFound && <div>

                <h1 className='text-[20px] font-inter w-full h-full my-[200px] text-center'>Youtuber not found....</h1>
            </div>}


        </div>
    )
}
export default Youtuber


export async function getServerSideProps(context) {

    const { youtuber } = context.query;

    var banner = ""
    var logo = ""
    var youtuberName = ""
    var productlist = []

    var youtuberNotFound = false

    try {
        const response = await getYoutubersProductsList(youtuber) //closmkundna
        if (response.sucess) {
            banner = response.data.creatorBanner
            logo = response.data.creatorLogo
            if (!banner.includes('https://')) {
                banner = 'https://' + banner
            }
            if (!logo.includes('https://')) {
                logo = 'https://' + logo
            }
            youtuberName = response.data.creatorName
            productlist = response.data.products
        } else {
            console.log(response.message)
        }
    } catch (error) {
        console.log(error)
    }

    return {
        props: {
            youtuber: youtuber,
            banner: banner,
            logo: logo,
            youtuberName: youtuberName,
            productlist: productlist,
            youtuberNotFound: youtuberNotFound
        }, // will be passed to the page component as props
    }
}
