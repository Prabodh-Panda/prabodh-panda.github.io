import Image from "next/image";
import styles from "./Header.module.css";
import { motion } from "framer-motion";
import {useRef, useEffect} from 'react'
import {ReactNode} from 'react'

import lottie from 'lottie-web'
import { LottieProps } from 'react-lottie'

const popIn = {
  hide: { opacit: 0, scale: 0 },
  enter: { opacit: 1, scale: 1 },
};

const fadeDown = {
  hide: { opacity: 0, y: -100 },
  enter: { opacity: 1, y: 0 },
};

interface HeaderProps {
  imgSrc?: string,
  children?: ReactNode,
  lottieAnimationData?: any
}

const Header = ({ children, imgSrc, lottieAnimationData }: HeaderProps) => {
  
  const lottieWrapper = useRef(null)

  useEffect(() => {

    if(!lottieAnimationData) return;

    if(imgSrc === undefined && lottieAnimationData !== undefined && lottieWrapper !== null) {
      const lottieInstance = lottie.loadAnimation({
        container: lottieWrapper.current!!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: lottieAnimationData
      })
    }
    return () => {
      lottieWrapper.current = null
    }
  }, [lottieAnimationData])

  return (
    <div className={styles.Header}>
      <motion.div
        variants={fadeDown}
        initial="hide"
        whileInView={"enter"}
        transition={{ type: "spring" }}
        className={styles.textContent}
      >
        {children}
      </motion.div>
      {imgSrc &&
        <motion.div
          variants={popIn}
          initial="hide"
          whileInView={"enter"}
          transition={{ type: "spring" }}
          className={styles.imgContainer}
        >
          <Image src={imgSrc} layout="fill" priority={true} />  
        </motion.div>
      }
      {lottieAnimationData &&
        <motion.div
          variants={popIn}
          initial="hide"
          whileInView={"enter"}
          transition={{ type: "spring" }}
          className={styles.lottieAnimation} 
          ref={lottieWrapper}
        >
        </motion.div>
      }
    </div>
  );
};

export default Header;
