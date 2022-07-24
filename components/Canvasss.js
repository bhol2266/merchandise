import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'
import { HexColorPicker } from "react-colorful";


import Script from 'next/script';
import dynamic from "next/dynamic";

const FontPicker = dynamic(() => import("font-picker-react"), {
    ssr: false,
})



const Canvasss = () => {
    let canvas = null

    const fontAPI = 'AIzaSyAZ0YPUkF0oXOhdK3J6EnfSqXZEDHOXQ_g'
    const inputFileRef = useRef(null)
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [FrontBackSelected, setFrontBackSelected] = useState('FRONT');
    const [imageUploadedinCanvas, setimageUploadedinCanvas] = useState(null);
    const [openAddtextModaal, setopenAddtextModaal] = useState(false);
    const [activeFontFamily, setactiveFontFamily] = useState('Arimo');

    console.log(activeFontFamily);

    //Fabric text color
    const [color, setColor] = useState("#000000");



    useEffect(() => {

        canvas = new fabric.Canvas('myCanvas', {
            width: 150,
            height: 230,
        })
        canvas.renderAll()
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





    const downloadCavasImage = () => {
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

    const addText = () => {
        setopenAddtextModaal(true)
        // var text = new fabric.Text('GeeksforGeeks', {
        //     fill: 'green'
        // });

        // canvas.add(text);

    }


    return (
        <div>
            <Script src="https://unpkg.com/fabric@5.2.1/dist/fabric.min.js" strategy="beforeInteractive" />


            <div className='sm:flex flex-row-reverse items-center justify-around md:mx-12 lg:mx-[150px]'>

                <div>

                    <div className='flex items-center justify-between mt-6 mx-2'>
                        <button onClick={() => { setFrontBackSelected("FRONT") }} className={`w-[98px] h-[28px] ${FrontBackSelected === 'FRONT' ? "bg-[#54BAB9] text-[#FFFFFF]" : ""} text-[12px] font-inter  rounded-[4px] cursor-pointer`}>FRONT</button>
                        <button onClick={() => { setFrontBackSelected("BACK") }} className={`w-[98px] h-[28px] ${FrontBackSelected === 'BACK' ? "bg-[#54BAB9] text-[#FFFFFF]" : ""} text-[12px] font-inter rounded-[4px] cursor-pointer`}>BACK</button>

                        <label className='w-[110px] h-[28px] text-center pt-1.5  bg-[#54BAB9] text-[12px] font-inter text-[#FFFFFF] rounded-[4px] ' htmlFor='uploader'>UPLOAD IMAGE</label>
                        <input id='uploader' ref={inputFileRef} onChange={uploadFile} type="file" className="hidden" />
                    </div>

                    <div className='flex items-center justify-between mt-6 mx-2'>
                        <button onClick={addText} className='w-[78px] h-[28px] bg-[#54BAB9] text-[12px] font-inter text-[#FFFFFF] rounded-[4px] '>Add Text</button>
                        <button onClick={removeSelectedItem} className='w-[140px] h-[28px] bg-[#54BAB9] text-[12px] font-inter text-[#FFFFFF] rounded-[4px] '>Remove Seleted Item</button>
                        <button onClick={resetCanvas} className='w-[98px] h-[28px] bg-[#54BAB9] text-[12px] font-inter text-[#FFFFFF] rounded-[4px] '>Clear All</button>
                    </div>
                </div>



                {/* Canvas playground */}
                <div className='mx-auto lg:mr-auto lg:ml-10 md:ml-5'>
                    <div className='flex  items-center justify-center mt-[20px] relative w-[331px] h-[406px]  lg:scale-150 md:scale-125 lg:my-24 md:my-12'>
                        <img className='-z-50 absolute h-full   p-[10px]' src={`./canvas/${FrontBackSelected === 'FRONT' ? "front" : "back"}.png`} ></img>
                        <canvas
                            ref={canvasRef}
                            id="myCanvas"
                            className='border-[1px] border-gray-400 rounded-lg  '
                        />
                    </div>
                </div>

            </div>




            <div className='flex items-center justify-center mt-[20px] space-x-3'>
                <button onClick={downloadCavasImage} className={` w-[250px] py-1.5 bg-[#54BAB9] text-[14px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer`}>PROCEED TO OVERVIEW</button>
            </div>




            {/* Add text modal */}
            <div className={`${openAddtextModaal ? "" : "hidden"} fixed top-0 right-0 left-0 z-50  justify-center items-center flex `}>
                <div className="relative p-4 w-full">
                    <div className="relative rounded-lg shadow dark:bg-gray-700 bg-slate-200">


                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                            <svg onClick={() => { setopenAddtextModaal(false) }} aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className='mx-4 py-6'>

                            <div className="py-3 flex items-start flex-col">
                                <p className=' text-center text-[16px] font-poppins rounded-[4px] '>Add Text</p>
                                <input style={{ color: color, fontFamily: activeFontFamily }} className=' rounded font-inter text-lg py-1  outline-none' placeholder='text....' type='text' id='text' />
                            </div>

                            <div className="py-3 flex items-start flex-col space-y-1">
                                <p className=' text-center text-[16px] font-inter rounded-[4px]'>Choose Text Colour</p>
                                <HexColorPicker color={color} onChange={setColor} />
                                <p style={{ backgroundColor: color, color: color }} className={`w-[200px] text-center text-[16px] font-inter rounded-[4px]`}>{color}</p>
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

                            <button onClick={downloadCavasImage} className={`mx-auto block w-[150px] py-1 bg-[#54BAB9] text-[14px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer`}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
};
export default Canvasss;