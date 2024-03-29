import React, { useEffect, useState } from 'react'
import { MinusIcon } from '@heroicons/react/solid'
import { PlusIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/outline'
import { addProductCart, getProductbyID, getProductCart, deleteProductCart } from '../lib/Product_API'
import { addProductWishlist, deleteProductWishlist, getProductWishlist } from '../lib/Product_API'
import Link from 'next/link'


export const BagItem = ({ productdetails }) => {


    const { quantity } = productdetails
    const { productName, mrp, discountPrice, productId, _id, size } = productdetails
    const colorName = productdetails.color;


    const dicountPriceInteger = parseInt(discountPrice);
    const mrpInteger = parseInt(mrp);
    const discountPercent = Math.round(100 - ((dicountPriceInteger * 100) / mrpInteger))

    const [imageURL, setimageURL] = useState("");
    const [creator, setcreator] = useState('');
    const [itemQuantity, setitemQuantity] = useState(parseInt(productdetails.quantity))
    const [checkWishlist, setcheckWishlist] = useState(false);

    async function fetchData() {
        try {
            const response = await getProductbyID({ productId: productId })
            if (response.sucess) {
                setcreator(response.data.creator)
                response.data.color.forEach(obj => {
                    if (obj.name === colorName) {
                        setimageURL(obj.imageUrl[0])
                    }
                });
            }
        } catch (error) {
            console.log(error)
        }

        try {
            const response = await getProductWishlist()
            response.data.wishlists.forEach(obj => {
                if (productId === obj._id) {
                    setcheckWishlist(true)

                }
            })

        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {

        fetchData()

    }, []);


    const updateDastabse = async (quantityy) => {
        if (itemQuantity === 1 && quantityy === '-1') {
            return
        }

        if (quantityy === '1') {
            setitemQuantity(itemQuantity + 1)
        } if (quantityy === '-1') {
            setitemQuantity(itemQuantity - 1)
        }



        const data = {
            productId: productId,
            quantity: quantityy,
            productName: productName,
            mrp: mrp,
            discountPrice: discountPrice,
            size: size,
            color: colorName,
            creator: creator
        }


        try {
            const response = await addProductCart(data)

            console.log(response);
            if (response.sucess) {
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }


    const deleteItem = async () => {

        try {
            const response = await deleteProductCart({ productObjectId: _id })

            console.log(response);
            if (response.sucess) {
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const addtoWishlist = async () => {

        try {
            const response = await addProductWishlist({ productId: productId })
            if (response.sucess) {
                window.location.reload()
                setcheckWishlist(true)
            } else {
                console.log(response.message)
            }
        } catch (error) {
            console.log(error)
        }

    }

    const removeFromWishlist = async () => {

        try {
            const response = await deleteProductWishlist({ productId: productId })
            if (response.sucess) {
                setcheckWishlist(false)
                window.location.reload()
            } else {
                console.log(response.message)
            }
        } catch (error) {
            console.log(error)
        }

    }




    return (
        <div className='w-full h-[140px]   justify-between lg:h-[240px] lg:w-full flex items-center  pb-[15px] mb-[15px] lg:pb-[20px] lg:mb-[20px] border-b-[1px] border-[#EAEAEA] shadow '>
            <Link href={`/product/${productId}`}>

                <div className='flex h-full'>
                    <img className='w-[100px] h-[122px] lg:h-[220px]  lg:w-[181px] ' src={imageURL}></img>

                    <div className='ml-[10px] lg:ml-[16px]  pt-2 h-full  flex flex-col justify-between'>
                        <div>
                            <h2 className='font-inter text-[#19191D] text-[12px] lg:text-[18px]'>{productName}</h2>

                            <div className='flex items-center lg:mt-1    space-x-1 justify-start '>
                                <h2 className='font-inter  text-[13px] lg:text-[24px] text-[#19191D]'>{discountPrice}</h2>
                                <h3 className='font-inter text-[9px] lg:text-[13px] text-[#787885] line-through '>{mrp}</h3>
                                <h3 className='text-[#C25050] font-inter text-[9px] lg:text-[16px] ml-12px'>{discountPercent}%</h3>
                            </div>
                            <div className='mt-1 lg:mt-8'>
                                <h2 className='font-inter font-medium text-[#323232] text-[9px] lg:text-[14px]'>Size: ({size})</h2>
                                <h2 className='font-inter font-medium text-[#323232] text-[9px] lg:text-[14px]'>Colour : {colorName.replace('_', ' ')}</h2>
                            </div>
                        </div>

                        <div className='flex items-center justify-around lg:w-[120px] lg:h-[36px] w-[86px] h-[30px] rounded-md border-[1px] border-[#E5E5E5] shadow'>
                            <MinusIcon onClick={() => { updateDastabse('-1') }} className='w-[10px] lg:w-[14px] text-[#313131] cursor-pointer' />
                            <span className='font-manrope text-[11px] lg:text-[16px] text-[#313131] '>{itemQuantity > 0 ? itemQuantity : 1}</span>
                            <PlusIcon onClick={() => { updateDastabse('1') }} className='w-[10px] lg:w-[14px] text-[#313131] cursor-pointer' />
                        </div>
                    </div>
                </div>

            </Link>

            <div className='flex flex-col items-center  h-full justify-between pb-1 lg:pb-3'>
                <XIcon onClick={deleteItem} className='w-[20px] mt-[3px] lg:w-[30px] text-[#454545] cursor-pointer' />

                {!checkWishlist &&
                    <img onClick={addtoWishlist} src='./../homepageImages/heart_outline.png' className='cursor-pointer lg:w-[40px]   w-[30px] p-[1px] rounded' />
                }

                {checkWishlist &&
                    <img onClick={removeFromWishlist} src='./../homepageImages/heart.png' className='cursor-pointer lg:w-[40px]  w-[30px] p-[1px] rounded' />
                }

            </div>
        </div>
    )
}
