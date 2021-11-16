import React, { useEffect } from 'react';
import './About-Me.css';
import { Power3, TimelineLite } from "gsap";
import { motion } from "framer-motion";
import Navbar from '../Nav_helper';

export default function aboutMe() {

  return (

    <div className='heatpack-container' style={{ overflowX: 'hidden' }}>
      <Navbar />
      <div className='about-me'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 3 }}
        >
          <img className='img-settings1' src='images/Fungi-circle.png'
            alt='Photography-Icon'
          />
        </motion.div>
        <div className='about-me-passage'>
          <motion.p
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.75, duration: 1 }}
            className='section1'
          >
            An idea brought about by a passion for technology and photography
          </motion.p>
          <p className='section5'> Website Designed and Coded by Olivine</p>
          <p className='section2'>
            In 2021. an avid photographer had the desire to exhibit his work without the means to acquire a physical space. Relying
            on his technological background, an idea of using a virtual space instead, came about.
          </p>
          <p className='section3'>
            Once the initial Exhibit was finished, we started thinking about how this idea could help entities in different industries.

          </p>

          <p className='section1'> Here are some benefits of having a virtual space to accompany or replace a physical space</p>
          <p className='section1'>1)Accessibility/Reach</p>
          <p className='section6'> By having a virtual space you eliminate geographrical position being a factor when it comes to who can and cannot make the journey to view your physical space. This makes your exhibit more accessible to audiences all over the world, thereby increasing the reach of your the venue you are showcasing virtually</p>
          <p className='section1'>2)Proofing</p>
          <p className='section6'> Being able to see an immersive virtual experience before fully commiting on building the physical experience</p>
          <p className='section1'>3) No Time Constraints</p>
          <p className='section6'> The virtual space is open 24/7, 365!</p>
          <p className='section4'> What services do we offer?</p>
          <p className='section1'> At Olivine we currently offer Website development services and virtual space services. We are working hard to offer the sale of prints from various photographers along with mobile applivation development services</p>
        </div>
      </div>
    </div>
  );
}