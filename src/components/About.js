import React, {useState} from 'react';
import '../compCSS/about.css';
import SkinnyNavbar from './skinnyNavbar.js';
import Bio from './Bio.js'
import Lawyer1Img from '../img/IMG_0115.JPG'
import Lawyer2Img from '../img/IMG_0070.JPG'
import Lawyer3Img from '../img/IMG_0916.jpg'
import LawyerVideo from '../img/IMG_0071.mp4'
import ContactForm from './contactForm.js'
import Copyright from './copyright.js'


const About = () => {
  return (
    <React.Fragment>
      <div>
        <SkinnyNavbar/>
      </div>
      <div className="aboutApp">
        <div className="videoContainer">
        <video className="video" controls>
          <source src={LawyerVideo} type="video/mp4"></source>
        </video>
      </div>

      <div className="descriptionBox">
        <h1 className="desTitle">About Us</h1>


        <p className="descript">Family Law and Criminal Law matters can be particularly stressful.
In your search to find the best attorney to represent the interests of
both yourself, and your family, it is important to find a law firm that is
competent, efficient, and focused on providing you with the best
outcome possible. Newman Law Firm, P.A. has a staff that is committed to providing excellent service and effective representation. It is our goal, to provide each client with personalized service and professional treatment. As an office, the staff of Newman Law Firm, P.A. pledges to provide every client with a positive experience as we work towards the resolution of your legal issue. We are focused on guiding you through the legal process, and helping you obtain a successful end result. We stand prepared to provide satisfactory representation to you and your family, keeping your best
interest in mind, at all times. If you are interested in learning more about how Newman Law Firm, P.A. can assist in the resolution of your legal issue, please contact us to schedule your initial consultation.</p>


<p className="desTwo"> Click below to view profile!</p>
      </div>



        <div className="profGrid">
        <div className="ioneBox">
        <a href="/about/jarahn-newman"><img className="imgone"src={Lawyer1Img}alt=""/></a>
        <div className="picName">
        <a href="/about/jarahn-newman"><h1>Jarahn Newman</h1></a>
        </div>
        </div>

        <div className="ioneBox">
        <a href="/about/marvin-zanders"><img className="imgtwo"src={Lawyer2Img}alt=""/></a>
        <div className="picName">
        <a href="/about/marvin-zanders"><h1>Marvin Zanders</h1></a>
        </div>
        </div>
        <div className="ioneBox">
        <a href="/about/jarahn-newman"><img className="imgthree"src={Lawyer3Img}alt=""/></a>
        <div className="picNamee">
        <a href="/about/marvin-zanders"><h1>Kaleb Slater Newman</h1></a>
        </div>
        </div>
        </div>
      <div className="contax-container">
        <ContactForm/>
        </div>
        <div className="bottomBoxxx"><Copyright/></div>
      </div>




      </React.Fragment>
  )
}

export default About
