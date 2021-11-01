import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPage from '../common/components/Landing'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sense</title>
        <meta name="description" content="An app that can give outfit recommendations to complete your wardrobe." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage /> 
      </>
  )
}

