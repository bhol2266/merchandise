import React from 'react'
import { Item } from './Item'

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
        < div className='sm:px-[12px] px-[4px] grid grid-cols-2 sm:grid-cols-3 w-fit sm:gap-x-6 gap-x-2 mx-auto  gap-y-6  md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5  justify-center' >
            {
                items.map(obj => {
                    return (
                        <Item key={obj.name} details={obj} />
                    )
                })
            }
        </div >

    )
}
