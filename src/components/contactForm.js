import React, {useState} from 'react';
import '../compCSS/contactForm.css'
import {ReactComponent as PhoneIcon} from './smartphone-call.svg';
import {ReactComponent as MapIcon} from './placeholder-svgrepo-com.svg';



const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const {fname, lname, numba,  email,  message } = e.target.elements;
    let details = {
      fname: fname.value,
      lname: lname.value,
      numba: numba.value,
      email: email.value,
      message: message.value
    };
    let response = await fetch("https://newmanlawfirm.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);

    setFirstName("");
    setLastName("");
    setNumber("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
    <div className="contact-form">
    <form className="form" id="contacting" onSubmit={handleSubmit}>
    <div className="contact-form-content">
      <div className="non-message-cont">
      <div className="contact-element">
        <input
               type="text"
               className="contact-input"
               id="fname"
               value={fname}
               placeholder="First Name"
               onChange={(e) => setFirstName(e.target.value)}
               required/>
      </div>
      <div className="contact-element">
        <input
               type="text"
               className="contact-input"
               id="lname"
               value={lname}
               placeholder="Last Name"
               onChange={(e) => setLastName(e.target.value)}
               required/>
      </div>
      <div className="contact-element">
        <input
          className="contact-input"
          type="text"
          id="numba"
          value={number}
          placeholder="Number"
          onChange={(e) => setNumber(e.target.value)}
          required/>
      </div>
      <div className="contact-element">
        <input
          className="contact-input"
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>
      </div>
      </div>
      <div className="message-content" >
        <textarea
          className="contact-input-message"
          form="contacting"
          id="message"
          value={message}
          placeholder="Enter Message Here..."
          onChange={(e) => setMessage(e.target.value)}
          required/>
        <button className="contact-button"type="submit">{status}</button>
      </div>
      </div>
    </form>
    <div className="other-cont">
      <div className="mappie-container"><iframe className="mappie"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.441430350781!2d-81.61800558507966!3d30.309959381786424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b714737f2bdb%3A0x107d1dfb8f1939fc!2sNewman%20Law%20Firm%2C%20PA!5e0!3m2!1sen!2sus!4v1641072614306!5m2!1sen!2sus"  allowfullscreen="" loading="lazy"></iframe></div>
      <div className="other-cont-text">
        <p className="box2-address"><span>{<MapIcon/>}</span><strong>4741 Atlantic Blvd, Suite B-6, 32207</strong></p>
        <p className="box2-numbo"><span>{<PhoneIcon/>}</span><a className="box2-number"href="tel:9043558835">(904) 355-8835</a></p>
      </div>
     </div>
    </div>
    </>
  )
};

export default ContactForm
