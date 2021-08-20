import React, {useState} from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  return (
  <nav className="navbar">
    <ul className="navbar-nav">{props.children}</ul>
  </nav>)
}

export const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (<li className="nav-item">
    <Link to="/"
      className="icon-button"
      onClick={() => setOpen(!open)}>{props.icon}</Link>
    {open && props.children}
  </li>)
}

export const DropdownMenu = () => {
  function DropdownItem(props) {
    return (
    <div>
      <Link to="#" className="menu-item">
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-button">{props.rightIcon}</span>
  </Link>
  </div>)
  ;
  }

  return (<div className="dropdown">
    <DropdownItem className="dropItem"><Link to="/gallery">Gallery</Link></DropdownItem>
    <DropdownItem className="dropItem"><Link to="/contact-us">Contact Us</Link></DropdownItem>

  </div>)
}

export default Navbar
