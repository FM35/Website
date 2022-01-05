import React, { useEffect, useState } from 'react';
import './HeatPack.css';
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from '../Nav_helper';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

export default function Olivine() {

  const [animate, setAnimate] = useState(false);
  const handleClick = () => setAnimate(!animate);

  //Getting the scrool position from PCBuilds for the animation
  const location = useLocation();
  const height = location.state;

  //Retrieving Css styles for the mentioned classNames
  let polaroid1 = CSSRulePlugin.getRule('.polaroid-container-1');
  let polaroid2 = CSSRulePlugin.getRule('.polaroid-container-2');
  let polaroid3 = CSSRulePlugin.getRule('.polaroid-container-3');
  let polaroids = CSSRulePlugin.getRule('.polaroids');

  //Putting the different media size queries into consts
  const mediaQuery = window.matchMedia('(min-width: 500px) and (max-width: 1082px)')
  const media2Query = window.matchMedia('(min-width: 1082px) and (max-width: 1421px)')
  const media3Query = window.matchMedia('(min-width: 1421px)')
  const media4Query = window.matchMedia('(min-width: 350px) and (max-width: 500px)')
  const media5Query = window.matchMedia('(max-width: 350px)')

  //Adding listeners for each media query
  mediaQuery.addListener(handleChange);
  media2Query.addListener(handleChange2);
  media3Query.addListener(handleChange3);
  media4Query.addListener(handleChange4);
  media5Query.addListener(handleChange5);

  //Changing the value of animate to true
  function onStart() {
    setTimeout(handleClick, 1000);
  }

  //Setting the grid positions for each media query before and after the animation
  function handleChange(e) {

    if (e.matches && animate) {

      polaroid2.gridColumn = '1/7'
      polaroid3.left = '0'
      polaroids.marginTop = '80px'
    }

    if (e.matches && !animate) {

      polaroid1.gridColumn = '1/7'
      polaroid2.gridColumn = '1/7'
      polaroid3.gridColumn = '1/7'
      polaroid3.left = '0'
    }

  }

  function handleChange2(e) {

    if (e.matches && animate) {
      polaroid2.gridColumn = '1/7'
      polaroid3.left = '0'
      polaroids.marginTop = '80px'
    }
    if (e.matches && !animate) {
      polaroid1.gridColumn = '1/4'
      polaroid2.gridColumn = '4/7'
      polaroid3.gridColumn = '2/5'
      polaroid3.left = '17.5%'
    }
  }

  function handleChange3(e) {

    if (e.matches && animate) {
      polaroid2.gridColumn = '1/7'
      polaroid3.left = '0'
      polaroids.marginTop = '80px'
    }

    if (e.matches && !animate) {
      polaroid1.gridColumn = '1/3'
      polaroid2.gridColumn = '3/5'
      polaroid3.gridColumn = '5/7'
      polaroid3.left = '0'
    }
  }

  function handleChange4(e) {

    if (e.matches && animate) {
      polaroid2.gridColumn = '1/7'
      polaroid3.left = '0'
      polaroids.marginTop = '20px'
    }

    if (e.matches && !animate) {
      polaroid1.gridColumn = '1/7'
      polaroid2.gridColumn = '1/7'
      polaroid3.gridColumn = '1/7'
      polaroid3.left = '0'
      polaroids.marginTop = '20px'
    }
  }

  function handleChange5(e) {

    if (e.matches && animate) {

      polaroid2.gridColumn = '1/7'
      polaroid3.left = '0'
      polaroids.marginTop = '0px'
    }

    if (e.matches && !animate) {
      polaroid1.gridColumn = '1/7'
      polaroid2.gridColumn = '1/7'
      polaroid3.gridColumn = '1/7'
      polaroid3.left = '0'
      polaroids.marginTop = '0px'
    }
  }

  //Intial function fire for grid positions
  handleChange(mediaQuery);
  handleChange2(media2Query);
  handleChange3(media3Query);
  handleChange4(media4Query);
  handleChange5(media5Query);

  //Scrolls to similar height as PCBuild
  useEffect(() => {
    window.scrollTo(0, height);
  });

  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const staggerEffect = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {

        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: 1,

      },
    },
  };

  const letter = {
    initial: {
      y: 100,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ...transition },
    },
  };

  return (

    <div className='heatpack-container' style={{ overflowX: 'hidden' }}>
      <Navbar />
      <motion.div variants={staggerEffect}
        initial="initial"
        animate="animate"
        className='heatpack-title-container'>


        <motion.span variants={letter}>O</motion.span>
        <motion.span variants={letter}>l</motion.span>
        <motion.span variants={letter}>i</motion.span>
        <motion.span variants={letter}>v</motion.span>
        <motion.span variants={letter}>i</motion.span>
        <motion.span variants={letter}>n</motion.span>
        <motion.span variants={letter}>e</motion.span>
        <motion.span variants={letter}>'</motion.span>
        <motion.span variants={letter}>s</motion.span>

      </motion.div>
      <motion.div className='marquee'>
        <motion.ul

          variants={staggerEffect}
          initial="initial"
          animate="animate"
          className='marquee-content'>
          <li>
            <motion.span variants={letter}>M</motion.span>
            <motion.span variants={letter}>u</motion.span>
            <motion.span variants={letter}>l</motion.span>
            <motion.span variants={letter}>t</motion.span>
            <motion.span variants={letter}>i</motion.span>
            <motion.span variants={letter}>p</motion.span>
            <motion.span variants={letter}>u</motion.span>
            <motion.span variants={letter}>r</motion.span>
            <motion.span variants={letter}>p</motion.span>
            <motion.span variants={letter}>o</motion.span>
            <motion.span variants={letter}>s</motion.span>
            <motion.span variants={letter}>e</motion.span>
          </li>

          <li>
            <motion.span variants={letter}>M</motion.span>
            <motion.span variants={letter}>u</motion.span>
            <motion.span variants={letter}>l</motion.span>
            <motion.span variants={letter}>t</motion.span>
            <motion.span variants={letter}>i</motion.span>
            <motion.span variants={letter}>p</motion.span>
            <motion.span variants={letter}>u</motion.span>
            <motion.span variants={letter}>r</motion.span>
            <motion.span variants={letter}>p</motion.span>
            <motion.span variants={letter}>o</motion.span>
            <motion.span variants={letter}>s</motion.span>
            <motion.span variants={letter}>e</motion.span>
          </li>

          <li>
            <motion.span variants={letter}>M</motion.span>
            <motion.span variants={letter}>u</motion.span>
            <motion.span variants={letter}>l</motion.span>
            <motion.span variants={letter}>t</motion.span>
            <motion.span variants={letter}>i</motion.span>
            <motion.span variants={letter}>p</motion.span>
            <motion.span variants={letter}>u</motion.span>
            <motion.span variants={letter}>r</motion.span>
            <motion.span variants={letter}>p</motion.span>
            <motion.span variants={letter}>o</motion.span>
            <motion.span variants={letter}>s</motion.span>
            <motion.span variants={letter}>e</motion.span>
          </li>

          <li> Multipurpose</li>
          <li> Multipurpose</li>
          <li> Multipurpose</li>
          <li>  Multipurpose</li>
        </motion.ul>
      </motion.div >
      <motion.div
        variants={staggerEffect}
        initial="initial"
        animate="animate"
        className='computer'>

        <motion.span variants={letter}>C</motion.span>
        <motion.span variants={letter}>o</motion.span>
        <motion.span variants={letter}>m</motion.span>
        <motion.span variants={letter}>p</motion.span>
        <motion.span variants={letter}>u</motion.span>
        <motion.span variants={letter}>t</motion.span>
        <motion.span variants={letter}>e</motion.span>
        <motion.span variants={letter}>r</motion.span>
      </motion.div>
      <div className='polaroids'>

        <motion.div
          animate={{
            opacity: 0,
            width: '0px',
            height: '0px',
            transition: { delay: 0.2, ...transition },
          }}

          className='polaroid-container-1'>
          <img src='images/Pato-3.png'
            alt='Photography-Icon'
          />
        </motion.div>

        <motion.div animate={{

          y: 200,
          opacity: [1, 0, 1],
          transition: { delay: 0.2, ...transition },

        }}
          onAnimationStart={onStart}
          exit={handleClick}

          className='polaroid-container-2'>
          <img src='images/Olivine-4.png'
            alt='Photography-Icon'
          />
        </motion.div>

        <motion.div
          animate={{
            opacity: 0,
            width: '0px',
            height: '0px',
            transition: { delay: 0.2, ...transition },
          }}

          className='polaroid-container-3'>
          < img src='images/KLVC-3.png'
            alt='Photography-Icon'
          />
        </motion.div>
      </div>

      <div style={{ top: '100px' }} className='image-container'>
        <img className='img-settings' src='images/Olivine-2.png'
          alt='Photography-Icon'
        />
        <div style={{ width: '800px', color: 'white' }}>
          <ul>
            <li>Processor: AMD Ryzen 7 2700X</li>
            <li>Memory: Kingston HyperX Fury 16GB (2 X 8GB) DDR4</li>
            <li>Storage: Crucial MX500 250GB 3D NAND SSD and Seagate Barracuda 2TB HDD</li>
            <li>Motherboard: ASUS Prime B450M-A</li>
            <li>Video Card: MSI Gaming GeForce GTX 1660 Ti 192-bit 6GB GDRR6</li>
            <li>Case: Corsair SPEC-DELTA RGB</li>
            <li>Power Supply: Thermeltake Smart BX1 650W Bronze</li>
          </ul>

        </div>
      </div>

      <div style={{ top: '100px' }} className='image-container'>
        <img className='img-settings' src='images/Olivine-3.png'
          alt='Photography-Icon'
        />
        <div style={{ width: '800px', color: 'white' }}>
          <p>
            This computer was designed for handling large data science and machine learning projects, along with frontend development and playing large open world games in the highest possible settings.
          </p>
        </div>
      </div>

      <div style={{ top: '100px' }} className='image-container'>
        <img className='img-settings' src='images/Olivine-1.png'
          alt='Photography-Icon'
        />
        <div style={{ width: '800px', color: 'white' }}>
          <p>
            Computer has four RGB fans(3 in the front and one in the case) that come in with multiple built in effects like colour cycle, static , breathing to name a few.
          </p>
        </div>
      </div>
    </div >
  );
}