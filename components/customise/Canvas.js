import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/solid'
import { HexColorPicker } from "react-colorful";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import MerchContext from '../../context/MerchContext';
import ColorModal from './Modals/ColorModal';
import dynamic from "next/dynamic";
import * as htmlToImage from 'html-to-image';
import { BeatLoader } from 'react-spinners';
import PriorityColorModal from './Modals/PriorityColorModal';
import Script from 'next/script';
import { tshirtsblendedcotton } from '../../Data/tshirtsblendedcotton';
import { tshirtscotton } from '../../Data/tshirtcotton';
import { hoodies } from '../../Data/hoodies';
import { description_hoodies } from '../../Data/hoodies'
import { description_tshirtBlended } from '../../Data/tshirtsblendedcotton'
import { description_tshirtCotton } from '../../Data/tshirtcotton'
import { ToastContainer, toast } from 'react-toastify';


// const chooseProducts = ["MEN T-SHIRT (100% COTTON)", "MEN T-SHIRT (BLENDED COTTON)", "MEN HOODIE", "MEN LONG SLEEVE TSHIRT", "WOMEN T-SHIRT", "WOMEN SHIRT", "BOTTLE", "KIDS", "MUGS"
// ]
const chooseProducts = ["T-SHIRT (Cotton)", "T-SHIRT (Blended)", "HOODIE",
]

const FontPicker = dynamic(() => import("font-picker-react"), {
    ssr: false,
})



