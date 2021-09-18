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
            <div className='control-container'>
                <p style={{ color: "white" }}>
                    W - to move forward <br />
                    S - to move backward <br />
                    A - to move to the left <br />
                    D - to move to the right <br />
                    Mouse/Trackpad - to look around
                </p>
                <p>
                    Please note keyboard and mouse entry is needed to explore the exhibit <br />
                    Press [ESC] to show cursor and unlink it from the game
                </p>
            </div>
        </div>
    );
}