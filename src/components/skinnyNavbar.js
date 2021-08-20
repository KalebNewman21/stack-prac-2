import React, {useState} from 'react';
import '../compCSS/skinnynavigation.css'
import { Link } from 'react-router-dom';


const SkinnyNavbar = () => {
const [isShown, setIsShown] = useState(true);
  return(
    <React.Fragment>
      <nav className="bar">
      <div className="bar-title-container">
        <Link to="/"><p className="bar-titleMain"><span className="bar-titleN">N</span>ewman Law Firm</p></Link>
      </div>
      <div className="bar-nav">
       <Link to="/" className="nav-item">Home</Link>
       <Link to="/about" className="nav-item">About Us</Link>
       <Link to="/about" className="nav-item">Meet The Team</Link>
       <Link to="/practice-areas"  className="nav-item">Practice Areas</Link>
       <Link to="/testimonials" className="nav-item">Testimonials</Link>
    </div>
     </nav>
    </React.Fragment>

  )
}

export default SkinnyNavbar
