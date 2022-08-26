import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { Itemlist } from '../Itemlist'

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

]





const Preview_Edit = () => {

    const [products, setproducts] = useState(items)

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
        // if (window.innerWidth >= 1000) {
        //     setproducts(products.slice(0, 5))
        // }


    }, [])

    const uploadLogo = () => {

    }
    const uploadBanner = () => {

    }




    return (
        <div className=' lg:flex items-center lg:items-start justify-between'>

            <div className='grid grid-cols-2 gap-4 '>
                <div onClick={uploadLogo} className='p-2 flex items-center justify-around rounded-[10px] shadow-md hover:bg-slate-100 cursor-pointer'>
                    <img className='w-[24px] h-[24px]' src='./creator/addDesign.png' />

                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='text-[12px] text-[#323232] font-medium lg:text-[14px] font-inter'>Upload Banner</h2>

                        <h2 className='text-[12px] text-[#323232]  lg:text-[14px] font-inter'>105*40</h2>

                        <h2 className='text-[10px] text-[#323232]  lg:text-[12px] font-inter'>Should be Under 100kb</h2>
                    </div>
                </div>
                <div onClick={uploadBanner} className='p-2 flex items-center justify-around rounded-[10px] shadow-md hover:bg-slate-100 cursor-pointer'>
                    <img className='w-[24px] h-[24px]' src='./creator/addDesign.png' />

                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='text-[12px] text-[#323232] font-medium lg:text-[14px] font-inter'>Upload Logo</h2>

                        <h2 className='text-[12px] text-[#323232]  lg:text-[14px] font-inter'>105*40</h2>

                        <h2 className='text-[10px] text-[#323232]  lg:text-[12px] font-inter'>Should be Under 100kb</h2>
                    </div>
                </div>
            </div>


            {/* Preview  */}
            <div className='mt-4 lg:mt-6 border-2 lg:border-4 rounded border-[#54BAB9]  pointer-events-none'>
                <div className='flex items-center justify-between shadow-md py-4 px-3'>
                    <img src='./logo.png' className='h-[20px] lg:h-[30px] object contain ' />

                    <div className='flex items-center justify-between space-x-6'>
                        <img src='/homepageImages/search.png' className=' w-[20px] h-[20px]'></img>
                        <img src='/homepageImages/cloth.png' className=' w-[20px] h-[20px]'></img>
                        <img src='/homepageImages/account.png' className=' w-[20px] h-[20px] '></img>
                        <img src='/homepageImages/cart.png' className=' w-[20px] h-[20px]'></img>
                    </div>
                </div>

                <img src='/youtuber_assets/youtuber_banner.png' className=' w-full my-3 px-2.5'></img>

                <div className='sm:px-[12px] xs:px-[20px] px-[10px] lg:px-[50px]'>
                    <Itemlist items={products} />
                </div>
                <div>

                </div>
            </div>


            {/* Add Name in Webpage */}
            <div className='mt-3 lg:mt-0 pt-3 lg:pt-0'>

                <h2 className='font-inter font-medium text-[14px] lg:text-[16px] text-[#323232] ml-1 mb-2'>Add Name in Webpage</h2>
                <input className='outline-none text-[12px] lg:text-[14px] w-full mb-3 border-[1px] border-[#AAAAAA] rounded-[5px] px-[12px] py-[10px] placeholder-[#323232] placeholder:text-[10px] lg:placeholder:text-[12px]' type='text' placeholder='Kim Jong UN' name='name' id='name' />

                <h2 className='font-inter font-medium text-[14px] lg:text-[16px] text-[#323232] ml-1 mb-2'>Add Url</h2>
                <input className='outline-none text-[12px] lg:text-[14px] w-full mb-3 border-[1px] border-[#AAAAAA] rounded-[5px] px-[12px] py-[10px] placeholder-[#323232] placeholder:text-[10px] lg:placeholder:text-[12px]' type='text' placeholder='e.g. closm.com/akash' name='name' id='name' />

                <h2 className='font-inter font-medium text-[14px] lg:text-[16px] text-[#323232] ml-1 mb-2'>Add Artist Description</h2>
                <input className='outline-none text-[12px] lg:text-[14px] w-full mb-3 border-[1px] border-[#AAAAAA] rounded-[5px] px-[12px] py-[10px] placeholder-[#323232] placeholder:text-[10px] lg:placeholder:text-[12px]' type='text' placeholder='Kim Jong UN' name='name' id='name' />

                <button className='block ml-auto my-3 px-6 py-3 bg-[#54BAB9] font-Mont rounded text-[12px] lg:text-[14px] text-white'>Confirm</button>

            </div>



        </div>
    )
};
export default Preview_Edit;