import Script from 'next/script'



const Canvas = () => {
    return (

        <div>
            {/* <Script type="application/javascript" src='../fabric.js' /> */}
            <img className='w-[331px] h-[406px]  p-[10px]' src={`./canvas/FRONT.png`} ></img>

            <canvas id="myCanvas" width="500" height="500" className='border-2 border-gray-500' />
        </div>
    )
};
export default Canvas;