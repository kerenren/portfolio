import React, { useContext, useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import { Link } from "react-scroll"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

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
    <section id="hero">
      <Container>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <h1>
            Hello!{" "}
            <span role="img" alt="waving hand emoji">
              {" "}
              👋{" "}
            </span>
          </h1>
          <p>My name is Kelly Ren </p>
          <p>
            I am a Web Developer with passion on building user friendly web site{" "}
            <span role="img" alt="a developer emoji">
              {" "}
              👩🏻‍💻{" "}
            </span>
          </p>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <Button className="px-4 py-1 text-sm">
            <Link to="about" smooth duration={1000}>
              Know more
            </Link>
          </Button>
        </Fade>
      </Container>
    </section>
  )
}

export default Hero
