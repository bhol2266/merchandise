import React from 'react'
import { Footer } from '../components/footer'
import { Itemlist } from '../components/Itemlist'
import { Navigation } from '../components/Navigation'

const Youtuber = () => {

    const pages = ['1', '2', '3', '4', '5', '6', '7']
    return (
        <div>

            <img src='./youtuber_assets/youtuber_banner.png' className='cursor-pointer w-full  px-[12px] lg:px-[50px] rounded   md:hidden mt-[15px]'></img>

            <img src='./youtuber_assets/youtuber_banner_wide.png' className='cursor-pointer w-full px-[12px]  lg:px-[50px]   rounded hidden md:flex mt-[25px]'></img>

           

            <Itemlist />

            <div className='flex space-x-3 my-16 items-center justify-around w-3/4 lg:w-1/2 mx-auto'>
                {pages.map(page => {
                    return (
                        <>
                            <h1 className={`w-[30px] h-[30px] text-center rounded-full text-[18px] font-manrope bg-[#E9E9E9] text-[#313131]  ${page == '1' ? 'bg-theme text-whitte' : ''}`} key={page}>{page}</h1>
                            {console.log(page)}
                        </>
                    )
                })}
            </div>


        </div>
    )
}

export default Youtuber
