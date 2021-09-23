import React, { useRef, useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import './VirtualExhibit.css';
import { motion } from "framer-motion";

const unityContext = new UnityContext({
    loaderUrl: "/build/virtualexhibit.loader.js",
    dataUrl: "/build/virtualexhibit.data",
    frameworkUrl: "/build/virtualexhibit.framework.js",
    codeUrl: "/build/virtualexhibit.wasm",
});

export default function VirtualExhibit() {

    const reset_body = useRef();

    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);

    const [click1, setClick1] = useState(true);
    const handleClick1 = () => setClick1(!click1);

    const [progression, setProgression] = useState(0);

    function handleOnClickFullscreen() {
        unityContext.setFullscreen(true);
    }

    useEffect(function () {
        unityContext.on("progress", function (progression) {
            setProgression(progression);
        });
    }, []);

    useEffect(() => {

        document.body.style.height = `${reset_body.current.getBoundingClientRect().height}px`;

    }, []);

    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
        closed: {
            clipPath: "circle(30px at 40px 40px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    return (

        <div ref={reset_body} className='exhibit-container'>
            <div className='title-3'>
                <div style={{ color: "white" }} className='heading-3'> Virtual Exhibit</div>
            </div>
            <motion.div
                intial={{ opacity: 0 }}
                animate={click ? 'closed' : 'open'}
            >
                <motion.div
                    className='controls-background'
                    variants={sidebar}>
                    <div className={click ? 'display-none' : ''} onClick={handleClick}>
                        <img
                            style={{ position: 'absolute', left: 27, top: 27 }}
                            src='images/close.png'
                            alt='Photography-Icon'
                            width='25'
                            height='25'
                        />
                    </div>

                    <div className={click ? '' : 'display-none'} onClick={handleClick}>
                        <img
                            style={{ position: 'absolute', left: 27, top: 27 }}
                            src='images/hamburger.png'
                            alt='Photography-Icon'
                            width='25'
                            height='25'
                        />
                    </div>

                    <p style={{ top: 50, left: -20 }}>Keyboard and Mouse Controls</p>
                    <ul>
                        <li>W - to move forward </li>
                        <li>S - to move backward </li>
                        <li>A - to move to the left </li>
                        <li>D - to move to the right </li>
                        <li>Mouse/Trackpad - to look around</li>
                    </ul>

                    <p>
                        Please note keyboard and mouse entry is needed to explore the exhibit <br />
                        Press [ESC] to show cursor and unlink it from the game
                    </p>
                </motion.div>
            </motion.div>
            <button style={{ position: 'absolute', left: '50%', color: 'white' }} onClick={handleOnClickFullscreen}>Fullscreen</button>
            <p style={{ position: 'absolute', left: '50%', top: '50%', color: 'white' }} >Loading {progression * 100} percent...</p>
            <div className='game-container'>
                <Unity style={{ height: 720 }} unityContext={unityContext} />
            </div>

            <motion.div
                intial={{ opacity: 0 }}
                animate={click1 ? 'closed' : 'open'}
            >
                <motion.div
                    className='about-background'
                    variants={sidebar}>
                    <div className={click1 ? 'display-none' : ''} onClick={handleClick1}>
                        <img
                            style={{ position: 'absolute', left: 27, top: 27 }}
                            src='images/close.png'
                            alt='Photography-Icon'
                            width='25'
                            height='25'
                        />
                    </div>

                    <div className={click1 ? '' : 'display-none'} onClick={handleClick1}>
                        <img
                            style={{ position: 'absolute', left: 27, top: 27 }}
                            src='images/hamburger.png'
                            alt='Photography-Icon'
                            width='25'
                            height='25'
                        />
                    </div>
                    <p style={{ top: 50, left: -20 }}>About Exhibit</p>
                    <p>
                        This exhibit came about blah blah blah etc etc
                    </p>
                </motion.div>
            </motion.div>
        </div >
    );
}