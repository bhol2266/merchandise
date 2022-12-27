import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { Footer } from '../components/footer'
import { Homepage } from '../components/Homepage'
import MerchContext from '../context/MerchContext'
import { setCookies, getCookie, deleteCookie } from "cookies-next";
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import Script from 'next/script'
import { ToastContainer, toast } from 'react-toastify';


export default function Home({ type }) {


  const { setAlertcloseTimer, Alert_Message, Alert_Type, setNavbarUserORcreator } = useContext(MerchContext)


  const router = useRouter()


  useEffect(() => {
    setNavbarUserORcreator('user')

  }, []);



  return (
    <div className='relative' >
      <Head>
        <title>Merchandise</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>




      <Homepage />



    </div>
  )
}
export async function getServerSideProps({ req, res }) {

  let role = getCookie("role", { req, res });
  let lastRoute = getCookie("lastRoute", { req, res });

  if (typeof role !== 'undefined' && role === 'creator') {
    // return { redirect: { destination: "/dashboard" } };
    return {
      props: {
      }
    };

  } else {
    res.setHeader(
      "Set-Cookie", [
      `lastRoute=deleted; Max-Age=0`,]
    );
    if (typeof lastRoute !== 'undefined') {
      return { redirect: { destination: lastRoute } };

    }

    return {
      props: {
      }
    };
  }


}
