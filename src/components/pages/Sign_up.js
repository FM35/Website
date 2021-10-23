import React from 'react';
import './Portfolio.css';

export default function Services() {

  return (

    <form action="https://formsubmit.co/fungaimawoyo@gmail.com" method="POST">
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="first-name" placeholder="First Name" required />
      <input type="text" name="last-name" placeholder="Last Name" required />
      <input type="email" name="email" placeholder="Email Address" required />
      <input type="message" name="message" placeholder="Type your message here" required />
      <button type="submit">Send</button>
    </form>
  );
}
