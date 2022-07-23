
import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'

import Script from 'next/script';

const Canvas = () => {

    const inputFileRef = useRef(null)
    const canvasRef = useRef(null)
    const contextRef = useRef(null)


    const [previewImage, setpreviewImage] = useState('');

    //This is to disable uplu
    const [imageUploadedinCanvas, setimageUploadedinCanvas] = useState(null);
    const [dragabble, setdragabble] = useState(false);
    const [currentXPositionIMG, setcurrentXPositionIMG] = useState(0);
    const [currentYPositionIMG, setcurrentYPositionIMG] = useState(0);
    const [imgWidth, setimgWidth] = useState(null);
    const [imgHeight, setimgHeight] = useState(null);


    useEffect(() => {

        // h-[220px] w-[155px] 

        const canvas = canvasRef.current;
        canvas.width = 150 * 2;
        canvas.height = 220 * 2;
        canvas.style.width = `150px`
        canvas.style.height = `220px`

        const context = canvas.getContext('2d');

        //these are for the pencil color, width
        context.scale(2, 2)
        context.lineCap = 'round'
        context.strokeStyle = 'black'
        context.lineWidth = 1
        contextRef.current = context;
    }, []);

    const [FrontBackSelected, setFrontBackSelected] = useState('FRONT');


    const uploadFile = (e) => {
        setimageUploadedinCanvas(e.target.files[0])
        const reader = new FileReader()
        const img = new Image()
        reader.onload = () => {
            img.onload = () => {
                let w = 100;
                let nw = img.naturalWidth;
                let nh = img.naturalHeight;
                let aspect = nw / nh
                let h = w / aspect

                contextRef.current.drawImage(img, currentXPositionIMG, currentYPositionIMG, w, h)
                setimgWidth(w)
                setimgHeight(h)
            }
            img.src = reader.result
        }
        reader.readAsDataURL(e.target.files[0])

    }






    const downloadCavasImage = () => {
        const image = canvasRef.current.toDataURL()
        setpreviewImage(image);
    }

    const resetCanvas = () => {
        contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        setimageUploadedinCanvas(null)
    }
    const onMouseUp = (e) => {
        setdragabble(false)
    }

    const onMouseDown = ({ nativeEvent }) => {
        if ((nativeEvent.layerX <= (currentXPositionIMG + imgWidth) && nativeEvent.layerX >= (currentXPositionIMG - imgWidth)) && (nativeEvent.layerY <= (currentYPositionIMG + imgHeight) && nativeEvent.layerY >= (currentYPositionIMG - imgHeight))) {
            setdragabble(true)
        } else {
        }

    }
    const onMouseOut = (e) => {
        setdragabble(false)

    }
    const onMouseMove = ({ nativeEvent }) => {
        if (dragabble && imageUploadedinCanvas) {
            setcurrentXPositionIMG(nativeEvent.layerX)
            setcurrentYPositionIMG(nativeEvent.layerY)
            const reader = new FileReader()
            const img = new Image()
            reader.onload = () => {
                img.onload = () => {
                    let w = 100;
                    let nw = img.naturalWidth;
                    let nh = img.naturalHeight;
                    let aspect = nw / nh
                    let h = w / aspect

                    contextRef.current.drawImage(img, currentXPositionIMG, currentYPositionIMG, w, h)
                    setimgWidth(w)
                    setimgHeight(h)
                }
                img.src = reader.result
            }
            reader.readAsDataURL(imageUploadedinCanvas)

        }
    }

    return (
        <div>
            <Script src="https://unpkg.com/fabric@5.2.1/dist/fabric.min.js" strategy="beforeInteractive" />


            <div className='flex items-center justify-between mt-6 mx-2'>
                <button onClick={() => { setFrontBackSelected("FRONT") }} className={`w-[98px] h-[28px] ${FrontBackSelected === 'FRONT' ? "bg-[#54BAB9] text-[#FFFFFF]" : ""} text-[12px] font-inter  rounded-[4px] cursor-pointer`}>FRONT</button>
                <button onClick={() => { setFrontBackSelected("BACK") }} className={`w-[98px] h-[28px] ${FrontBackSelected === 'BACK' ? "bg-[#54BAB9] text-[#FFFFFF]" : ""} text-[12px] font-inter rounded-[4px] cursor-pointer`}>BACK</button>

                <label className='pt-1.5 pl-2 w-[98px] h-[28px] bg-[#54BAB9] text-[12px] font-inter text-[#FFFFFF] rounded-[4px] ' htmlFor='uploader'>Upload Image</label>
                <input id='uploader' ref={inputFileRef} onChange={uploadFile} type="file" className="hidden" />
            </div>


            {/* Canvas playground */}
            <div className='flex items-center justify-center mt-[20px] relative'>
                <img className='w-[331px] h-[406px]  p-[10px]' src={`./canvas/${FrontBackSelected === 'FRONT' ? "front" : "back"}.png`} ></img>
                <canvas
                    ref={canvasRef}
                    id="myCanvas"
                    className=' border-[1px] border-gray-400 rounded-lg absolute left-0 right-0 mx-auto'
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseOut={onMouseOut}
                    onMouseMove={onMouseMove}
                />
            </div>



            <div className='flex items-center justify-center mt-[20px] space-x-3'>
                <button onClick={resetCanvas} className={` w-[250px] py-1.5 bg-[#54BAB9] text-[14px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer`}>Clear Edits</button>
                <button onClick={downloadCavasImage} className={` w-[250px] py-1.5 bg-[#54BAB9] text-[14px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer`}>PROCEED TO OVERVIEW</button>
            </div>


            <img src={previewImage} className={`${previewImage.length === 0 ? "hidden" : ""}  h-[100px] w-[100px] m-4`} />

        </div>)
};
export default Canvas;