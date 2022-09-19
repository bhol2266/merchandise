import React from 'react'
import { Item } from './item'
import { ArrowDownIcon } from '@heroicons/react/outline'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useContext, useEffect, useState } from 'react'
import Link from 'next/link'

const itemss = [
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


export const Itemlist = ({ items }) => {


    const [products, setproducts] = useState(items);

    const lowTohigh = () => {
        let array = products
        array.sort(function (a, b) {
            if (parseInt(a.discountPrice) > parseInt(b.discountPrice)) return 1;
            if (parseInt(a.discountPrice) < parseInt(b.discountPrice)) return -1;
            return 0;
        });
        setproducts([...array])

    }

    const highTolow = () => {
        let array = products
        array.sort(function (a, b) {
            if (parseInt(a.discountPrice) < parseInt(b.discountPrice)) return 1;
            if (parseInt(a.discountPrice) > parseInt(b.discountPrice)) return -1;
            return 0;
        });
        setproducts([...array])
    }
    const newArrivals = () => {

    }

    return (
        <div className=''>
            <div className='flex items-center justify-between my-[20px]  lg:my-[50px] '>
                <h1 className='font-inter text-[13px] lg:text-[22px]'>FEATURED PRODUCTS</h1>


                <Menu as="div" className="relative inline-block text-left ">
                    <div>
                        <Menu.Button className=" ">
                            <button className='flex items-center font-inter text-[13px] lg:text-[22px] cursor-pointer rounded-md lg:py-[1px]'>
                                SORT BY
                                <ArrowDownIcon className='h-4 xl:h-5 ml-2' />
                            </button>
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="flex flex-col justify-start items-start absolute w-[130px] xl:w-[200px]  right-0 mt-1 lg:mt-3 px-[10px] py-3   shadow-lg bg-[#ffffff] ring-1 ring-black ring-opacity-5 focus:outline-none z-10  space-y-[7px] border-2">



                            <Menu.Item onClick={lowTohigh}>
                                <h2 className='cursor-pointer  text-[11px] xl:text-[16px] font-DMsans  mx-auto text-left w-full'>Price - Low to High</h2>
                            </Menu.Item>

                            <Menu.Item onClick={highTolow}>
                                <h2 className='cursor-pointer  text-[11px] xl:text-[16px] font-DMsans  mx-auto text-left w-full'>Price - High to Low</h2>
                            </Menu.Item>

                            <Menu.Item onClick={newArrivals} >
                                <h2 className='cursor-pointer text-[11px] xl:text-[16px] font-DMsans  mx-auto text-left w-full'>New Arrivals</h2>
                            </Menu.Item>







                        </Menu.Items>
                    </Transition>
                </Menu>





            </div>

            < div className='gap-4 lg:gap-8  grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5' >
                {products.map(obj => {
                    return (
                        <Item key={obj.title} obj={obj} />
                    )
                })}
            </div >
        </div>


    )
}
