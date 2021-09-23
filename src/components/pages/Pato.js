import React, { useRef, useEffect } from 'react';
import './HeatPack.css';
import { motion } from "framer-motion";

export default function Pato() {

  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
  const transition_2 = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };
  const reset_body = useRef();

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

  useEffect(() => {

    document.body.style.height = `${reset_body.current.getBoundingClientRect().height}px`;

  }, []);

  return (

    <div ref={reset_body} className='heatpack-container' style={{ overflowX: 'hidden', }}>
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
      <div className='flex'>

        <motion.div

          animate={{
            x: 250,
            y: 300,
            width: '1136px',
            height: '1379px',
            transition: { delay: 0.2, ...transition },
          }}

          className='polaroid-container-1'>
          <img src='images/polaroid-1.png'
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
          <img src='images/polaroid-1.png'
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
          <img src='images/polaroid-1.png'
            alt='Photography-Icon'
          />
        </motion.div>
      </div>

      <div className='first-Image'>
        <img src='images/polaroid-1.png'
          alt='Photography-Icon'
        />
        <ul>
          <li>Ryzen Processor </li>
          <li>Motherboard</li>
          <li>Memory</li>
          <li>Storage</li>
          <li>Video Card</li>
          <li>Power Supply</li>
          <li>Case</li>
          <li>Network Card</li>
          <li>Operating System</li>
        </ul>
      </div>

      <div className='first-Image'>
        <img src='images/polaroid-1.png'
          alt='Photography-Icon'
        />
        <p>
          This computer was designed to handle the intensive loads of gaming on some of the highest settings, app development, large data science projects (which includes machine learning neural networks techniques) and photo editing using applications such as Lightroom and photoshop.
        </p>
      </div>

      <div className='first-Image'>
        <img src='images/polaroid-1.png'
          alt='Photography-Icon'
        />
        <p>
          The computer was designed with future-proofing in mind. Hence the upgrade in Processor, Memory and Video Card. Other selections would have done the job for a lesser price if future-proofing was a concern.
        </p>
      </div>

      <div className='first-Image'>
        <img src='images/polaroid-1.png'
          alt='Photography-Icon'
        />
        <p>
          Coupled the build with LED strips, keyboard and mouse to make for a setup that can do different lighting features.
          For any enquires please email:heatpackollie@gmail.com
        </p>
      </div>
    </div>
  );
}