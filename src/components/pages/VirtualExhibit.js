
import React, { useEffect } from "react";
import './VirtualExhibit.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Navbar from '../Nav_helper';

export default function VirtualExhibit() {

    useEffect(() => {
        window.scrollTo(0, 0);
    });


    return (

        //Self explanatory

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
            className='exhibit-container'>
            <Navbar />
            <div style={{ color: "white" }} className='heading'> Virtual Exhibit</div>
            <div className='mobilePC'>
                <p className='question'> Please note that the virtual exhibit is only accessible via computers with keyboard and mouse/trackpad input.</p>
                <Link to='/virtual-exhibit-computer' className='mobilePCButton'>
                    Continue
                </Link>
            </div>
        </motion.div >
    );
}