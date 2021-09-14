import React, { useRef, useEffect } from 'react';
import './Services.css';
import useWindowSize from "./useWindowSize"

export default function Services() {


  const app = useRef();
  const scrollContainer = useRef();
  const size = useWindowSize();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  useEffect(() => {

    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;

  }, [size.height]);

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translateY(-${data.rounded}px) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };



  return (

    <div ref={app} className='App'>
      <div ref={scrollContainer} className='scroll'>

        <h1>Photo</h1>
        <h1>Gallery</h1>

        <div className='image-container'>
          <img src='images/OLI_0018.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div className='image-container'>
          <img src='images/OLI_0018.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div className='image-container'>
          <img src='images/OLI_0018.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div className='image-container'>
          <img src='images/OLI_0018.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div className='image-container'>
          <img src='images/OLI_0018.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div className='image-container'>
          <img src='images/OLI_0018.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div className='image-container'>
          <img src='images/OLI_0018.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div className='image-container'>
          <img src='images/OLI_0018.jpg'
            alt='Photography-Icon'
          />
        </div>
      </div>
    </div>
  );
}
