import React from 'react'
import { Item } from './item'
const items = [
    {
        name: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        img: "item1"
    },
    {
        name: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        img: "item2"
    },
    {
        name: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        img: "item3"
    },
    {
        name: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        img: "item4"
    },
    {
        name: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        img: "item1"
    },
    {
        name: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        img: "item2"
    },
    {
        name: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        img: "item3"
    },
    {
        name: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        img: "item4"
    },
]


export const Itemlist = () => {
    return (
        <div className='sm:px-[12px] xs:px-[20px] px-[10px] lg:px-[50px]'>
            <div className='flex items-center justify-between my-[20px]  lg:mt-[120px] '>
                <h1 className='font-inter text-[13px] lg:text-[22px]'>FEATURED PRODUCTS</h1>
                <h1 className='font-inter text-[13px] text-[#54BAB9] lg:text-[22px] cursor-pointer hover:text-red-400'>FILTER</h1>
            </div>

            < div className='gap-4 lg:gap-8  grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5' >                {
                    items.map(obj => {
                        return (
                            <Item key={obj.name} details={obj} />
                        )
                    })
                }
            </div >
        </div>


    )
}
