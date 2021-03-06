
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPage from '../common/components/Landing'
import Camera from "../common/components/Camera";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(false);

  const changeState = () => {
    console.log(state);
    setState(!state);
  };

  return (
    <>
      <Head>
        <title>Sense</title>
        <meta
          name="description"
          content="An app that can give outfit recommendations to complete your wardrobe."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://kit.fontawesome.com/418d912079.js" crossOrigin="anonymous"></Script>
      {state ? <Camera /> : <LandingPage onClick={changeState} />}
    </>
  );
}
