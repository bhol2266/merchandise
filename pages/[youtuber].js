import React, { useContext, useEffect, useState } from 'react'
import { Footer } from '../components/footer'
import { Itemlist } from '../components/Itemlist'
import { Navigation } from '../components/Navigation'
import { QueryG } from '../lib/serverConfig'
import Router, { useRouter } from 'next/router'
import videosContext from '../context/videos/videosContext'

function Youtuber({ youtuber, banner, logo, productlist, productid, youtuberNotFound }) {
    const router = useRouter();

    const pages = ['1', '2', '3', '4', '5', '6', '7']
    const { setyoutuberLogo } = useContext(videosContext);

    useEffect(() => {
        setyoutuberLogo(logo)
    }, [])

    return (
        <div>
            {!youtuberNotFound && <div>
                <img src={banner} className='cursor-pointer w-full h-48  px-[12px] lg:px-[50px] rounded   md:hidden mt-[15px]'></img>
                <img src={banner} className='cursor-pointer w-full h-[330px] px-[12px]  lg:px-[50px]   rounded hidden md:flex mt-[25px]'></img>


                {productlist &&
                    <div className='sm:px-[12px] xs:px-[20px] px-[10px] lg:px-[50px]'>
                        <Itemlist items={productlist} productid={productid} />
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
            }
            {youtuberNotFound && <div>

                <h1 className='text-[20px] font-inter w-full h-full my-[200px] text-center'>Youtuber not found....</h1>
            </div>}


        </div>
    )
}
export default Youtuber


export async function getServerSideProps(context) {

    const { youtuber } = context.query;

    var banner = ""
    var logo = ""
    var productlist = []
    var productid = ''
    var youtuberNotFound = null
    await QueryG(`query
    {
      youtuber(name:"${youtuber}"){
        id
        name
        logo
        banner{
          id
          image
        }
        productsSet{
          edges{
            node{
                id
              title
              price
              mrp
              discount
              description
              colors{
                id
                color
                image{
                  image
                }
              }
            }
          }
        }
      }
    }`)
        .then(res => {
            logo = "https://closm.com/media/" + res.data.data.youtuber[0].logo
            banner = "https://closm.com/" + res.data.data.youtuber[0].banner[0].image
            productid = res.data.data.youtuber[0].productsSet.edges[0].node.id
            res.data.data.youtuber[0].productsSet.edges.map(product => {
                productlist.push(product)
            })

        })
        .catch(err => {
            console.log(err);
            youtuberNotFound = true
        })
    return {
        props: {
            youtuber: youtuber,
            banner: banner,
            logo: logo,
            productid: productid,
            productlist: productlist,
            youtuberNotFound: youtuberNotFound
        }, // will be passed to the page component as props
    }
}
