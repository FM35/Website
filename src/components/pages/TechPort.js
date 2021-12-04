import React from 'react';
import Navbar from '../Nav_helper';
import { motion } from "framer-motion";

export default function Services() {

    return (
        <motion.div className='about-me-container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
        >
            <Navbar />
            Technology Portfolio
        </motion.div>
    );
}