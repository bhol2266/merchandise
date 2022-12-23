import { XCircleIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import { useContext, useEffect, useState } from 'react';
import MerchContext from '../../../context/MerchContext';
import { ToastContainer, toast } from 'react-toastify';




const PriorityColorModal = () => {


    const { priorityColorModalVidible, setpriorityColorModalVidible, selectedTshirtsForUpload, setselectedTshirtsForUpload } = useContext(MerchContext);


    const setPrioityOnclick = index => {
        if (index === 0) {
            toast.info('Already in priority')
            return
        }
        let newArr = [...selectedTshirtsForUpload]; // copying the old datas array
        newArr.splice(index, 1)
        newArr.unshift(selectedTshirtsForUpload[index]);
        setselectedTshirtsForUpload(newArr);

    }

    return (

        <div className={`fixed  transition-transform duration-300 ease-out  z-20  w-[332px] lg:w-[370px] top-12 mx-auto left-0 right-0 ${priorityColorModalVidible ? 'animate-colorModal' : 'translate-y-[1500px]'}`}>

            <div className={`bg-white w-full  p-[20px] rounded-xl shadow-md`}>

                <h1 className='mb-5 font-inter text-[12px] lg:text-[16px]'>Select Product Colours that you want to display first</h1>

                <div className='grid grid-cols-2 gap-3'>
                    {selectedTshirtsForUpload.map((item, index) => {
                        return (
                            <div onClick={() => { setPrioityOnclick(index) }} className={` rounded-lg p-2 border-[1px] ${item.selected ? 'border-[#54BAB9]' : ''}  flex items-center justify-between  space-x-2 cursor-pointer `} key={item.name}>
                                <span className={`w-6 h-6 rounded-full lg:h-8 lg:w-8`} style={{ backgroundColor: item.hexcode }} ></span>
                                <h2 className='font-inter font-medium text-[#323232] text-[10px] lg:text-[12px] '>{item.name}</h2>
                                <ChevronRightIcon className=' text-[#323232] h-4 lg:h-6' />
                            </div>
                        )
                    })}
                </div>


                <button onClick={() => { setpriorityColorModalVidible(!priorityColorModalVidible) }} className={`lg:w-[260px] w-[232px] block mx-auto py-1.5 bg-[#54BAB9] text-[14px] lg:text-[16px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer mt-5`}>Confirm</button>

            </div>

        </div>


    )
};
export default PriorityColorModal;