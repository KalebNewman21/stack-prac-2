import React, {useState} from 'react';
import '../compCSS/skinnynavigation.css'
import { Link } from 'react-router-dom';



const SkinnyNavbar = () => {
const [isShown, setIsShown] = useState(true);
  return(
    <React.Fragment>
      <nav className="barS">
      <div className="barS-wrapper">
      <div className="bar-title-containerS">
        <Link to="/"><p className="bar-titleMainS"><span className="bar-titleNS">N</span>ewman Law Firm</p></Link>
      </div>
      <div className="bar-navS">
       <Link to="/" className="nav-itemS">Home</Link>
       <Link to="/about" className="nav-itemS">About Us</Link>
       <Link to="/practice-areas"  className="nav-itemS">Practice Areas</Link>
       <Link to="/contact" className="nav-itemS">Contact</Link>
       <Link to="/gallery" className="nav-itemS">Gallery</Link>

    </div>
    </div>
     </nav>
    </React.Fragment>

  )
}

export default SkinnyNavbar
