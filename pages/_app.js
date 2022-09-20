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



function MyApp({ Component, pageProps }) {

  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();

  })
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
  })







  return (
    <>

      {/* <Head>
        <title>Merchandise &amp; Sex Movies - Porno, XXX, Porn Tube | Chutlunds</title>
        <meta name="description" content="Generated by create next app" />
        <meta name='asg_verification' content='vVcWCcbbgmnqv221hpAjPojb' />
        <meta name="exoclick-site-verification" content="6b1112fe173bdf782d96975e70bd4b95"></meta>
        <meta name="description" content="Watch more than 5 million Porn Videos on xHamster for free. Stream new XXX tube movies online, browse sex photos, date girls to fuck at !" />
        <meta name="description" content="Chutlunds is the world’s leading free porn site. Choose from millions of hardcore videos that stream quickly and in high quality, including amazing VR Porn. The largest adult site on the Internet just keeps getting better. We have more pornstars and real amateurs than anyone else. It’s fast, it’s free, it’s Chutlunds!" />

        <meta name="hilltopads-site-verification" content="28c33bbf5c61164c74b2bdfcc2ff1d44bc9c45b5" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
        <Script src="https://unpkg.com/fabric@5.2.1/dist/fabric.min.js" strategy="beforeInteractive" />

      <GlobalStates>
        <Navigation   />
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
