import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

import DeveloperAnimation from '../animations/developer.json'
import Button from '../components/Button'
import Section from '../components/Section'

const Home: NextPage = () => {
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
          Web Technologies Enthusiast who specializes in creating <span>PREMIUM, COMPONENT BASED UIs</span> in React
        </h1>
        <div className={styles.heroButtons}>
          <Button label="Explore My Works"/>
          <Button label="Contact Me" vairant="secondary"/>
        </div>
      </Header>
      <Section header="The Power of Next Put to work">
    
      </Section>
    </div>
  )
}

export default Home
