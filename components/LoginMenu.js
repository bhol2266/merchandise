import { Menu, Transition } from '@headlessui/react'
import { Fragment, useContext } from 'react'
import videosContext from '../context/videos/videosContext'
import { GetToken, GetEmail } from '../lib/CookieLib'
import { removeCookies } from 'cookies-next';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function LoginMenu() {


  const { loginSidebar, setloginSidebar, loggedIn, setloggedIn } = useContext(videosContext)


  const openLoginForm = () => {
    setloginSidebar(true)
  }

  const signOut = () => {
    setloggedIn(false)
    removeCookies('refreshToken');
    removeCookies('firstName');
    removeCookies('token');
    removeCookies('sessionid');
    removeCookies('email');
    removeCookies('lastName');
    removeCookies('csrftoken');
    removeCookies('sessionid');
    window.location.reload();
  }



  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=" ">
          <img src='./homepageImages/account.png' className='cursor-pointer w-[20px] h-[20px] mt-1'></img>
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
        <Menu.Items className="flex flex-col justify-start origin-top-right absolute -right-[50px] lg:-right-[125px] mt-3  w-[220px] h-[270px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">



          {!loggedIn &&
            <Menu.Item>
              <button onClick={openLoginForm} className='text-white w-[150px] h-[30px] text-[11px] font-inter px-[25px] py-[7px] bg-[#54BAB9] hover:bg-[#3f9897] rounded mt-[24px] mx-auto'>
                Sign In / Sign Up
              </button>
            </Menu.Item>
          }

          {loggedIn &&
            <h2 className='font-Opensans  text-[14px] hover:text-red-500 cursor-pointer text-center text-red-500 my-2'>{GetEmail()}</h2>
          }


          {loggedIn &&
            <Menu.Item>
              <button onClick={signOut} className='text-white w-[150px] h-[30px] text-[11px] font-inter px-[25px] py-[7px] bg-[#54BAB9] hover:bg-[#3f9897] rounded mt-[8px] mx-auto'>
                Sign Out
              </button>
            </Menu.Item>
          }

          <Menu.Item>
            <h2 className='cursor-pointer hover:text-red-500 text-[11px] font-DMsans text-[#001857] w-fit mx-auto mb-28px mt-[14px]'>Need Help ?</h2>
          </Menu.Item>

          <div className='flex flex-col justify-between ml-6 w-[74px] h-[113px] mt-[35px]'>
            <Menu.Item as='div' className=''>
              <div className='w-full  flex items-center space-x-5 '>
                <img src='./homepageImages/buy.png' className='w-[12px] h-[12px] '></img>
                <h1 className='font-Opensans text-[#323232] text-[11px] hover:text-red-500 cursor-pointer'>Orders</h1>
              </div>
            </Menu.Item>
            <Menu.Item as='div'>
              <div className='w-full  flex items-center space-x-5 '>
                <img src='./homepageImages/heart.png' className='w-[12px] h-[12px] '></img>
                <h1 className='font-Opensans text-[#323232] text-[11px] hover:text-red-500 cursor-pointer'>Wishlist</h1>
              </div>
            </Menu.Item>
            <Menu.Item as='div'>
              <div className='w-full  flex items-center space-x-5 '>
                <img src='./homepageImages/logout.png' className='w-[12px] h-[12px] '></img>
                <h1 className='font-Opensans text-[#323232] text-[11px] hover:text-red-500 cursor-pointer'>Log Out</h1>
              </div>
            </Menu.Item>
          </div>



        </Menu.Items>
      </Transition>
    </Menu>
  )
}
export default LoginMenu