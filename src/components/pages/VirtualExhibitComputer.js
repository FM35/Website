import React, { useRef, useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import './VirtualExhibit.css';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { motion } from "framer-motion";
import Navbar from '../Nav_helper';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const unityContext = new UnityContext({
    loaderUrl: "/build/virtualexhibit.loader.js",
    dataUrl: "/build/virtualexhibit.data",
    frameworkUrl: "/build/virtualexhibit.framework.js",
    codeUrl: "/build/virtualexhibit.wasm",
});

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

    const [progression, setProgression] = useState(0);

    useEffect(function () {

        unityContext.on("progress", function (progression) {
            setProgression(progression);
        });
    }, []);

    return (

        <div className='exhibit-container'>
            <SimpleBar style={{ height: '100vh' }}>
                <div style={{ overflowX: 'hidden' }}>
                    <Navbar />
                    <div className='title-3'>
                        <div style={{ color: "white" }} className='heading-3'> Virtual Exhibit</div>
                        <KeyboardEventHandler handleKeys={['f']} onKeyEvent={(key, e) => unityContext.setFullscreen(true)} />
                    </div>
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
                    <p className='loading' >Loading {Math.round(progression * 100) * 1}%</p>
                    <div className='game-container'>
                        <Unity unityContext={unityContext} />
                    </div>
                </div>
            </SimpleBar>
        </div >
    );
}