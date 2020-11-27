import React, { useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import { Container, Row, Col } from "react-bootstrap"

import Title from "./Title.jsx"
import Image from "./Image.jsx"
import styles from "../styles/sections/about.module.css"

const About = () => {
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
    <section id="about" className={styles.about}>
      <Container>
        <Title title="About Me" />
        <Row className={styles['about-wrapper']}>
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
                <div className={styles['wrapper-image']} style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                  <Image />
                </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className={styles['wrapper-info']}>
                <p className={styles['wrapper-info-text']}>
                  After working in Google as a project lead I discovered my
                  passion for programming and went for an intensive full stack
                  bootcamp at Israel Tech Challenge (ITC) and completed a 3
                  months internship as a full stack developer.
                </p>
                <p className={styles['wrapper-info-text']}>
                  As a project lead I had to connect colleagues cross countries
                  and departments and had a chance to be involved in meaningful
                  projects from seed point to product launch and solve all the
                  problems all during the process.
                </p>
                <p className={styles['wrapper-info-text']}>
                  As a developer I wish to use my global experience and creative
                  thinking to give myself an added value in the industry.
                </p>

                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn-resume"
                    href={"./"}
                  >
                    Resume
                  </a>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
