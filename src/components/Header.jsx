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
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  )
  const [scrollState, setScrollState] = useState("buttom")

  const checkScrollTop = () => {
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
      <ul classname={styles.navItems}>
        <ListLink to="hero">Home</ListLink>
        <ListLink to="about">About</ListLink>
        <ListLink to="projects">Projects</ListLink>
        <ListLink to="contact">Contact</ListLink>
      </ul>
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
