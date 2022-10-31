import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
      <div className="container"><a className="navbar-brand logo" href="index.html">&#60;DeanDraper.Dev &#47;&#62;</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav ms-auto jet-brains">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/contact-me" className="nav-item nav-link">Contact Me</Link>
            {/* <li className="nav-item"><a className="nav-link" href={`http://localhost:3022/resume`}>My Resume</a></li> */}
            <Link to="/resume" className="nav-item nav-link">My Resume</Link>
            <Link to="/showcase" className="nav-item nav-link">Showcase</Link>
            {/* <li className="nav-item"><a className="nav-link active" href="index.html">Home</a></li> */}
            {/* <li className="nav-item"><a className="nav-link" href="about-us.html">About Us</a></li> */}
            {/* <li className="nav-item"><a className="nav-link" href="contact-us.html">Contact Us</a></li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
