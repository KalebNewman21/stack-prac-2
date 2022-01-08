import React, {useState} from 'react';
import '../compCSS/contactNavbar.css'
import { Link } from 'react-router-dom';


const ContactNavbar = () => {
  return(
    <>


     <nav className="cbar">
     <div className="cbar-wrapper">
     <div className="cbar-title-container">
       <Link to="/"><p className="cbar-titleMain"><span className="cbar-titleN">N</span>ewman Law Firm</p></Link>
     </div>
     <div className="cbar-nav">
      <Link to="/" className="cnav-item">Home</Link>
      <Link to="/about" className="cnav-item">About Us</Link>
      <Link to="/practice-areas"  className="cnav-item">Practice Areas</Link>
      <Link to="/gallery" className="cnav-item">Gallery</Link>

   </div>
   </div>
    </nav>
    </>

  )
}

export default ContactNavbar
