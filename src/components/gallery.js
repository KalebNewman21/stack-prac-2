import React from 'react'
import '../compCSS/gallery.css'
import { Link } from 'react-router-dom';
import GalleryNavbar from './gallerynavbar.js';
import GalleryCarousel from './gallery-carousel.js'

const Gallery = () => {
  return (
    <>
    <div className="gallery-page">
    <GalleryNavbar/>
      <h1 className="gallery-title">The Gallery</h1>
      <p className="gallery-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque eros, tempus ac lectus nec, maximus pellentesque sem. Integer efficitur leo sit amet erat tempor lacinia. Sed risus ipsum, hendrerit a imperdiet ut, bibendum at est. Praesent efficitur velit ut faucibus hendrerit. Donec quis nunc in mauris aliquam condimentum vitae elementum mauris. Vivamus in libero libero. Nunc id velit at urna sollicitudin facilisis sit amet consequat dolor. Sed quis orci eros. Praesent scelerisque vitae erat suscipit blandit.
<br/>
Quisque quam ante, lacinia at diam suscipit, auctor tempus libero. Nam cursus, ante vel consectetur tristique, sem felis porttitor ipsum, ac aliquam tortor.</p>
    <div className="gallery-carousel">
      <GalleryCarousel/>
    </div>
    </div>
    </>
  )
}

export default Gallery
