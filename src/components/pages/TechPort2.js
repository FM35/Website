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
            transition={{ delay: 0.25, duration: 1 }}
            style={{ overflowX: 'hidden' }}
            className='App'>
            <Navbar />
            <div className='heading'>Website Project</div>
            <ul className='menu-top'>
                <li className='list-menu' style={{ opacity: 0.5 }}>Page: </li>
                <motion.li whileHover={{
                    scale: 1.3,
                }}

                    whileTap={{
                        scale: 0.8,
                    }}

                    transition={{ type: 'spring', stiffness: 300 }} className='list-menu'><Link to='/technology-portfolio-page-one' className='page-links'>One</Link></motion.li>
                <li className='list-menu' style={{ opacity: 0.5 }}>Two</li>
            </ul>

            <div style={{ top: '200px', color: 'white' }} className='about-me-passage'>
                <p className='section1'>
                    A piece of tech that showcases our technology and photography portfolios
                </p>
                <p className='section2'>
                    Project was made using React, an open-source front-end Javascript library
                </p>
                <p className='section3'>
                    On top of React, CSS and html were also used
                </p>

                <p className='section1'> Some of the notable features:</p>
                <p style={{ opacity: 0.5 }} className='section5'> Website Designed and Coded In-house</p>
                <p className='section1'>1)Animations</p>
                <p className='section6'> Silky smooth animations and page transitions powered by the framer motion library</p>

                <p style={{ opacity: 0.5 }} className='section5'> Website Designed and Coded In-house</p>
                <p className='section1'>2)Responsive Design</p>
                <p className='section6'> Designed with the intention to make the website render on a variety of devices.</p>
            </div>

            <ul style={{ bottom: '-150px' }} className='menu-bottom'>
                <li className='list-menu' style={{ opacity: 0.5 }}>Page: </li>
                <motion.li whileHover={{
                    scale: 1.3,
                }}

                    whileTap={{
                        scale: 0.8,
                    }}

                    transition={{ type: 'spring', stiffness: 300 }} className='list-menu'><Link to='/technology-portfolio-page-one' className='page-links'>One</Link></motion.li>
                <li className='list-menu' style={{ opacity: 0.5 }}>Two</li>
            </ul>
        </motion.div>
    );
}