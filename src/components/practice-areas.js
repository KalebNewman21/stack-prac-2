import React, {useState} from 'react';
import '../compCSS/practice-areas.css'
import SkinnyNavbar from './skinnyNavbar.js';
import { Link } from 'react-router-dom';
import PracCarousel from './practiceAreas-carousel.js';
import Image1 from '../img/IMG_0017.JPG';
import Image2 from '../img/pexels-rodnae-productions-6669871 (1).jpg';
import Image3 from '../img/marco-chilese-2sMbKyQvom4-unsplash.jpg';

import Bio from './Bio.js'




const PracticeArea = () => {

  return (
    <React.Fragment>
      <div className="areas">
        <SkinnyNavbar/>
        <div className="desBox">
          <img className="image1"src={Image1} alt=""/>
          <h1 className="des-title">Our Areas of Practice</h1>
          <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id mauris ac erat sollicitudin tincidunt. Nulla cursus tortor non sapien ultricies varius. Praesent vel arcu ac dolor mattis condimentum et eu turpis. Mauris mattis magna arcu, a tempor elit lobortis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla commodo sem a dolor porta lobortis. Maecenas felis felis, sodales eget lorem non, vestibulum condimentum eros. Vestibulum dapibus libero dui. Sed bibendum erat id purus imperdiet. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id mauris ac erat sollicitudin tincidunt. Nulla cursus tortor non sapien ultricies varius. Praesent vel arcu ac dolor mattis condimentum et eu turpis. Mauris mattis magna arcu, a tempor elit lobortis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla commodo sem a dolor porta lobortis. Maecenas felis felis, sodales eget lorem non, vestibulum condimentum eros. Vestibulum dapibus libero dui. Sed bibendum erat id purus imperdiet.</p>
        </div>
        <div className="biooos">
          <div className="biooos">
            <Bio
              img = {Image3}
              title= "Criminal Law"
              description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec dapibus nibh ut ipsum porta finibus. Nullam neque diam, varius at suscipit eu, tincidunt in lorem. Integer congue libero ut justo venenatis suscipit.
              Praesent elementum risus in ligula tempus lacinia. Aliquam eget laoreet ex. Sed semper tortor at nisl malesuada sodales id non sem. Sed dictum turpis at scelerisque consectetur.
              Aenean vitae eros lobortis, molestie ipsum commodo, tristique purus. Nunc luctus odio diam, in ultricies justo fringilla ut. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Aenean bibendum ipsum quis eros elementum, pretium cursus purus convallis. Aliquam erat volutpat."
              path="/practice-areas/criminal-law"
              />
            <Bio
              img = {Image2}
              title= "Family Law"
              description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec dapibus nibh ut ipsum porta finibus. Nullam neque diam, varius at suscipit eu, tincidunt in lorem. Integer congue libero ut justo venenatis suscipit.
              Praesent elementum risus in ligula tempus lacinia. Aliquam eget laoreet ex. Sed semper tortor at nisl malesuada sodales id non sem. Sed dictum turpis at scelerisque consectetur.
              Aenean vitae eros lobortis, molestie ipsum commodo, tristique purus. Nunc luctus odio diam, in ultricies justo fringilla ut. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Aenean bibendum ipsum quis eros elementum, pretium cursus purus convallis. Aliquam erat volutpat."
              path="/practice-areas/family-law"
              />

          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default PracticeArea
