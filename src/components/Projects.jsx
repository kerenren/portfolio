import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import React, { useContext, useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import Tilt from "react-tilt"

import styles from "../styles/sections/projects.module.css"
import PortfolioContext from "../library/context"
import ProjectImg from "./ProjectImg.jsx"
import Title from "./Title.jsx"

const Projects = () => {
  const { projects } = useContext(PortfolioContext)

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
    <section id="projects" className={styles.projects}>
      <Container>
        <Title title="Projects" />
        {projects.map(project => {
          const { title, info, info2, url, repo, img, id } = project

          return (
            <Row key={id} className={styles.projectContainer}>
              <Col lg={4} sm={12} className="d-flex align-items-center">
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className={styles.projectWrapperText}>
                    <h3 className={styles.projectTitle}>{title}</h3>
                    <p>{info}</p>
                    <p>{info2}</p>
                    <div className={styles.ctaContainer}>
                      {url !== "./" && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn-hero hvr-shutter-out-horizontal"
                          href={url}
                        >
                          See Live
                        </a>
                      )}

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main hvr-bob "
                          href={repo}
                        >
                          Source Code
                          <FontAwesomeIcon
                            icon={faCode}
                            className={styles.codeIcon}
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col lg={8} sm={12}>
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className={styles.projectWrapperImage}>
                    <a
                      href={url || "#!"}
                      target="_blank"
                      aria-label="Project Link"
                      rel="noopener noreferrer"
                    >
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: "cubic-bezier(.03,.98,.52,.99)",
                        }}
                      >
                        <div data-tilt>
                          <ProjectImg alt={title} filename={img} />
                        </div>
                      </Tilt>
                    </a>
                  </div>
                </Fade>
              </Col>
            </Row>
          )
        })}
      </Container>
    </section>
  )
}

export default Projects
