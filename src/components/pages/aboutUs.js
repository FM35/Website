import React, { useEffect } from 'react';
import './aboutUs.css';
import Navbar from '../Nav_helper';
import { motion } from "framer-motion";

export default function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (

    <motion.div className='heatpack-container' style={{ overflowX: 'hidden' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25, duration: 1 }}
    >
      <Navbar />
      <div className='about-me'>
        <div style={{ width: '100%', textAlign: 'center', left: '0%' }} className='heading'>About Us</div>
        <img className='img-settings1' src='images/Fungi-circle.png'
          alt='Photography-Icon'
        />
        <div className='about-me-passage'>
          <p className='section1'>
            We are a technology and photography start up based in Calgary, Alberta that offers the following services:
          </p>
          <p style={{ opacity: 0.5 }} className='section5'> Website Designed and Coded In-house</p>
          <p className='section2'>
            1)Web and Mobile Application Development
          </p>
          <p className='section3'>
            2)Virtual Exhibit Development
          </p>
          <p className='section2'>
            3)Custom Built Desktop Computers
          </p>
          <p className='section3'>
            4)Photographic prints from various photographers
          </p>

          <p className='section1'>When it comes to any well developed solution we believe the following 3 points to be true:</p>
          <p className='section1'>1)Minimalist Design</p>
          <p className='section6'>By definition a minimalistic design limits the amount of noise an interface has inorder to emphasize necessary information. What this essentially means is taking out what is not important, so that what is important can stand out.</p>
          <p className='section1'>2)Minimalistic does not mean simplistic</p>
          <p className='section6'>Bringing in some form of excitement where possible does not hurt. This might mean smooth page transitions, animating icons into positions or playing around with text. Of course there is a place and time for this and we understand that some applications are just meant to get straight to the point.</p>
          <p className='section1'>3) An Amazing Human-Computer Interaction</p>
          <p className='section6'>This point might be the last, but if we were to be honest, it's probably the most important. We strive to make the human-computer Interaction an enjoyable, pain-free experience. This means making an interface that is straight-forward to use, has limited waiting times inbetween a button press and the return of information and has a limited number of bugs/errors. </p>
        </div>
      </div>
    </motion.div>
  );
}