import React, {useState, useEffect} from 'react';
import '../compCSS/prac-caro.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';


const PracCarousel = () => {
  return(
  <div className="carousel">
    <AliceCarousel
       autoPlay

       infinite
       autoPlayInterval="5000"
       >
      <div className="slide1">
        <h1 className="slide-title">Criminal Law</h1>
        <p className="slide-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id mauris ac erat sollicitudin tincidunt. Nulla cursus tortor non sapien ultricies varius. Praesent vel arcu ac dolor mattis condimentum et eu turpis. Mauris mattis magna arcu, a tempor elit lobortis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla commodo sem a dolor porta lobortis. Maecenas felis felis, sodales eget lorem non, vestibulum condimentum eros. Vestibulum dapibus libero dui. Sed bibendum erat id purus imperdiet.</p>
          <Link to="/practice-areas/criminal-law">
            <button
                 className="bio-button"
                 type="button"
                 >
               Learn More...</button>
        </Link>
      </div>
      <div className="slide2">
        <h1 className="slide-title">Family Law</h1>
        <p className="slide-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id mauris ac erat sollicitudin tincidunt. Nulla cursus tortor non sapien ultricies varius. Praesent vel arcu ac dolor mattis condimentum et eu turpis. Mauris mattis magna arcu, a tempor elit lobortis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla commodo sem a dolor porta lobortis. Maecenas felis felis, sodales eget lorem non, vestibulum condimentum eros. Vestibulum dapibus libero dui. Sed bibendum erat id purus imperdiet.</p>
          <Link to="/practice-areas/family-law">
            <button
                 className="bio-button"
                 type="button"
                 >
               Learn More...</button>
        </Link>
      </div>
      <div className="slide3">
        <h1 className="slide-title">Criminal Law</h1>
        <p className="slide-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id mauris ac erat sollicitudin tincidunt. Nulla cursus tortor non sapien ultricies varius. Praesent vel arcu ac dolor mattis condimentum et eu turpis. Mauris mattis magna arcu, a tempor elit lobortis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla commodo sem a dolor porta lobortis. Maecenas felis felis, sodales eget lorem non, vestibulum condimentum eros. Vestibulum dapibus libero dui. Sed bibendum erat id purus imperdiet.</p>
          <Link to="/practice-areas-criminal-law">
            <button
                 className="bio-button"
                 type="button"
                 >
               Learn More...</button>
        </Link>
      </div>
      <div className="slide4">
        <h1 className="slide-title">Criminal Law</h1>
        <p className="slide-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id mauris ac erat sollicitudin tincidunt. Nulla cursus tortor non sapien ultricies varius. Praesent vel arcu ac dolor mattis condimentum et eu turpis. Mauris mattis magna arcu, a tempor elit lobortis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla commodo sem a dolor porta lobortis. Maecenas felis felis, sodales eget lorem non, vestibulum condimentum eros. Vestibulum dapibus libero dui. Sed bibendum erat id purus imperdiet.</p>
          <Link to="/practice-areas-criminal-law">
            <button
                 className="bio-button"
                 type="button"
                 >
               Learn More...</button>
        </Link>
      </div>



    </AliceCarousel>
</div>
  )
}

export default PracCarousel
