import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { XCircleIcon, ArrowRightIcon } from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import Canvas from '../Canvas'
import ColorModal from './ColorModal'
import MerchContext from '../../context/MerchContext';

const chooseProducts = ["MEN T-SHIRT", "MEN SHIRT", "MEN HOODIE", "MEN LONG SLEEVE TSHIRT", "WOMEN T-SHIRT", "WOMEN SHIRT", "BOTTLE", "KIDS", "MUGS"
]



const Preview_Edit = () => {

    const [selectedProduct, setselectedProduct] = useState("MEN T-SHIRT")
    const [selectedColour, setselectedColour] = useState('Red');
    const { modalVisible, setmodalVisible, colours } = useContext(MerchContext);




    return (
        <div className=''>


            <div className='flex items-center justify-around '>
                <div>
                    <h2 className='text-[12px] font-inter text-[#323232]'>Choose Product</h2>

                    <select className='mt-[8px] w-[170px] min-h-[30px] text-[10px] font-inter rounded-xl text-[#323232] border-[1px] border-[#E5E5E5] p-2  outline-none' value={selectedProduct} onChange={e => setselectedProduct(e.target.value)}>



                        {chooseProducts.map(item => {
                            return (
                                <option className='font-inter text-[#323232] text-[10px] my-4' key={item} value={item} >{item}</option>
                            )
                        })}

                    </select>

                </div>
                <div className=''>

                    <h2 className='text-[12px] font-inter text-[#323232]'>Product Colours</h2>

                    {/* <Menu as="div" className="relative">
                        <div>
                            <Menu.Button className="flex items-center justify-around space-x-1 mt-[8px] w-[180px] h-[30px] text-[10px] font-inter rounded-xl text-[#323232] border-[1px] border-[#E5E5E5] p-2  outline-none">


                                <span className={`h-5 w-5 rounded-full bg-${selectedColour}`}></span>
                                <h2 className='text-[10px] font-inter'>{selectedColour}</h2>

                                <ChevronDownIcon className='h-5' />
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
                            <Menu.Items className="grid grid-cols-4  absolute gap-2  w-[180px] rounded-md shadow-lg z-10 mt-2 p-4 bg-white">


                                <Menu.Item as='div'>
                                    <XCircleIcon onClick={() => { setselectedColour('Red') }} className={`h-5 w-5 rounded-full text-Red bg-Red  mr-1 cursor-pointer`} />
                                </Menu.Item>
                                <Menu.Item as='div'>
                                    <XCircleIcon onClick={() => { setselectedColour('Cyan') }} className={`h-5 w-5 rounded-full text-Cyan bg-Cyan  mr-1 cursor-pointer`} />
                                </Menu.Item>
                                <Menu.Item as='div'>
                                    <XCircleIcon onClick={() => { setselectedColour('Blue') }} className={`h-5 w-5 rounded-full text-Blue bg-Blue  mr-1 cursor-pointer`} />
                                </Menu.Item>
                                <Menu.Item as='div'>
                                    <XCircleIcon onClick={() => { setselectedColour('DarkBlue') }} className={`h-5 w-5 rounded-full text-DarkBlue bg-DarkBlue  mr-1 cursor-pointer`} />
                                </Menu.Item>
                                <Menu.Item as='div'>
                                    <XCircleIcon onClick={() => { setselectedColour('Purple') }} className={`h-5 w-5 rounded-full text-Purple bg-Purple  mr-1 cursor-pointer`} />
                                </Menu.Item>
                                <Menu.Item as='div'>
                                    <XCircleIcon onClick={() => { setselectedColour('Yellow') }} className={`h-5 w-5 rounded-full text-Yellow bg-Yellow  mr-1 cursor-pointer`} />
                                </Menu.Item>
                                <Menu.Item as='div'>
                                    <XCircleIcon onClick={() => { setselectedColour('Lime') }} className={`h-5 w-5 rounded-full text-Lime bg-Lime  mr-1 cursor-pointer`} />
                                </Menu.Item>
                                <Menu.Item as='div'>
                                    <XCircleIcon onClick={() => { setselectedColour('Orange') }} className={`h-5 w-5 rounded-full text-Orange bg-Orange  mr-1 cursor-pointer`} />
                                </Menu.Item>
                                <Menu.Item as='div'>
                                    <XCircleIcon onClick={() => { setselectedColour('Grey') }} className={`h-5 w-5 rounded-full text-Grey bg-Grey  mr-1 cursor-pointer`} />
                                </Menu.Item>

                            </Menu.Items>
                        </Transition>
                    </Menu> */}

                    <div onClick={() => { setmodalVisible(true) }} className='border-[1px] border-[#E5E5E5]  rounded-xl px-2 py-[3px]  flex items-center justify-between mt-[8px] w-[170px] cursor-pointer'>
                        <span className='w-[24px] h-[24px] rounded-full' style={{ backgroundColor: colours[0].hexcode }}></span>
                        <h2 className='font-inter text-[#323232] text-[10px]'>{colours[0].name}</h2>
                        <ChevronRightIcon className='h-[18px] text-[#323232]' />
                    </div>

                    <h2 className='font-inter text-[10px] mt-[6px] text-[#323232]'>(16 Product Colour Selected)</h2>

                    {/* Make background darker */}
                    <div className={`bg-black bg-opacity-40 fixed inset-0 z-20  ${modalVisible ? "" : "hidden"} `} />
                    <ColorModal />

                </div>
            </div>



            <Canvas />


            <div className='mt-[20px]'>
                <p className='text-[10px] font-inter  text-[#323232] ml-3'>A product colour that will be prioritised & will be showed in
                    front page.</p>
                <h2 className='my-[8px] text-[12px] font-inter font-medium text-[#323232] ml-3'>Priority Colour</h2>
                <div onClick={() => { setmodalVisible(true) }} className='border-[1px] border-[#E5E5E5]  rounded-xl px-2 py-[3px]  flex items-center justify-between mt-[8px] w-[170px] cursor-pointer'>
                    <span className='w-[24px] h-[24px] rounded-full' style={{ backgroundColor: colours[0].hexcode }}></span>
                    <h2 className='font-inter text-[#323232] text-[10px]'>{colours[0].name}</h2>
                    <ChevronRightIcon className='h-[18px] text-[#323232]' />
                </div>

            </div>

            <div className='mt-[40px]'>
                <h2 className='text-[14px] font-inter text-[#323232] mb-[21px] '>PRICE & NAME</h2>

                <div className='flex-fles-col space-y-1 mb-[15px]'>
                    <h3 className='text-[12px] font-inter font-medium text-[#323232] '>Product Name</h3>
                    <input className='w-full border-[1px] border-[#AAAAAA] rounded-[5px] px-[10px] py-[12px] text-[11px] text-[#323232]  font-inter outline-none' type="text" name="Product Name" id="Product Name" placeholder='Kim Jong UN' />
                </div>




                <div className='flex-fles-col space-y-1 mb-[15px]'>
                    <h3 className='text-[12px] font-inter font-medium text-[#323232] '>Discounted Price</h3>
                    <input className='w-full border-[1px] border-[#AAAAAA] rounded-[5px] px-[10px] py-[12px] text-[11px] text-[#323232]  font-inter outline-none line-through' type="text" name="Product Name" id="Product Name" placeholder='₹599' />
                </div>

                <div className='flex-fles-col space-y-1 mb-[15px]'>
                    <h3 className='text-[12px] font-inter font-medium text-[#323232] '>Original Price</h3>
                    <input className='w-full border-[1px] border-[#AAAAAA] rounded-[5px] px-[10px] py-[12px] text-[11px] text-[#323232]  font-inter outline-none' type="text" name="Product Name" id="Product Name" placeholder='₹499' />
                </div>

                <div className='flex-fles-col space-y-1 mb-[15px]'>
                    <h3 className='text-[12px] font-inter font-medium text-[#323232] '>Product Description</h3>
                    <input className='w-full border-[1px] border-[#AAAAAA] rounded-[5px] px-[10px] py-[12px] text-[11px] text-[#323232]  font-inter outline-none' type="text" name="Product Name" id="Product Name" placeholder='fghfgdshfgjh' />
                </div>

                <div className='flex items-center justify-between mx-2'>
                    <input className='mr-2' type="checkbox" />

                    <div className='flex items-center flex-wrap space-x-1'>
                        <h2 className='text-[#323232] font-inter font-medium text-[12px]'>By Continuing, You Agree to Closm’s</h2>
                        <h2 className='text-[#323232] font-inter font-medium text-[12px] underline cursor-pointer hover:text-red-500'>Terms of Use, </h2>
                        <h2 className='text-[#323232] font-inter font-medium text-[12px] underline cursor-pointer hover:text-red-500'>Privacy Policy </h2>
                        <h2 className='text-[#323232] font-inter font-medium text-[12px] underline cursor-pointer hover:text-red-500'>& Creators Agreement </h2>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-2 mt-[20px]'>
                    <button className='text-[#323232] font-Mont font-medium text-[12px] rounded-[5px] border-[1px] border-[#54BAB9] py-[10px] px-[15px]'>Preview</button>
                    <button className=' font-Mont font-medium text-[12px] rounded-[5px] border-[1px] border-[#54BAB9] py-[10px] px-[15px] bg-[#54BAB9] text-white'>Publish</button>
                </div>

            </div>


        </div>
    )
};
export default Preview_Edit;