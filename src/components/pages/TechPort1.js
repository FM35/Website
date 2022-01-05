import React from 'react';
import Navbar from '../Nav_helper';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import './aboutUs.css';

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
            <div className='heading'>Exhibit</div>

            <ul className='top-menu'>
                <li className='list-menu'>Page: </li>
                <li className='list-menu' style={{ opacity: 0.3 }}>One</li>
                <motion.li whileHover={{
                    scale: 1.3,
                }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className='list-menu'>
                    <Link to='/technology-portfolio-page-two' className='page-links'>Two</Link></motion.li>

            </ul>

            <div style={{ top: '100px', color: 'white' }} className='about-me-passage'>
                <p className='section7'>
                    Bringing a First Person feel, to the Virtual Gallery World that's more immersive than a 360 VR camera or a Google Maps Street View type of experience
                </p>
                <p className='section2'>
                    Project was made using the Unity Game Engine developed by Unity Technologies
                </p>
                <p className='section3'>
                    Scripts that handle game behaviour were written using C#
                </p>

                <p className='section1'> Some of the notable features:</p>

                <p className='section1'>1)Exhibit Layering</p>
                <video className='vid-section' src='videos/nested.mp4' autoPlay loop muted />
                <p className='section6'> An exhibit, inside an exhibit, that's inside an exhibit. That's inside of another exhibit. Make sure to take a closer look so you can see our little animated buddies inside</p>


                <p className='section1'>2)Position Based Text Triggering</p>
                <video className='vid-section' src='videos/info.mp4' autoPlay loop muted />
                <p className='section6'> Information gets revealed when you get within a certain distance of the photograph</p>
            </div>


            <ul className='bottom-menu'>
                <li className='list-menu'>Page:</li>
                <li className='list-menu' style={{ opacity: 0.3 }}>One</li>
                <motion.li whileHover={{
                    scale: 1.3,
                }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className='list-menu'>
                    <Link to='/technology-portfolio-page-two' className='page-links'>Two</Link></motion.li>
            </ul>
        </motion.div>
    );
}