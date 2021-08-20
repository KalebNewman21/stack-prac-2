import React, {useState} from 'react';
import '../compCSS/practice-areas.css'
import SkinnyNavbar from './skinnyNavbar.js';
import { Link } from 'react-router-dom';
import PracCarousel from './practiceAreas-carousel.js'
import Image1 from '../img/IMG_0017.JPG'



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
        <div className="caroBox">
          <PracCarousel/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PracticeArea
