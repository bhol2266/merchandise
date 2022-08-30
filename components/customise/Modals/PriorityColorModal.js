import { XCircleIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import { useContext, useEffect, useState } from 'react';
import MerchContext from '../../../context/MerchContext';




const PriorityColorModal = () => {


    const { modalVisible, setmodalVisible, colours, setcolours, loginSidebar } = useContext(MerchContext);

    const updateFieldChanged = index => {
        let newArr = [...colours]; // copying the old datas array
        if (newArr[index].selected) {
            newArr[index].selected = false;
        } else {
            newArr[index].selected = true;
        }
        setcolours(newArr);
    }

    return (

        <div className={`fixed  transition-transform duration-300 ease-out  z-20 w-[332px] lg:w-[350px] mx-auto  left-0 right-0 ${modalVisible ? 'animate-colorModal' : 'translate-y-[700px] '}`}>

            <div className={`bg-white w-full  p-[20px] rounded-xl shadow-md`}>

                <h1 className='mb-5 font-inter text-[12px]'>Select Product Colours that you want to publish</h1>

                <div className='grid grid-cols-2 gap-3'>
                    {colours.map((item, index) => {
                        return (
                            <div onClick={() => { updateFieldChanged(index) }} className={` rounded-lg p-2 border-[1px] ${item.selected ? 'border-[#54BAB9]' : ''}  flex items-center justify-center  space-x-2 cursor-pointer `} key={item.name}>
                                <span className={`w-6 h-6 rounded-full `} style={{ backgroundColor: item.hexcode }} ></span>
                                <h2 className='font-inter font-medium text-[#323232] text-[10px]'>Preview</h2>
                                <ChevronRightIcon className=' text-[#323232] h-4' />
                            </div>
                        )
                    })}
                </div>




                <button onClick={() => { setmodalVisible(!modalVisible) }} className={` w-[232px] block mx-auto py-1.5 bg-[#54BAB9] text-[14px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer mt-5`}>Confirm</button>

            </div>

        </div>


    )
};
export default PriorityColorModal;