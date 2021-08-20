import React, {useState, useEffect} from 'react';
import '../compCSS/gall-carousel.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image1 from '../img/gallery/IMG_0086.JPG'
import image2 from '../img/gallery/IMG_0053.JPG'
import image3 from '../img/gallery/IMG_0022.JPG'
import image4 from '../img/gallery/IMG_0067.JPG'



const GalleryCarousel = () => {
  return(
<div className="carousel">
  <AliceCarousel
     autoPlay
     infinite
     disableButtonsControls
     autoPlayInterval="5000">
  <img src={image1} className="gallery-image" />
  <img src={image2} className="gallery-image" />
  <img src={image3} className="gallery-image" />
  <img src={image4} className="gallery-image" />

</AliceCarousel>
</div>
  )
}

export default GalleryCarousel
