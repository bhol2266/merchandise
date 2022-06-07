import React, { useEffect, useState } from 'react'
import { Footer } from '../components/footer'
import { Itemlist } from '../components/Itemlist'
import { Navigation } from '../components/Navigation'
import { QueryG } from '../lib/serverConfig'
import Router, { useRouter } from 'next/router'

function Youtuber({ story_details }) {

    const router = useRouter();
    const { youtuber } = router.query;




    const pages = ['1', '2', '3', '4', '5', '6', '7']
    const [items, setitems] = useState([])




    useEffect(() => {
        QueryG(`query{
            products{
              edges{
              node{
                title
                 image{
                  imageName
                  image
                } 
                price
                mrp
                discount
              }
              }
            }
          }`)
            .then(res => {
                setitems(res.data.data.products.edges)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <img src='./youtuber_assets/youtuber_banner.png' className='cursor-pointer w-full  px-[12px] lg:px-[50px] rounded   md:hidden mt-[15px]'></img>
            <img src='./youtuber_assets/youtuber_banner_wide.png' className='cursor-pointer w-full px-[12px]  lg:px-[50px]   rounded hidden md:flex mt-[25px]'></img>


            {items &&
                <div className='sm:px-[12px] xs:px-[20px] px-[10px] lg:px-[50px]'>
                    <Itemlist items={items} />
                </div>
            }

            <div className='flex space-x-3 my-16 items-center justify-around w-3/4 lg:w-1/2 mx-auto'>
                {pages.map(page => {
                    return (
                        <>
                            <h1 className={`w-[30px] h-[30px] text-center rounded-full text-[18px] font-manrope bg-[#E9E9E9] text-[#313131]  ${page == '1' ? 'bg-theme text-whitte' : ''}`} key={page}>{page}</h1>
                        </>
                    )
                })}
            </div>


        </div>
    )
}
export default Youtuber
