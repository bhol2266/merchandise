import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'

//Three components of customise page
import Preview_Edit from '../components/customise/Preview_Edit'
import Publish from '../components/customise/Publish'
import PublishedProducts from '../components/customise/publishedProducts'






const Customise = () => {


    const [currnetNavigation, setcurrnetNavigation] = useState('PREVIEW')




    return (
        <div className='mx-[14px] lg:mx-[50px] xl:mx-[100px] my-[15px] mb-16 '>


            {/* Navbar  */}
            <div className='flex items justify-between mb-4  lg:mb-[40px]'>
                <h1 className='text-[16px] lg:text-[18px] font-inter text-[#323232]'>ACCOUNT</h1>
                <div className='flex items-center justify-between space-x-2 lg:space-x-6'>
                    <h2 onClick={() => { setcurrnetNavigation('PREVIEW') }} className={`hover:text-blue-700 cursor-pointer ${currnetNavigation === 'PREVIEW' ? "underline" : ""} text-[12px] lg:text-[14px] text-[#323232] font-inter`}>Preview & Edit</h2>
                    <h2 onClick={() => { setcurrnetNavigation('PUBLISH') }} className={`hover:text-blue-700 cursor-pointer ${currnetNavigation === 'PUBLISH' ? "underline" : ""} text-[12px] lg:text-[14px] text-[#323232] font-inter`}>Publish</h2>
                    <h2 onClick={() => { setcurrnetNavigation('PUBLISHED_PRODUCT') }} className={`hover:text-blue-700 cursor-pointer ${currnetNavigation === 'PUBLISHED_PRODUCT' ? "underline" : ""} text-[12px] lg:text-[14px] text-[#323232] font-inter`}>Published Products</h2>
                </div>
            </div>


            {currnetNavigation === 'PREVIEW' &&
                <Preview_Edit />
            }





        </div>
    )
}


export default Customise