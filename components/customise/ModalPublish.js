import { XCircleIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import { useContext, useEffect, useState } from 'react';
import MerchContext from '../../context/MerchContext';




const ModalPublish = () => {


    const { ModalPublishVisible, setModalPublishVisible, selectedTshirtsForUpload } = useContext(MerchContext);


    console.log(selectedTshirtsForUpload);

    return (

        <div className={`fixed flex justify-center items-center inset-0 z-30 ${ModalPublishVisible ? "" : "hidden"} `}>

            <div className={`bg-white w-4/5 lg:w-2/4 p-[20px] rounded-xl shadow-md `}>

                <h1 className='mb-5 font-inter text-[12px] text-center'>Designs for Uploading</h1>

                <div className='flex items-center flex-wrap justify-around'>
                    {selectedTshirtsForUpload.map(obj => {
                        return (
                            <div key={obj.imageData} className=''>
                                <img src={obj.imageData} className='h-[100px] sm:h-[120px] md:h-[150px] lg:h-[200px] object-contain' alt="" />
                            </div>
                        )
                    })}
                </div>




                <button onClick={() => {
                    setModalPublishVisible(!ModalPublishVisible); alert('Images uploaded to database')
                }} className={` w-[232px] block mx-auto py-1.5 bg-[#54BAB9] text-[14px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer mt-5`}>Confirm</button>

            </div>

        </div>


    )
};
export default ModalPublish;