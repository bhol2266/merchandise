import React, { useContext, useEffect, useState } from 'react'
import { OrderItem } from '../components/OrderItem'
import { ArrowDownIcon } from '@heroicons/react/outline'
import { FilterIcon } from '@heroicons/react/outline'
import { getOrderedItems, } from '../lib/serverConfig'
import { orderGet_API } from '../lib/Order_API'
import { BeatLoader } from 'react-spinners';
import { setCookies, getCookie } from "cookies-next";
import MerchContext from '../context/MerchContext'


const Order = ({ logInCheck }) => {

    const [OrderItems, setOrderItems] = useState([]);
    const [beatloader, setbeatloader] = useState(true);
    const { setloginSidebar } = useContext(MerchContext)

    const [lastFourYearArray, setlastFourYearArray] = useState();
    const [openFilter, setopenFilter] = useState(false);
    const [filterSelected, setfilterSelected] = useState('');

    async function fetchData() {
        try {
            const response = await orderGet_API()
            if (response.sucess) {
                setbeatloader(false)
                setOrderItems(response.data.orders)
            }
        } catch (error) {
            setbeatloader(false)
            console.log(error)
        }

      }

    useEffect( () => {
        var year = new Date().getFullYear()
        let array = []
        array.push(parseInt(year) - 3)
        array.push(parseInt(year) - 2)
        array.push(parseInt(year) - 1)
        array.push(parseInt(year))
        setlastFourYearArray(array)

        fetchData()
        
        if(!logInCheck){
            return
        }
      
    }, [])

    const saveFilter = () => {
        setopenFilter(!openFilter)
    }



    if (!logInCheck) {
        return (
            <div className='flex flex-col items-center justify-center mb-[500px]'>
                <h1 className="font-inter text-[22px] text-[#323232] w-full text-center mt-[200px] mb-4 ">Please Login First to see OrderItems</h1>

                <button onClick={() => {
                    setloginSidebar(true)
                }} className='font-inter text-[16px] font-medium px-6 py-2 bg-[#54BAB9] text-white rounded cursor-pointer'>Login</button>
            </div>
        )
    }

    if (beatloader) {
        return (
            <div className="flex justify-center items-center w-full h-[500px] mt-3 ">
                <BeatLoader loading size={20} color={'#54BAB9'} />
            </div>
        )
    }



    return (
        <div className='px-[14px] lg:px-[50px] py-[15px] select-none'>

            <div className='flex items-center space-x-[19px] item-center justify-between w-full  mb-[16px]'>
                <h2 className='text-[18px] lg:text-[22px] text-[#323232] font-inter '>ORDERS</h2>
                <div className='flex items-center space-x-[6px] cursor-pointer relative '>
                    <FilterIcon onClick={() => { setopenFilter(!openFilter) }} className='h-[20px] lg:h-[24px]' />
                    <h2 onClick={() => { setopenFilter(!openFilter) }} className='text-[14px] lg:text-[18px] text-[#323232] font-inter'>FILTER</h2>


                    {openFilter &&
                        <div className='absolute font-inter bg-white z-10 top-6 lg:top-8 right-4 py-4 px-4 shadow-lg w-[240px] border-[0.5px] border-gray-200 rounded drop-shadow-lg'>
                            <h2 className='whitespace-nowrap text-[14px] text-[#323232]'>Filter By Month / Year</h2>

                            <div className='grid grid-cols-2 gap-y-1 gap-x-2 w-full place-items-center  mt-3 border-[0.5px] border-gray-300 rounded-sm p-3 px-6'>
                                {lastFourYearArray.map(year => {
                                    return (
                                        <span onClick={() => { setfilterSelected(year) }} className={`text-[13px] text-[#323232] cursor-pointer py-1  border-[1px] rounded px-6 ${filterSelected === year ? "border-theme" : "border-white"}`}>{year}</span>
                                    )
                                })}

                            </div>

                            <button onClick={() => { setfilterSelected('3month') }} className={`w-full text-center py-[3px] rounded border-[1px]  text-[14px] mt-5 ${filterSelected ==='3month' ? "border-theme text-theme":"border-gray-200"}`}>Last 3 month</button>

                            <button onClick={() => { setfilterSelected('6month') }} className={`w-full text-center py-[3px] rounded border-[1px]  text-[14px] mt-3 ${filterSelected ==='6month' ? "border-theme text-theme":"border-gray-200"}`}>Last 6 month</button>


                            <button onClick={saveFilter} className={`w-full text-center py-1 rounded-md border-[1px] border-theme text-white text-[14px] mt-10 bg-theme`}>Save</button>
                        </div>
                    }
                </div>
            </div>


            <div className='flex  flex-wrap  items-center justify-between  xl:space-y-[40px] md:space-y-[40px] mb-8'>


                {OrderItems.map(obj => {
                    return (
                        <OrderItem key={obj._id} orderDetails={obj} />
                    )
                })}



            </div>
        </div>
    )
}

export default Order

export async function getServerSideProps({ req, res }) {

    let logInCheck = false


    const cookieExists = getCookie("role", { req, res });
    const accessToken = getCookie("accessToken", { req, res });


    if (cookieExists === 'user' && typeof accessToken !== 'undefined' && accessToken.length > 20) {
        logInCheck = true
    }

    return {
        props: {
            logInCheck: logInCheck

        },
    }



}



