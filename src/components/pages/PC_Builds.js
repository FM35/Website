import React, { useRef, useEffect } from 'react';
import './PC_Builds.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import GlitchClip from 'react-glitch-effect/core/GlitchClip';

export default function PC_Builds() {

  const reset_body = useRef();

  useEffect(() => {

    document.body.style.height = `${reset_body.current.getBoundingClientRect().height}px`;

  }, []);

  return (
    <motion.div ref={reset_body} className='container' style={{ overflow: 'hidden' }}>
      <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} animate={{ opacity: 1 }} className='title'>
        <div className='heading'> Computer</div>
        <div className='heading-1'> Builds</div>
      </motion.div>
      <div className='polaroids'>
        <motion.div

          initial={{ width: '5%', height: '5%', x: -1800, opacity: 0 }}
          animate={{ width: '345px', height: '440px', x: 0, opacity: 1, rotate: 360 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 50, damping: 10, ease: [0.6, 0.01, -0.05, 0.9] }}
          className='polaroid-1'>
          <Link
            to='/Pato'
          >
            <GlitchClip duration={7500} onHover={true}>
              <img src='images/polaroid-1.png'
                alt='Photography-Icon'

              />
            </GlitchClip>
          </Link>

          <img src='images/polaroid-1.png'
            alt='Photography-Icon'
            className='polaroid-1-clone'
          />
        </motion.div>

        <motion.div

          initial={{ width: '5%', height: '5%', x: -1800, opacity: 0 }}
          animate={{ width: '460px', height: '558.39px', x: 0, opacity: 1, rotate: 360 }}
          transition={{ delay: 0.75, type: 'spring', stiffness: 50, damping: 10, ease: [0.6, 0.01, -0.05, 0.9] }}
          className='polaroid-2'>
          <Link
            to='/HeatPack'
          >
            <GlitchClip duration={7500} onHover={true}>
              <img src='images/polaroid-1.png'
                alt='Photography-Icon'
              />
            </GlitchClip>
          </Link>
          <img src='images/polaroid-1.png'
            alt='Photography-Icon'
            className='polaroid-clone'
          />
        </motion.div>

        <motion.div

          initial={{ width: '5%', height: '5%', x: -1800, opacity: 0 }}
          animate={{ width: '345px', height: '418px', x: 0, opacity: 1, rotate: 360 }}
          transition={{ delay: 1, type: 'spring', stiffness: 50, damping: 10, ease: [0.6, 0.01, -0.05, 0.9] }}
          className='polaroid-3'>
          <Link
            to='/KLVC'
          >
            <GlitchClip duration={7500} onHover={true}>
              <img src='images/polaroid-1.png'
                alt='Photography-Icon'
              />
            </GlitchClip>
          </Link>

          <img src='images/polaroid-1.png'
            alt='Photography-Icon'
            className='polaroid-1-clone'
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
