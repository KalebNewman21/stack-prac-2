import React, {useState} from 'react';
import '../compCSS/about.css';
import SkinnyNavbar from './skinnyNavbar.js';
import Bio from './Bio.js'
import Lawyer1Img from '../img/IMG_0115.JPG'
import Lawyer2Img from '../img/IMG_0130.JPG'

const About = () => {
  return (
    <React.Fragment>
      <div>
        <SkinnyNavbar/>
      </div>
      <div className="aboutApp">

      <div className="bios">
        <Bio
          img = {Lawyer1Img}
          title= "Jarahn Newman"
          description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec dapibus nibh ut ipsum porta finibus. Nullam neque diam, varius at suscipit eu, tincidunt in lorem. Integer congue libero ut justo venenatis suscipit.
          Praesent elementum risus in ligula tempus lacinia. Aliquam eget laoreet ex. Sed semper tortor at nisl malesuada sodales id non sem. Sed dictum turpis at scelerisque consectetur.
          Aenean vitae eros lobortis, molestie ipsum commodo, tristique purus. Nunc luctus odio diam, in ultricies justo fringilla ut. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Aenean bibendum ipsum quis eros elementum, pretium cursus purus convallis. Aliquam erat volutpat."
          path="/about/jarahn-newman"
          />
          <Bio
            img = {Lawyer2Img}
            title= "Marvin Zanders"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec dapibus nibh ut ipsum porta finibus. Nullam neque diam, varius at suscipit eu, tincidunt in lorem. Integer congue libero ut justo venenatis suscipit.
            Praesent elementum risus in ligula tempus lacinia. Aliquam eget laoreet ex. Sed semper tortor at nisl malesuada sodales id non sem. Sed dictum turpis at scelerisque consectetur.
            Aenean vitae eros lobortis, molestie ipsum commodo, tristique purus. Nunc luctus odio diam, in ultricies justo fringilla ut. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Aenean bibendum ipsum quis eros elementum, pretium cursus purus convallis. Aliquam erat volutpat."
            path="/about/marvin-zanders"
            />
      </div>
</div>

      </React.Fragment>
  )
}

export default About
