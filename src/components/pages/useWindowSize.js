import { useState, useEffect } from "react";

export default function useWindowSize() {

    //Hook I use to get the window size details

    function getSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
            yscroll: window.pageYOffset
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener("scroll", handleResize);
        return () => window.removeEventListener("scroll", handleResize);
    }, []);

    return windowSize;
}