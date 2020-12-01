import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-scroll"
import React from "react"

import styles from "../styles/sections/footer.module.css"
import { networks } from "../library/data"

const Footer = () => {
  return (
    <footer className={`text-color-grey bg-color-dark-coco  ${styles.footer}`}>
      <span className={`hvr-bob ${styles.backToTop}`}>
        <Link to="hero" smooth duration={1000}>
          <span
            className={styles.backTopEmoji}
            role="img"
            alt="back to top emoji"
          >
            ☝️
          </span>
        </Link>
      </span>
      <div className="d-flex mt-4">
        {networks.map(network => {
          return (
            <a
              key={network.id}
              href={network.url}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={network.name}
            >
              <FontAwesomeIcon
                icon={network.name}
                className={`text-color-grey fa-2x ${styles.networkIcon} hvr-grow-shadow`}
              />
            </a>
          )
        })}
      </div>
      <hr />
      <p className={`text-color-grey ${styles.footerText}`}>
        Designed & Developed by Kelly Ren
        <br />© {new Date().getFullYear()}. Powered by{" "}
        <a
          className="text-color-grey bg-color-dark-coco"
          href="https://www.gatsbyjs.com"
        >
          Gatsby
        </a>
      </p>
    </footer>
  )
}

export default Footer
