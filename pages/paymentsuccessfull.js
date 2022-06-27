import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Paymentsuccessfull = () => {

    const router = useRouter()


    useEffect(() => {
     
    }, []);


    return (
        <div className='w-full h-screen flex flex-col items-center justify-start  mt-8 '>
            <h1 className='font-inter text-[20px]'>Payment Sucessfully!</h1>
            <h1 className='font-inter text-[16px]'>Order Placed</h1>
            <Link href='/order'>
                <button className='text-white w-[150px] h-[30px] text-[11px] font-inter px-[25px] py-[7px] bg-[#54BAB9] hover:bg-[#3f9897] rounded mt-[24px] mx-auto'>Go to Orders Page</button>
            </Link>

            <Link href='/'>
                <button className='text-white w-[150px] h-[30px] text-[11px] font-inter px-[25px] py-[7px] bg-[#54BAB9] hover:bg-[#3f9897] rounded mt-[24px] mx-auto'>Go to Home Page</button>
            </Link>
        </div>
    )
}
export default Paymentsuccessfull