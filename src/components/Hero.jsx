import React, { useContext, useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import { Link } from "react-scroll"
import Container from "react-bootstrap/Container"

import styles from "../styles/sections/hero.module.css"

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])
  return (
    <section id="hero" className={`jumbotron  ${styles.herojumbotron}`} fluid>
      <Container>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <h1 className={styles.herotitle}>
            Hello!{" "}
            <span className={styles.wave} role="img" alt="waving hand emoji">
              {" "}
              👋{" "}
            </span>
          </h1>
          <h1 className={styles.herotitle}>
            My name is <span className="text-color-main">Kelly Ren</span>
            <br />I am a full stack Web Developer.{" "}
            <span role="img" alt="a developer emoji">
              {" "}
              👩🏻‍💻{" "}
            </span>
          </h1>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <p className={styles.cta}>
            <button
              className={`text-color-main cta-btn cta-btn-hero hvr-shutter-out-horizontal`}
            >
              <Link to="about" smooth duration={1000}>
                Know more
              </Link>
            </button>
          </p>
        </Fade>
      </Container>
    </section>
  )
}

export default Hero
