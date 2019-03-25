import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./styles/header.css"

const Header = ({ siteTitle }) => {
  if (typeof window !== "undefined") {
    //if statement for gatsby build
    window.addEventListener("scroll", () => {
      let header = document.querySelector("header")
      if (header) {
        if (window.pageYOffset === 0) {
          header.classList.remove("shadow")
        } else if (!header.classList.contains("shadow")) {
          header.classList.add("shadow")
        }
      }
    })
  }

  return (
    <header>
      <div className="container">
        <div className="left">
          <div className="logo">
            <Link to="/">FOR'M</Link>
          </div>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </div>
        <div className="menu">
          <Link to="/user/sign-up">Sign Up</Link>
          <Link to="/user/log-in">Log In</Link>
        </div>
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
