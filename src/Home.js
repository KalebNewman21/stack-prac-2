import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import useFetch from './useFetch';
import Navbar from './components/Navbar.js';
import Carousel from './components/carousel.js';
import {NavItem} from './components/dropitdown.js';
import {DropdownMenu} from './components/dropitdown.js';
import {ReactComponent as MessageIcon} from './components/message.svg';
import {ReactComponent as MenuIcon} from './components/menuIcon.svg';
import {ReactComponent as PhoneIcon} from './components/smartphone-call.svg';
import {ReactComponent as FamilyIcon} from './components/family.svg';
import {ReactComponent as MaceIcon} from './components/mace.svg';
import {ReactComponent as Phone2Icon} from './components/phone2.svg';
import { Link } from 'react-router-dom';
import Card from './components/card.js'

const Home = () => {
  const [isShown, setIsShown] = useState(true);
  const {data: blogs, isPending, error} = useFetch('https://localhost:3000')
    return (
  <React.Fragment >
  <div>
    <Navbar/>
  </div>
    <div className="carousel">
      <Carousel/>
        <div className="carousel-title"> We Are Here to Help</div>
        <div className="carousel-title2"> Attorneys and Counselors At Law</div>
    </div>
    <div className="aboutBlurb">
      <h1 className="blurbTitle">Why Us</h1>
      <div className="textbox">
      <p className="blurbDescription">
Family Law and Criminal Law matters can be particularly stressful.
In your search to find the best attorney to represent the interests of
both yourself, and your family, it is important to find a law firm that is
competent, efficient, and focused on providing you with the best
outcome possible.
<br/><br/>
Newman Law Firm, P.A. has a staff that is committed to providing excellent service and effective representation. It is our goal, to provide each client with personalized service and professional treatment. As an office, the staff of Newman Law Firm, P.A. pledges to provide every client with a positive experience as we work towards the resolution of your legal issue. We are focused on guiding you through the legal process, and helping you obtain a successful end result. </p>
</div>
    </div>
    <div className="secondBox">
        <Card
          icon={<FamilyIcon/>}
          title="Family Law"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a pretium nisl. Quisque congue lacus sed lorem venenatis tincidunt. Suspendisse tincidunt, justo ac porta ultrices, arcu nisi mattis dui, vel."
          link="/practice-areas/family-law"
          />
          <Card
            icon={<MaceIcon/>}
            title="Criminal Law"
            link="/practice-areas/criminal-law"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a pretium nisl. Quisque congue lacus sed lorem venenatis tincidunt. Suspendisse tincidunt, justo ac porta ultrices, arcu nisi mattis dui, vel."/>
          <Card
            icon={<Phone2Icon/>}
            title="Free Consultation!"
            link="/practice-areas/criminal-law"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a pretium nisl. Quisque congue lacus sed lorem venenatis tincidunt. Suspendisse tincidunt, justo ac porta ultrices, arcu nisi mattis dui, vel."/>
    </div>
    <div className="thirdBox">
      <h1>this is where conacting will be </h1>
    </div>
    <div className="bottomBox">
      <div>.</div>
    </div>

    </React.Fragment>
    )
  }

export default Home
