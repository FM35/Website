import React, { useEffect } from 'react';
import './Portfolio.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Navbar2 from '../Nav_helperB&W';

export default function Portfolio_page_1() {

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
      <div className='menu-top'>
        <p className='list-menu' style={{ color: 'black' }}>Page:</p>
        <p className='list-menu' style={{ opacity: 0.3, color: 'black' }}>One</p>
        <motion.p whileHover={{
          scale: 1.3,
        }}

          transition={{ type: 'spring', stiffness: 300 }}
          className='list-menu'>
          <Link to='/photography-portfolio-page-two' style={{ color: 'black' }} className='page-links'>Two</Link></motion.p>
        <motion.p whileHover={{
          scale: 1.3,

        }}

          transition={{ type: 'spring', stiffness: 300 }} className='list-menu'><Link to='/photography-portfolio-page-three' style={{ color: 'black' }} className='page-links'>Three</Link></motion.p>
      </div>



      <div className='image-container-portfolio-1'>
        <img className='img-settings' src='images/DSC_0025.JPG'
          alt='Photography-Icon'
        />
        <p>
          Centre Street Train Platform <br />
          March, 2020 <br />
          Calgary, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0026.jpg'
          alt='Photography-Icon'
        />
        <p>
          Stephen Avenue Walk <br />
          August, 2021 <br />
          Calgary, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0031.jpg'
          alt='Photography-Icon'
        />
        <p>
          3rd Street SW Train Station <br />
          August, 2021 <br />
          Calgary, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0061.jpg'
          alt='Photography-Icon'
        />
        <p>
          Harvie Passage Lookout <br />
          October, 2021 <br />
          Calgary, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0106.jpg'
          alt='Photography-Icon'
        />
        <p>
          Vancouver Seawall <br />
          September, 2021 <br />
          Vancouver, BC, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0201.jpg'
          alt='Photography-Icon'
        />
        <p>
          Lower Mount Royal <br />
          October, 2021 <br />
          Calgary, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0278.jpg'
          alt='Photography-Icon'
        />
        <p>
          Museum of Vancouver <br />
          September, 2021 <br />
          Vancouver, BC, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0324.jpg'
          alt='Photography-Icon'
        />
        <p>
          Vancouver Intl. Airport <br />
          September, 2021 <br />
          Calgary, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0018.jpg'
          alt='Photography-Icon'
        />
        <p>
          Central Memorial Park <br />
          July, 2021 <br />
          Calgary, AB, Canada <br />
        </p>
      </div>

      <div className='image-container-portfolio'>
        <img className='img-settings' src='images/OLI_0085.jpg'
          alt='Photography-Icon'
        />
        <p>
          Banff Tea Co <br />
          February, 2021 <br />
          Calgary, AB, Canada
        </p>
      </div>

      <div className='image-container-portfolio-last'>
        <img className='img-settings' src='images/OLI_0148.jpg'
          alt='Photography-Icon'
        />
        <p>
          Downtown <br />
          September, 2020 <br />
          Calgary, AB, Canada
        </p>
      </div>



      <ul className='menu-bottom'>
        <li className='list-menu' style={{ color: 'black' }}>Page:</li>
        <li className='list-menu' style={{ opacity: 0.3, color: 'black' }}>One</li>
        <motion.li whileHover={{
          scale: 1.3,
        }}

          transition={{ type: 'spring', stiffness: 300 }}
          className='list-menu'>
          <Link to='/photography-portfolio-page-two' style={{ color: 'black' }} className='page-links'>Two</Link></motion.li>
        <motion.li whileHover={{
          scale: 1.3,

        }}

          transition={{ type: 'spring', stiffness: 300 }} className='list-menu'><Link to='/photography-portfolio-page-three' style={{ color: 'black' }} className='page-links'>Three</Link></motion.li>
      </ul>
    </motion.div>
  );
}
