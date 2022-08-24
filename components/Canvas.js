import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/solid'
import { HexColorPicker } from "react-colorful";
import * as htmlToImage from 'html-to-image';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'


import Script from 'next/script';
import dynamic from "next/dynamic";

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


    //Fabric text color
    const [color, setColor] = useState("#000000");



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


    return (
        <div>
            <Script src="https://unpkg.com/fabric@5.2.1/dist/fabric.min.js" strategy="beforeInteractive" />


            <div className='md:flex flex-row-reverse items-center justify-around'>

                <div className='lg:scale-125 xl:scale-150 xl:mr-[100px] md:mr-[50px]  sm:w-fit sm:mx-auto md:mx-0 mb-[20px]'>

                    <div className='grid grid-cols-3  md:flex-col items-center md:justify-between mt-6 mx-2'>
                        <button onClick={() => { setFrontBackSelected("FRONT") }} className={`w-[120px] h-[28px] ${FrontBackSelected === 'FRONT' ? "bg-[#54BAB9] text-[#FFFFFF]" : ""} text-[12px] font-inter  rounded-[4px] cursor-pointer`}>FRONT</button>
                        <button onClick={() => { setFrontBackSelected("BACK") }} className={`w-[120px] h-[28px] ${FrontBackSelected === 'BACK' ? "bg-[#54BAB9] text-[#FFFFFF]" : ""} text-[12px] font-inter rounded-[4px] cursor-pointer`}>BACK</button>

                        <label className='w-[120px] h-[28px] text-center pt-1.5  bg-[#54BAB9] text-[12px] font-inter text-[#FFFFFF] rounded-[4px] ' htmlFor='uploader'>UPLOAD</label>
                        <input id='uploader' ref={inputFileRef} onChange={uploadFile} type="file" className="hidden" />
                    </div>

                </div>



                <div className='flex items-center justify-center'>
                    <div className='cursor-pointer rounded-xl h-[406px] flex items-center hover:bg-gray-300'>
                        <ChevronLeftIcon className='h-[35px] text-black' />
                    </div>
                    {/* Canvas playground */}
                    <div className='md:scale-110 md:my-10  lg:scale-125 lg:my-16'>
                        <div ref={divToImageRef} className=' mx-auto flex items-center justify-center  relative w-fit '>
                            <img className='h-[406px] object-contain ' src={`./canvas/${FrontBackSelected === 'FRONT' ? "front" : "back"}.png`}  ></img>
                            <div className={` ${CanvasBorder ? "border-[1px] border-gray-400" : ""} rounded-lg  z-10 absolute `}>
                                <canvas
                                    ref={canvasRef}
                                    id="myCanvas"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='cursor-pointer rounded-xl h-[406px] flex items-center hover:bg-gray-300'>

                        <ChevronRightIcon className='h-[35px] text-black' />
                    </div>
                </div>


                <div className='grid grid-cols-2  space-x-2 md:space-x-0 md:space-y-2 md:flex-col items-center md:justify-between mt-6 mx-2'>
                    <button onClick={removeSelectedItem} className=' hover:text-white hover:bg-[#54BAB9] text-[12px] font-inter border-[1px] border-[#54BAB9] rounded-[5px] py-[7px] px-[10px]'>Remove Seleted</button>
                    <button onClick={resetCanvas} className=' hover:text-white hover:bg-[#54BAB9] text-[12px] font-inter border-[1px] border-[#54BAB9] rounded-[5px] py-[7px] px-[10px]'>Clear All</button>
                </div>


            </div>





            {/* <div className='flex items-center justify-center mt-[20px] space-x-3'>
                <button onClick={downloadCavasImage} className={` w-[250px] py-1.5 bg-[#54BAB9] text-[14px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer`}>Download</button>
                <button onClick={preview} className={` w-[250px] py-1.5 bg-[#54BAB9] text-[14px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer`}>{previewEditChanger ? "Edit" : "Preview"}</button>
            </div> */}






            {/* Add text modal */}
            {/* <div className={`${openAddtextModaal ? "" : "hidden"} fixed top-0 right-0 left-0 z-50  justify-center items-center flex `}>
                <div className="relative p-4 w-full sm:w-1/2 mx-16 md:w-1/3 lg:w-1/4">
                    <div className="relative rounded-lg shadow  bg-slate-200">


                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                            <svg onClick={() => { setopenAddtextModaal(false) }} aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className='mx-4 py-6'>

                            <div className="py-3 flex items-start flex-col">
                                <p className=' text-center text-[16px] font-poppins rounded-[4px] '>Add Text</p>
                                <input onChange={(e) => { setfabricText(e.target.value) }} style={{ color: color, fontFamily: activeFontFamily }} className=' rounded font-inter text-lg py-1  outline-none' placeholder='text....' type='text' id='text' />
                            </div>
                            <div className="py-3 flex items-start flex-col space-y-1">
                                <p className=' text-center text-[16px] font-inter rounded-[4px]'>Choose Font Style</p>

                                <FontPicker
                                    apiKey={fontAPI}
                                    activeFontFamily={activeFontFamily}
                                    onChange={(nextFont) =>
                                        setactiveFontFamily(nextFont.family)
                                    }
                                />
                            </div>

                            <div className="py-3 flex items-start flex-col space-y-1">
                                <p className=' text-center text-[16px] font-inter rounded-[4px]'>Choose Text Colour</p>
                                <HexColorPicker color={color} onChange={setColor} />
                                <p style={{ backgroundColor: color, color: color }} className={`w-[200px] text-center text-[16px] font-inter rounded-[4px]`}>{color}</p>
                            </div>


                            <button onClick={addText} className={`mx-auto block w-[150px] py-1 bg-[#54BAB9] text-[14px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer`}>Confirm</button>

                        </div>
                    </div>
                </div>
            </div> */}

          




        </div>
    )
};
export default Canvas;