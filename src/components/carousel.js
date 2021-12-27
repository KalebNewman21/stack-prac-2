import React, {useState, useEffect} from 'react';
import '../compCSS/carousel.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image1 from '../img/IMG_0093.jpg';
import image4 from '../img/IMG_0206.jpg'
import image3 from '../img/IMG_0161.JPG'
import image2 from '../img/IMG_0188.JPG'

const Carousel = () => {
  return(
  <>
  <div className="carousel">
    <AliceCarousel
       autoPlay
       infinite
       disableDotsControls
       disableButtonsControls
       autoPlayInterval="5000">
    <img src={image1} className="sliderimg"/>
    <img src={image2} className="sliderimg"/>
    <img src={image3} className="sliderimg"/>
    <img src={image4} className="sliderimg"/>
 </AliceCarousel>
 </div>
</>
  )
}

export default Carousel
