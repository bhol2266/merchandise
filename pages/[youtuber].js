import React from 'react'
import { Footer } from '../components/footer'
import { Itemlist } from '../components/Itemlist'
import { Navigation } from '../components/Navigation'

const Youtuber = () => {

    const pages = ['1', '2', '3', '4', '5', '6', '7']
    return (
        <div>
            <Navigation />

            <img src='./youtuber_assets/youtuber_banner.png' className='cursor-pointer w-full h-[150px] px-[12px] rounded '></img>

            <div className='flex px-[13px] items-center justify-between my-[20px]  lg:mt-[120px] lg:px-[50px]'>
                <h1 className='font-inter text-[13px] lg:text-[22px]'>FEATURED PRODUCTS</h1>
                <h1 className='font-inter text-[13px] text-[#54BAB9] lg:text-[22px] cursor-pointer hover:text-red-400'>FILTER</h1>

            </div>

            <Itemlist />

            <div className='flex space-x-3 my-10 items-center justify-around w-3/4 mx-auto'>
                {pages.map(page => {
                    return (
                        <>
                            <h1 className={`w-[30px] h-[30px] text-center rounded-full text-[18px] font-manrope bg-[#E9E9E9] text-[#313131]  ${page == '1' ? 'bg-theme text-whitte' : ''}`} key={page}>{page}</h1>
                            {console.log(page)}
                        </>
                    )
                })}
            </div>

            <Footer />

        </div>
    )
}

export default Youtuber
