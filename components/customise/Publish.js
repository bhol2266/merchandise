import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { XCircleIcon, ArrowRightIcon } from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import Canvas from './Canvas'
import ColorModal from './Modals/ColorModal'
import MerchContext from '../../context/MerchContext';
import * as htmlToImage from 'html-to-image';
import ModalPublish from './Modals/ModalPublish'
import Script from 'next/script'
import { getYoutubersDetail } from '../../lib/Creator_API'
import { originalPrice__tshirtBlended } from '../../Data/tshirtsblendedcotton'
import { originalPrice_hoodies } from '../../Data/hoodies'
import { originalPrice_tshirtCotton } from '../../Data/tshirtcotton'
import { ToastContainer, toast } from 'react-toastify';



const Publish = () => {


    //Here colour is the collection of tshirts of different colours imported in globalStates from Data
    const { canvas, PreviewMode, setPreviewMode, colours, setselectedColourIndex, selectedTshirtsForUpload, ModalPublishVisible, setModalPublishVisible, uploadedArts, publishData, setpublishData, productDescription, setproductDescription, categorySelected } = useContext(MerchContext)

    const [productName, setproductName] = useState('');
    const [disPrice, setdisPrice] = useState('');
    const [origPrice, setorigPrice] = useState('');
    const [termsCondition, settermsCondition] = useState(false);


    const preview = () => {
        canvas.discardActiveObject();
        canvas.renderAll();
        setPreviewMode(!PreviewMode)
    }
    const publishClick = async (e) => {
        let minPrice = 0 // set price by kundan
        //check discounted price less than original price and minimum price from local json file
        if (categorySelected === "T-SHIRT (Cotton)") {
            minPrice = originalPrice_tshirtCotton
        }
        if (categorySelected === "T-SHIRT (Blended)") {
            minPrice = originalPrice__tshirtBlended

        }
        if (categorySelected === "HOODIE") {
            minPrice = originalPrice_hoodies
        }
     
        if (parseInt(disPrice) < minPrice) {
            toast.info(`Price should be greater than ${minPrice}`)
            return
        }
        if (parseInt(origPrice) < disPrice) {
            toast.info(`Original Price should be greater than Discounted Price`)
            return
        }
        
        if (canvas.getObjects().length === 0) {
            toast.info('Design Empty!')
            return
        }

        e.preventDefault()
        canvas.discardActiveObject();
        canvas.renderAll();
        setPreviewMode(true)

        if (selectedTshirtsForUpload.length === 0) {
            toast.info('Please upload any tshirt to publish')
            return
        }

        if (productName.length === 0 || disPrice.length === 0 || origPrice.length === 0) {
            toast.info('Fill all Products details')
            return
        }
        if (!termsCondition) {
            toast.info('Accept terms and conditions')
            return
        }

        //Check whether the creator deatils is updated or not in Preview and Edit page for one time (first time)
        try {
            const response = await getYoutubersDetail()
            console.log(response);
            if (!response.data) {
                toast.info('First fill creator details in Preview and Edit page before publishing');
            } else {



                setpublishData({
                    productName: productName, discountPrice: disPrice, productDescription: productDescription, mrp: origPrice,
                })
                //open publish modal to see and publish
                setModalPublishVisible(true)

            }
        } catch (error) {
            console.log(error)
            return
        }



    }







    return (
        <div className=' 2xl:flex items-center 2xl:items-start justify-between xl:px-4 2xl:px-12  2xl:space-x-4'>

            <Canvas />


            {/* PRICE and NAME  */}


            <div className=' mt-[40px] 2xl:mt-6 sm:w-4/5 md:w-3/5  xl:w-[450px]   mx-auto 2xl:mx-0'>
                <h2 className='text-[14px] lg:text-[16px] font-inter text-[#323232] mb-[21px] '>PRICE & NAME</h2>

                <div className='flex-fles-col space-y-1 mb-[15px]'>
                    <h3 className='text-[12px] lg:text-[14px] font-inter font-medium text-[#323232] '>Product Name</h3>
                    <input required value={productName} onChange={e => {
                        setproductName(e.target.value)
                    }} className='w-full border-[1px] border-[#AAAAAA] rounded-[5px] px-[10px] py-[12px] text-[11px] lg:text-[13px]  text-[#323232]  font-inter outline-none' type="text" name="Product" id="Product" placeholder='Kim Jong UN' />
                </div>




                <div className='flex-fles-col space-y-1 mb-[15px]'>
                    <h3 className='text-[12px] lg:text-[14px]  font-inter font-medium text-[#323232] '>Discounted Price</h3>
                    <input required value={disPrice} onChange={e => {
                        setdisPrice(e.target.value)
                    }} className='w-full border-[1px] border-[#AAAAAA] rounded-[5px] px-[10px] py-[12px] text-[11px] lg:text-[13px]  text-[#323232]  font-inter outline-none ' type="number" name="Discounted" id="Discounted" placeholder='₹499' />
                </div>

                <div className='flex-fles-col space-y-1 mb-[15px]'>
                    <h3 className='text-[12px] lg:text-[14px]   font-inter font-medium text-[#323232] '>Original Price</h3>
                    <input required value={origPrice} onChange={e => {
                        setorigPrice(e.target.value)
                    }} className='w-full border-[1px] border-[#AAAAAA] rounded-[5px] px-[10px] py-[12px] text-[11px] lg:text-[13px]  text-[#323232] line-through font-inter outline-none' type="number" name="Original" id="Original" placeholder='₹599' />
                </div>

                <div className='flex-fles-col space-y-1 mb-[15px]'>
                    <h3 className='text-[12px] lg:text-[14px]  font-inter font-medium text-[#323232] '>Product Description</h3>
                    {/* <input required value={productDescription} onChange={e => {
                        setproductDescription(e.target.value)
                    }} className='w-full border-[1px] border-[#AAAAAA] rounded-[5px] px-[10px] py-[12px] text-[11px] lg:text-[13px]  text-[#323232]  font-inter outline-none' type="text" name="Description" id="Description" placeholder='fghfgdshfgjh' /> */}

                    <textarea value={productDescription} onChange={e => {
                        setproductDescription(e.target.value)
                    }} id="message" rows="4" className='scrollbar-hide w-full border-[1px] border-[#AAAAAA] rounded-[5px] px-[10px] py-[12px] text-[11px] lg:text-[13px]  text-[#323232]  font-inter outline-none' placeholder="Product Description..."></textarea>

                </div>

                <div className='flex items-center justify-between mx-2'>
                    <input required value={termsCondition} onChange={e => {
                        settermsCondition(e.target.value)
                    }} className='mr-2 lg:scale-125' type="checkbox" />

                    <div className='flex items-center flex-wrap space-x-1'>
                        <h2 className='text-[#323232] font-inter font-medium text-[12px] lg:text-[14px] '>By Continuing, You Agree to Closm’s</h2>
                        <h2 className='text-[#323232] font-inter font-medium text-[12px] lg:text-[14px]  underline cursor-pointer hover:text-red-500'>Terms of Use, </h2>
                        <h2 className='text-[#323232] font-inter font-medium text-[12px] lg:text-[14px]  underline cursor-pointer hover:text-red-500'>Privacy Policy </h2>
                        <h2 className='text-[#323232] font-inter font-medium text-[12px] lg:text-[14px]  underline cursor-pointer hover:text-red-500'>& Creators Agreement </h2>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-2 mt-[20px]'>
                    <button onClick={preview} className='text-[#323232] font-Mont font-medium text-[12px] lg:text-[14px]  rounded-[5px] border-[1px] border-[#54BAB9] py-[10px] px-[15px]'>{PreviewMode ? "Edit" : "Preview"}</button>
                    <button onClick={publishClick} className=' font-Mont font-medium text-[12px] lg:text-[14px]  rounded-[5px] border-[1px] border-[#54BAB9] py-[10px] px-[15px] bg-[#54BAB9] text-white'>Publish</button>

                    {/* Make background darker */}
                    <div className={`bg-black bg-opacity-40 fixed inset-0 z-20  ${ModalPublishVisible ? "" : "hidden"} `} />


                </div>

            </div>

            <ModalPublish />

        </div>
    )
};
export default Publish;