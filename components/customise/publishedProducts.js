import React, { useState } from 'react'
import PublishedItem from './PublishedItem';


const items = [
  {
    id: '1',
    title: "Jet Black Half Sleeve T-Shirt",
    price: 499,
    mrp: 799,
    discount: 30,
    description: "The product will be an excellent pick for you. It ensures an easy maintenance.",
    img: "item1"
  },
  {
    id: '2',
    title: "Jet Black Half Sleeve T-Shirt",
    price: 499,
    mrp: 799,
    discount: 30,
    description: "The product will be an excellent pick for you. It ensures an easy maintenance.",
    img: "item3"
  },
  {
    id: '3',
    title: "Jet Black Half Sleeve T-Shirt",
    price: 499,
    mrp: 799,
    discount: 30,
    description: "The product will be an excellent pick for you. It ensures an easy maintenance.",
    img: "item2"
  },
  {
    id: '4',
    title: "Jet Black Half Sleeve T-Shirt",
    price: 499,
    mrp: 799,
    discount: 30,
    description: "The product will be an excellent pick for you. It ensures an easy maintenance.",
    img: "item4"
  },
  {
    id: '5',
    title: "Jet Black Half Sleeve T-Shirt",
    price: 499,
    mrp: 799,
    discount: 30,
    description: "The product will be an excellent pick for you. It ensures an easy maintenance.",
    img: "item3"
  },
  {
    id: '6',
    title: "Jet Black Half Sleeve T-Shirt",
    price: 499,
    mrp: 799,
    discount: 30,
    description: "The product will be an excellent pick for you. It ensures an easy maintenance.",
    img: "item3"
  },

]

const PublishedProducts = () => {

  const [termsCondition, settermsCondition] = useState(false)

  const saveChangesBtnClick = () => {

  }

  return (
    <div>
      <div className='flex justify-start  space-y-6 lg:space-y-12 flex-col '>
        {items.map(obj => {
          return (
            <PublishedItem key={obj.id} data={obj} />
          )
        })}
      </div>

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


    </div>
  )
};
export default PublishedProducts;