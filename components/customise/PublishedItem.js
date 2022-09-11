import React, { useContext, useEffect, useState } from 'react'
import { TrashIcon, ChevronRightIcon, EyeOffIcon, EyeIcon } from '@heroicons/react/solid'
import PriorityNumberModal from './Modals/PriorityNumberModal';
import MerchContext from '../../context/MerchContext';
import { deletePublishedProducts } from '../../lib/Creator_API';

export default function PublishedItem(props) {



    const { PriorityNumberModalVisible, setPriorityNumberModalVisible, setcurrentIndex, creatorsProductList, setcreatorsProductList, setEdited } = useContext(MerchContext);




    const { product_id, productName, price, mrp, discountPrice, productDescription, img, publishStatus } = props.data;
    const length = props.length;
    const currentIndex = props.currentIndex;


    const [titleState, settitleState] = useState(productName);
    const [priceState, setpriceState] = useState(mrp);
    const [discountState, setdiscountState] = useState(discountPrice);
    const [DescState, setDescState] = useState(productDescription);
    const [publishStatusState, setpublishStatus] = useState(publishStatus);


    const viewClick = async () => {
        setEdited(true)
        setpublishStatus(!publishStatusState)
        let status = !publishStatusState //this is because the state doesnt change immediately

        let array = []
        creatorsProductList.forEach((obj, index) => {
            if (index === currentIndex) {
                const new_obj = { ...creatorsProductList[currentIndex], publishStatus: status }
                array.push(new_obj)
            } else {
                array.push(obj)
            }

        })

        setcreatorsProductList(array)
    }


    const deleteClick = async () => {
        setEdited(true)


        try {
            const response = await deletePublishedProducts({ productId: creatorsProductList[currentIndex].product_id })
            console.log(response);
            if (response.success) {

                console.log(response);
                creatorsProductList.splice(currentIndex, 1)
                let array = [...creatorsProductList]
                setcreatorsProductList(array)

            } else {
                alert(response.message)
            }
        } catch (error) {
            alert(error)
            return
        }
    }


    const titleOnChange = (e) => {
        setEdited(true)

        settitleState(e.target.value)
        let value = e.target.value

        let array = []
        creatorsProductList.forEach((obj, index) => {
            if (index === currentIndex) {
                const new_obj = { ...creatorsProductList[currentIndex], productName: value }
                array.push(new_obj)
            } else {
                array.push(obj)
            }

        })

        setcreatorsProductList(array)
    }

    const priceOnChange = (e) => {
        setEdited(true)

        setpriceState(e.target.value)
        let value = e.target.value

        let array = []
        creatorsProductList.forEach((obj, index) => {
            if (index === currentIndex) {
                const new_obj = { ...creatorsProductList[currentIndex], mrp: value }
                array.push(new_obj)
            } else {
                array.push(obj)
            }

        })

        setcreatorsProductList(array)
    }

    const discountOnChange = (e) => {
        setEdited(true)

        setdiscountState(e.target.value)
        let value = e.target.value

        let array = []
        creatorsProductList.forEach((obj, index) => {
            if (index === currentIndex) {
                const new_obj = { ...creatorsProductList[currentIndex], discountPrice: value }
                array.push(new_obj)
            } else {
                array.push(obj)
            }

        })

        setcreatorsProductList(array)
    }
    const descOnChange = (e) => {
        setEdited(true)

        setDescState(e.target.value)
        let value = e.target.value

        let array = []
        creatorsProductList.forEach((obj, index) => {
            if (index === currentIndex) {
                const new_obj = { ...creatorsProductList[currentIndex], productDescription: value }
                array.push(new_obj)
            } else {
                array.push(obj)
            }

        })

        setcreatorsProductList(array)
    }


    return (
        <div className='flex items-start justify-center lg:justify-between w-full space-x-2 lg:space-x-6 lg:h-[250px] '>

            <div className='lg:h-full  lg:min-w-[205px]'>

                <img className='w-[150px] lg:h-full lg:w-fit object-contain' src={img[0].imageUrl[0]} alt='publishedItemImage' />

                <button onClick={() => { setcurrentIndex(currentIndex); setPriorityNumberModalVisible(!PriorityNumberModalVisible); }} className='lg:hidden w-[150px] lg:w-[180px] 2xl:w-[200px] rounded-[5px] border-[1px] border-[#AAAAAA] px-3 py-2 mt-2 flex items-center text-[12px] lg:text-[15px] text-[#323232]'>
                    Priority Order
                    <ChevronRightIcon className='h-4 lg:h-6 text-black ml-3' />
                </button>
            </div>



            <div className='lg:min-w-[350px] 
            xl:w-[400px] 2xl:w-[450px] flex flex-col  lg:h-full '>

                <div className='font-inter w-full flex  flex-col justify-between space-y-[7px]  h-full'>

                    <div>
                        <p className='hidden lg:flex font-medium text-[15px] text-[#323232] pl-3 mb-1'>Product Name</p>
                        <input className='w-full border-[1px] border-[#AAAAAA] text-[10px] text-[#323232] lg:text-[14px] py-[6px] lg:py-[9px] px-[11px] placeholder:text-gray-200] outline-none rounded-[5px] ' type='text' id='productName' name='productName' placeholder='Product Name' onChange={titleOnChange} value={titleState} />
                    </div>


                    <div>
                        <p className='hidden lg:flex font-medium text-[15px] text-[#323232] pl-3 mb-1'>Discounted Price</p>
                        <input className='w-full border-[1px] border-[#AAAAAA] text-[10px] text-[#323232] lg:text-[14px] py-[6px] lg:py-[9px] px-[11px] placeholder:text-gray-200] outline-none rounded-[5px] ' type='number' id='Discounted Price' name='Discounted Price' placeholder='Discounted Price' onChange={discountOnChange} value={discountState} />
                    </div>

                    <div>
                        <p className='hidden lg:flex font-medium text-[15px] text-[#323232] pl-3 mb-1'>Original Price</p>
                        <input onChange={priceOnChange} value={priceState} className='w-full border-[1px] border-[#AAAAAA] text-[10px] text-[#323232] lg:text-[14px] py-[6px] lg:py-[9px] px-[11px] placeholder:text-gray-200] outline-none rounded-[5px] ' type='number' id='Original Price' name='Original Price' placeholder='Original Price' />
                    </div>

                    <textarea onChange={descOnChange} value={DescState} id="message" name="message" placeholder="Product Description" rows="4" cols="50" className=' lg:hidden w-full border-[1px] border-[#AAAAAA] text-[10px] text-[#323232] lg:text-[14px] py-[6px] lg:py-[9px] px-[11px] placeholder:text-gray-200] outline-none rounded-[5px] ' >{DescState}</textarea>
                </div>


                <div className='lg:hidden flex items-center justify-end w-full space-x-3 lg:space-x-6 pt-2 lg:pt-4'>



                    {publishStatusState &&
                        <EyeIcon onClick={viewClick} className='border-[1px] border-[#54BAB9] p-1 cursor-pointer h-[30px] rounded lg:w-[40px] object-contain text-gray-600 ' />
                    }

                    {!publishStatusState &&
                        <EyeOffIcon onClick={viewClick} className='border-[1px] border-[#54BAB9] p-1 cursor-pointer h-[30px] rounded lg:w-[40px] object-contain text-gray-600 ' />
                    }

                    <img onClick={deleteClick} className='cursor-pointer w-[30px] lg:w-[40px] object-contain' src={`/creator/delete.png`} alt='view' />
                </div>

            </div>



            <div className='lg:w-full'>
                <p className='hidden lg:flex font-medium text-[15px] text-[#323232] pl-3 mb-1'>Product Description</p>

                <textarea id="message" onChange={descOnChange} value={DescState} name="message" placeholder="Product Description" rows="9" cols="50" className='hidden h-[221px] lg:flex w-full border-[1px] border-[#AAAAAA] text-[10px] text-[#323232] lg:text-[14px] py-[6px] lg:py-[9px] px-[11px] placeholder:text-gray-200] outline-none rounded-[5px] mb-2' >{DescState}</textarea>
            </div>



            <div className='hidden lg:w-fit pl-2 2xl:w-full 2xl:pl-0  lg:flex flex-col justify-between items-end h-full py-1 pt-[19px]'>

                <button onClick={() => { setcurrentIndex(currentIndex); setPriorityNumberModalVisible(!PriorityNumberModalVisible); }} className=' w-[150px] lg:w-[180px] 2xl:w-[200px] rounded-[5px] border-[1px] border-[#AAAAAA] px-3 py-2 mt-2 flex items-center justify-center text-[12px] lg:text-[15px] text-[#323232] '>
                    Product Orders
                    <ChevronRightIcon className='h-4 lg:h-6 text-black ml-3' />
                </button>

                <div>

                    <button onClick={viewClick} className=' w-[150px] lg:w-[180px] 2xl:w-[200px] rounded-[5px] border-[1px] border-[#54BAB9] px-3 py-2 mt-2 flex items-center text-[12px] lg:text-[15px] text-[#323232]'>

                        {!publishStatusState &&
                            <EyeOffIcon className='h-4 lg:h-6 text-black mr-1 2xl:mr-3' />
                        }

                        {publishStatusState &&
                            <EyeIcon className='h-4 lg:h-6 text-black mr-1 2xl:mr-3' />

                        }
                        {publishStatusState ? "Product Published" : 'Publish  Product'}


                    </button>

                    <button onClick={deleteClick} className=' w-[150px] lg:w-[180px] 2xl:w-[200px] rounded-[5px] border-[1px] border-[#C25050] px-3 py-2 mt-2 flex  items-center text-[12px] lg:text-[15px] text-[#C25050]'>
                        <TrashIcon className='h-4 lg:h-6 text-[#C25050] mr-1 2xl:mr-3' />
                        Remove Product
                    </button>
                </div>
            </div>

            <PriorityNumberModal length={length} />
        </div>
    )
}
