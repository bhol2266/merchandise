import { defaults } from 'autoprefixer'
import React, { useState } from 'react'
const chooseProducts = ["MEN T-SHIRT", "MEN SHIRT", "MEN HOODIE", "MEN LONG SLEEVE TSHIRT", "WOMEN T-SHIRT", "WOMEN SHIRT", "BOTTLE", "KIDS", "MUGS"
]


const Customise = () => {


    const [chooseProduct, setchooseProduct] = useState('')

    return (
        <div className='mx-[14px] lg:mx-[50px] my-[15px]'>

            <div>
                {/* Images Slidebar */}
            </div>


            <div className='flex items-center justify-around'>
                <div>
                    <h2 className='text-[12px] font-inter'>CHOOSE PRODUCT</h2>

                    <select className='mt-[8px] w-[170px] min-h-[30px] text-[10px] font-inter rounded-xl text-[#323232] border-[1px] border-[#E5E5E5] p-2  outline-none' value={chooseProduct} onChange={e => setchooseProduct(e.target.value)}>



                        {chooseProducts.map(item => {
                            return (
                                <option className=' text-[12px] my-4' key={item} value={item} >{item}</option>
                            )
                        })}

                    </select>

                </div>
                <div>
                    <h2 className='text-[12px] font-inter'>CHOOSE PRODUCT</h2>

                    <select className='mt-[8px] w-[170px] min-h-[30px] text-[10px] font-inter rounded-xl text-[#323232] border-[1px] border-[#E5E5E5] p-2  outline-none' value={chooseProduct} onChange={e => setchooseProduct(e.target.value)}>



                        {chooseProducts.map(item => {
                            return (
                                <option className=' text-[12px] my-4' key={item} value={item} >{item}</option>
                            )
                        })}

                    </select>

                </div>
            </div>


        </div>
    )
}


export default Customise