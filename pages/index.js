import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import { Footer } from '../components/footer'
import { Homepage } from '../components/Homepage'
import { QueryG } from '../lib/serverConfig'
import { apiip } from '../lib/serverConfig';



export default function Home() {


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


// export async function getServerSideProps() {

//   QueryG(`query{
//     products{
//       edges{
//       node{
//         title
//          image{
//           imageName
//           image
//         } 
//         price
//         mrp
//         discount
//       }
//       }
//     }
//   }`)
//     .then(res => {
//       console.log(JSON.stringify(res.data));
//     })
//     .catch(err => {
//       console.log(err);
//     })

//   return {
//     props: {
//       products: res.data
//     }, // will be passed to the page component as props
//   }
// }
