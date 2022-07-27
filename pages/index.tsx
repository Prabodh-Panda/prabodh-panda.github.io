import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRef } from 'react'
import Header from '../components/Header'

import DeveloperAnimation from '../animations/developer.json'

const Home: NextPage = () => {
  
  const lottieRef = useRef(null)

  return (
    <div className={styles.container}>
      <Head>
        <title>Prabodh Panda | Full Stack Developer</title>
        <meta name="description" content="Prabodh Panda | Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header lottieAnimationData={DeveloperAnimation}>
        <h2>Prabodh Panda, Full Stack Developer</h2>
        <h1>
          Web Technologies Enthusiast who specializes in creating premium, component based UIs in React
        </h1>
      </Header>
    </div>
  )
}

export default Home