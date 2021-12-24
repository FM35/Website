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
            transition={{ delay: 0.25, duration: 1 }}
            style={{ overflowX: 'hidden' }}
            className='App'>
            <Navbar />
            <div className='heading'>Exhibit</div>

            <ul className='top-menu'>
                <li className='list-menu' style={{ opacity: 0.5 }}>Page: </li>
                <li className='list-menu' style={{ opacity: 0.5 }}>One</li>
                <motion.li whileHover={{
                    scale: 1.3,
                }}

                    whileTap={{
                        scale: 0.8,
                    }}

                    transition={{ type: 'spring', stiffness: 300 }}
                    className='list-menu'>
                    <Link to='/technology-portfolio-page-two' className='page-links'>Two</Link></motion.li>

            </ul>

            <div style={{ top: '50px', color: 'white' }} className='about-me-passage'>
                <p className='section1'>
                    Bringing a First Person feel to the Virtual Gallery World that's more immersive than a 360 VR camera or a Google Maps Street View kind of experience
                </p>
                <p className='section2'>
                    Project was made by using the Unity Game Engine developed by Unity Technologies
                </p>
                <p className='section3'>
                    On top of the Unity Game Engine, Scripts written in the programming language C# were also used
                </p>

                <p className='section1'> Some of the notable features:</p>

                <p className='section1'>1)Exhibit Layering</p>
                <video className='vid-section' src='videos/nested.mp4' autoPlay loop muted />
                <p className='section6'> An exhibit, inside an exhibit, that's inside an exhibit. That's inside of another exhibit. Make sure to take a closer look so you can see our little animated buddies</p>


                <p className='section1'>2)Position Based Text Triggering</p>
                <video className='vid-section' src='videos/info.mp4' autoPlay loop muted />
                <p className='section6'> Information about the photograph gets revealed when you get within a certain distance of the photograph</p>
            </div>


            <ul className='bottom-menu'>
                <li className='list-menu' style={{ opacity: 0.5 }}>Page:</li>
                <li className='list-menu' style={{ opacity: 0.5 }}>One</li>
                <motion.li whileHover={{
                    scale: 1.3,
                }}

                    whileTap={{
                        scale: 0.8,
                    }}

                    transition={{ type: 'spring', stiffness: 300 }}
                    className='list-menu'>
                    <Link to='/technology-portfolio-page-two' className='page-links'>Two</Link></motion.li>
            </ul>
        </motion.div>
    );
}