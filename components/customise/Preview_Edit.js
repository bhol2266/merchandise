import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { Itemlist } from '../Itemlist'
import { MiniatureItemList } from './MiniatureItemlist';

import MerchContext from '../../context/MerchContext';


const items = [
    {
        id: '1',
        title: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        description: "The product will be an excellent pick for you. It ensures an easy maintenance.",
        img: "item1"
    },
    {
        id: '2',
        title: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        description: "The product will be an excellent pick for you. It ensures an easy maintenance.",
        img: "item3"
    },
    {
        id: '3',
        title: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        description: "The product will be an excellent pick for you. It ensures an easy maintenance.",
        img: "item2"
    },
    {
        id: '4',
        title: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        description: "The product will be an excellent pick for you. It ensures an easy maintenance.",
        img: "item4"
    },
    {
        id: '5',
        title: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        description: "The product will be an excellent pick for you. It ensures an easy maintenance.",
        img: "item3"
    },
    {
        id: '6',
        title: "Jet Black Half Sleeve T-Shirt",
        price: 499,
        mrp: 799,
        discount: 30,
        description: "The product will be an excellent pick for you. It ensures an easy maintenance.",
        img: "item3"
    },

]





const Preview_Edit = () => {

    const [products, setproducts] = useState(items)

    const [Banner, setBanner] = useState('/youtuber_assets/youtuber_banner.png')
    const [Logo, setLogo] = useState('./logo.png')

    const BannerImageProcess = (event) => {
        if (event.target.files && event.target.files[0]) {
            setBanner(URL.createObjectURL(event.target.files[0]));
        }
    }
    const LogoImageProcess = (event) => {
        if (event.target.files && event.target.files[0]) {
            setLogo(URL.createObjectURL(event.target.files[0]));
        }
    }
    useEffect(() => {

        if (window.innerWidth >= 100) {
            setproducts(products.slice(0, 2))
        }
        if (window.innerWidth >= 500) {
            setproducts(products.slice(0, 3))
        }
        if (window.innerWidth >= 750) {
            setproducts(products.slice(0, 4))
        }
        if (window.innerWidth >= 1000) {
            setproducts(products.slice(0, 3))
        }
        if (window.innerWidth >= 1250) {
            setproducts(products.slice(0, 5))
        }


    }, [])

    const cofirmButtonClick = (e) => {
        e.preventDefault()
        if (Banner === '/youtuber_assets/youtuber_banner.png' || Logo === './logo.png') {
            alert('Upload Banner and Logo both')
        }
    }





    return (
        <div className='w-full sm:w-4/5 mx-auto lg:w-full lg:flex items-center lg:items-start justify-between'>



            <div className='my-6 grid grid-cols-2 gap-4 lg:hidden'>

                <label htmlFor='banner'>
                    <div className='p-2 flex items-center justify-around rounded-[10px] shadow-md hover:bg-slate-200 cursor-pointer'>
                        <img className='w-[24px] h-[24px]' src='./creator/addDesign.png' />

                        <div className='flex flex-col items-center justify-center'>
                            <h2 className='text-[12px] text-[#323232] font-medium lg:text-[14px] font-inter'>Upload Banner</h2>

                            <h2 className='text-[12px] text-[#323232]  lg:text-[14px] font-inter'>105*40</h2>

                            <h2 className='text-[10px] text-[#323232]  lg:text-[12px] font-inter'>Should be Under 100kb</h2>
                        </div>
                    </div>
                </label>

                <input type='file' id='banner' className='hidden' onChange={BannerImageProcess} />




                <label htmlFor='logo'>

                    <div className='p-2 flex items-center justify-around rounded-[10px] shadow-md hover:bg-slate-200 cursor-pointer'>
                        <img className='w-[24px] h-[24px]' src='./creator/addDesign.png' />

                        <div className='flex flex-col items-center justify-center'>
                            <h2 className='text-[12px] text-[#323232] font-medium lg:text-[14px] font-inter'>Upload Logo</h2>

                            <h2 className='text-[12px] text-[#323232]  lg:text-[14px] font-inter'>105*40</h2>

                            <h2 className='text-[10px] text-[#323232]  lg:text-[12px] font-inter'>Should be Under 100kb</h2>
                        </div>
                    </div>

                </label>

                <input type='file' id='logo' className='hidden' onChange={LogoImageProcess} />

            </div>


            {/* Preview  */}
            <div className='mt-4 border-2 lg:border-4 rounded border-[#54BAB9]  pointer-events-none lg:mr-8 xl:mr-16 2xl:mr-28'>
                <div className='flex items-center justify-between shadow-md my-1  px-3 mb-4'>
                    <img src={Logo} className='h-[20px] lg:h-[30px] object contain  max-w-[50px] lg:max-w-[100px] ' />

                    <div className='flex items-center justify-between space-x-6 py-4'>
                        <img src='/homepageImages/search.png' className=' w-[15px] h-[15px]'></img>
                        <img src='/homepageImages/cloth.png' className=' w-[15px] h-[15px]'></img>
                        <img src='/homepageImages/account.png' className=' w-[15px] h-[15px] '></img>
                        <img src='/homepageImages/cart.png' className=' w-[15px] h-[15px]'></img>
                    </div>
                </div>

                <img src={Banner} alt='/youtuber_assets/youtuber_banner.png' className='h-[135px] w-full px-2.5  lg:w-full lg:h-[200px] object-fill'></img>

                <div className='sm:px-[12px] xs:px-[20px] px-[10px] lg:px-[20px] pb-2'>
                    <MiniatureItemList items={products} />

                </div>
                <div>
                </div>
            </div>





            {/* Add Name in Webpage */}
            <div className='mt-3 lg:mt-0 pt-3 lg:pt-0 lg:w-2/5 xl:w-3/5 2xl:w-2/5'>



                {/* For large Screen only  */}
                <div className='grid grid-cols-2 gap-4 my-4 mb-10'>

                    <label htmlFor='banner'>
                        <div className='p-2 flex items-center justify-around rounded-[10px] shadow-md hover:bg-slate-200 cursor-pointer'>
                            <img className='w-[24px] h-[24px]' src='./creator/addDesign.png' />

                            <div className='flex flex-col items-center justify-center'>
                                <h2 className='text-[12px] text-[#323232] font-medium lg:text-[14px] font-inter'>Upload Banner</h2>

                                <h2 className='text-[12px] text-[#323232]  lg:text-[14px] font-inter'>105*40</h2>

                                <h2 className='text-[10px] text-[#323232]  lg:text-[12px] font-inter'>Should be Under 100kb</h2>
                            </div>
                        </div>
                    </label>

                    <input type='file' id='banner' className='hidden' onChange={BannerImageProcess} />




                    <label htmlFor='logo'>

                        <div className='p-2 flex items-center justify-around rounded-[10px] shadow-md hover:bg-slate-200 cursor-pointer'>
                            <img className='w-[24px] h-[24px]' src='./creator/addDesign.png' />

                            <div className='flex flex-col items-center justify-center'>
                                <h2 className='text-[12px] text-[#323232] font-medium lg:text-[14px] font-inter'>Upload Logo</h2>

                                <h2 className='text-[12px] text-[#323232]  lg:text-[14px] font-inter'>105*40</h2>

                                <h2 className='text-[10px] text-[#323232]  lg:text-[12px] font-inter'>Should be Under 100kb</h2>
                            </div>
                        </div>

                    </label>

                    <input type='file' id='logo' className='hidden' onChange={LogoImageProcess} />

                </div>


                <form>

                    <h2 className='font-inter font-medium text-[14px] lg:text-[16px] text-[#323232] ml-1 mb-2'>Add Name in Webpage</h2>
                    <input required className='outline-none text-[12px] lg:text-[14px] w-full mb-3 border-[1px] border-[#AAAAAA] rounded-[5px] px-[12px] py-[10px] placeholder-gray-400 placeholder:text-[10px] lg:placeholder:text-[12px]' type='text' placeholder='Kim Jong UN' name='Webpage' id='Webpage' />

                    <h2 className='font-inter font-medium text-[14px] lg:text-[16px] text-[#323232] ml-1 mb-2'>Add Url</h2>
                    <input required className='outline-none text-[12px] lg:text-[14px] w-full mb-3 border-[1px] border-[#AAAAAA] rounded-[5px] px-[12px] py-[10px] placeholder-gray-400 placeholder:text-[10px] lg:placeholder:text-[12px]' type='text' placeholder='e.g. closm.com/akash' name='Url' id='Url' />

                    <h2 className='font-inter font-medium text-[14px] lg:text-[16px] text-[#323232] ml-1 mb-2'>Add Artist Description</h2>
                 
                    <input required className='outline-none text-[12px] lg:text-[14px] w-full mb-3 border-[1px] border-[#AAAAAA] rounded-[5px] px-[12px] py-[10px] placeholder-gray-400 placeholder:text-[10px] lg:placeholder:text-[12px]' type='text' placeholder='Kim Jong UN' name='Description' id='Description' />

                    <button onClick={cofirmButtonClick} type='submit' className='block ml-auto mt-3 px-6 py-3 lg:px-8  bg-[#54BAB9] font-Mont rounded text-[12px] lg:text-[14px] text-white'>Confirm</button>
                </form>





            </div>



        </div>
    )
};
export default Preview_Edit;