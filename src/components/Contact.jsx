import { Container } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import React from "react"

import styles from "../styles/sections/contact.module.css"
import Title from "./Title.jsx"


const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className={styles.contactWrapper}>
            <p className={styles.contactWrapperText}>
              'Would you like to work with me? Awesome!'
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn hvr-shutter-out-horizontal cta-btn-resume"
              href="mailto:renkelei.kelly@gmail.com"
            >
              Let's talk
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  )
}

export default Contact
