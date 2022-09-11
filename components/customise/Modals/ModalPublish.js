import { XCircleIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import { useContext, useEffect, useState } from 'react';
import MerchContext from '../../../context/MerchContext';
import { publishTshirtsDesign, uploadSingleImage, uploadImageBase64 } from '../../../lib/Creator_API'
import Cookies from 'js-cookie'
import { BeatLoader } from 'react-spinners';



const ModalPublish = () => {


    const { ModalPublishVisible, setModalPublishVisible, selectedTshirtsForUpload, uploadedArts, publishData } = useContext(MerchContext);


    const [beatLoader, setbeatLoader] = useState(false);


    const confirmClick = async () => {
        setbeatLoader(true)

        try {
            //first upload art image file and get url
            let art_url = ''
            const response = await uploadSingleImage(uploadedArts[0], 'art')
            if (response.sucess) {
                art_url = response.data.imageURL
            } else {
                alert(response.message)
                return
            }


            //Upload colors urls
            let colorsData = []

            for (let index = 0; index < selectedTshirtsForUpload.length; index++) {

                const response = await uploadImageBase64(selectedTshirtsForUpload[index].imageData, selectedTshirtsForUpload[index].name)
                if (response.sucess) {
                    colorsData.push({ name: selectedTshirtsForUpload[index].name, imageUrl: [response.data.imageURL] })
                } else {
                    alert(response.message)
                    return
                }

            }

            const data = { productName: publishData.productName, discountPrice: publishData.discountPrice, mrp: publishData.mrp, productDescription: publishData.productDescription, category: 'T-Shirt', artUrl: art_url, size: ["S", "M", "L", "XL"], color: colorsData, creatorName: Cookies.get('name'), publishStatus: false }


            const response2 = await publishTshirtsDesign(data)
            if (response2.sucess) {
                setbeatLoader(false)
                alert('T-Shirts Published')
            } else {
                alert(response2.message)
                setbeatLoader(false)
                return
            }



        } catch (error) {
            alert(error)
            setbeatLoader(false)
            return
        }

        setModalPublishVisible(!ModalPublishVisible);

    }

    return (
        <div className={`fixed flex justify-center items-center inset-0 z-30 ${ModalPublishVisible ? "" : "hidden"} `}>

            <div className={`bg-white w-4/5 lg:w-2/4 p-[20px] rounded-xl shadow-md `}>

                <h1 className='mb-5 font-inter text-[12px] text-center'>Designs for Uploading</h1>

                <div className='flex items-center flex-wrap justify-around'>
                    {selectedTshirtsForUpload.map(obj => {
                        return (
                            <div key={obj.imageData} className=''>
                                <img src={obj.imageData} className='h-[100px] sm:h-[150px] md:h-[180px] 2xl:h-[220px] object-contain' alt="" />
                            </div>
                        )
                    })}
                </div>



                <div className='flex items-center justify-center '>

                    {!beatLoader &&

                        <button onClick={confirmClick} className={` w-[132px] lg:w-[232px] block mx-auto py-1.5 bg-[#54BAB9] text-[14px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer mt-5`}>Confirm</button>
                    }


                    {beatLoader &&
                        <div className="flex justify-end space-x-3 items-center mt-3 px-6 py-3 lg:px-8">
                            <h2 className='font-inter text-sm'>Publishing T-Shirts...</h2>
                            <BeatLoader loading size={10} color={'#54BAB9'} />
                        </div>
                    }
                    {!beatLoader &&
                        <button onClick={() => {
                            setModalPublishVisible(!ModalPublishVisible);
                        }} className={` w-[132px] lg:w-[232px] block mx-auto py-1.5 bg-[#54BAB9] text-[14px] font-inter text-[#FFFFFF] rounded-[4px] cursor-pointer mt-5`}>Cancel</button>
                    }
                </div>


            </div>

        </div>


    )
};
export default ModalPublish;