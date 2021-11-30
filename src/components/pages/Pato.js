import React, { useEffect, useState } from 'react';
import './HeatPack.css';
import { motion } from "framer-motion";
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { useLocation } from "react-router-dom";
import Navbar from '../Nav_helper';

export default function Pato() {

  //Comments are the same as Olivine
  const [animate, setAnimate] = useState(false);
  const handleClick = () => setAnimate(!animate);
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

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
    setTimeout(handleChange2(media2Query), 1000);
    setTimeout(handleChange3(media3Query), 1000);
  }

  function handleChange(e) {

    if (e.matches && animate) {

      polaroid1.gridColumn = '1/7'
      polaroid3.left = '0'
      polaroids.marginTop = '130px'
    }

    if (e.matches && !animate) {

      polaroid1.gridColumn = '2/6'
      polaroid2.gridColumn = '2/6'
      polaroid3.gridColumn = '2/6'
      polaroid3.left = '0'
    }
  }

  function handleChange2(e) {

    if (e.matches && animate) {
      polaroid1.gridColumn = '1/7'
      polaroid3.left = '0'
      polaroids.marginTop = '130px'
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
      polaroid1.gridColumn = '1/7'
      polaroid3.left = '0'
      polaroids.marginTop = '130px'
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
      polaroid1.gridColumn = '1/7'
      polaroid3.left = '0'
      polaroids.marginTop = '20px'
    }

    if (e.matches && !animate) {
      polaroid1.gridColumn = '2/6'
      polaroid2.gridColumn = '2/6'
      polaroid3.gridColumn = '2/6'
      polaroid3.left = '0'
      polaroids.marginTop = '20px'
    }
  }

  function handleChange5(e) {

    if (e.matches && animate) {

      polaroid1.gridColumn = '1/7'
      polaroid3.left = '0'
      polaroids.marginTop = '0px'
    }

    if (e.matches && !animate) {
      polaroid1.gridColumn = '2/6'
      polaroid2.gridColumn = '2/6'
      polaroid3.gridColumn = '2/6'
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
  });

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

    <div className='heatpack-container' style={{ overflowX: 'hidden', }}>
      <Navbar />
      <motion.div variants={staggerEffect}
        initial="initial"
        animate="animate"
        className='heatpack-title-container'>


        <motion.span variants={letter}>P</motion.span>
        <motion.span variants={letter}>a</motion.span>
        <motion.span variants={letter}>t</motion.span>
        <motion.span variants={letter}>o</motion.span>
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
            <motion.span variants={letter}>P</motion.span>
            <motion.span variants={letter}>r</motion.span>
            <motion.span variants={letter}>o</motion.span>
            <motion.span variants={letter}>g</motion.span>
            <motion.span variants={letter}>r</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>m</motion.span>
            <motion.span variants={letter}>m</motion.span>
            <motion.span variants={letter}>i</motion.span>
            <motion.span variants={letter}>n</motion.span>
            <motion.span variants={letter}>g</motion.span>
          </li>

          <li>
            <motion.span variants={letter}>P</motion.span>
            <motion.span variants={letter}>r</motion.span>
            <motion.span variants={letter}>o</motion.span>
            <motion.span variants={letter}>g</motion.span>
            <motion.span variants={letter}>r</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>m</motion.span>
            <motion.span variants={letter}>m</motion.span>
            <motion.span variants={letter}>i</motion.span>
            <motion.span variants={letter}>n</motion.span>
            <motion.span variants={letter}>g</motion.span>
          </li>

          <li>
            <motion.span variants={letter}>P</motion.span>
            <motion.span variants={letter}>r</motion.span>
            <motion.span variants={letter}>o</motion.span>
            <motion.span variants={letter}>g</motion.span>
            <motion.span variants={letter}>r</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>m</motion.span>
            <motion.span variants={letter}>m</motion.span>
            <motion.span variants={letter}>i</motion.span>
            <motion.span variants={letter}>n</motion.span>
            <motion.span variants={letter}>g</motion.span>
          </li>

          <li> Programming</li>
          <li> Programming</li>
          <li> Programming</li>
          <li> Programming</li>
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

            y: 200,
            opacity: [1, 0, 1],
            transition: { delay: 0.2, ...transition },

          }}
          onAnimationStart={onStart}
          exit={handleClick}

          className='polaroid-container-1'>
          <img
            src='images/Pato-3.png'
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
          <img src='images/KLVC-3.png'
            alt='Photography-Icon'
          />
        </motion.div>
      </div>

      <div style={{ top: '100px' }} className='image-container'>
        <img className='img-settings' src='images/Pato-2.png'
          alt='Photography-Icon'
        />
        <div style={{ width: '800px' }}>
          <ul>
            <li>Processor: AMD Ryzen 5 3600</li>
            <li>Memory: Corsair Vengeance LPX 16GB (2 X 8GB) DDR4 3200MHZ</li>
            <li>Storage: Kingston 480GB SATA III SSD</li>
            <li>Motherboard: ASRock B450M Pro4</li>
            <li>Video Card: MSI Gaming GeForce GTX 1660 Ti 192-bit 6GB GDRR6</li>
            <li>Case: MSI Gaming Case</li>
            <li>Power Supply: Thermeltake Smart BX1 650W Bronze</li>
          </ul>
        </div>
      </div>

      <div style={{ top: '100px' }} className='image-container'>
        <img className='img-settings' src='images/Pato-4.png'
          alt='Photography-Icon'
        />
        <div style={{ width: '800px' }}>
          <p>
            This Computer was designed to handle backend projects for school and portfolio work. While designing this computer the client also expressed an interest in doing graphic intensive work in the future, therefore a motherboard that would allow for extra memory slots and graphics cards was chosen to make the expansion easier.
          </p>
        </div>
      </div>

      <div style={{ top: '100px' }} className='image-container'>
        <img className='img-settings' src='images/Pato-1.png'
          alt='Photography-Icon'
        />
        <div style={{ width: '800px' }}>
          <p>
            Computer allows for a tri-display system which provides a 35.5% in productivity as compared to using a single screen. A dual setup provided an increase of 25.5% in productivity over using a single screen. This increase can be attributed to being able to view more than one window or browser tab at any one time, therefore the need to minimise tabs is just replaced with a quick glance to a different monitor.
          </p>
        </div>
      </div>
    </div>
  );
}