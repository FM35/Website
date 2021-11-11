import React, { useEffect, useState } from 'react';
import './HeatPack.css';
import { motion } from "framer-motion";
import { Power3, TimelineLite } from "gsap";
import { useLocation } from "react-router-dom";
import Navbar from '../Nav_helper';
import CSSRulePlugin from 'gsap/CSSRulePlugin';


export default function HeatPack() {

  const [animate, setAnimate] = useState(false);
  const handleClick = () => setAnimate(!animate);


  const tl = new TimelineLite();
  const location = useLocation();
  const height = location.state;

  let polaroid1 = CSSRulePlugin.getRule('.polaroid-container-1');
  let polaroid2 = CSSRulePlugin.getRule('.polaroid-container-2');
  let polaroid3 = CSSRulePlugin.getRule('.polaroid-container-3');


  const mediaQuery = window.matchMedia('(max-width: 1082px)')
  const media2Query = window.matchMedia('(min-width: 1082px) and (max-width: 1421px)')
  const media3Query = window.matchMedia('(min-width: 1421px)')

  mediaQuery.addListener(handleChange);
  media2Query.addListener(handleChange2);
  media3Query.addListener(handleChange3);

  function onStart() {

    setTimeout(handleClick, 1000);
    setTimeout(handleChange2(media2Query), 1000);
  }

  function handleChange(e) {

    if (e.matches) {

      polaroid1.gridColumn = '3/5'
      polaroid2.gridColumn = '3/5'
      polaroid3.gridColumn = '3/5'
    }

  }

  function handleChange2(e) {

    if (e.matches && animate) {
      polaroid1.gridColumn = '1/4'
      polaroid2.gridColumn = '3/5'
      polaroid3.gridColumn = '3/5'
    }
    if (e.matches && !animate) {
      polaroid1.gridColumn = '1/4'
      polaroid2.gridColumn = '4/7'
      polaroid3.gridColumn = '3/5'
    }
  }

  function handleChange3(e) {

    if (e.matches) {
      polaroid1.gridColumn = '1/3'
      polaroid2.gridColumn = '3/5'
      polaroid3.gridColumn = '5/7'
    }
  }

  handleChange(mediaQuery);
  handleChange2(media2Query);
  handleChange3(media3Query);

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

    <div className='heatpack-container' style={{ overflowX: 'hidden', }}>
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

          initial={{
            width: '460px',
            height: '558.39px',
          }}
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
          width: [460, 0, 655],
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

          initial={{
            width: ' 460px',
            height: '558.39px',
          }}

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
          alt='Photo graphy-Icon'
        />
        <div style={{ width: '540px' }}>
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
        <div style={{ width: '540px' }}>
          <p>
            This computer was designed for handling large data science and machine learning projects, along with frontend development and gaming large open world games in the highest possible settings. It was also designed with future proofing in mind so that the need to upgrade to perform the same requirements doesn't arise till about 5 years, especially when newer games require more and more computing poower to handle the graphics.
          </p>
        </div>
      </div>

      <div style={{ top: '100px' }} className='image-container'>
        <img className='img-settings' src='images/Olivine-1.png'
          alt='Photography-Icon'
        />
        <div style={{ width: '540px' }}>
          <p>
            Computer has four RGB fans(3 in the front and one in the case) that come in with multiple built in effects like colour cycle, static, breathing to name a few. The Computer was also coupled with an RGB mouse and keyboard combo, along with light strips lined up on the bottom of the desk to complete the RGB light setup.
          </p>
        </div>
      </div>
    </div>
  );
}