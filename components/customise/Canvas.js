import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/solid'
import { HexColorPicker } from "react-colorful";
import * as htmlToImage from 'html-to-image';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import MerchContext from '../../context/MerchContext';
import ColorModal from './ColorModal';
import { tshirts } from '../../Data/tshirs';

import Script from 'next/script';
import dynamic from "next/dynamic";

const chooseProducts = ["MEN T-SHIRT", "MEN SHIRT", "MEN HOODIE", "MEN LONG SLEEVE TSHIRT", "WOMEN T-SHIRT", "WOMEN SHIRT", "BOTTLE", "KIDS", "MUGS"
]

const FontPicker = dynamic(() => import("font-picker-react"), {
    ssr: false,
})



const Canvas = () => {

    const divToImageRef = useRef(null);



    const [canvas, setcanvas] = useState(null);
    const fontAPI = 'AIzaSyAZ0YPUkF0oXOhdK3J6EnfSqXZEDHOXQ_g'
    const inputFileRef = useRef(null)
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [FrontBackSelected, setFrontBackSelected] = useState('FRONT');
    const [imageUploadedinCanvas, setimageUploadedinCanvas] = useState(null);
    const [openAddtextModaal, setopenAddtextModaal] = useState(false);
    const [activeFontFamily, setactiveFontFamily] = useState('Arimo');
    const [fabricText, setfabricText] = useState(null);
    const [CanvasBorder, setCanvasBorder] = useState(true);
    const [previewEditChanger, setpreviewEditChanger] = useState(false);

    const [selectedProduct, setselectedProduct] = useState("MEN T-SHIRT")
    const [selectedColourIndex, setselectedColourIndex] = useState(0); // 0 indicates the index position of the tshirts colour array
    const { modalVisible, setmodalVisible, colours } = useContext(MerchContext);


    //Fabric text color
    // const [color, setColor] = useState("#000000");



    useEffect(() => {
        canvas = new fabric.Canvas('myCanvas', {
            width: 150,
            height: 230,
        })
        canvas.renderAll()
        setcanvas(canvas)
    }, []);

    const uploadFile = (e) => {
        const reader = new FileReader()
        const img = new Image()
        reader.onload = () => {
            img.onload = () => {

                let w = 100;
                let nw = img.naturalWidth;
                let nh = img.naturalHeight;
                let aspect = nw / nh
                let h = w / aspect
                fabric.Image.fromURL(reader.result, img => {

                    img.scaleToWidth(w)
                    img.scaleToHeight(h)
                    canvas.centerObject(img);
                    canvas.add(img);
                    canvas.renderAll();
                })

            }
            img.src = reader.result
        }
        reader.readAsDataURL(e.target.files[0])
    }





    const downloadCavasImage = async () => {
        setCanvasBorder(false)
        const dataUrl = await htmlToImage.toPng(divToImageRef.current);

        // download image
        const link = document.createElement('a');
        link.download = "html-to-img.png";
        link.href = dataUrl;
        link.click();
        setCanvasBorder(true)
    }
    const preview = async () => {
        setpreviewEditChanger(!previewEditChanger)
        setCanvasBorder(!CanvasBorder)
        canvas.discardActiveObject();
        canvas.renderAll();

    }


    const removeSelectedItem = () => {
        if (typeof canvas.getActiveObject() === "undefined") {
            alert('Select any item to remove!')
        }

        if (canvas.getActiveObject() === null) {
            alert('Select any item to remove!')
        }


        console.log(canvas.getActiveObject());
        canvas.remove(canvas.getActiveObject());
    }

    const resetCanvas = () => {
        canvas.clear();
        var json = canvas.toJSON();
        canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
    }

    const addText = (e) => {
        e.preventDefault()
        if (fabricText === null) {
            alert('enter text')
            return
        }
        var text = new fabric.Text(fabricText, {
            fill: color,
            fontFamily: activeFontFamily,
            fontWeight: 'normal',
        });

        canvas.add(text);
        setopenAddtextModaal(false)

    }

    const slideRight = () => {
        if (selectedColourIndex !== tshirts.length - 1) {
            setselectedColourIndex(selectedColourIndex + 1)
        }
    }

    const slideLeft = () => {
        if (selectedColourIndex !== 0) {
            setselectedColourIndex(selectedColourIndex - 1)
        }
    }


    return (

        <div className='lg:flex items-center lg:items-start justify-between '>


            {/* This is for small screen only  */}
            <div className='lg:hidden sm:w-4/5 md:w-3/5  xl:w-[480px]  mx-auto flex items-start justify-between '>
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


            {/* CANVAS  */}
            <div className='sm:w-4/5 md:w-3/5 lg:w-full  mx-auto lg:mx-0 '>
                <Script src="https://unpkg.com/fabric@5.2.1/dist/fabric.min.js" strategy="beforeInteractive" />


                <div className='flex flex-col items-center justify-around lg:justify-start'>


                    <div className='grid lg:grid-cols-2 grid-cols-3 sm:px-6 lg:px-0  items-center justify-between mt-6 lg:mt-0   w-full'>
                        <button onClick={() => { setFrontBackSelected("FRONT") }} className={` h-[28px] lg:h-[40px] lg:pt-[8px] lg:px-[50px] lg:pb-[10px] lg:text-[18px] ${FrontBackSelected === 'FRONT' ? "bg-[#54BAB9] text-[#FFFFFF]" : ""} text-[12px] font-inter  rounded-[4px] cursor-pointer`}>FRONT</button>

                        <button onClick={() => { setFrontBackSelected("BACK") }} className={` h-[28px] lg:h-[40px] lg:pt-[8px] lg:px-[50px] lg:pb-[10px] lg:text-[18px] ${FrontBackSelected === 'BACK' ? "bg-[#54BAB9] text-[#FFFFFF]" : ""} text-[12px] font-inter rounded-[4px] cursor-pointer`}>BACK</button>

                        <label className='lg:hidden ml-1  h-[28px] text-center pt-1.5  bg-[#54BAB9] text-[12px] font-inter text-[#FFFFFF] rounded-[4px] ' htmlFor='uploader'>UPLOAD</label>
                        <input id='uploader' ref={inputFileRef} onChange={uploadFile} type="file" className="hidden" />
                    </div>




                    <div className='flex items-center justify-center relative w-full lg:scale-105 xl:scale-110 lg:m-8 '>
                        <div onClick={slideLeft} className='absolute left-0 my-auto z-10 cursor-pointer rounded-xl h-[406px] flex items-center '>
                            <ChevronLeftIcon className='h-[35px] text-black select-none' />
                        </div>


                        {/* Canvas playground */}
                        <div ref={divToImageRef} className=' mx-auto flex items-center justify-center  relative w-fit mt-4'>


                            <img className='h-[406px] object-contain ' src={`./creator/tshirts/${FrontBackSelected === 'FRONT' ? `Front_${tshirts[selectedColourIndex].name}` : `Back_${tshirts[selectedColourIndex].name}`}.png`} />
                            <div className={` ${CanvasBorder ? "border-[1px] border-gray-400" : ""} rounded-lg  z-10 absolute `}>
                                <canvas
                                    ref={canvasRef}
                                    id="myCanvas"
                                />
                            </div>
                        </div>


                        <div onClick={slideRight} className='absolute right-0 my-auto z-10 cursor-pointer rounded-xl h-[406px] flex items-center '>
                            <ChevronRightIcon className='h-[35px] text-black select-none' />
                        </div>
                    </div>


                    <div className='grid grid-cols-2  gap-3 mt-6 sm:px-6 w-full lg:hidden '>
                        <button onClick={removeSelectedItem} className=' hover:text-white hover:bg-[#54BAB9] text-[12px] font-inter border-[1px] border-[#54BAB9] rounded-[5px] py-[7px] px-[10px]'>Remove Seleted</button>
                        <button onClick={resetCanvas} className=' hover:text-white hover:bg-[#54BAB9] text-[12px] font-inter border-[1px] border-[#54BAB9] rounded-[5px] py-[7px] px-[10px]'>Clear All</button>
                    </div>


                </div>

            </div >



            {/* This is for large screen only */}
            <div className='hidden xl:ml-[100px] lg:ml-[50px] lg:flex items-start justify-start flex-col w-full '>


                {/* Upload Art  */}
                <div className='w-full '>
                    <h2 className='text-[14px] font-inter mb-1'>Upload Art</h2>
                    <label className='px-[90px] py-1.5  h-[28px] text-center  bg-[#54BAB9] text-[14px] font-inter text-[#FFFFFF] rounded-[4px] ' htmlFor='uploader'>UPLOAD</label>
                    <input id='uploader' ref={inputFileRef} onChange={uploadFile} type="file" className="hidden" />

                </div>


                <div className='mt-8'>
                    <h2 className='text-[15px] font-inter text-[#323232] ml-1'>Choose Product</h2>

                    <select className='mt-[4px] w-[240px] 
                     text-[10px] lg:text-[13px] font-inter rounded-xl text-[#323232] border-[1px] border-[#E5E5E5] p-2  outline-none' value={selectedProduct} onChange={e => setselectedProduct(e.target.value)}>



                        {chooseProducts.map(item => {
                            return (
                                <option className='font-inter text-[#323232] text-[12px] my-4  lg:my-6' key={item} value={item} >{item}</option>
                            )
                        })}

                    </select>

                </div>

                <div className='mt-2 flex items-start flex-col justify-start '>

                    <h2 className='lg:text-[15px] font-inter text-[#323232] mt-4 ml-1'>Product Colours</h2>



                    <div onClick={() => { setmodalVisible(true) }} className='border-[1px] border-[#E5E5E5]  rounded-xl px-2 py-[3px]  flex items-center justify-between mt-[4px] cursor-pointer scale-110 ml-2 w-[222px]'>
                        <span className='w-[24px] h-[24px] rounded-full' style={{ backgroundColor: colours[0].hexcode }}></span>
                        <h2 className='font-inter text-[#323232] text-[12px]'>{colours[0].name}</h2>
                        <ChevronRightIcon className='h-[18px] text-[#323232]' />
                    </div>

                    <h2 className='font-inter text-[12px] mt-[6px] text-[#323232]'>(16 Product Colour Selected)</h2>

                    {/* Make background darker */}
                    <div className={`bg-black bg-opacity-40 fixed inset-0 z-20  ${modalVisible ? "" : "hidden"} `} />
                    <ColorModal />

                </div>



                <div className='my-10 space-y-3 flex flex-col items-start  w-full'>
                    <button onClick={removeSelectedItem} className='w-[240px] hover:text-white hover:bg-[#54BAB9] text-[12px] font-inter border-[1px] border-[#54BAB9] rounded-[5px] py-[7px] px-[10px] lg:text-[15px]'>Remove Seleted</button>
                    <button onClick={resetCanvas} className='w-[240px] hover:text-white hover:bg-[#54BAB9] text-[12px] lg:text-[15px] font-inter border-[1px] border-[#54BAB9] rounded-[5px] py-[7px] px-[10px]'>Clear All</button>
                </div>

                <div className=''>
                    <p className='text-[12px] font-inter  text-[#323232] w-[250px]'>A product colour that will be prioritised & will be showed in
                        front page.</p>

                    <h2 className='mt-2 text-[16px] font-inter font-medium text-[#323232] ml-1 '>Priority Colour</h2>
                    <div onClick={() => { setmodalVisible(true) }} className='border-[1px] border-[#E5E5E5]  rounded-xl px-2 py-[3px]  flex items-center justify-between mt-[4px] w-[222px] cursor-pointer scale-110 ml-2'>
                        <span className='w-[24px] h-[24px] rounded-full' style={{ backgroundColor: colours[0].hexcode }}></span>
                        <h2 className='font-inter text-[#323232] text-[12px]'>{colours[0].name}</h2>
                        <ChevronRightIcon className='h-[18px] text-[#323232]' />
                    </div>

                </div>

            </div>



            {/* This is just for small screens */}
            <div className='mt-[20px] lg:hidden sm:w-4/5 md:w-3/5 mx-auto'>
                <p className='text-[10px] font-inter  text-[#323232] '>A product colour that will be prioritised & will be showed in
                    front page.</p>
                <h2 className='my-[8px] text-[12px] font-inter font-medium text-[#323232] ml-1'>Priority Colour</h2>
                <div onClick={() => { setmodalVisible(true) }} className='border-[1px] border-[#E5E5E5]  rounded-xl px-2 py-[3px]  flex items-center justify-between mt-[8px] w-[170px] cursor-pointer'>
                    <span className='w-[24px] h-[24px] rounded-full' style={{ backgroundColor: colours[0].hexcode }}></span>
                    <h2 className='font-inter text-[#323232] text-[10px]'>{colours[0].name}</h2>
                    <ChevronRightIcon className='h-[18px] text-[#323232]' />
                </div>

            </div>
        </div>

    )
};
export default Canvas;