import React, { useEffect } from 'react';
import './PageNotFound.css';
import Navbar from '../Nav_helper';
import { motion } from "framer-motion";

export default function PageNotFound() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //Self explanatory

    return (
        <motion.div className='about-me-container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Navbar />
            <div className='errorFlex'>
                <div className='error404'>
                    Error 404. Page Not Found.
                </div>
            </div>
        </motion.div>
    );
}