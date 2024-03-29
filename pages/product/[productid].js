import React, { useContext, useEffect, useRef, useState } from 'react'
import { MinusIcon, CheckIcon, XIcon } from '@heroicons/react/solid'
import { PlusIcon } from '@heroicons/react/solid'
import { getProductbyID } from '../../lib/Product_API'
import MerchContext from '../../context/MerchContext'
import { Addtobag } from '../../lib/serverConfig'
import { GetEmail } from '../../lib/CookieLib'
import { addProductWishlist, deleteProductWishlist, addProductCart, getProductWishlist } from '../../lib/Product_API'
import { setCookies, getCookie } from "cookies-next";
import { Itemlist } from '../../components/Itemlist'
import { getYoutubersProductsList } from '../../lib/Creator_API'
import { useRouter } from 'next/router'
import SizeChart from '../../components/sizechartModal'
import { ToastContainer, toast } from 'react-toastify';


const Product = ({ productdetails }) => {

    console.log(productdetails);

    const router = useRouter();

    if (!productdetails) {
        return (
            <div className='mb-[400px] mt-[100px]  text-center'>
                Product not found
            </div>
        )
    }

    const {
        productName,
        creator,
        mrp,
        discountPrice,
        productDescription,
        size,
        color,
        _id
    } = productdetails;

    const dicountPriceInteger = parseInt(discountPrice);
    const mrpInteger = parseInt(mrp);

    const discountPercent = 100 - ((dicountPriceInteger * 100) / mrpInteger)


    const scrollbarRef = useRef(null)
    const [itemQuantity, setitemQuantity] = useState(1)
    const [currentImageShowing, setcurrentImageShowing] = useState('')
    const [currentColorShowing, setcurrentColorShowing] = useState('')
    const [colorIndex, setcolorIndex] = useState(0);
    const [slideImages, setslideImages] = useState([])
    const [currentSize, setcurrentSize] = useState("M")
    const [pincode, setpincode] = useState('')
    const [pincodeVerified, setpincodeVerified] = useState(false)
    const [checkWishlist, setcheckWishlist] = useState(false);

    const [productlist, setproductlist] = useState([]);

    const [logInCheck, setlogInCheck] = useState(false);
    const [toggleDescript_ReturnPolicy, settoggleDescript_ReturnPolicy] = useState(false);

    async function fetchData() {
        try {
            const response = await getProductWishlist()
            response.data.wishlists.forEach(obj => {
                if (_id === obj._id) {
                    setcheckWishlist(true)
                }
            })


            const response2 = await getYoutubersProductsList('abinash') //closmkundna
            if (response2.sucess) {
                setproductlist(response2.data.products)
            } else {
                console.log(response2.message)
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {



        const cookieExists = getCookie("role");
        const accessToken = getCookie("accessToken");

        if (cookieExists === 'user' && typeof accessToken !== 'undefined' && accessToken.length > 20) {
            setlogInCheck(true)
        }

        setcurrentImageShowing(color[0].imageUrl[0]);
        setcurrentColorShowing(color[0].name);
        var array = []
        color.map(item => {
            array.push(item.imageUrl[0])
        })
        setslideImages(array)

        fetchData()

    }, [])

    const { setloginSidebar, SizeChartModalVisible, setSizeChartModalVisible } = useContext(MerchContext)



    const checkPincode = async (code) => {
        const response = await fetch(`https://api.postalpincode.in/pincode/${code}`)

        const message = await response.json()
        console.log(message[0].Status);
        if (message[0].Status === "Error") {
        } else {
            setpincodeVerified(true)
        }


    }

    const removeFromWishlist = async () => {



        try {
            const response = await deleteProductWishlist({ productId: _id })

            if (response.sucess) {
                setcheckWishlist(false)
            } else {
                console.log(response.message)
            }
        } catch (error) {
            console.log(error)
        }

    }
    const addtoWishlist = async () => {

        if (!logInCheck) {
            setloginSidebar(true)
            return
        }

        try {
            const response = await addProductWishlist({ productId: _id })
            if (response.sucess) {
                setcheckWishlist(true)
            } else {
                console.log(response.message)
            }
        } catch (error) {
            console.log(error)
        }

    }

    const scroll = (scrollOffset) => {
        scrollbarRef.current.scrollLeft += scrollOffset;
    };


    const addtoBagClick = async () => {
        if (!logInCheck) {
            setloginSidebar(true)
            return
        }


        const data = {
            productId: _id,
            quantity: itemQuantity.toString(),
            productName: productName,
            mrp: mrp,
            discountPrice: discountPrice,
            size: currentSize,
            color: color[colorIndex].name,
            creator: creator
        }



        try {
            const response = await addProductCart(data)

            console.log(response);
            if (response.sucess) {
                toast.info('Added to bag')
            }
        } catch (error) {
            console.log(error)
        }



    }

    return (
        <div className='px-[15px] lg:px-[45px] my-[15px] '>


            <div className='lg:h-[520px] lg:pr-[60px] lg:space-x-8 md:h-[410px] md:flex md:space-x-4 lg:justify-between xl:justify-start md:justify-around  items-center sm:justify-between mt-[20px] lg:mt-[35px] xl:space-x-[220px]'>


                {/* Product Image and subcolours */}


                <div className=' h-[316px] lg:w-[950px] md:h-full justify-around flex items-center  space-x-3 select-none'>

                    <div className='flex flex-col h-full  justify-start lg:hidden space-y-4 overflow-scroll scrollbar-hide'>
                        {slideImages.map((image, index) => {
                            return (
                                <img onClick={() => { setcurrentImageShowing(image); setcurrentColorShowing(color[index].name) }} key={image} src={image} className='h-[95px] ' />
                            )
                        })}
                    </div>
                    <div className='hidden lg:flex items-center h-full'>
                        <img onClick={() => scroll(-482)} src='./../product/left.png' className='h-[20px] text-[#54BAB9] text-center  font-semibold my-auto mr-[30px] cursor-pointer ' />
                        <div ref={scrollbarRef} className=' flex items-center scrollbar-hide overflow-x-auto h-full space-x-[15px]'>

                            {slideImages.map((image, index) => {
                                return (
                                    <img onClick={() => { setcurrentImageShowing(image); setcurrentColorShowing(color[index].name) }} key={image} src={image} className='h-full w-[259px] lg:w-[482px] lg:h-[515px] object-contain' />
                                )
                            })}


                        </div>
                        <img onClick={() => scroll(482)} src='./../product/right.png' className='h-[20px] text-[#54BAB9] text-center font-semibold my-auto ml-[30px] cursor-pointer' />
                    </div>

                    <img src={currentImageShowing} className=' h-full object-fill  lg:hidden' />

                </div>


                {/* Product price , colour, quantity, ADD TO BAG button */}


                <div className='flex flex-col justify-between md:w-[290px]  h-[410px] lg:h-[520px] lg:w-[400px] lg:mr-[59px]  pt-[15px] lg:pt-[15px] '>
                    <div className=' pb-[15px] border-b-[0.5px] border-[#CCCCCC] '>
                        <div className='w-full flex lg:flex-col lg:items-start lg:space-y-2 items-center justify-between'>
                            <h2 className='font-inter text-[#19191D] text-[14px] lg:text-[18px]'>{productName}</h2>
                            <h3 className='text-[#C25050] font-inter text-[14px] lg:text-[16px] ml-12px'>{discountPercent.toString().substring(0, 2)}% OFF</h3>
                        </div>

                        <div className='flex items-center space-x-1 justify-start '>
                            <h2 className='font-inter  text-[15px] lg:text-[24px] font-semibold text-[#19191D]'>₹{discountPrice}</h2>
                            <h3 className='font-inter text-[10px] lg:text-[13px] text-[#787885] line-through '>₹{mrp}</h3>
                        </div>
                    </div>

                    <div className='mt-[15px]'>
                        <div className='flex items-center space-x-[10px]'>
                            <h1 className='text-[11px] lg:text-[13px] text-[#444444]'>Choose Colour</h1>
                            <h1 className='font-inter font-semibold text-[11px] lg:text-[13px] text-[#07002F]'>({color[colorIndex].name.replace('_', ' ')})</h1>
                        </div>


                        <div className='mt-[15px] flex items-center space-x-[12px] pb-[15px] border-b-[0.5px] border-[#CCCCCC]'>
                            {slideImages.map((obj, index) => {
                                return (
                                    <img onClick={() => {
                                        setcurrentImageShowing(obj);
                                        setcolorIndex(index)
                                    }} key={obj} src={obj} className={`h-[50px] lg:h-[70px]  border-[#54BAB9] rounded-lg ${currentImageShowing === obj ? "border-[2px]" : ""}`} />

                                )
                            })}
                        </div>

                    </div>

                    <div className='mt-[15px] pb-[15px] border-b-[0.5px] border-[#CCCCCC] '>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[11px] lg:text-[13px] text-[#5A5A5A] font-inter'>Choose Size</h1>
                            <div className='flex items-center space-x-1'>
                                <img className='lg:h-[18px]' src='./../product/size_chart.svg' />
                                <h1 onClick={() => { setSizeChartModalVisible(true) }} className='cursor-pointer text-[10px] lg:text-[14px] text-[#54BAB9] font-inter'>Size Chart</h1>
                                {/* Make background darker */}
                                <div className={`bg-black bg-opacity-40 fixed inset-0 z-20  ${SizeChartModalVisible ? "" : "hidden"} `} />
                                <SizeChart />
                            </div>
                        </div>


                        <div className='mt-[15px] flex items-center space-x-[17px]'>
                            {size.map(size => {
                                return (
                                    <div onClick={() => { setcurrentSize(size) }} key={size} className={`${size === currentSize ? "border-[2px] border-[#54BAB9]" : "border-[1px] lg:border-[2px] border-[#E5E5E5] cursor-pointer"} h-[35px] w-[35px] lg:h-[40px] lg:w-[40px] rounded-lg  flex items-center justify-center`}>
                                        <h1 className='text-[11px] lg:text-[16px] font-poppins font-light text-[#313131] text-center'>{size}</h1>
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
                            <div className='mt-[10px] flex items-center justify-start border-b-[0.5px] border-[#969696]'>
                                <input className='outline-none w-[70px] text-[11px] lg:text-[14px] text-[#5A5A5A]' onChange={e => {
                                    if (e.target.value.length <= 6) {
                                        setpincode(e.target.value)
                                    }
                                    if (e.target.value.length === 6) {
                                        checkPincode(e.target.value)
                                    }
                                    if (e.target.value.length <= 6) {
                                        setpincodeVerified(false)
                                    }
                                }} type='number' value={pincode} placeholder='Pincode' />
                                <h1 className='font-inter text-[11px] lg:text-[16px] text-[#323232] cursor-pointer hidden' onClick={checkPincode}>Check</h1>


                                {pincode.length === 6 &&
                                    <h1 className='mx-1 font-inter text-[10px] lg:text-[13px] text-[#323232]'>{pincodeVerified ? "Available" : "Not Available"}</h1>

                                }

                                {!pincodeVerified && pincode.length === 6 && <XIcon className='h-[16px] lg:h-[18px] p-0 text-red-500' />}


                                {pincodeVerified && <CheckIcon className='h-[16px] lg:h-[18px] p-0 text-green-500' />}



                            </div>

                        </div>
                    </div>


                    <div className='flex items-center mt-2'>
                        {/* <HeartIcon className='mr-[9px] w-[40px] p-[4px] rounded '/> */}

                        {!checkWishlist &&
                            <img onClick={addtoWishlist} src='./../homepageImages/heart_outline.png' className='cursor-pointer   mr-[9px] w-[40px] p-[1px] rounded border-[1.5px] border-gray-300 ' />
                        }

                        {checkWishlist &&
                            <img onClick={removeFromWishlist} src='./../homepageImages/heart.png' className='cursor-pointer mr-[9px] w-[40px] p-[1px] rounded-md border-[1.5px] border-gray-300 ' />
                        }
                        <button onClick={addtoBagClick} className='lg:text-[16px] mx-auto w-[300px] lg:mx-0 lg:w-[225px]   text-white h-[40px] bg-[#54BAB9] hover:bg-[#458b8a]  rounded-[5px] text-center  font-inter font-semibold'>
                            ADD TO BAG
                        </button>
                    </div>
                </div>
            </div>



            {/* productDescription, Return Policy */}

            <div className='mt-[20px] px-2'>
                <div className='flex items-center space-x-[25px]'>
                    <h2 onClick={() => { settoggleDescript_ReturnPolicy(false) }} className={`cursor-pointer text-[13px] lg:text-[18px]  ${!toggleDescript_ReturnPolicy ? " text-theme border-b-[1.5px] border-[#54BAB9]" : "text-[#787885]"} font-inter`}>Product Description</h2>
                    <h2 onClick={() => { settoggleDescript_ReturnPolicy(true) }} className={`cursor-pointer font-inter  ${toggleDescript_ReturnPolicy ? " text-theme border-b-[1.5px] border-[#54BAB9]" : "text-[#787885]"} text-[13px] lg:text-[18px] `}>Return Policy</h2>
                </div>

                {/* Product Description */}


                {!toggleDescript_ReturnPolicy &&
                    <div >
                        <h1 className='whitespace-pre	  text-[11px] lg:text-[16px] font-inter text-[#313131] mt-[8px] lg:mt-[20px] leading-[20px]'>
                            {productDescription}
                        </h1>
                    </div>
                }



                {/* Return Policy */}
                {toggleDescript_ReturnPolicy &&

                    <div>
                        <h2 className='text-[12px] lg:text-[24px] font-DMsans mt-[13px] lg:mt-[20px] text-[#313131]'>Return Policy</h2>
                        <div className='space-x-2 flex items-center pl-2 mt-[4px]'>
                            <span className='w-1 h-1 mt-[3px] rounded-full bg-black text-[10px]'></span>
                            <p className='text-[10px] lg:text-[18px]'>Printing issues</p>
                        </div>
                        <div className='space-x-2 flex items-center pl-2 mt-[4px]'>
                            <span className='w-1 h-1 mt-[3px] rounded-full bg-black text-[10px]'></span>
                            <p className='text-[10px] lg:text-[18px]'>Received different product
                            </p>
                        </div>

                        <div className='space-x-2 flex items-center pl-2 mt-[4px]'>
                            <span className='w-1 h-1 mt-[3px] rounded-full bg-black text-[10px]'></span>
                            <p className='text-[10px] lg:text-[18px]'>Product missing
                            </p>
                        </div>

                        <div className='space-x-2 flex items-center pl-2 mt-[4px]'>
                            <span className='w-1 h-1 mt-[3px] rounded-full bg-black text-[10px]'></span>
                            <p className='text-[10px] lg:text-[18px]'>Transit damage
                            </p>
                        </div>

                        <div className='space-x-2 flex items-center pl-2 mt-[4px]'>
                            <span className='w-1 h-1 mt-[3px] rounded-full bg-black text-[10px]'></span>
                            <p className='text-[10px] lg:text-[18px]'>Different size received
                            </p>
                        </div>

                        <div className='space-x-2 flex items-center pl-2 mt-[4px]'>
                            <span className='w-1 h-1 mt-[3px] rounded-full bg-black text-[10px]'></span>
                            <p className='text-[10px] lg:text-[18px]'>Other related issues
                            </p>
                        </div>


                        <h1 className='text-[11px] lg:text-[16px] font-inter text-[#313131] mt-[8px] lg:mt-[20px] leading-[20px]'>
                            If you encounter any of these issues then write to us on support@closm.com or call us on +91 8460561318 (10:00 AM to 21:00 PM) for a replacement of the product or full money back within 15 days of purchase.
                        </h1>



                    </div>
                }
            </div>


            {productlist.length !== 0 &&
                <Itemlist items={productlist} />

            }
        </div>
    )
}

export default Product


export async function getServerSideProps(context) {

    const { productid } = context.query;


    const response = await getProductbyID({ productId: productid })
    if (response.sucess) {
        return {
            props: {
                productdetails: response.data,
            }, // will be passed to the page component as props
        }
    } else {
        return {
            props: {
                productdetails: {},
            },
        }
    }


}
