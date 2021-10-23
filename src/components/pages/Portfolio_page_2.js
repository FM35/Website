import React from 'react';
import './Portfolio.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function Services() {

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25, duration: 1 }}
      style={{ overflowX: 'hidden' }}
      className='App'>
      <h1>Portfolio</h1>
      <ul className='menu-top'>
        <li className='list-menu' style={{ opacity: 0.5 }}>Page Number:</li>
        <motion.li whileHover={{
          scale: 1.3,
        }}

          whileTap={{
            scale: 0.8,
          }}

          transition={{ type: 'spring', stiffness: 300 }} className='list-menu'><Link to='/port-page-one' className='page-links'>One</Link></motion.li>
        <li className='list-menu' style={{ opacity: 0.5 }}>Two</li>
        <motion.li whileHover={{
          scale: 1.3,
        }}

          whileTap={{
            scale: 0.8,
          }}

          transition={{ type: 'spring', stiffness: 300 }} className='list-menu'><Link to='/port-page-three' className='page-links'>Three</Link></motion.li>
      </ul>
      <div className='scroll'>

        <div>
          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0016.jpg'
              alt='Photography-Icon'
            />
            <p>
              17th Ave SW <br />
              December, 2020 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0014.jpg'
              alt='Photography-Icon'
            />
            <p>
              Bankview <br />
              July, 2020 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0033.jpg'
              alt='Photography-Icon'
            />
            <p>
              Lindsay Park <br />
              September, 2021 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0022(1).jpg'
              alt='Photography-Icon'
            />
            <p>
              Downtown <br />
              June, 2020 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0034.jpg'
              alt='Photography-Icon'
            />
            <p>
              Sunalta Train Platform <br />
              July, 2020 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0040.jpg'
              alt='Photography-Icon'
            />
            <p>
              Central Memorial Park <br />
              September, 2021 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0074.jpg'
              alt='Photography-Icon'
            />
            <p>
              Chinatown <br />
              April, 2021 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0085.jpg'
              alt='Photography-Icon'
            />
            <p>
              Bankview <br />
              February, 2021 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0094.jpg'
              alt='Photography-Icon'
            />
            <p>
              Bankview <br />
              September, 2020 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0148.jpg'
              alt='Photography-Icon'
            />
            <p>
              Downtown <br />
              September, 2020 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0105.jpg'
              alt='Photography-Icon'
            />
            <p>
              Bankview <br />
              July, 2020 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <ul className='menu-bottom'>
            <li className='list-menu' style={{ opacity: 0.5 }}>Page Number:</li>
            <motion.li whileHover={{
              scale: 1.3,
            }}

              whileTap={{
                scale: 0.8,
              }}

              transition={{ type: 'spring', stiffness: 300 }} className='list-menu'><Link to='/port-page-one' className='page-links'>One</Link></motion.li>
            <li className='list-menu' style={{ opacity: 0.5 }}>Two</li>
            <motion.li whileHover={{
              scale: 1.3,
            }}

              whileTap={{
                scale: 0.8,
              }}

              transition={{ type: 'spring', stiffness: 300 }} className='list-menu'><Link to='/port-page-three' className='page-links'>Three</Link></motion.li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