const Canvas = () => {


    const inputFileRef = useRef(null)
    const canvasRef = useRef(null)
    const divToImageRef = useRef(null);
    const fontAPI = 'AIzaSyAZ0YPUkF0oXOhdK3J6EnfSqXZEDHOXQ_g'
    const [FrontBackSelected, setFrontBackSelected] = useState('FRONT');

    // Check for current tshirt color which is showing is uploaded or not
    const [checkUpload, setcheckUpload] = useState(false)
    const [upload_Spinner, setupload_Spinner] = useState(false)





    const { colorModalVisible, setcolorModalVisible, priorityColorModalVidible, setpriorityColorModalVidible, PreviewMode, setPreviewMode, canvas, setcanvas, setcanvasDivRef, selectedColourIndex, setselectedColourIndex, selectedTshirtsForUpload, setselectedTshirtsForUpload, uploadedArts, setuploadedArts, setcategorySelected, categorySelected, setcolours, colours, setproductDescription } = useContext(MerchContext);


    useEffect(() => {

        let canvasss = new fabric.Canvas('myCanvas', {
            width: 333,
            height: 406,
        })
        canvasss.renderAll()
        setcanvas(canvasss)
        setcanvasDivRef(divToImageRef)
        return () => canvasss.dispose();


    }, []);




    const slideRight = () => {

        if (selectedColourIndex !== colours.length - 1) {
            setselectedColourIndex(selectedColourIndex + 1)
            checkUploaded(selectedColourIndex + 1)
        } else {
            setselectedColourIndex(0)
            checkUploaded(0)
        }
    }

    const slideLeft = () => {
        if (selectedColourIndex !== 0) {
            setselectedColourIndex(selectedColourIndex - 1)
            checkUploaded(selectedColourIndex - 1)
        } else {
            setselectedColourIndex(colours.length - 1)
            checkUploaded(colours.length - 1)
        }
    }

    const checkUploaded = (pos) => {
        let Matched = false
        selectedTshirtsForUpload.filter(obj => {
            if (obj.name === colours[pos].name) {
                Matched = true
            }
        })
        if (Matched) {
            setcheckUpload(true)
        } else {
            setcheckUpload(false)
        }

    }

    const uploadShowingTshirt = async () => {
        setupload_Spinner(true)

        canvas.discardActiveObject();
        canvas.renderAll();
        setPreviewMode(true)

        const dataUrl = await htmlToImage.toPng(divToImageRef.current);

        let obj = { name: colours[selectedColourIndex].name, hexcode: colours[selectedColourIndex].hexcode, imageData: dataUrl, side: FrontBackSelected }
        setselectedTshirtsForUpload([...selectedTshirtsForUpload, obj]);
        setcheckUpload(true)
        setupload_Spinner(false)

    }
    const removeUploadImage = async () => {
        setupload_Spinner(true)
        let Matched = false
        let indexx = null
        selectedTshirtsForUpload.filter((obj, i) => {
            if (obj.name === colours[selectedColourIndex].name) {
                Matched = true
                indexx = i
            }
        })
        if (Matched) {
            selectedTshirtsForUpload.splice(indexx, 1);
            setselectedTshirtsForUpload(selectedTshirtsForUpload);
            setcheckUpload(false)
        }
        setupload_Spinner(false)
    }


    //Canvas
    const uploadFile = (e) => {

        setuploadedArts([...uploadedArts, e.target.files[0]])
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

        console.log(e.target.files[0]);
        reader.readAsDataURL(e.target.files[0])

    }

    const removeSelectedItem = () => {
        if (typeof canvas.getActiveObject() === "undefined") {
            toast.error('Select any item to remove!')
        }

        if (canvas.getActiveObject() === null) {
            toast.error('Select any item to remove!')
        }

        canvas.remove(canvas.getActiveObject());
    }

    const resetCanvas = () => {
        canvas.clear();
        var json = canvas.toJSON();
        canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
    }

    const changeProductCategory = (e) => {

        setcategorySelected(e.target.value)
        setselectedColourIndex(0)

        if (e.target.value === "T-SHIRT (Cotton)") {
            setcolours(tshirtscotton)
            setproductDescription(description_tshirtCotton)
        }
        if (e.target.value === "T-SHIRT (Blended)") {
            setcolours(tshirtsblendedcotton)
            setproductDescription(description_tshirtBlended)
        }
        if (e.target.value === "HOODIE") {
            setcolours(hoodies)
            setproductDescription(description_hoodies)
        }
    }


    return (

        <div className='lg:flex lg:justify-around  items-start 2xl:items-start 2xl:justify-start  lg:pt-4 2xl:mt-0'>



            {/* This is for small screen only  */}
            <div className='lg:hidden sm:w-4/5 md:w-3/5  xl:w-[480px]  mx-auto flex items-start justify-between '>
                <div>
                    <h2 className='text-[12px] font-inter text-[#323232]'>Choose Product</h2>

                    <select className='mt-[8px] w-[170px] min-h-[30px] text-[10px] font-inter rounded-xl text-[#323232] border-[1px] border-[#E5E5E5] p-2  outline-none' value={categorySelected} onChange={changeProductCategory}>
                        {chooseProducts.map(item => {
                            return (
                                <option className='font-inter text-[#323232] text-[10px] my-4' key={item} value={item} >{item}</option>
                            )
                        })}

                    </select>

                </div>
                <div className=''>

                    <h2 className='text-[12px] font-inter text-[#323232]'>Product Colours</h2>



                    <div onClick={() => { setcolorModalVisible(true) }} className='border-[1px] border-[#E5E5E5]  rounded-xl px-2 py-[3px]  flex items-center justify-between mt-[8px] w-[170px] cursor-pointer'>
                        <span className='w-[24px] h-[24px] rounded-full' style={{ backgroundColor: colours[selectedColourIndex].hexcode }}></span>
                        <h2 className='font-inter text-[#323232] text-[10px]'>{colours[selectedColourIndex].name.replace("_", " ")}</h2>
                        <ChevronRightIcon className='h-[18px] text-[#323232]' />
                    </div>

                    <h2 className='font-inter text-[10px] mt-[6px] text-[#323232]'>(16 Product Colour Selected)</h2>

                    {/* Make background darker */}
                    <div className={`bg-black bg-opacity-40 fixed inset-0 z-20  ${colorModalVisible ? "" : "hidden"} `} />
                    <ColorModal />

                </div>


            </div>


            {/* CANVAS  */}
            <div className='sm:w-4/5 md:w-3/5 lg:w-fit   mx-auto  '>



                <div className='flex flex-col items-center justify-around lg:justify-start'>


                    <div className='grid lg:grid-cols-2 grid-cols-3 sm:px-6 lg:px-0  items-center justify-between mt-6 lg:mt-2   w-full'>
                        <button onClick={() => { setFrontBackSelected("FRONT") }} className={` h-[28px] lg:h-[40px] lg:pt-[8px] lg:px-[50px] lg:pb-[10px] lg:text-[18px] ${FrontBackSelected === 'FRONT' ? "bg-[#54BAB9] text-[#FFFFFF]" : ""} text-[12px] font-inter  rounded-[4px] cursor-pointer`}>FRONT</button>

                        <button onClick={() => { setFrontBackSelected("BACK") }} className={` h-[28px] lg:h-[40px] lg:pt-[8px] lg:px-[50px] lg:pb-[10px] lg:text-[18px] ${FrontBackSelected === 'BACK' ? "bg-[#54BAB9] text-[#FFFFFF]" : ""} text-[12px] font-inter rounded-[4px] cursor-pointer`}>BACK</button>

                        <label className='lg:hidden ml-1  h-[28px] text-center pt-1.5  bg-[#54BAB9] text-[12px] font-inter text-[#FFFFFF] rounded-[4px] ' htmlFor='uploader'>UPLOAD</label>
                        <input id='uploader' ref={inputFileRef} onChange={uploadFile} type="file" className="hidden" />
                    </div>




                    <div className='flex items-center justify-center mt-4 lg:mt-6 '>
                        <div onClick={slideLeft} className=' my-auto cursor-pointer rounded-xl h-[406px] flex items-center '>
                            <ChevronLeftIcon className='h-[35px] text-black select-none' />
                        </div>

                        <div>
                            {/* Canvas playground */}
                            <div ref={divToImageRef} className={`select-none mx-auto flex items-center justify-center  relative w-fit  ${PreviewMode ? "pointer-events-none" : ""}`}>


                                <img className='h-[406px] w-[333px] object-contain' src={`./../creator/${categorySelected.includes("T-SHIRT") ? "tshirts" : "hoodies"}/${FrontBackSelected === 'FRONT' ? colours[selectedColourIndex].frontURL : colours[selectedColourIndex].backURL}.png`} />


                                <div className={` ${!PreviewMode ? "border-[1px] border-gray-400" : ""} rounded-lg  z-10 absolute `}>
                                    <canvas
                                        ref={canvasRef}
                                        id="myCanvas"
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 gap-4 my-1'>

                                {upload_Spinner &&
                                    <div className="flex justify-center mt-2 ">
                                        <BeatLoader loading size={10} color={'green'} />
                                    </div>
                                }
                                {!checkUpload &&
                                    <button onClick={uploadShowingTshirt} className={`text-center bg-[#54BAB9] hover:bg-[#409695] text-white px-4 py-2 rounded font-inter text-[12px] ${upload_Spinner ? "hidden" : "even:"}`}>Upload this T-shirt</button>
                                }
                                {checkUpload &&
                                    <button onClick={removeUploadImage} className={`text-center bg-[#54BAB9] hover:bg-[#409695] text-white px-4 py-2 rounded font-inter text-[12px] ${upload_Spinner ? "hidden" : "even:"}`}>Remove Uploaded</button>}
                            </div>
                        </div>

                        <div onClick={slideRight} className='my-auto cursor-pointer rounded-xl h-[406px] flex items-center '>
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
            <div className=' hidden 2xl:ml-[100px] lg:flex items-start justify-start flex-col lg:w-fit lg:mx-auto'>


                {/* Upload Art  */}
                <div className='w-full'>
                    <h2 className='text-[14px] font-inter mb-1'>Upload Art</h2>
                    <label className='px-[90px] py-1.5  h-[28px] text-center  bg-[#54BAB9] text-[14px] font-inter text-[#FFFFFF] rounded-[4px] ' htmlFor='uploader'>UPLOAD</label>
                    <input id='uploader' ref={inputFileRef} onChange={uploadFile} type="file" className="hidden" />

                </div>


                <div className='mt-8'>
                    <h2 className='text-[15px] font-inter text-[#323232] ml-1'>Choose Product</h2>

                    <select className='mt-[4px] w-[240px] 
                     text-[10px] lg:text-[13px] font-inter rounded-xl text-[#323232] border-[1px] border-[#E5E5E5] p-2  outline-none' value={categorySelected} onChange={changeProductCategory}>



                        {chooseProducts.map(item => {
                            return (
                                <option className='font-inter text-[#323232] text-[12px] my-4  lg:my-6' key={item} value={item} >{item}</option>
                            )
                        })}

                    </select>

                </div>

                <div className='mt-2 flex items-start flex-col justify-start '>

                    <h2 className='lg:text-[15px] font-inter text-[#323232] mt-4 ml-1'>Product Colours</h2>



                    <div onClick={() => { setcolorModalVisible(true) }} className='border-[1px] border-[#E5E5E5]  rounded-xl px-2 py-[3px]  flex items-center justify-between mt-[4px] cursor-pointer scale-110 ml-2 w-[222px]'>
                        <span className='w-[24px] h-[24px] rounded-full' style={{ backgroundColor: colours[selectedColourIndex].hexcode }}></span>
                        <h2 className='font-inter text-[#323232] text-[12px]'>{colours[selectedColourIndex].name.replace("_", " ")}</h2>
                        <ChevronRightIcon className='h-[18px] text-[#323232]' />
                    </div>

                    <h2 className='font-inter text-[12px] mt-[6px] text-[#323232]'>(16 Product Colour Selected)</h2>

                    {/* Make background darker */}
                    <div className={`bg-black bg-opacity-40 fixed inset-0 z-20  ${colorModalVisible ? "" : "hidden"} `} />
                    <ColorModal />

                </div>



                <div className='my-10 space-y-3 flex flex-col items-start  w-full'>
                    <button onClick={removeSelectedItem} className='w-[240px] hover:text-white hover:bg-[#54BAB9] text-[12px] font-inter border-[1px] border-[#54BAB9] rounded-[5px] py-[7px] px-[10px] lg:text-[15px]'>Remove Seleted</button>
                    <button onClick={resetCanvas} className='w-[240px] hover:text-white hover:bg-[#54BAB9] text-[12px] lg:text-[15px] font-inter border-[1px] border-[#54BAB9] rounded-[5px] py-[7px] px-[10px]'>Clear All</button>
                </div>

                {selectedTshirtsForUpload.length !== 0 &&

                    <div className=''>
                        <p className='text-[12px] font-inter  text-[#323232] w-[250px]'>A product colour that will be prioritised & will be showed in
                            front page.</p>

                        <h2 className='mt-2 text-[16px] font-inter font-medium text-[#323232] ml-1 '>Priority Colour</h2>
                        <div onClick={() => {
                            if (selectedTshirtsForUpload.length === 0) {
                                toast.error('Upload alteast two colors to set the priority'); return
                            }
                            setpriorityColorModalVidible(true)
                        }} className='border-[1px] border-[#E5E5E5]  rounded-xl px-2 py-[3px]  flex items-center justify-between mt-[4px] w-[222px] cursor-pointer scale-110 ml-2'>
                            <span className='w-[24px] h-[24px] rounded-full' style={{ backgroundColor: selectedTshirtsForUpload[0].hexcode }}></span>
                            <h2 className='font-inter text-[#323232] text-[12px]'>{selectedTshirtsForUpload[0].name}</h2>
                            <ChevronRightIcon className='h-[18px] text-[#323232]' />
                        </div>

                        {/* Make background darker */}
                        <div className={`bg-black bg-opacity-40 fixed inset-0 z-20  ${priorityColorModalVidible ? "" : "hidden"} `} />
                        <PriorityColorModal />

                    </div>
                }
            </div>



            {/* This is just for small screens  Proirity Modal*/}
            {selectedTshirtsForUpload.length != 0 &&

                <div className={` mt-[20px] lg:hidden sm:w-4/5 md:w-3/5 mx-auto`}>
                    <p className='text-[10px] font-inter  text-[#323232] '>A product colour that will be prioritised & will be showed in
                        front page.</p>
                    <h2 className='my-[8px] text-[12px] font-inter font-medium text-[#323232] ml-1'>Priority Colour</h2>

                    <div onClick={() => {
                        if (selectedTshirtsForUpload.length === 0) {
                            toast.error('Upload alteast two colors to set the priority'); return
                        }
                        setpriorityColorModalVidible(true)
                    }} className='border-[1px] border-[#E5E5E5]  rounded-xl px-2 py-[3px]  flex items-center justify-between mt-[8px] w-[170px] cursor-pointer'>
                        <span className='w-[24px] h-[24px] rounded-full' style={{ backgroundColor: selectedTshirtsForUpload[0].hexcode }}></span>
                        <h2 className='font-inter text-[#323232] text-[10px]'>{selectedTshirtsForUpload[0].name}</h2>
                        <ChevronRightIcon className='h-[18px] text-[#323232]' />
                    </div>
                    {/* Make background darker */}
                    <div className={`bg-black bg-opacity-40 fixed inset-0 z-20  ${priorityColorModalVidible ? "" : "hidden"} `} />
                    <PriorityColorModal />

                </div>
            }
        </div>

    )
};
export default Canvas;