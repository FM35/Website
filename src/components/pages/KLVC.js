import React, { useEffect, useState } from 'react';
import './HeatPack.css';
import { motion } from "framer-motion";
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { useLocation } from "react-router-dom";
import Navbar from '../Nav_helper';

export default function HeatPack() {

  //Comments are the same as Olivine
  const [animate, setAnimate] = useState(false);
  const handleClick = () => setAnimate(!animate);

  const location = useLocation();
  const height = location.state;

  let polaroid1 = CSSRulePlugin.getRule('.polaroid-container-1');
  let polaroid2 = CSSRulePlugin.getRule('.polaroid-container-2');
  let polaroid3 = CSSRulePlugin.getRule('.polaroid-container-3');
  let polaroids = CSSRulePlugin.getRule('.polaroids');

  const mediaQuery = window.matchMedia('(min-width: 500px) and (max-width: 1082px)')
  const media2Query = window.matchMedia('(min-width: 1082px) and (max-width: 1421px)')
  const media3Query = window.matchMedia('(min-width: 1421px)')
  const media4Query = window.matchMedia('(min-width: 350px) and (max-width: 500px)')
  const media5Query = window.matchMedia('(max-width: 350px)')

  mediaQuery.addListener(handleChange);
  media2Query.addListener(handleChange2);
  media3Query.addListener(handleChange3);
  media4Query.addListener(handleChange4);
  media5Query.addListener(handleChange5);

  function onStart() {
    setTimeout(handleClick, 1000);
  }

  function handleChange(e) {

    if (e.matches && animate) {
      polaroid1.gridColumn = '1/4'
      polaroid2.gridColumn = '4/7'
      polaroid3.gridColumn = '1/7'
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
      polaroid3.gridColumn = '1/7'
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
      polaroid3.gridColumn = '1/7'
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
      polaroid1.gridColumn = '1/4'
      polaroid2.gridColumn = '4/7'
      polaroid3.gridColumn = '1/7'
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
      polaroid1.gridColumn = '1/4'
      polaroid2.gridColumn = '4/7'
      polaroid3.gridColumn = '1/7'
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

  handleChange(mediaQuery);
  handleChange2(media2Query);
  handleChange3(media3Query);
  handleChange4(media4Query);
  handleChange5(media5Query);

  useEffect(() => {
    window.scrollTo(0, height);
  }, []);
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


        <motion.span variants={letter}>K</motion.span>
        <motion.span variants={letter}>L</motion.span>
        <motion.span variants={letter}>V</motion.span>
        <motion.span variants={letter}>C</motion.span>
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
            <motion.span variants={letter}>S</motion.span>
            <motion.span variants={letter}>t</motion.span>
            <motion.span variants={letter}>r</motion.span>
            <motion.span variants={letter}>e</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>m</motion.span>
            <motion.span variants={letter}>i</motion.span>
            <motion.span variants={letter}>n</motion.span>
            <motion.span variants={letter}>g</motion.span>
          </li>

          <li>
            <motion.span variants={letter}>S</motion.span>
            <motion.span variants={letter}>t</motion.span>
            <motion.span variants={letter}>r</motion.span>
            <motion.span variants={letter}>e</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>m</motion.span>
            <motion.span variants={letter}>i</motion.span>
            <motion.span variants={letter}>n</motion.span>
            <motion.span variants={letter}>g</motion.span>
          </li>

          <li>
            <motion.span variants={letter}>S</motion.span>
            <motion.span variants={letter}>t</motion.span>
            <motion.span variants={letter}>r</motion.span>
            <motion.span variants={letter}>e</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>m</motion.span>
            <motion.span variants={letter}>i</motion.span>
            <motion.span variants={letter}>n</motion.span>
            <motion.span variants={letter}>g</motion.span>
          </li>

          <li> Streaming</li>
          <li> Streaming</li>
          <li> Streaming</li>
          <li> Streaming</li>
        </motion.ul>
      </motion.div>
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
            transition: { delay: 0.2, ...transition },
          }}

          className='polaroid-container-1'>
          <img src='images/Pato-3.jpg'
            alt='Photography-Icon'
          />
        </motion.div>

        <motion.div
          animate={{
            opacity: 0,
            width: '0px',
            transition: { delay: 0.2, ...transition },
          }}

          className='polaroid-container-2'>
          <img src='images/Olivine-4.jpg'
            alt='Photography-Icon'
          />
        </motion.div>

        <motion.div

          animate={{

            y: 200,
            opacity: [1, 0, 1],
            transition: { delay: 0.2, ...transition },

          }}
          onAnimationStart={onStart}
          exit={handleClick}

          className='polaroid-container-3'>
          <img src='images/KLVC-3.jpg'
            alt='Photography-Icon'
          />
        </motion.div>
      </div>

      <div style={{ top: '100px', color: 'white' }} className='image-container'>
        <img className='img-settings' src='images/KLVC-4.jpg'
          alt='Photography-Icon'
        />
        <div style={{ width: '800px' }}>
          <ul>
            <li>Processor: AMD Ryzen 5 3600</li>
            <li>Memory: G. Skill Aegis 8GB</li>
            <li>Storage: Kingston 240GB SATA III SSD</li>
            <li>Motherboard: ASUS Prime A320I-K/CSM</li>
            <li>Video Card: ASUS GeForce GT 1030 2GB</li>
            <li>Case: Fractal Design Node 202 Black with Integra SFX 450W PSU</li>
            <li>Monitor: Lepow 15.6 Inch Full HD Portable Monitor</li>
          </ul>
        </div>
      </div>

      <div style={{ top: '100px' }} className='image-container'>
        <img className='img-settings' src='images/KLVC-1.jpg'
          alt='Photography-Icon'
        />
        <div style={{ width: '800px', color: 'white' }}>
          <p>
            Designed for presenting slides and streaming church services online. Compactness was also a key feature for this build with us using a computer case that's less than half the size of regular cases.
          </p>
        </div>
      </div>

      <div style={{ top: '100px' }} className='image-container'>
        <img className='img-settings' src='images/KLVC-2.jpg'
          alt='Photography-Icon'
        />
        <div style={{ width: '800px', color: 'white' }}>
          <p>
            Coupled with a portable monitor, wireless keyboard and mouse to make the entire system lightweight and easily transportable.
          </p>
        </div>
      </div>
    </div>
  );
}