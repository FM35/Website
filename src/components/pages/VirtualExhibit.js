
import React, { useEffect } from "react";
import './VirtualExhibit.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Navbar from '../Nav_helper';

export default function VirtualExhibit() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (

        //Self explanatory

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='exhibit-container'>
            <Navbar />
            <div style={{ color: "white" }} className='heading'> Exhibit</div>
            <div className='mobilePC'>
                <p className='question'> Please note that the virtual exhibit is ONLY AVAILABLE ON COMPUTERS with keyboard and mouse input.</p>
                <Link to='/virtual-exhibit-computer' className='mobilePCButton'>
                    Continue
                </Link>
            </div>
        </motion.div >
    );
}