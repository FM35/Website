import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import { motion } from "framer-motion";
import useIntro from './pages/TimeStampHook';

function HeroSection() {

  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  const [click1, setClick1] = useState(true);
  const handleClick1 = () => setClick1(!click1);
  const showAnimation = useIntro();

  return (

    //Self explanatory

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='hero-container'>
      <motion.p animate={showAnimation ? { opacity: [0, 1, 0], transition: { delay: 0.5, duration: 5 } } : { opacity: 0 }} className='welcomeMessage'><br />Welcome to Olivine! <br /><br /> A technology and photography startup based in Calgary, Canada.</motion.p>
      <div className='img-container'>
        <motion.figure initial={showAnimation ? { opacity: 0, x: -1800 } : { opacity: 1, x: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 4.5, type: 'spring', stiffness: 25, damping: 10, ease: [0.6, 0.01, -0.05, 0.9] }}
          className={click ? 'photo-icon' : 'display-none'} onClick={handleClick}>
          <img className='icons' src='images/photography.png'
            alt='Photography-Icon'
          />
          <figcaption className="figcap1"> Photography</figcaption>
        </motion.figure>

        <ul className={click ? 'hide' : 'show'}>
          <motion.li
            whileHover={{
              scale: 1.3,
              originX: 0
            }}

            transition={{ type: 'spring', stiffness: 300 }}
            className='photo-item'>
            <Link to='/virtual-exhibit' className='item-links'>
              Virtual Exhibit
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.3,
              originX: 0
            }}

            transition={{ type: 'spring', stiffness: 300 }}
            className='photo-item'>
            <Link
              to='/photography-portfolio-page-one'
              className='item-links'
            >
              Photography Portfolio
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.3,
              originX: 0
            }}


            transition={{ type: 'spring', stiffness: 300 }}
            className='photo-item'>
            <Link
              to='/about-us'
              className='item-links'
            >
              About Us
            </Link>
          </motion.li>
        </ul>

      </div>

      <div className='img-container'>
        <motion.figure
          initial={showAnimation ? { opacity: 0, x: 1800 } : { opacity: 1, x: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 4.5, type: 'spring', stiffness: 25, damping: 10, ease: [0.6, 0.01, -0.05, 0.9] }}
          className={click1 ? 'tech-icon' : 'display-none'} onClick={handleClick1}>
          <img className='icons' src='images/technology.png'
            alt='Tech-Icon'
          />
          <figcaption style={{ color: '#0b0b0b' }} className="figcap2"> Technology </figcaption>
        </motion.figure>


        <ul className={click1 ? 'hide' : 'show'}>
          <motion.li
            whileHover={{
              scale: 1.3,
              originX: 0
            }}

            transition={{ type: 'spring', stiffness: 300 }}
            className='photo-item'>
            <Link to='/computer-portfolio' style={{ color: 'black' }} className='item-links'>
              Computer Portfolio
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.3,
              originX: 0
            }}

            transition={{ type: 'spring', stiffness: 300 }}
            className='photo-item'>
            <Link
              to='/technology-portfolio-page-one'
              style={{ color: 'black' }}
              className='item-links'
            >
              Technology Portfolio
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.3,
              originX: 0
            }}

            transition={{ type: 'spring', stiffness: 300 }}
            className='photo-item'>
            <Link
              to='/contact-us'
              style={{ color: 'black' }}
              className='item-links'
            >
              Contact Us
            </Link>
          </motion.li>
        </ul>
      </div>
    </motion.div>

  );
}

export default HeroSection;
