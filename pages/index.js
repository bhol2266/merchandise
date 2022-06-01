import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import { Footer } from '../components/footer'
import { Homepage } from '../components/Homepage'
import { LoginForm } from '../components/LoginForm'
import { SignUpForm } from '../components/SignUpForm'


export default function Home() {


  return (
    <div className='relative' >
      <Head>
        <title>Merchandise</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginForm />
      <SignUpForm />
      
      <Homepage />
      <div className=''>
        <Footer />
      </div>
    </div>
  )
}
