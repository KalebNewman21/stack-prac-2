import React, {useState} from 'react';
import Nav from './dropitdown.js';
import '../compCSS/nav.css';
import {NavItem} from './dropitdown.js';
import {DropdownMenu} from './dropitdown.js';
import {ReactComponent as PhoneIcon} from './smartphone-call.svg';
import {ReactComponent as MessageIcon} from './message.svg';
import {ReactComponent as MenuIcon} from './menuIcon.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
return (
<React.Fragment>
<div className="bigBar">
 <div className="titling">
   <div className="titleContainer">
  <h1 className="titleMain"><span className="titleN">N</span>ewman Law Firm</h1>
  </div>
<div className="navContact">
  <div className="numberContainer">
    <div className="phoneContainer">
        <p>Call Now!</p>
    </div>
    <div className="numba">
      <a href="tel:9043558835">(904) 355-8835</a></div>
      </div>

  <div className="addressContainer">
  <p id="area"><strong>4741 Atlantic Boulevard, Suite B-6</strong></p>
  <p id="area"><strong>Jacksonville, FL 32207</strong></p>
  </div>
</div>
</div>
<div>
  <nav className="barM">
  <div className="bar-navM">
   <Link to="/" className="nav-itemM">Home</Link>
   <Link to="/about" className="nav-itemM">About Us</Link>
   <Link to="/practice-areas"  className="nav-itemM">Practice Areas</Link>
   <Link to="/contact" className="nav-itemM">Contact</Link>
   <Link to="/gallery" className="nav-itemM">Gallery</Link>
</div>

 </nav>
 </div>
 </div>
</React.Fragment>
    )
  }
export default Navbar
