import Link from "next/link";
import { ArrowRightIcon } from '@heroicons/react/solid'
import { useState } from "react";
import TableIRow from "../../components/customise/TableIRow";




const rowData = [
    {

        No: '1',
        Parameter: 'Bank AC :565656568998888',
        Status: 'Processed',
        Date: '12/03/2021',
        amountRequested: '454556',
        amountProcessed: '454556 ',
    },
    {

        No: '1',
        Parameter: 'Bank AC :565656568998888',
        Status: 'Processed',
        Date: '12/03/2021',
        amountRequested: '454556',
        amountProcessed: '454556 ',
    },
    {

        No: '1',
        Parameter: 'Bank AC :565656568998888',
        Status: 'Processed',
        Date: '12/03/2021',
        amountRequested: '454556',
        amountProcessed: '454556 ',
    },
    {

        No: '1',
        Parameter: 'Bank AC :565656568998888',
        Status: 'Processed',
        Date: '12/03/2021',
        amountRequested: '454556',
        amountProcessed: '454556 ',
    },
    {

        No: '1',
        Parameter: 'Bank AC :565656568998888',
        Status: 'Processed',
        Date: '12/03/2021',
        amountRequested: '454556',
        amountProcessed: '454556 ',
    },
    {

        No: '1',
        Parameter: 'Bank AC :565656568998888',
        Status: 'Processed',
        Date: '12/03/2021',
        amountRequested: '454556',
        amountProcessed: '454556 ',
    },


]




