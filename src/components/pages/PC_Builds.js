import React, { useEffect } from 'react';
import './PC_Builds.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { Power3, TimelineLite } from "gsap";

export default function PC_Builds() {

  const tl = new TimelineLite();

  let imageReveal1 = CSSRulePlugin.getRule('.flex');

  useEffect(() => {
    tl.to(imageReveal1, 2, { display: "grid", gap: "20px", ease: Power3.easeInOut });
  });


  return (
    <motion.div className='container' style={{ overflowX: 'hidden' }}>
      <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} animate={{ opacity: 1 }} className='heading'>
        Computer Builds
      </motion.div>
      <div className='polaroids'>
        <motion.div

          initial={{ width: '460px', height: '558.39px', x: -1800, opacity: 0 }}
          animate={{ width: '460px', height: '558.39px', x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 25, damping: 10, ease: [0.6, 0.01, -0.05, 0.9] }}
          className='polaroid-1'>
          <Link
            to={{
              pathname: '/Pato',
              state: window.pageYOffset
            }}
          >
            <Tilt duration={7500} onHover={true}>
              <img src='images/Pato-3.png'
                alt='Photography-Icon'

              />
            </Tilt>
          </Link>
        </motion.div>

        <motion.div

          initial={{ width: '460px', height: '558.39px', x: -1800, opacity: 0 }}
          animate={{ width: '460px', height: '558.39px', x: 0, opacity: 1 }}
          transition={{ delay: 0.25, type: 'spring', stiffness: 25, damping: 10, ease: [0.6, 0.01, -0.05, 0.9] }}
          className='polaroid-2'>
          <Link
            to='/HeatPack'
          >
            <Tilt duration={7500} onHover={true}>
              <img src='images/Olivine-4.png'
                alt='Photography-Icon'
              />
            </Tilt>
          </Link>
        </motion.div>

        <motion.div

          initial={{ width: '460px', height: '558.39px', x: -1800, opacity: 0 }}
          animate={{ width: '460px', height: '558.39px', x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 25, damping: 10, ease: [0.6, 0.01, -0.05, 0.9] }}
          className='polaroid-3'>
          <Link
            to='/KLVC'
          >
            <Tilt duration={7500} onHover={true}>
              <img src='images/KLVC-3.png'
                alt='Photography-Icon'
              />
            </Tilt>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
