import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => {
  
  window.addEventListener('scroll', () => {
    let header = document.querySelector('header')
    if(window.pageYOffset === 0){
      header.classList.remove('shadow');
    } else if(!header.classList.contains('shadow')){
      header.classList.add('shadow');
    }
  })

  return(
  <header>
    <div class="container">
      <div className="left">
        <div className="logo">
          Forummm
        </div>
        <div>
          <Link to="#">Link</Link>
          <Link to="#">Link</Link>
          <Link to="#">Link</Link>
          <Link to="#">Link</Link>
        </div>
      </div>
      <div>
        Sign Up
        Log In
      </div>
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
