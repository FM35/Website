import React, { useRef, useEffect } from 'react';
import './Portfolio.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function Portfolio_page_1() {

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25, duration: 1 }}
      style={{ overflowX: 'hidden' }}
      className='App'>

      <h1>Portfolio</h1>
      <div className='menu-top'>
        <p className='list-menu' style={{ opacity: 0.5 }}>Page Number:</p>
        <p className='list-menu' style={{ opacity: 0.5 }}>One</p>
        <motion.p whileHover={{
          scale: 1.3,
        }}

          whileTap={{
            scale: 0.8,
          }}

          transition={{ type: 'spring', stiffness: 300 }}
          className='list-menu'>
          <Link to='/port-page-two' className='page-links'>Two</Link></motion.p>
        <motion.p whileHover={{
          scale: 1.3,

        }}

          whileTap={{
            scale: 0.8,
          }}

          transition={{ type: 'spring', stiffness: 300 }} className='list-menu'><Link to='/port-page-three' className='page-links'>Three</Link></motion.p>
      </div>

      <div className='scroll'>
        <div>
          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0018.jpg'
              alt='Photography-Icon'
            />
            <p>
              Central Memorial Park <br />
              July, 2021 <br />
              Calgary, AB, Canada <br />
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/DSC_0025.JPG'
              alt='Photography-Icon'
            />
            <p>
              Centre Street Train Platform <br />
              March, 2020 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0029.JPG'
              alt='Photography-Icon'
            />
            <p>
              Sunalta Train Platform <br />
              July, 2020 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0042.jpg'
              alt='Photography-Icon'
            />
            <p>
              Sunalta <br />
              April, 2021 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0087.jpg'
              alt='Photography-Icon'
            />
            <p>
              Chinatown <br />
              April, 2021 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0100.jpg'
              alt='Photography-Icon'
            />
            <p>
              Banff Tea Co <br />
              February, 2021 <br />
              Banff, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0101.jpg'
              alt='Photography-Icon'
            />
            <p>
              Calgary Tennis Club <br />
              August, 2020 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0246.jpg'
              alt='Photography-Icon'
            />
            <p>
              3rd Street SW Train Station <br />
              November, 2020 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0001.jpg'
              alt='Photography-Icon'
            />
            <p>
              Bankview <br />
              September, 2020 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0006.jpg'
              alt='Photography-Icon'
            />
            <p>
              Bankview <br />
              December, 2020 <br />
              Calgary, AB, Canada
            </p>
          </div>

          <div className='image-container'>
            <img className='img-settings' src='images/OLI_0007.jpg'
              alt='Photography-Icon'
            />
            <p>
              Bankview <br />
              September, 2020 <br />
              Calgary, AB, Canada
            </p>
          </div>
          <ul className='menu-bottom'>
            <li className='list-menu' style={{ opacity: 0.5 }}>Page Number:</li>
            <li className='list-menu' style={{ opacity: 0.5 }}>One</li>
            <motion.li whileHover={{
              scale: 1.3,
            }}

              whileTap={{
                scale: 0.8,
              }}

              transition={{ type: 'spring', stiffness: 300 }}
              className='list-menu'>
              <Link to='/port-page-two' className='page-links'>Two</Link></motion.li>
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