import React from 'react';
import './Contact-Us.css';
import Navbar from '../Nav_helper';
import { motion } from "framer-motion";

export default function ContactUs() {

  //Self explanatory

  return (
    <motion.div className='about-me-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25, duration: 1 }}
    >
      <Navbar />
      <div className='contact-me'>
        <h1 className='position-1'>Contact Us</h1>
        <p className='position-1'>We offer virtual, website and computer building services. Let us know how we can best serve you!</p>
        <div className='position-2'>
          <form className='form-inline' action="https://formsubmit.co/fungaimawoyo@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="full-name" placeholder="Full Name" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <textarea placeholder="Type Your Message Here" required></textarea><br />
            <button className='button' type="submit">Send</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
