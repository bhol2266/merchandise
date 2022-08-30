import { XCircleIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import { useContext, useEffect, useState } from 'react';
import MerchContext from '../../../context/MerchContext';



const PriorityNumberModal = (props) => {


    const length = props.length;


    let numberArray = []
    for (let indexx = 1; indexx <= length; indexx++) {
        numberArray.push(indexx - 1)
    }

    const { PriorityNumberModalVisible, setPriorityNumberModalVisible, currentIndex, setcurrentIndex, creatorsProductList, setcreatorsProductList } = useContext(MerchContext);


    const [activeNumber, setactiveNumber] = useState(null);


    const numberClick = (toIndex) => {
        setactiveNumber(toIndex)

    }


    const confirmClick = () => {

        setPriorityNumberModalVisible(!PriorityNumberModalVisible);

        if (currentIndex === activeNumber) {
            setactiveNumber(null);
            return
        }

        setcurrentIndex(activeNumber)

        var element = creatorsProductList[currentIndex];
        creatorsProductList.splice(currentIndex, 1);
        creatorsProductList.splice(activeNumber, 0, element);
        setcreatorsProductList(creatorsProductList)
    }




    return (

        <div className={`fixed flex justify-center items-center inset-0 z-30 ${PriorityNumberModalVisible ? "" : "hidden"} `}>

            <div className={`bg-white w-4/5 lg:w-2/4 p-[20px] rounded-xl shadow-md `}>

                <h1 className='mb-5 font-inter text-[14px] text-center font-medium'>Customize orders & which product will be showed first</h1>

                <div className='flex items-center flex-wrap justify-around'>


                    {numberArray.map((number) => {

                        return (

                            <div className='flex flex-col items-center justify-center' key={number}>

                                <h2 onClick={() => { numberClick(number) }} className={`cursor-pointer text-gray-500 flex items-center justify-around m-2 text-[16px] font-inter rounded-[15px] p-2 px-4 ${activeNumber === number ? "bg-[#54BAB9] text-[#ffffff] " : " "}  ${currentIndex === number ? "border-[2px] border-[#54BAB9] font-semibold text-black" : ""}`} >{number + 1}</h2>
                                <h3 className='font-inter text-[12px] font-semibold'>{currentIndex === number ? 'From' : ''}</h3>
                                <h3 className='font-inter text-[12px] font-semibold'>{activeNumber === number ? 'To' : ''}</h3>

                            </div>
                        )
                    })}
                </div>


                <div className='flex items-center justify-around'>

                    <button onClick={() => {
                        setPriorityNumberModalVisible(!PriorityNumberModalVisible); setactiveNumber(null);
                    }} className={` w-[132px] lg:w-[232px] block mx-auto py-1.5 bg-[#54BAB9] text-[14px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer mt-5`}>Cancel</button>

                    <button onClick={() => {
                        confirmClick()
                    }} className={` w-[132px] lg:w-[232px] block mx-auto py-1.5 bg-[#54BAB9] text-[14px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer mt-5`}>Confirm</button>


                </div>



            </div>

        </div>


    )
};
export default PriorityNumberModal;