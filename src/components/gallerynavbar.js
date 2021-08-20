import React, {useState} from 'react';
import '../compCSS/gallerynavbar.css'
import { Link } from 'react-router-dom';


const GalleryNavbar = () => {
  return(
    <>
      <nav className="gbar">
      <div className="gbar-title-container">
        <Link to="/"><p className="gbar-titleMain"><span className="gbar-titleN">N</span>ewman Law Firm</p></Link>
      </div>
      <div className="gbar-nav">
       <Link to="/" className="nav-item">Home</Link>
       <Link to="/about" className="nav-item">About Us</Link>
       <Link to="/about" className="nav-item">Meet The Team</Link>
       <Link to="/practice-areas"  className="nav-item">Practice Areas</Link>
       <Link to="/testimonials" className="nav-item">Testimonials</Link>
    </div>
     </nav>
    </>

  )
}

export default GalleryNavbar
