import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import React, { useState, useEffect } from "react"
import { Link } from "react-scroll"
import PropTypes from "prop-types"

import styles from "../styles/sections/header.module.css"
import HeaderImg from "./HeaderImg.jsx"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} smooth duration={1000}>
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => {
  const [scrollState, setScrollState] = useState("buttom")
  const [isDisplay, setIsDisplay] = useState("none")

  const checkScrollTop = () => {
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    )
    const scrolled = document.scrollingElement.scrollTop
    if (scrolled >= vh) {
      if (scrollState !== "top") {
        setScrollState("top")
      }
    } else {
      if (scrollState !== "buttom") {
        setScrollState("buttom")
      }
    }
  }

  const onToggle = () => {
    if (isDisplay === "none") {
      setIsDisplay("flex")
    } else {
      setIsDisplay("none")
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", checkScrollTop)
    return () => {
      document.removeEventListener("scroll", checkScrollTop)
    }
  })

  return (
    <header
      className={`${styles.header} ${
        scrollState !== "top" ? styles.buttomNav : styles.topNav
      }`}
    >
      <Link to="hero" className={styles.headerIcon} smooth duration={1000}>
        <HeaderImg alt={siteTitle} />
      </Link>

      <div className={styles.laptopNavItems}>
        <ul>
          <ListLink to="hero">Home</ListLink>
          <ListLink to="about">About</ListLink>
          <ListLink to="projects">Projects</ListLink>
          <ListLink to="contact">Contact</ListLink>
        </ul>
      </div>
      <div className={styles.mobileNavItems}>
        <nav>
          <FontAwesomeIcon
            icon={faBars}
            className={`text-color-grey fa-2x ${styles.navToggle} hvr-grow-shadow`}
            onClick={onToggle}
          />{" "}
          <div
            className={styles.mobileNavCollapse}
            style={{ display: isDisplay }}
          >
            <div className={`mr-auto ${styles.mobileNavbarNav}`}>
              <ListLink to="hero">Home</ListLink>
              <ListLink to="about">About</ListLink>
              <ListLink to="projects">Projects</ListLink>
              <ListLink to="contact">Contact</ListLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
