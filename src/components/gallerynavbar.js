import React, {useState} from 'react';
import '../compCSS/gallerynavbar.css'
import { Link } from 'react-router-dom';


const GalleryNavbar = () => {
  return(
    <>
  

          <nav className="gbar">
          <div className="gbar-wrapper">
          <div className="gbar-title-container">
            <Link to="/"><p className="gbar-titleMain"><span className="gbar-titleN">N</span>ewman Law Firm</p></Link>
          </div>
          <div className="gbar-nav">
           <Link to="/" className="gnav-item">Home</Link>
           <Link to="/about" className="gnav-item">About Us</Link>
           <Link to="/practice-areas"  className="gnav-item">Practice Areas</Link>
           <Link to="/contact" className="gnav-item">Contact</Link>

        </div>
        </div>
         </nav>
    </>

  )
}

export default GalleryNavbar
