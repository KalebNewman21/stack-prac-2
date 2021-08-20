import React from 'react';
import SkinnyNavbar from '../skinnyNavbar.js';
import { Link } from 'react-router-dom';
import Image1 from '../../img/justice-2756939_640.png'
import './css/criminal.css'


const Criminal = () => {
  return (
  <>
  <SkinnyNavbar/>
  <Link className="prev"to="/practice-areas">Back</Link>
    <h1 className="area-title">Criminal Law </h1>

    <div className="area">
    <div className="area-info">
    <img className="img1" src={Image1} alt=""/>
      <p className="area-description"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong> Suspendisse vel congue lorem. Mauris vehicula accumsan orci, a ornare arcu feugiat vitae. Fusce tristique neque ac mollis auctor. Aenean imperdiet ligula vitae lorem mollis auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut bibendum accumsan commodo. Vivamus tempus malesuada varius. Morbi facilisis turpis et diam mattis dictum. Nullam eleifend urna non nibh porta, vitae efficitur eros feugiat. Donec nec ornare velit, in volutpat neque. Nam consequat nisl vel sem sodales eleifend. Nullam viverra lectus in mi ultrices porta. Vestibulum cursus mollis lacinia. In ac aliquet neque, semper imperdiet massa.
        <br/><br/><br/></p>
<p className="area-description">
<strong>Maecenas quis turpis ante. Nulla eget iaculis mauris, vel maximus dolor.</strong> In nulla tellus, tempor non justo non, viverra blandit libero. Ut velit augue, dapibus eu tortor vitae, dignissim tristique tortor. Proin nisl libero, ultricies sed purus vel, tincidunt convallis neque. Integer diam ipsum, hendrerit a nibh in, consectetur dapibus lacus. Aliquam nec viverra nibh.
  <br/><br/><br/>
<strong>Aliquam id metus vel neque scelerisque facilisis. Aliquam fermentum, purus vel tristique sodales, eros lorem tristique purus, nec varius mauris est ut ipsum.</strong> Nunc id felis suscipit, tempor massa vel, mollis urna. Quisque euismod felis molestie lorem varius lobortis. Mauris vitae feugiat diam. Phasellus sit amet sapien at risus sollicitudin sodales eget at lacus. Aliquam consequat enim id erat porta mollis. Vestibulum aliquam luctus orci id dapibus. In sit amet tincidunt dui.
  <br/><br/><br/>
<strong>Integer iaculis felis neque, in tempus mi viverra nec. Morbi efficitur massa vitae tortor blandit, in dapibus felis porta. Mauris in ex urna.</strong> Vivamus at lacinia dui, eget sodales lectus. Nunc tempus pellentesque odio. Praesent sodales blandit pretium. Sed ultrices vestibulum arcu, at sodales libero dapibus ac. In quis laoreet diam. Proin blandit nisi eget leo feugiat pellentesque. Etiam sagittis quam velit, ut placerat turpis molestie id. In hendrerit, felis quis ornare convallis, nisi ante suscipit lacus, in congue velit nunc vitae sem. Nam quis metus justo. Nam efficitur odio nec lacus faucibus egestas. Nunc bibendum ipsum imperdiet, vehicula neque vel, dapibus odio. Nunc pretium enim ipsum, non accumsan nulla ornare vitae. Cras dictum lobortis risus, vitae ultricies erat imperdiet sodales.</p>
    </div>


    <div className="area-contact">Contact US!</div></div>

</>
  )
}

export default Criminal
