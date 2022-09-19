import React from 'react'
import { Item } from './item'



export const Itemlist = ({ items }) => {

    return (
        <div className=''>

            < div className='gap-8 lg:gap-10 2xl:gap-12  grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5' >                {
                items.map(obj => {
                    return (
                        <Item key={obj.title} obj={obj}  />
                    )
                })
            }
            </div >
        </div>


    )
}