const Earnings = () => {

    const totalBalance = '75000'
    const totalItemsSold = '5842'
    const accountNumber = '58d42'
    const accountName = '584f2'
    const IFSC = '5842'
    const UPI_ID = 'dsafsadf@upi'


    const [WithdrawAmount, setWithdrawAmount] = useState('');


    return (

        <div className='mx-[14px] lg:mx-[30px] xl:mx-[50px] 2xl:mx-[80px] my-[15px] mb-16 '>

            <h2 className=" font-inter  text-[14px] lg:text-[22px] text-[#323232] text-left mt-[1px] font-medium">ACCOUNT</h2>

            <div className="lg:flex-row flex flex-col justify-center items-center lg:justify-around">

                <div className="p-[30px]  flex flex-col justify-between  h-[275px] lg:h-[350px] 2xl:h-[300px] sm:w-[470px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px]  items-start">

                    <div className="flex items-center justify-between">

                        <div>
                            <h2 className="font-inter font-medium text-[12px] lg:text-[14px] text-[#323232] text-left mt-[1px]">Track Your Earnings</h2>

                            <h2 className="pr-4 lg:pr-1 font-inter text-[10px] lg:text-[13px] text-[#6C6C6C] text-left mt-[5px]">Track your Profit , Charges &
                                Withdraw Amount to your Bank Account</h2>




                        </div>
                        <img className="h-[65px] w-[65px] mx-4" src="./../creator/dashboard/money.png" alt="img" />
                    </div>

                    <div className="">

                        <h2 className="font-inter text-[10px] lg:text-[14px] text-[#323232] text-left mt-[20px]">Total Revenue</h2>
                        <h2 className="font-inter text-[14px]  lg:text-[20px] text-[#323232] text-left mt-[5px]">₹{totalBalance}</h2>
                    </div>

                    <div className="">

                        <h2 className="font-inter text-[10px] lg:text-[14px] text-[#323232] text-left mt-[20px]">Total Profit</h2>
                        <h2 className="font-inter text-[14px]  lg:text-[20px] text-[#323232] text-left mt-[5px]">₹{totalBalance}</h2>
                    </div>


                    <div className="">

                        <h2 className="font-inter text-[10px] lg:text-[14px] text-[#323232] text-left mt-[20px]">Total Closm Charges</h2>
                        <h2 className="font-inter text-[14px]  lg:text-[20px] text-[#323232] text-left mt-[5px]">₹{totalBalance}</h2>
                    </div>






                </div>


                <div className="p-[30px]  flex flex-col justify-between  h-[275px] lg:h-[350px] 2xl:h-[300px] sm:w-[470px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px]  items-start mt-6 lg:mt-0">

                    <div className="flex items-center justify-between">

                        <div>
                            <h2 className="font-inter font-medium text-[12px] lg:text-[14px] text-[#323232] text-left mt-[1px]">Withdraw Amount</h2>

                            <h2 className="pr-4 lg:pr-1 font-inter text-[10px] lg:text-[13px] text-[#6C6C6C] text-left mt-[5px]">Amount can be withdrawn after 30 days
                                after return window is closed</h2>

                        </div>
                        <img className="h-[65px] w-[65px] mx-4" src="./../creator/dashboard/computer.png" alt="img" />
                    </div>

                    <div className="flex items-center justify-start space-x-12">
                        <div className="">

                            <h2 className="font-inter text-[10px] lg:text-[14px] text-[#323232] text-left mt-[20px]">Withdrawable Balance</h2>
                            <h2 className="font-inter text-[14px]  lg:text-[20px] text-[#323232] text-left mt-[5px]">₹{totalBalance}</h2>
                        </div>

                        <div className="">

                            <h2 className="font-inter text-[10px] lg:text-[14px] text-[#323232] text-left mt-[20px]">Pending Balance</h2>
                            <h2 className="font-inter text-[14px]  lg:text-[20px] text-[#323232] text-left mt-[5px]">₹{totalBalance}</h2>
                        </div>
                    </div>

                    <div className="">

                        <h2 className="font-inter text-[10px] lg:text-[14px] text-[#323232] text-left mt-[20px]">Total Closm Charges</h2>
                        <h2 className="font-inter text-[14px]  lg:text-[20px] text-[#323232] text-left mt-[5px]">₹{totalBalance}</h2>
                    </div>


                    <div>
                        <h2 className="font-inter text-[10px] lg:text-[16px] text-[#323232] text-left mt-[30px] underline cursor-pointer">Change Bank Account</h2>
                        <h2 className="font-inter text-[10px] lg:text-[16px] text-[#323232] text-left mt-[5px] underline cursor-pointer">Change UPI ID</h2>

                    </div>





                </div>


                <div className="p-[30px]  flex flex-col justify-between  h-[275px] lg:h-[350px] 2xl:h-[300px] sm:w-[470px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px]  items-start mt-6 lg:mt-0 space-y-6">

                    <div className="flex items-center justify-start space-x-8 lg:space-x-12">

                        <input type='radio' id="radio" name="radio" className="scale-125 lg:scale-150" />
                        <div className="flex flex-col items-start justify-center space-y-1 lg:space-y-2">
                            <h2 className="font-inter font-medium text-[10px] lg:text-[14px] text-[#323232] text-left ">Primary Bank Account</h2>

                            <h2 className="font-inter text-[10px] lg:text-[12px] text-[#323232] text-left ">AC No : {accountNumber}</h2>


                            <h2 className="font-inter text-[10px] lg:text-[12px] text-[#323232] text-left ">IFSC :{IFSC}</h2>

                            <h2 className="font-inter text-[10px] lg:text-[12px] text-[#323232] text-left ">AC Holder :{accountName}</h2>



                        </div>

                    </div>

                    <div className="flex items-center justify-start space-x-8 lg:space-x-12">

                        <input type='radio' id="radio" name="radio" className="scale-125 lg:scale-150" />
                        <div className="flex flex-col items-start justify-center space-y-1 lg:space-y-2">
                            <h2 className="font-inter font-medium text-[10px] lg:text-[14px] text-[#323232] text-left ">Primary UPI ID</h2>


                            <h2 className="font-inter text-[10px] lg:text-[12px] text-[#323232] text-left ">{UPI_ID}</h2>

                        </div>

                    </div>



                    <div className="">
                        <div className="flex items-end space-x-3">

                            <div>
                                <label className='mt-4 block font-inter text-[#323232] text-[12px] lg:text-[15px] font-medium mb-[5px] ml-1'>INR Amount</label>
                                <input required className='border-[1px] py-[10px] px-[10px] font-inter text-[10px] lg:text-[15px] lg:p-[12px] placeholder:text-gray-400 border-[#AAAAAA] outline-none  rounded w-full' value={WithdrawAmount} onChange={(e) => { setWithdrawAmount(e.target.value) }} id='WithdrawAmount' name='WithdrawAmount' placeholder='456' type='number' />
                            </div>

                            <button className='flex items-center justify-center space-x-2 lg:mr-2  px-4 py-[10px] lg:py-[12px] font-inter text-[10px] lg:text-[15px] text-white rounded-[5px] bg-[#54BAB9]'>
                                Withdraw
                                <ArrowRightIcon className="h-4 lg:h-6 text-white ml-2" />
                            </button>

                        </div>

                        <h2 className="font-inter text-[10px]  lg:text-[14px] text-[#6C6C6C] text-left mt-[4px] lg:mt-3">Process may take 3 to 7 Business days</h2>
                    </div>


                </div>





            </div>



            {/* Table */}

            <div className="mt-12 lg:mt-[80px] xl:mt-[100px] 2xl:mt-[150px] space-y-3">

                <div className="grid gridClass pb-2  gap-2">
                    <h2 className=" font-inter  text-[10px] lg:text-[14px] text-[#323232] text-center mt-[1px] font-medium">No</h2>

                    <h2 className=" font-inter  text-[10px] lg:text-[14px] text-[#323232] text-center mt-[1px] font-medium">Parameter</h2>

                    <h2 className=" font-inter  text-[10px] lg:text-[14px] text-[#323232] text-center mt-[1px] font-medium">Status</h2>

                    <h2 className=" font-inter  text-[10px] lg:text-[14px] text-[#323232] text-center mt-[1px] font-medium">Date</h2>

                    <h2 className=" font-inter  text-[10px] lg:text-[14px] text-[#323232] text-center mt-[1px] font-medium">Amount Requested</h2>

                    <h2 className=" marker:font-inter  text-[10px] lg:text-[14px] text-[#323232] text-center mt-[1px] font-medium">Amount Processed</h2>
                </div>

                {rowData.map(data => {
                    return (
                        <TableIRow key={rowData.no} data={data} />
                    )
                })}

            </div>

        </div>

    )
};
export default Earnings;