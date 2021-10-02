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

    const [progression, setProgression] = useState(0);

    function handleOnClickFullscreen() {
        unityContext.setFullscreen(true);
    }

    useEffect(function () {

        document.body.style.height = `${reset_body.current.getBoundingClientRect().height}px`;
        unityContext.on("progress", function (progression) {
            setProgression(progression);
        });
    }, []);

    return (

        <div ref={reset_body} className='exhibit-container'>
            <div className='title-3'>
                <div style={{ color: "white" }} className='heading-3'> Virtual Exhibit</div>
            </div>

            <button style={{ position: 'absolute', left: '50%', color: 'white' }} onClick={handleOnClickFullscreen}>Fullscreen</button>
            <p style={{ position: 'absolute', left: '50%', top: '50%', color: 'white' }} >Loading {progression * 100} percent...</p>
            <div className='game-container'>
                <Unity style={{ height: 720 }} unityContext={unityContext} />
            </div>
        </div >
    );
}