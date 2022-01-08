import React from 'react';
import SkinnyNavbar from './skinnyNavbar.js';
import { Link } from 'react-router-dom';
import '../compCSS/greyCopyright.css'

const Copyright = () => {
  return (
    <>
    <div className="wrappurG">
      <p className="copy-quoteG">The hiring of a lawyer is an important decision that should not be based solely upon advertisements.
       Before you decide, ask us to send you free written information about our qualifications and experience.
       </p>
      <div className="wrapping-copy-navG">
       <div className="copy-navG">
        <Link to="/" className="nav-itemBTG">Home</Link>
        <Link to="/about" className="nav-itemBTG">About Us</Link>
        <Link to="/practice-areas"  className="nav-itemBTG">Practice Areas</Link>
        <Link to="/contact" className="nav-itemBTG">Contact</Link>
        <Link to="/gallery" className="nav-itemBTG">Gallery</Link>
     </div>
     </div>
     <p className="copy-messageG">Copyright © 2021 - 2022 Newman Law Firm</p>
     <p className="copy-contactG">Contact us today: <a id="noombaG"href="tel:9043558835">(904) 355-8835</a></p>
    </div>
    </>
  )
}

export default Copyright
