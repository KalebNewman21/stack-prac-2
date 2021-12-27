import React from 'react'
import ContactForm from './contactForm.js'
import '../compCSS/contact.css'
import ContactNavbar from './contactNavbar.js'

const Contact = () => {
  return (
    <>
  <div className="kontent">
    <ContactNavbar/>
      <h1 className="content-h1">Contact Newman Law Firm PA.</h1>
    <div className="content-paragraph">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non quam consequat odio hendrerit commodo sit amet ac velit. Suspendisse venenatis ligula sit amet placerat convallis. Ut at bibendum sapien. Cras odio elit, euismod id iaculis et, rutrum in lectus. Donec dignissim nulla ac sem tempor pellentesque sit amet sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non quam consequat odio hendrerit commodo sit amet ac velit. Suspendisse venenatis ligula sit amet placerat convallis. Ut at bibendum sapien. Cras odio elit, euismod id iaculis et, rutrum in lectus. Donec dignissim nulla ac sem tempor pellentesque sit amet sed.</p>
</div>


      <div className="contact-container">
      <ContactForm/>
      </div>
      <div className="copyright">.</div>
    </div>
    </>
  )
}

export default Contact
