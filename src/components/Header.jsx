import { Link } from "react-scroll"
import PropTypes from "prop-types"
import React from "react"

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
  return (
    <header className={styles.header}>
      <Link to="hero" className={styles.headerIcon} smooth duration={1000}>
        <HeaderImg alt={siteTitle}/>
      </Link>
      <ul classname={styles.navItems}>
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
