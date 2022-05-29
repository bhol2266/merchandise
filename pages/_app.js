import '../styles/globals.css'
import NProgress from 'nprogress'
import VideoState from '../context/videos/VideoState'
import '../styles/globals.css'
import '../styles/nProgress.css'
import Router from 'next/router'

function MyApp({ Component, pageProps }) {

  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();

  })
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
  })

  return <Component {...pageProps} />
}

export default MyApp
