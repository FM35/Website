import React, { useEffect } from 'react';
import './HeatPack.css';
import { motion } from "framer-motion";
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { Power3, TimelineLite } from "gsap";
import { useLocation } from "react-router-dom";

export default function HeatPack() {

  const tl = new TimelineLite();
  const location = useLocation();
  const height = location.state;

  let imageReveal1 = CSSRulePlugin.getRule('.flex');

  useEffect(() => {
    tl.to(imageReveal1, 2, { display: "flex", gap: "0px", ease: Power3.easeInOut, delay: 0.7 });
    window.scrollTo(0, height);
    console.log(height);
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
      <div className='flex'>

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

        <motion.div initial={{
          width: '460px',
          height: '558.39px',
        }}

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

          initial={{
            width: '460px',
          }}

          animate={{

            y: 250,
            width: '755px',
            transition: { delay: 0.2, ...transition },
          }}

          className='polaroid-container-3'>
          <img src='images/KLVC-3.png'
            alt='Photography-Icon'
          />
        </motion.div>
      </div>

      <div style={{ top: '400px' }} className='image-container'>
        <img className='img-settings' src='images/KLVC-4.png'
          alt='Photography-Icon'
        />
        <div style={{ width: '400px' }}>
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

      <div style={{ top: '400px' }} className='image-container'>
        <img className='img-settings' src='images/KLVC-1.png'
          alt='Photography-Icon'
        />
        <div style={{ width: '400px' }}>
          <p>
            Designed for streaming church services online and presenting slides both in house and online. Compactness was at the focal point of the design process inorder to save space on the media table as it was limited and to also make transporting the Computer to different locations easier as a media team member might need to take it home or to a different organisation being hosted by the church. The Fractal Design Node 202 was a great choice to achieve compactness with a volume coming in at only 10.2 litres, whereas standard computer cases have a volume of 45 litres.
          </p>
        </div>
      </div>

      <div style={{ top: '400px' }} className='image-container'>
        <img className='img-settings' src='images/KLVC-2.png'
          alt='Photography-Icon'
        />
        <div style={{ width: '400px' }}>
          <p>
            Coupled with a portable Monitor, wireless keyboard and mouse to make the system decoupled interms of wire connections. The only component that need to be plugged into power is the Power Supply in the computer, however, I am currently working on a system that would make the system fully portable by incorporating a portable power station or a device of a similar nature.
          </p>
        </div>
      </div>
    </div>
  );
}