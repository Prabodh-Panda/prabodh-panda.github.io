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
        {/* TODO: Add logos of industry standard technologies that I use. */}
      </Header>
      <Section header="The Power of Next Put to work">
        <p>
          I develop websites using latest industry standards to make them fast, reliable and secure.
        </p>
        <ul>
          <li>Industry Leading Technologies</li>
          <li>Development Best Practices</li>
          <li>Security First Approach</li>
          <li>Helping businesses build their online identity</li>
        </ul>
        {/* TODO: ADD LOGOS */}
      </Section>
    </div>
  )
}

export default Home
