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
 <div className="titling">
  <h1 className="titleMain"><span className="titleN">N</span>ewman Law Firm</h1>
  <img src="" alt=""/>
<section className="navContact">
  <h2 id="number"><span>
{<PhoneIcon/>}
</span><a id="number"href="tel:9043558835">(904) 355-8835</a></h2>
  <p id="area"><strong>4741 Atlantic Boulevard, Suite B-6</strong></p>
  <p id="area"><strong>Jacksonville, FL 32207</strong></p>
</section>
</div>
<div>
 <Nav>
  <Link to="/about" className="nav-item">About Us</Link>
  <Link to="/about" className="nav-item">Meet The Team</Link>
  <Link to="/practice-areas"  className="nav-item">Practice Areas</Link>
  <Link to="/contact" className="nav-item">Contact</Link>
  <Link to="/gallery" className="nav-item">Gallery</Link>22
 </Nav>
 </div>
</React.Fragment>
    )
  }
export default Navbar
