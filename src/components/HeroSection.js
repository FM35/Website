import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { Power3, Power2, TimelineLite } from "gsap";
import { motion } from "framer-motion";

function HeroSection() {

  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  const [click1, setClick1] = useState(true);
  const handleClick1 = () => setClick1(!click1);

  const tl = new TimelineLite();

  let imageReveal1 = CSSRulePlugin.getRule('.img-container::after');
  let imageReveal2 = CSSRulePlugin.getRule('.img-container2::after');
  let imageReveal3 = CSSRulePlugin.getRule('.hero-container::after');

  useEffect(() => {
    tl.to(imageReveal3, 2, { height: "0%", ease: Power3.easeInOut })
      .to([imageReveal1, imageReveal2], 2, { width: "0%", ease: Power2.easeInOut, delay: -1.5 });
  });

  const reset_body = useRef();

  useEffect(() => {

    document.body.style.height = `${reset_body.current.getBoundingClientRect().height}px`;

  }, []);

  return (

    <motion.div
      ref={reset_body}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className='hero-container'>

      <div className='img-container'>
        <motion.figure whileHover={{ scale: 1.1 }} className={click ? 'photo-icon' : 'display-none'} onClick={handleClick}>
          <img src='images/photography.png'
            alt='Photography-Icon'
            width='245'
            height='240'
          />
          <figcaption className="figcap1"> Photography</figcaption>
        </motion.figure>


        <ul className={click ? 'hide' : 'show'}>
          <motion.li
            whileHover={{
              scale: 1.3,
              originX: 0
            }}

            whileTap={{
              scale: 0.8,
            }}

            transition={{ type: 'spring', stiffness: 300 }}
            className='photo-item'>
            <Link to='/VirtualExhibit' className='item-links'>
              Virtual Exhibit
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.3,
              originX: 0
            }}

            whileTap={{
              scale: 0.8,
            }}

            transition={{ type: 'spring', stiffness: 300 }}
            className='photo-item'>
            <Link
              to='/port-page-one'
              className='item-links'
            >
              Portfolio
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.3,
              originX: 0
            }}

            whileTap={{
              scale: 0.8,
            }}

            transition={{ type: 'spring', stiffness: 300 }}
            className='photo-item'>
            <Link
              to='/HeatPack'
              className='item-links'
            >
              Instagram Page
            </Link>
          </motion.li>
        </ul>

      </div>

      <div className='img-container2'>
        <motion.figure
          whileHover={{
            scale: 1.1,
          }}

          whileTap={{
            scale: 0.8,
          }}

          transition={{ ease: [0.6, 0.01, -0.05, 0.9] }}
          className={click1 ? 'tech-icon' : 'display-none'} onClick={handleClick1}>
          <img src='images/laptop.png'
            alt='Tech-Icon'
            width='275'
            height='235'
          />
          <figcaption className="figcap2"> Technology </figcaption>
        </motion.figure>


        <ul className={click1 ? 'hide' : 'show'}>
          <motion.li
            whileHover={{
              scale: 1.3,
              originX: 0
            }}

            whileTap={{
              scale: 0.8,
            }}

            transition={{ type: 'spring', stiffness: 300 }}
            className='photo-item'>
            <Link to='/pc_builds' className='item-links1'>
              Computer Builds
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.3,
              originX: 0
            }}

            whileTap={{
              scale: 0.8,
            }}

            transition={{ type: 'spring', stiffness: 300 }}
            className='photo-item'>
            <Link
              to='/sign-up'
              className='item-links1'
            >
              Mobile and Web Apps
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.3,
              originX: 0
            }}

            whileTap={{
              scale: 0.8,
            }}

            transition={{ type: 'spring', stiffness: 300 }}
            className='photo-item'>
            <Link
              to='/sign-up'
              className='item-links1'
            >
              Contact Info
            </Link>
          </motion.li>
        </ul>
      </div>
    </motion.div>

  );
}

export default HeroSection;
