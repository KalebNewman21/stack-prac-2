import React from 'react';
import SkinnyNavbar from './skinnyNavbar.js';
import { Link } from 'react-router-dom';
import '../compCSS/copyright.css'

const Copyright = () => {
  return (
    <>
    <div className="wrappur">
      <p className="copy-quote">The hiring of a lawyer is an important decision that should not be based solely upon advertisements.
       Before you decide, ask us to send you free written information about our qualifications and experience.
       </p>
      <div className="wrapping-copy-nav">
       <div className="copy-nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About Us</Link>
        <Link to="/practice-areas"  className="nav-item">Practice Areas</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/gallery" className="nav-item">Gallery</Link>
     </div>
     </div>
     <p className="copy-message">Copyright © 2021 - 2022 Newman Law Firm</p>
     <p className="copy-contact">Contact us today: <a id="noomba"href="tel:9043558835">(904) 355-8835</a></p>
    </div>
    </>
  )
}

export default Copyright
