import React, { useEffect, useRef } from 'react';
import './PC_Builds.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import useWindowSize from './useWindowSize';
import Navbar from '../Nav_helper';


export default function PC_Builds() {

  const size = useWindowSize();

  var scrollHeightRef = useRef({ scrollHeight: window.pageYOffset });

  //Sending scroll height to respective page, either Olivine, KLVC or Pato
  useEffect(() => {

    scrollHeightRef.current.scrollHeight = window.pageYOffset;
  }, [size.yscroll]);

  return (
    <motion.div className='container'>
      <Navbar />
      <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} animate={{ opacity: 1 }} className='heading'>
        Computers
      </motion.div>
      <div className='polaroids'>
        <motion.div

          initial={{ x: -1800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 25, damping: 10, ease: [0.6, 0.01, -0.05, 0.9] }}
          className='polaroid-1'>
          <Link
            to={{
              pathname: '/pato',
              state: scrollHeightRef.current.scrollHeight
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

          initial={{ x: -1800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.25, type: 'spring', stiffness: 25, damping: 10, ease: [0.6, 0.01, -0.05, 0.9] }}
          className='polaroid-2'>
          <Link
            to={{
              pathname: '/olivine',
              state: scrollHeightRef.current.scrollHeight
            }}
          >
            <Tilt duration={7500} onHover={true}>
              <img src='images/Olivine-4.png'
                alt='Photography-Icon'
              />
            </Tilt>
          </Link>
        </motion.div>

        <motion.div

          initial={{ x: -1800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 25, damping: 10, ease: [0.6, 0.01, -0.05, 0.9] }}
          className='polaroid-3'>
          <Link
            to={{
              pathname: '/klvc',
              state: scrollHeightRef.current.scrollHeight
            }}
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
