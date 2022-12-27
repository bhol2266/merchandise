import { Menu, Transition } from '@headlessui/react'
import { Fragment, useContext, useEffect, useState } from 'react'
import MerchContext from '../context/MerchContext'
import { GetToken, GetEmail } from '../lib/CookieLib'
import { setCookies, getCookie } from "cookies-next";
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/outline'


import { removeCookies } from 'cookies-next';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function LoginMenu() {

  const router = useRouter();
  const { loginSidebar, setloginSidebar } = useContext(MerchContext)
  const [loggedIn, setloggedIn] = useState(false)

  useEffect(() => {
    if (typeof getCookie('accessToken') !== 'undefined' && getCookie('accessToken').length > 20 && getCookie('role') === 'user') {
      setloggedIn(true)
    }
  }, [])


  const openLoginForm = () => {
    setloginSidebar(true)
  }

  const signOut = () => {
    setloggedIn(false)
    removeCookies('refreshToken');
    removeCookies('firstName');
    removeCookies('token');
    removeCookies('accessToken');
    removeCookies('email');
    removeCookies('name');

    window.location.reload()
    return

    if (window.location.href.includes('product')) {

    } else {
      router.push('/')
    }
  }



  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
        <Menu.Button className=" ">
          <img src='/homepageImages/profile.svg' className='cursor-pointer w-[23px] h-[22px] lg:w-[28px] lg:h-[26px] mt-1 '></img>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flex flex-col justify-start origin-top-right absolute -right-[50px] lg:-right-[125px] mt-3  w-[220px] pb-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">



          {!loggedIn &&
            <Menu.Item>
              <button onClick={openLoginForm} className='text-white w-[150px] h-[30px] text-[11px] font-inter px-[25px] py-[7px] bg-[#54BAB9] hover:bg-[#3f9897] rounded mt-[24px] mx-auto'>
                Sign In / Sign Up
              </button>
            </Menu.Item>
          }

          {loggedIn &&
            <h2 className='font-Opensans  text-[14px] cursor-pointer text-center text-theme font-semibold my-2'>{GetEmail()}</h2>
          }


          {loggedIn &&
            <Menu.Item>
              <button onClick={signOut} className='text-white w-[150px] h-[30px] text-[11px] font-inter px-[25px] py-[7px] bg-[#54BAB9] hover:bg-[#3f9897] rounded mt-[8px] mx-auto'>
                Sign Out
              </button>
            </Menu.Item>
          }

          <Menu.Item>
            <Link href='/policy'>

              <h2 className='cursor-pointer text-[11px] font-DMsans text-[#001857] w-fit mx-auto mb-28px mt-[14px]'>Need Help ?</h2>
            </Link>
          </Menu.Item>

          <div className=' flex flex-col justify-between  w-[220px]  mt-[25px]'>
            <Menu.Item as='div' className='w-full '>
              <Link href='/order'>
                <div className=' w-full  flex items-center space-x-5  hover:bg-gray-200 py-2 px-4'>
                  <ShoppingCartIcon className='w-[15px] h-[15px] lg:w-[18px] lg:h-[18px] text-gray-400' />
                  <h1 className='font-Opensans text-[#323232] text-[11px] lg:text-[15px] cursor-pointer'>Orders</h1>
                </div>
              </Link>
            </Menu.Item>

            <Menu.Item as='div'>
              <Link href='/wishlist'>
                <div className='w-full  flex items-center space-x-5  hover:bg-gray-200 py-2 px-4'>
                  {/* <img src='./homepageImages/heart2.png' className='w-[12px] h-[12px] lg:w-[16px] lg:h-[16px] '></img> */}
                  <HeartIcon className='w-[15px] h-[15px] lg:w-[18px] lg:h-[18px] text-gray-400' />
                  <h1 className='font-Opensans text-[#323232] text-[11px] lg:text-[15px] cursor-pointer'>Wishlist</h1>
                </div>
              </Link>
            </Menu.Item>
            {/* <Menu.Item as='div'>
              <div className='w-full  flex items-center space-x-5  hover:bg-gray-200 py-2 px-4'>
                <img src='./homepageImages/logout.png' className='w-[12px] h-[12px] lg:w-[16px] lg:h-[16px] '></img>
                <h1 className='font-Opensans text-[#323232] text-[11px] lg:text-[15px] cursor-pointer'>Log Out</h1>
              </div>
            </Menu.Item> */}
          </div>



        </Menu.Items>
      </Transition>
    </Menu>
  )
}
export default LoginMenu