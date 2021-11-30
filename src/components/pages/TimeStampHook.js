import { useEffect } from 'react';

const useIntro = () => {

    //Hook that I use inorder to run the intro animation only once. Returns true the first time and then false afterwards. Hero section intro animation only runs when hasTimePassed is True

    const storage = window.sessionStorage;
    const currTimestamp = Date.now();
    const timestamp = JSON.parse(storage.getItem('timestamp') || '1000');

    const timeLimit = 3 * 60 * 60 * 1000; // 3 hours

    const hasTimePassed = currTimestamp - timestamp > timeLimit;

    useEffect(() => {
        hasTimePassed ?
            storage.setItem('timestamp', currTimestamp.toString())
            :
            storage.setItem('timestamp', timestamp.toString());
    }, []);

    return hasTimePassed;
};

export default useIntro;