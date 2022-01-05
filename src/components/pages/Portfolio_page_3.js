import React, { useEffect } from 'react';
import './Portfolio.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Navbar2 from '../Nav_helperB&W';

export default function Services() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });


  //Self explanatory

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ overflowX: 'hidden' }}
      className='App'>
      <Navbar2 />
      <div style={{ color: 'black' }} className='heading'>Portfolio</div>
      <p className='paragraph'>Olivine's best shots</p>
      <ul className='menu-top'>
        <li className='list-menu' style={{ color: 'black' }}>Page:</li>
        <motion.li whileHover={{
          scale: 1.3,
        }}

          transition={{ type: 'spring', stiffness: 300 }} className='list-menu'><Link to='/photography-portfolio-page-one' style={{ color: 'black' }} className='page-links'>One</Link></motion.li>
        <motion.li whileHover={{
          scale: 1.3,
        }}

          transition={{ type: 'spring', stiffness: 300 }} className='list-menu'><Link to='/photography-portfolio-page-two' style={{ color: 'black' }} className='page-links'>Two</Link></motion.li>
        <li className='list-menu' style={{ opacity: 0.3, color: 'black' }}>Three</li>
      </ul>
      <div className='image-container-portfolio-1'>
        <img className='img-settings' src='images/OLI_0151.jpg'
          alt='Photography-Icon'
        />
        <p>
          Sunalta <br />
          August, 2020 <br />
          Calgary, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0190.jpg'
          alt='Photography-Icon'
        />
        <p>
          17th Ave SW <br />
          November, 2020 <br />
          Calgary, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0198.jpg'
          alt='Photography-Icon'
        />
        <p>
          Downtown West End <br />
          November, 2020 <br />
          Calgary, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0211.jpg'
          alt='Photography-Icon'
        />
        <p>
          Downtown <br />
          November, 2020 <br />
          Calgary, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0087.jpg'
          alt='Photography-Icon'
        />
        <p>
          Chinatown <br />
          April, 2021 <br />
          Calgary, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0100.jpg'
          alt='Photography-Icon'
        />
        <p>
          Banff Tea Co <br />
          February, 2021 <br />
          Banff, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0101.jpg'
          alt='Photography-Icon'
        />
        <p>
          Calgary Tennis Club <br />
          August, 2020 <br />
          Calgary, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0246.jpg'
          alt='Photography-Icon'
        />
        <p>
          3rd Street SW Train Station <br />
          November, 2020 <br />
          Calgary, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0001.jpg'
          alt='Photography-Icon'
        />
        <p>
          Bankview <br />
          September, 2020 <br />
          Calgary, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0006.jpg'
          alt='Photography-Icon'
        />
        <p>
          Bankview <br />
          December, 2020 <br />
          Calgary, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio-last'>
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
        <li className='list-menu' style={{ color: 'black' }}>Page:</li>
        <motion.li whileHover={{
          scale: 1.3,
        }}


          transition={{ type: 'spring', stiffness: 300 }} className='list-menu'><Link to='/photography-portfolio-page-one' style={{ color: 'black' }} className='page-links'>One</Link></motion.li>
        <motion.li whileHover={{
          scale: 1.3,
        }}


          transition={{ type: 'spring', stiffness: 300 }} className='list-menu'><Link to='/photography-portfolio-page-two' style={{ color: 'black' }} className='page-links'>Two</Link></motion.li>
        <li className='list-menu' style={{ opacity: 0.3, color: 'black' }}>Three</li>
      </ul>

    </motion.div>
  );
}
