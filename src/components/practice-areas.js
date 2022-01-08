import React, {useState} from 'react';
import '../compCSS/practice-areas.css'
import SkinnyNavbar from './skinnyNavbar.js';
import { Link } from 'react-router-dom';
import PracCarousel from './practiceAreas-carousel.js';
import Image1 from '../img/IMG_0017.JPG';
import Image2 from '../img/pexels-rodnae-productions-6669871 (1).jpg';
import Image3 from '../img/marco-chilese-2sMbKyQvom4-unsplash.jpg';
import ContactForm from './contactForm.js'
import Copyright from './copyright.js'

import Bio from './Bio.js'




const PracticeArea = () => {

  return (
    <React.Fragment>
      <div className="areas">
        <SkinnyNavbar/>
        <div className="desBox">
          <img className="image1"src={Image1} alt=""/>
          <h1 className="des-title">Our Areas of Practice</h1>
          <p className="des">Family Law and Criminal Law matters can be particularly stressful.
In your search to find the best attorney to represent the interests of
both yourself, and your family, it is important to find a law firm that is
competent, efficient, and focused on providing you with the best
outcome possible. Newman Law Firm, P.A. has a staff that is committed to providing excellent service and effective representation. It is our goal, to provide each client with personalized service and professional treatment. As an office, the staff of Newman Law Firm, P.A. pledges to provide every client with a positive experience as we work towards the resolution of your legal issue. We are focused on guiding you through the legal process, and helping you obtain a successful end result. We stand prepared to provide satisfactory representation to you and your family, keeping your best
interest in mind, at all times. If you are interested in learning more about how Newman Law Firm, P.A. can assist in the resolution of your legal issue, please contact us to schedule your initial consultation.</p>
        </div>

          <div className="biooos">
            <Bio
              img = {Image3}
              title= "Criminal Law"
              description= "If you, a family member, or friend are currently being investigated or have been criminally charged, Newman Law Firm, P.A. can provide you with the information you need...."
              path="/practice-areas/criminal-law"
              />
            </div>

          <div className="biooos2">
            <Bio
              img = {Image2}
              title= "Family Law"
              description= "Newman Law Firm P.A. is committed to providing you with representation in all family law matters. We recognize that family law matters can be highly emotional...."
              path="/practice-areas/family-law"
              />
            </div>


            <div className="contax-containerP">
            <ContactForm/>
            </div>
            <div className="bottomBoxxP"><Copyright/></div>


      </div>
    </React.Fragment>
  )
}

export default PracticeArea
