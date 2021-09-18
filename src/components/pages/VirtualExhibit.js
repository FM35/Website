import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import './VirtualExhibit.css';

const unityContext = new UnityContext({
    loaderUrl: "/build/virtualexhibit.loader.js",
    dataUrl: "/build/virtualexhibit.data",
    frameworkUrl: "/build/virtualexhibit.framework.js",
    codeUrl: "/build/virtualexhibit.wasm",
});

export default function VirtualExhibit() {
    return (

        <div className='exhibit-container'>
            <div className='title'>
                <div className='heading'> Virtual</div>
                <div className='heading-1'> Exhibit</div>
            </div>
            <div className='game-container'>
                <Unity style={{ height: 720 }} unityContext={unityContext} />
            </div>
        </div>

    );
}