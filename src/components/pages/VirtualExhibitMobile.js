import React, { useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import './VirtualExhibit.css';
import { motion } from "framer-motion";
import Navbar from '../Nav_helper';
import useWindowSize2 from './useWindowSize2';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

const unityContext = new UnityContext({
    loaderUrl: "/buildMobile/virtualexhibit.loader.js",
    dataUrl: "/buildMobile/virtualexhibit.data",
    frameworkUrl: "/buildMobile/virtualexhibit.framework.js",
    codeUrl: "/buildMobile/virtualexhibit.wasm",
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

    const [landscape, setLandscape] = useState(true);
    const handleLandscape = () => setLandscape(!landscape);

    useEffect(function () {

        unityContext.on("progress", function (progression) {
            setProgression(progression);
        });

        if (progression === 1) {
            threeDots.display = 'none';
            loading.display = 'none';
            console.log('hello')
        }
    }, [progression]);

    const size = useWindowSize2();

    useEffect(function () {

        if (size.height > size.width && landscape === true) {
            handleLandscape();
        }

        if (size.height < size.width && landscape === false) {
            handleLandscape();
        }
    }, [size.width]);

    return (

        <div className='exhibit-container'>
            <div className={landscape ? 'display-none' : ''}>
                < Navbar />
            </div>
            <div className='game-container'>
                <p className={landscape ? 'display-none' : 'landscape-notice'} > Please rotate the phone sideways to go into landscape mode. Make sure the portrait orientation lock button is unlocked to do so. To unlock the screen from portrait orientation, swipe down from the top-right of the screen to bring down the control center and then click on this icon. <br /> <img src='images/lock-screen.png'
                    alt='Photography-Icon'
                    width='30'
                    height='30'
                /></p>
                <div className={landscape ? 'three-dots-wrapper' : 'display-none'}>
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
                <p className={landscape ? 'loading' : 'display-none'}>Loading {Math.round(progression * 100) * 1}%</p>
                <Unity className={landscape ? 'web-gl' : 'display-none'} unityContext={unityContext} />
            </div>
        </div >
    );
}