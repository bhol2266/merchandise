import React from 'react'
import { Item } from './../item'
import { MiniatureItem } from './MiniatureItem'


export const MiniatureItemList = ({ items }) => {

    return (
        <div className=''>
            <div className='flex items-center justify-between my-[20px]  lg:my-[20px] '>
                <h1 className='font-inter text-[13px] '>FEATURED PRODUCTS</h1>
                <h1 className='font-inter text-[13px] text-[#54BAB9] cursor-pointer hover:text-red-400'>FILTER</h1>
            </div>

            < div className='gap-4  grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5' >                {
                items.map(obj => {
                    return (
                        <MiniatureItem key={obj.title} obj={obj} />
                    )
                })
            }
            </div >
        </div>


    )
}
