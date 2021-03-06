import React, { useContext, useEffect, useRef, useState } from 'react'
import { MinusIcon } from '@heroicons/react/solid'
import { PlusIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'
import { Itemlist } from '../../components/Itemlist'
import { QueryG } from '../../lib/serverConfig'
import { CheckIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/solid'
import videosContext from '../../context/videos/videosContext'
import { Addtobag } from '../../lib/serverConfig'
import { GetEmail } from '../../lib/CookieLib'


const Product = ({ productdetails }) => {
    const {
        title,
        price,
        mrp,
        discount,
        description,
        sizeArray,
        colors,
        productid
    } = productdetails;

    const scrollbarRef = useRef(null)
    const [itemQuantity, setitemQuantity] = useState(1)
    const [colorsAvailable, setcolorsAvailable] = useState(colors)
    const [currentImageShowing, setcurrentImageShowing] = useState('')
    const [currentColorShowing, setcurrentColorShowing] = useState('')
    const [slideImages, setslideImages] = useState([])
    const [currentColorIndexPos, setcurrentColorIndexPos] = useState('')
    const [currentSize, setcurrentSize] = useState("M")
    const [pincode, setpincode] = useState('')
    const [pincodeVerified, setpincodeVerified] = useState(false)

    useEffect(() => {
        setcurrentImageShowing(colors[0].image[0].image);
        setcurrentColorShowing(colors[0].color);
        setcurrentColorIndexPos(0)
        var array = []
        colors[0].image.map(item => {
            array.push(item.image)
        })
        setslideImages(array)
    }, [])

    const { setloginSidebar } = useContext(videosContext)



    const checkPincode = async (code) => {
        const response = await fetch(`https://api.postalpincode.in/pincode/${code}`)

        const message = await response.json()
        console.log(message[0].Status);
        if (message[0].Status === "Error") {
            alert("Pincode Error")
        }


    }

    const selectColorClick = (url, color, index) => {
        setcurrentImageShowing(url)
        setcurrentColorShowing(color)
        setcurrentColorIndexPos(index)
        var array = []
        colors[index].image.map(item => {
            array.push(item.image)
        })
        setslideImages(array)

    }

    const scroll = (scrollOffset) => {
        scrollbarRef.current.scrollLeft += scrollOffset;
    };


    const addtoBagClick = async () => {
        if (!GetEmail()) {
            setloginSidebar(true)
            return
        }

        await Addtobag(productid, colors[currentColorIndexPos].id, itemQuantity, currentSize).then(res => {
            console.log(res.data);
            alert("added to bag")
        }).catch(err => {
            console.log(err);
        })


    }
    return (
        <div className='px-[15px] lg:px-[45px] my-[15px]'>


            <div className='lg:h-[520px] lg:pr-[60px] lg:space-x-8 md:h-[410px] md:flex md:space-x-4 lg:justify-between xl:justify-start md:justify-around  items-center sm:justify-between mt-[20px] lg:mt-[35px] xl:space-x-36'>


                {/* Product Image and subcolours */}


                <div className=' h-[316px] lg:w-[950px] md:h-full justify-around flex items-center  space-x-3'>

                    <div className='flex flex-col h-full  justify-start lg:hidden space-y-4'>
                        {slideImages.map(image => {
                            return (
                                <img onClick={() => { setcurrentImageShowing(image) }} key={image} src={"https://closm.com/" + image} className='h-[95px] ' />
                            )
                        })}
                    </div>
                    <div className='hidden lg:flex items-center h-full'>
                        <img onClick={() => scroll(-482)} src='./../product/left.png' className='h-[20px] text-[#54BAB9] text-center  font-semibold my-auto mr-[30px] cursor-pointer ' />
                        <div ref={scrollbarRef} className=' flex items-center scrollbar-hide overflow-x-auto h-full space-x-[15px]'>

                            {slideImages.map(image => {
                                return (
                                    <img onClick={() => { setcurrentImageShowing(image) }} key={image} src={"https://closm.com/" + image} className='h-full w-[259px] lg:w-[482px] lg:h-[515px] ' />
                                )
                            })}


                        </div>
                        <img onClick={() => scroll(482)} src='./../product/right.png' className='h-[20px] text-[#54BAB9] text-center font-semibold my-auto ml-[30px] cursor-pointer' />
                    </div>

                    <img src={"https://closm.com/" + currentImageShowing} className=' h-full object-fill  lg:hidden' />

                </div>


                {/* Product price , colour, quantity, ADD TO BAG button */}


                <div className='flex flex-col justify-between md:w-[290px]  h-[410px] lg:h-[520px] lg:w-[400px] lg:mr-[59px]  pt-[15px] lg:pt-[15px] '>
                    <div className=' pb-[15px] border-b-[0.5px] border-[#CCCCCC] '>
                        <div className='w-full flex lg:flex-col lg:items-start lg:space-y-2 items-center justify-between'>
                            <h2 className='font-inter text-[#19191D] text-[14px] lg:text-[18px]'>{title}</h2>
                            <h3 className='text-[#C25050] font-inter text-[14px] lg:text-[16px] ml-12px'>{discount} OFF</h3>
                        </div>

                        <div className='flex items-center space-x-1 justify-start '>
                            <h2 className='font-inter  text-[15px] lg:text-[24px] font-semibold text-[#19191D]'>???{price}</h2>
                            <h3 className='font-inter text-[10px] lg:text-[13px] text-[#787885] line-through '>???{mrp}</h3>
                        </div>
                    </div>

                    <div className='mt-[15px]'>
                        <div className='flex items-center space-x-[10px]'>
                            <h1 className='text-[11px] lg:text-[13px] text-[#444444]'>Choose Colour</h1>
                            <h1 className='font-inter font-semibold text-[11px] lg:text-[13px] text-[#07002F]'>({currentColorShowing})</h1>
                        </div>
                        <div className='mt-[15px] flex items-center space-x-[12px] pb-[15px] border-b-[0.5px] border-[#CCCCCC]'>
                            {colorsAvailable && colorsAvailable.map((obj, index) => {
                                return (
                                    <img onClick={() => selectColorClick(obj.image[0].image, obj.color, index)} key={obj.id} src={"https://closm.com/" + obj.image[0].image} className={`h-[50px] lg:h-[70px]  border-[#54BAB9] rounded-lg ${currentColorIndexPos === index ? "border-[2px]" : ""}`} />

                                )
                            })}
                        </div>

                    </div>

                    <div className='mt-[15px] pb-[15px] border-b-[0.5px] border-[#CCCCCC] '>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[11px] lg:text-[13px] text-[#5A5A5A] font-inter'>Choose Size</h1>
                            <div className='flex items-center space-x-1'>
                                <img className='lg:h-[18px]' src='./../product/size_chart.svg' />
                                <h1 className='cursor-pointer text-[10px] lg:text-[14px] text-[#54BAB9] font-inter'>Size Chart</h1>
                            </div>
                        </div>

                        <div className='mt-[15px] flex items-center space-x-[17px]'>
                            {sizeArray.map(size => {
                                return (
                                    <div onClick={() => { setcurrentSize(size.size) }} key={size.name} className={`${size.size === currentSize ? "border-[2px] border-[#54BAB9]" : "border-[1px] lg:border-[2px] border-[#E5E5E5] cursor-pointer"} h-[35px] w-[35px] lg:h-[40px] lg:w-[40px] rounded-lg  flex items-center justify-center`}>
                                        <h1 className='text-[11px] lg:text-[16px] font-poppins font-light text-[#313131] text-center'>{size.size}</h1>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className='mt-[15px] pb-[15px] flex items-center justify-between '>
                        <div>
                            <h1 className='font-inter text-[11px] lg:text-[13px] text-[#5A5A5A]'>Quantity</h1>
                            <div className='mt-[8px] flex items-center justify-around lg:w-[120px] lg:h-[36px] w-[86px] h-[30px] rounded-md border-[1px] border-[#E5E5E5] shadow'>
                                <MinusIcon onClick={() => { setitemQuantity(itemQuantity - 1) }} className='w-[10px] lg:w-[14px] text-[#313131] cursor-pointer' />
                                <span className='font-manrope text-[11px] lg:text-[16px] text-[#313131] '>{itemQuantity > 0 ? itemQuantity : 1}</span>
                                <PlusIcon onClick={() => { setitemQuantity(itemQuantity + 1) }} className='w-[10px] lg:w-[14px] text-[#313131] cursor-pointer' />
                            </div>
                        </div>

                        <div>
                            <h1 className='font-inter text-[9px] lg:text-[11px] text-[#1B1B1B] w-[171px] lg:w-[200px] pr-4'>Enter PIN code to check delivery time &
                                Pay on Delivery Availability</h1>
                            <div className='mt-[10px] flex items-center justify-between  border-b-[0.5px] border-[#969696]'>
                                <input className='outline-none text-[11px] lg:text-[14px] text-[#5A5A5A]' onChange={e => {
                                    if (e.target.value.length <= 6) {
                                        setpincode(e.target.value)
                                    }
                                    if (e.target.value.length === 6) {
                                        checkPincode(e.target.value)
                                    }
                                    if (e.target.value.length <= 6) {
                                        setpincodeVerified(false)
                                    }
                                }} type='number' value={pincode} placeholder='Enter Pincode' />
                                <h1 className='font-inter text-[11px] lg:text-[16px] text-[#323232] cursor-pointer hidden' onClick={checkPincode}>Check</h1>

                                {/* {pincodeVerified && <CheckIcon className='h-6 text-green-500' />}

                                {!pincodeVerified && pincode.length === 6 && <XIcon className='h-6 text-red-500' />} */}

                            </div>

                        </div>
                    </div>


                    <div className='flex items-center mt-2'>
                        {/* <HeartIcon className='mr-[9px] w-[40px] p-[4px] rounded border-[1px] border-[#CACACA]'/> */}
                        <img onClick={addtoBagClick} src='./../homepageImages/heart.png' className='mr-[9px] w-[40px] p-[4px] rounded border-[1px] border-[#CACACA]' />
                        <button onClick={addtoBagClick} className=' lg:text-[16px] mx-auto w-[300px] lg:mx-0 lg:w-[225px]   text-white h-[40px] bg-[#54BAB9] hover:bg-[#458b8a]  rounded-[5px] text-center  font-inter font-semibold'>
                            ADD TO BAG
                        </button>
                    </div>
                </div>
            </div>



            {/* Description, Return Policy */}

            <div className='mt-[20px] px-2'>
                <div className='flex items-center space-x-[25px]'>
                    <h2 className='text-[13px] lg:text-[18px] text-[#787885] font-inter'>Description</h2>
                    <h2 className='cursor-pointer font-inter text-[#54BAB9] text-[13px] lg:text-[18px] border-b-[1.5px] border-[#54BAB9]'>Return Policy</h2>
                </div>

                <h2 className='text-[12px] lg:text-[24px] font-DMsans mt-[13px] lg:mt-[20px] text-[#313131]'>Return Policy</h2>
                <div className='space-x-2 flex items-center pl-2 mt-[6px]'>
                    <span className='w-1 h-1 mt-[3px] rounded-full bg-black text-[10px]'></span>
                    <p className='text-[10px] lg:text-[18px]'>100% Cotton</p>
                </div>
                <div className='space-x-2 flex items-center pl-2 mt-[4px]'>
                    <span className='w-1 h-1 mt-[3px] rounded-full bg-black text-[10px]'></span>
                    <p className='text-[10px] lg:text-[18px]'>Made In India</p>
                </div>

                <h1 className='text-[10px] lg:text-[16px] font-inter text-[#313131] mt-[8px] lg:mt-[20px] leading-[20px]'>
                    Amp your style with this YUMM Men&apos;s Round Neck Varsity Half Sleeve T-Shirt.
                    Style this t-shirt with a pair of jeans andsliders for a get-together with friends.
                    Country of Origin : India

                    REGULAR FIT

                    Fitted at Chest and Straight on Waist Down

                    180 GSM SJ COTTON, COTTON LYCRA

                    Classic, lightweight jersey fabric comprising 100% cotton.
                </h1>

            </div>


            {/* Featured Products */}

            {/* <div className='sm:px-[12px] xs:px-[20px] px-[10px] lg:px-[50px]'>
                <Itemlist />
            </div> */}
        </div>
    )
}

export default Product


export async function getServerSideProps(context) {

    const { productid } = context.query;
    var productdetails = {}
    var sizeArray = []
    await QueryG(`query{
        products(id:"${productid}"){
        edges{
          node{
            id
              title
              price
              mrp
              discount
              description
              size{
                id
                size
              }
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
        productdetails = {
            title: obj.title,
            price: obj.price,
            mrp: obj.mrp,
            discount: obj.discount,
            description: obj.description,
            colors: obj.colors,
            sizeArray: obj.size,
            productid: productid
        }



    })
        .catch(err => {
            console.log(err);
        })
    return {
        props: {
            productdetails: productdetails
        }, // will be passed to the page component as props
    }
}
