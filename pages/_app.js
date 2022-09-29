import '../styles/globals.css'
import NProgress from 'nprogress'
import '../styles/globals.css'
import '../styles/nProgress.css'
import Router from 'next/router'
import Head from 'next/head'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/footer'
import { LoginForm } from '../components/LoginForm'
import { SignUpForm } from '../components/SignUpForm'
import { SignUpFormOTP } from '../components/SignUpFormOTP'
import GlobalStates from '../context/globalStates'
import MerchContext from '../context/MerchContext'
import { useContext } from 'react'
import Script from 'next/script'
import { CreatorNavbar } from '../components/CreatorNavBar'



function MyApp({ Component, pageProps }) {

  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();

  })
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
  })







  return (
    <>


        <Script src="https://unpkg.com/fabric@5.2.1/dist/fabric.min.js" strategy="beforeInteractive" />

      <GlobalStates>
        <Navigation   />
        <CreatorNavbar/>
        <LoginForm />
        <SignUpForm />
        <SignUpFormOTP />

        <Component {...pageProps} />
        <Footer />
      </GlobalStates>
    </>
  )
}

export default MyApp
