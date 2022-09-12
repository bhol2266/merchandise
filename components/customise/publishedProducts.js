import React, { useContext, useEffect, useState } from 'react'
import PublishedItem from './PublishedItem';
import MerchContext from '../../context/MerchContext';
import { getPublishedProducts, putPublishedProducts, deletePublishedProducts } from '../../lib/Creator_API';
import { BeatLoader } from 'react-spinners';


const PublishedProducts = () => {

  const { PriorityNumberModalVisible, setcreatorsProductList, creatorsProductList, Edited, setEdited } = useContext(MerchContext);
  const [termsCondition, settermsCondition] = useState(false)

  const [dataFetched, setdataFetched] = useState(false);



  const saveChangesBtnClick = async () => {
    //if there is any changes to the creators productList we have to update to database 

    if (!Edited) {
      alert('No changes made')
      return
    }

    if (Edited) {

      if (!termsCondition) {
        alert('Please Accept Terms and Conditions')
        return
      }
      try {
        for (let index = 0; index < creatorsProductList.length; index++) {
          const data =
          {
            productId: creatorsProductList[index].product_id,
            productName: creatorsProductList[index].productName,
            discountPrice: creatorsProductList[index].discountPrice,
            mrp: creatorsProductList[index].mrp,
            productDescription: creatorsProductList[index].productDescription,
            publishStatus: creatorsProductList[index].publishStatus,
          }


          const response = await putPublishedProducts(data)

          if (response.success) {
            console.log(response, index);
          } else {
            alert(response.message)
          }

        }
        alert("Data Updated")
        setEdited(false)

      } catch (error) {
        alert(error)
        return
      }
    }
  }

  useEffect(async () => {

    try {
      const response = await getPublishedProducts()

      if (response.success) {
        const productArray = response.data.products
        let array = []
        productArray.forEach(obj => {
          array.push({
            product_id: obj._id,
            productName: obj.productName,
            productDescription: obj.productDescription,
            img: obj.color,
            mrp: obj.mrp,
            price: obj.mrp - obj.discountPrice,
            discountPrice: obj.discountPrice,
            category: obj.category,
            publishStatus: obj.publishStatus,
            artUrl: obj.artUrl,
            size: obj.size,

          })
        });

        setcreatorsProductList(array)
        setdataFetched(true)
      } else {
        setdataFetched(true)
        console.log(response)
      }
    } catch (error) {
      alert(error)
      return
    }
  }, []);

  if (dataFetched && creatorsProductList.length === 0) {
    return (
      <h1 className='font-inter text-lg w-screen h-screen text-center mt-[200px]'>No products published...</h1>
    )
  }


  if (creatorsProductList.length > 0) {
    return (
      <div>
        {/* Make background darker */}
        <div className={`bg-black bg-opacity-40 fixed inset-0 z-20  ${PriorityNumberModalVisible ? "" : "hidden"} `} />

        <div className='flex justify-start  space-y-6 lg:space-y-12 flex-col '>
          {creatorsProductList !== null && creatorsProductList.map((obj, index) => {
            return (
              <PublishedItem key={obj.product_id} data={obj} length={creatorsProductList.length} currentIndex={index} />
            )
          })}
        </div>


        {creatorsProductList === null &&
          <h2 className='text-[18px] font-medium text-center font-inter my-32 mb-[500px]'>Empty Products!</h2>}


        {/* Terms and Condition  */}

        {creatorsProductList.length > 0 &&
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
  }
  else {
    return (
      <div className="flex justify-center items-center w-full h-[500px] mt-3 ">
        <BeatLoader loading size={20} color={'#54BAB9'} />
      </div>
    )
  }

};
export default PublishedProducts;