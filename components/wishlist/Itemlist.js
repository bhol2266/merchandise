import React from 'react'
import { Item } from './item'



export const Itemlist = ({ items }) => {

    return (
        <div className=''>

            < div className='gap-4 lg:gap-8  grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5' >                {
                items.slice(0, 5).map(obj => {
                    return (
                        <Item key={obj.title} obj={obj} />
                    )
                })
            }
            </div >
        </div>


    )
}
