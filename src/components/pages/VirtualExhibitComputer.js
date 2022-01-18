import React, { useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import './VirtualExhibit.css';
import { motion } from "framer-motion";
import Navbar from '../Nav_helper';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

const unityContext = new UnityContext({
    loaderUrl: "/build/virtualexhibit.loader.js",
    dataUrl: "/build/virtualexhibit.data",
    frameworkUrl: "/build/virtualexhibit.framework.js",
    codeUrl: "/build/virtualexhibit.wasm",
});

let threeDots = CSSRulePlugin.getRule('.three-dots-wrapper');
let loading = CSSRulePlugin.getRule('.loading');

const loadingContainer = {
    width: "2rem",
    height: "2rem",
    display: "flex",
    justifyContent: "space-around"
};

const loadingCircle = {
    display: "block",
    width: "0.5rem",
    height: "0.5rem",
    backgroundColor: "white",
    borderRadius: "0.25rem"
};

const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.2
        }
    },
    end: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const loadingCircleVariants = {
    start: {
        y: "50%"
    },
    end: {
        y: "150%"
    }
};

const loadingCircleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut"
};

export default function VirtualExhibit() {

    //Self explanatory

    const [progression, setProgression] = useState(0);

    useEffect(function () {

        unityContext.on("progress", function (progression) {
            setProgression(progression);
        });

        if (progression === 1) {
            threeDots.display = 'none';
            loading.display = 'none';
        }
    }, [progression]);

    useEffect(() => {

        try {
            window.scrollTo(0, 0);
            threeDots.display = 'block';
            loading.display = 'block';
        } catch (error) {
        }
    }, []);


    return (

        <motion.div className='exhibit-container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ wwwwwwwssssssssssduration: 0.5 }}
        >
            <Navbar />
            <div className='title-3'>
                <div style={{ fontSize: '50px' }} className='heading'> Exhibit</div>
                <p style={{ fontSize: '15px', left: '15%', fontWeight: '400', top: '10px' }} className='heading'>Press ESC key to show/hide cursor.</p>
            </div>
            <div className='three-dots-wrapper'>
                <motion.div
                    className='three-dots'
                    style={loadingContainer}
                    variants={loadingContainerVariants}
                    initial="start"
                    animate="end"
                >
                    <motion.span
                        style={loadingCircle}
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                    />
                    <motion.span
                        style={loadingCircle}
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                    />
                    <motion.span
                        style={loadingCircle}
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                    />
                </motion.div>
            </div>
            <p className='loading' >Loading {Math.round(progression * 100) * 1}%</p>
            <Unity className='web-gl-pc' unityContext={unityContext} />
        </motion.div >
    );
}