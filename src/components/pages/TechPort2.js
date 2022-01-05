import React from 'react';
import Navbar from '../Nav_helper';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function Services() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ overflowX: 'hidden' }}
            className='heatpack-container'>
            <Navbar />
            <div className='heading'>Website</div>
            <ul className='top-menu'>
                <li className='list-menu' >Page: </li>
                <motion.li whileHover={{
                    scale: 1.3,
                }}

                    transition={{ type: 'spring', stiffness: 300 }} className='list-menu'><Link to='/technology-portfolio-page-one' className='page-links'>One</Link></motion.li>
                <li className='list-menu' style={{ opacity: 0.3 }}>Two</li>
            </ul>

            <div style={{ top: '100px', color: 'white' }} className='about-me-passage'>
                <p className='section7'>
                    A piece of tech that showcases our technology and photography portfolios
                </p>
                <p className='section2'>
                    Project was made using React, an open-source front-end Javascript library
                </p>
                <p className='section3'>
                    On top of React, CSS and html were also used
                </p>

                <p className='section1'> Some of the notable features:</p>
                <p className='section1'>1)Animations</p>
                <video className='vid-section' src='videos/nested.mp4' autoPlay loop muted />
                <p style={{ textAlign: 'center' }} className='section6'> Silky smooth animations and page transitions powered by the framer motion library</p>


                <p className='section1'>2)Responsive Design</p>
                <video className='vid-section' src='videos/nested.mp4' autoPlay loop muted />
                <p style={{ textAlign: 'center' }} className='section6'> Designed with the intention to make the website render well on a variety of devices.</p>
            </div>

            <ul className='bottom-menu'>
                <li className='list-menu'>Page: </li>
                <motion.li whileHover={{
                    scale: 1.3,
                }}

                    transition={{ type: 'spring', stiffness: 300 }} className='list-menu'><Link to='/technology-portfolio-page-one' className='page-links'>One</Link></motion.li>
                <li className='list-menu' style={{ opacity: 0.3 }}>Two</li>
            </ul>
        </motion.div>
    );
}