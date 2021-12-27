import React, {useState, useEffect} from 'react'
import '../compCSS/bio.css'
import { Link } from 'react-router-dom';


const Bio = (props) => {
  const [pronounced, setPronounced] = useState(false)

  const {title, description, img, path} = props;

  return (
    <div className="bio" >
    <div className="bio-boxone">
      <img className="bio-image" src={img} alt=""/>
    </div>
    <div className="bio-boxtwo">
      <div className="bio-boxtwo-content">
      <h3 className="bio-title">{title}</h3>
      <p className="bio-description">{description}</p>
      </div>
  <Link to={path}>
    <button
         className="bio-button"
         type="button"
         >
       Learn More...</button>
    </Link>
      </div>
    </div>
  )
}

export default Bio
