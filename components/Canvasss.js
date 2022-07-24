import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'


import Script from 'next/script';





const Canvasss = () => {
    const inputFileRef = useRef(null)
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    let canvas = null
    const [FrontBackSelected, setFrontBackSelected] = useState('FRONT');
    const [imageUploadedinCanvas, setimageUploadedinCanvas] = useState(null);



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
        var text = new fabric.Text('GeeksforGeeks', {
            fill: 'green'
        });

        canvas.add(text);

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



        </div>
    )
};
export default Canvasss;