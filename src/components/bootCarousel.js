import React, {useState, useEffect} from 'react';
import '../compCSS/carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../img/IMG_0059.JPG';
import image2 from '../img/IMG_0094.JPG'
import image3 from '../img/IMG_0161.JPG'
import image4 from '../img/IMG_0188.JPG'

const MainCarousel = () => {
  return(
<Carousel>
  <Carousel.Item interval={1000}>
    <img src={image1} className="sliderimg"/>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <img src={image2} className="sliderimg"/>
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img src={image3} className="sliderimg"/>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img src={image4} className="sliderimg"/>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default MainCarousel
