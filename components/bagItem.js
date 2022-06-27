import React, { useEffect, useLayoutEffect, useState } from 'react'
import { MinusIcon } from '@heroicons/react/solid'
import { PlusIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/outline'
import { UpdatebagItems, DeletebagItems } from '../lib/serverConfig'
import { QueryG } from '../lib/serverConfig'
export const BagItem = ({ productdetails, cartID }) => {

    // console.log(productdetails);

    const [imageURL, setimageURL] = useState("");
    const { quantity } = productdetails
    const { title, price, mrp, discount, id } = productdetails.product
    const [itemQuantity, setitemQuantity] = useState(1)
    const colorName = productdetails.color.color;
    const size = productdetails.size.id;
    const [sizeName, setsizeName] = useState('');


    useEffect(() => {

        if (size == 1) {
            setsizeName('S')
        }
        if (size == 2) {
            setsizeName('M')
        }
        if (size == 3) {
            setsizeName('L')
        }
        if (size == 4) {
            setsizeName('XL')
        }
        if (size == 5) {
            setsizeName('2XL')
        }
    }, []);

    useEffect(async () => {
        setitemQuantity(quantity)

        await QueryG(`query{
            products(id:"${id}"){
            edges{
              node{
                id
                  title
                  price
                  mrp
                  discount
                  description
                  colors{
                    id
                    color
                    image{
                      image
                    }
              }
            }
          }
        }
    }`).then(res => {

        var obj = res.data.data.products.edges[0].node;
            obj.colors.map(item => {
                if (productdetails.color.id === item.id) {
                    setimageURL(item.image[0].image)
                }
            })

        })
            .catch(err => {
                console.log(err);
            })

    }, [])

    const updateDastabse = async (quantity) => {
        await UpdatebagItems(quantity, productdetails.id).then(res => {
            console.log(res);
        })
            .catch(err => {
                console.log(err);
            })
    }
    const deleteItem = async () => {
        await DeletebagItems(productdetails.id).then(res => {
            console.log(res);
            window.location.reload();
        })
            .catch(err => {
                console.log(err);
            })
    }




    return (
        <div className='w-full h-[140px]   justify-between lg:h-[240px] lg:w-full flex items-center  pb-[15px] mb-[15px] lg:pb-[20px] lg:mb-[20px] border-b-[1px] border-[#EAEAEA] shadow '>

            <div className='flex h-full'>
                <img className='w-[100px] h-[122px] lg:h-[220px]  lg:w-[181px] ' src={"https://closm.com" + imageURL}></img>

                <div className='ml-[10px] lg:ml-[16px]  pt-2 h-full  flex flex-col justify-between'>
                    <div>
                        <h2 className='font-inter text-[#19191D] text-[12px] lg:text-[18px]'>{title}</h2>

                        <div className='flex items-center lg:mt-1    space-x-1 justify-start '>
                            <h2 className='font-inter  text-[13px] lg:text-[24px] text-[#19191D]'>{price}</h2>
                            <h3 className='font-inter text-[9px] lg:text-[13px] text-[#787885] line-through '>{mrp}</h3>
                            <h3 className='text-[#C25050] font-inter text-[9px] lg:text-[16px] ml-12px'>{discount}</h3>
                        </div>
                        <div className='mt-1 lg:mt-8'>
                            <h2 className='font-inter font-medium text-[#323232] text-[9px] lg:text-[14px]'>Size: ({sizeName})</h2>
                            <h2 className='font-inter font-medium text-[#323232] text-[9px] lg:text-[14px]'>Colour : {colorName}</h2>
                        </div>
                    </div>

                    <div className='flex items-center justify-around lg:w-[120px] lg:h-[36px] w-[86px] h-[30px] rounded-md border-[1px] border-[#E5E5E5] shadow'>
                        <MinusIcon onClick={() => {
                            setitemQuantity(itemQuantity - 1);
                            updateDastabse(itemQuantity + 1)
                        }} className='w-[10px] lg:w-[14px] text-[#313131] cursor-pointer' />
                        <span className='font-manrope text-[11px] lg:text-[16px] text-[#313131] '>{itemQuantity > 0 ? itemQuantity : 1}</span>
                        <PlusIcon onClick={() => { setitemQuantity(itemQuantity + 1); updateDastabse(itemQuantity + 1) }} className='w-[10px] lg:w-[14px] text-[#313131] cursor-pointer' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col  h-full justify-between '>
                <XIcon onClick={deleteItem} className='w-[20px] mr-[5px] mt-[3px] lg:w-[30px] text-[#454545] cursor-pointer' />
                <HeartIcon className='w-[20px] lg:w-[30px] mr-[5px] text-[#B0888C] cursor-pointer' />
            </div>
        </div>
    )
}
