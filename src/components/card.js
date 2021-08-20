import React, {useState, useEffect} from 'react'
import '../compCSS/card.css'
import { Link } from 'react-router-dom';


const Card = (props) => {
  const [pronounced, setPronounced] = useState(false)

  const onHover = (e) =>{}

  const {title, description, icon, link} = props;


  return (
    <div className="card">
      <div className="card-icon"><span>{icon}</span></div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <Link to={link}><button
         className="card-button"
         type="button" >
       Learn More...</button></Link>
    </div>
  )
}
export default Card
