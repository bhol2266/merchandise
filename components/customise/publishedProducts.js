import React, { useContext, useState } from 'react'
import PublishedItem from './PublishedItem';
import MerchContext from '../../context/MerchContext';



const PublishedProducts = () => {

  const { PriorityNumberModalVisible, creatorsProductList } = useContext(MerchContext);
  const [termsCondition, settermsCondition] = useState(false)

  const saveChangesBtnClick = () => {
    //if there is any changes to the creators productList we have to update to database 

  }

  return (
    <div>
      {/* Make background darker */}
      <div className={`bg-black bg-opacity-40 fixed inset-0 z-20  ${PriorityNumberModalVisible ? "" : "hidden"} `} />

      <div className='flex justify-start  space-y-6 lg:space-y-12 flex-col '>
        {creatorsProductList.map((obj, index) => {
          return (
            <PublishedItem key={obj.id} data={obj} length={creatorsProductList.length} currentIndex={index} />
          )
        })}
      </div>

      {creatorsProductList.length === 0 &&
        <h2 className='text-[18px] font-medium text-center font-inter my-32 mb-[500px]'>Empty Products!</h2>}

      {creatorsProductList.length !== 0 &&
        <div className='flex flex-col lg:flex-row items-center mx-2 mt-8 lg:mt-14 w-full justify-between'>

          <div className='flex items-centerjustify-between lg:justify-center'>

            <input required value={termsCondition} onChange={e => {
              settermsCondition(e.target.value)
            }} className='mr-2 lg:scale-125' type="checkbox" />


            <div className='flex flex-col lg:flex-row items-center justify-between w-full'>

              <div className='flex items-center flex-wrap space-x-1'>
                <h2 className='text-[#323232] font-inter font-medium text-[12px] lg:text-[14px] '>By Continuing, You Agree to Closm’s</h2>
                <h2 className='text-[#323232] font-inter font-medium text-[12px] lg:text-[14px]  underline cursor-pointer hover:text-red-500'>Terms of Use, </h2>
                <h2 className='text-[#323232] font-inter font-medium text-[12px] lg:text-[14px]  underline cursor-pointer hover:text-red-500'>Privacy Policy </h2>
                <h2 className='text-[#323232] font-inter font-medium text-[12px] lg:text-[14px]  underline cursor-pointer hover:text-red-500'>& Creators Agreement </h2>
              </div>
            </div>
          </div>

          <button onClick={saveChangesBtnClick} className='w-full sm:w-[300px] lg:w-[250px] mx-auto lg:mx-0   mt-4 lg:mt-0 font-Mont font-medium text-[12px] lg:text-[14px]  rounded-[5px] border-[1px] border-[#54BAB9] py-[10px] px-[15px] bg-[#54BAB9] text-white'>Save Changes</button>

        </div>
      }

    </div>
  )
};
export default PublishedProducts;