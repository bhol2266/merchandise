import { defaults } from 'autoprefixer'
import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'




const chooseProducts = ["MEN T-SHIRT", "MEN SHIRT", "MEN HOODIE", "MEN LONG SLEEVE TSHIRT", "WOMEN T-SHIRT", "WOMEN SHIRT", "BOTTLE", "KIDS", "MUGS"
]


const chooseColours = ["Red", "Cyan", "Blue", "DarkBlue", "Purple", "Yellow", "Lime", "Orange", "Grey", "Olive", "Purple"]
import { Menu, Transition } from '@headlessui/react'
import Canvas from '../components/canvas'



const Customise = () => {


    const inputFileRef = useRef(null)


    const [selectedProduct, setselectedProduct] = useState("MEN T-SHIRT")
    const [selectedColour, setselectedColour] = useState('Red');

    const [FrontBackSelected, setFrontBackSelected] = useState('FRONT');


    const uploadFile = () => {

    }
    return (
        <div className='mx-[14px] lg:mx-[50px] my-[15px]'>

            <div>
                {/* Images Slidebar */}
            </div>


            <div className='flex items-center justify-around '>
                <div>
                    <h2 className='text-[12px] font-inter'>CHOOSE PRODUCT</h2>

                    <select className='mt-[8px] w-[170px] min-h-[30px] text-[10px] font-inter rounded-xl text-[#323232] border-[1px] border-[#E5E5E5] p-2  outline-none' value={selectedProduct} onChange={e => setselectedProduct(e.target.value)}>



                        {chooseProducts.map(item => {
                            return (
                                <option className=' text-[10px] my-4' key={item} value={item} >{item}</option>
                            )
                        })}

                    </select>

                </div>
                <div className=''>

                    <h2 className='text-[12px] font-inter'>CHOOSE COLOUR</h2>

                    <Menu as="div" className="relative">
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
                    </Menu>

                </div>
            </div>

            <div className='flex items-center justify-between mt-6 mx-2'>
                <button onClick={() => { setFrontBackSelected("FRONT") }} className={`w-[98px] h-[28px] ${FrontBackSelected === 'FRONT' ? "bg-[#54BAB9] text-[#FFFFFF]" : ""} text-[12px] font-inter  rounded-[4px] cursor-pointer`}>FRONT</button>
                <button onClick={() => { setFrontBackSelected("BACK") }} className={`w-[98px] h-[28px] ${FrontBackSelected === 'BACK' ? "bg-[#54BAB9] text-[#FFFFFF]" : ""} text-[12px] font-inter rounded-[4px] cursor-pointer`}>BACK</button>

                <input ref={inputFileRef} onChange={uploadFile} type="file" className="pt-1.5 pl-2 w-[98px] h-[28px] bg-[#54BAB9] text-[12px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer  file:hidden" />
                {/* <button onClick={() => { inputFileRef.current.onClick() }} className={`w-[98px] h-[28px] bg-[#54BAB9] text-[12px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer`}>UPLOAD</button> */}


            </div>

            {/* <input type="file" className="pt-1.5 pl-1.5 w-[98px] h-[28px] bg-[#54BAB9] text-[12px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer file:hidden" /> */}

            {/* Canvas playground */}
            <div className='flex items-center justify-center mt-[20px] relative'>
                <img className='w-[331px] h-[406px]  p-[10px]' src={`./canvas/${FrontBackSelected === 'FRONT' ? "front" : "back"}.png`} ></img>
                <canvas id="myCanvas" className='border-2 border-gray-400 rounded-lg absolute h-[220px] w-[155px] left-0 right-0 mx-auto' />
            </div>



            <div className='flex items-center justify-center mt-[20px]'>
                <button onClick={() => { setFrontBackSelected("BACK") }} className={` w-[250px] py-1.5 bg-[#54BAB9] text-[14px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer`}>PROCEED TO OVERVIEW</button>
            </div>


        </div>
    )
}


export default Customise