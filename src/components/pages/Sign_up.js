import React from 'react';
import './Sign_up.css';

export default function Services() {

  return (
    <div className='about-me-container'>
      <div className='contact-me'>
        <h1 className='position-1'>Contact Me</h1>
        <p className='position-1'>Contact me for any business enquries that align with Website/FrontEnd developing, Computer Builds, Virtual Exhibit or photography</p>
        <div className='position-1'>
          <form className='form-inline' action="https://formsubmit.co/fungaimawoyo@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="full-name" placeholder="Full Name" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <textarea placeholder="Type Your Message Here" required></textarea><br />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
