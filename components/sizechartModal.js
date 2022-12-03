
import { useContext, useEffect, useState } from 'react';
import MerchContext from '../context/MerchContext';

const SizeChart = (props) => {

    const { SizeChartModalVisible, setSizeChartModalVisible } = useContext(MerchContext);

    console.log(setSizeChartModalVisible);

    return (

        <div className={`fixed flex justify-center items-center inset-0 z-30 ${SizeChartModalVisible ? "" : "hidden"} `}>

            <img src='/sizechart.png' className='object-contain w-4/5 sm:w-3/5 lg:w-2/5 xl:w-2/5 rounded-xl' />
            <button onClick={() => { setSizeChartModalVisible(false) }} className='bg-theme text-white px-4 py-1 font-inter text-[12px] lg:text-[16px] rounded'>Close</button>

        </div>


    )
};
export default SizeChart;