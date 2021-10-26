import React from 'react';
import './Sign_up.css';

export default function Services() {

  return (
    <div className='about-me-container'>

      <h1>Contact Me</h1>
      <p>Contact me for any business enquries that align with Website/FrontEnd developing, Computer Builds, Virtual Exhibit or photography</p>
      <form className='form' action="https://formsubmit.co/fungaimawoyo@gmail.com" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <input style={{ width: '400px' }} type="text" name="full-name" placeholder="Full Name" required />
        <input style={{ width: '400px' }} type="text" name="subject" placeholder="Subject" required />
        <input style={{ width: '400px' }} type="email" name="email" placeholder="Email Address" required />
        <textarea style={{ width: '400px', height: '319px' }} placeholder="Type Your Message Here" required></textarea>
        <button style={{ width: '100px' }} type="submit">Send</button>
      </form>
    </div>
  );
}
