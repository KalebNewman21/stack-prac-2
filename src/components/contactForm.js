import React, {useState} from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const {name, number,  email,  message } = e.target.elements;
    let details = {
      name: name.value,
      number: number.value,
      email: email.value,
      message: message.value
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" required/>
      </div>
      <div>
        <label htmlFor="number">Number:</label>
        <input type="text" id="number" required/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required/>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <input type="message" id="message" required/>
      </div>
      <button type="submit">{status}</button>
    </form>
  )
};

export default ContactForm
