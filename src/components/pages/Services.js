import React, { useRef, useEffect } from 'react';
import './Services.css';
import useWindowSize from "./useWindowSize";

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

    try {
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
    } catch (error) {

    }
  };



  return (

    <div ref={app} className='App'>
      <div ref={scrollContainer} className='scroll'>

        <h1>Photo</h1>
        <h2>Gallery</h2>

        <div className='image-container'>
          <img src='images/OLI_0018.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 914 }} className='image-container'>
          <img src='images/DSC_0025.JPG'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 467 }} className='image-container'>
          <img src='images/OLI_0029.JPG'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 875 }} className='image-container'>
          <img src='images/OLI_0042.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 985 }} className='image-container'>
          <img src='images/OLI_0087.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 467 }} className='image-container'>
          <img src='images/OLI_0100.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 875 }} className='image-container'>
          <img src='images/OLI_0101.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 908 }} className='image-container'>
          <img src='images/OLI_0246.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 875 }} className='image-container'>
          <img src='images/OLI_0001.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 875 }} className='image-container'>
          <img src='images/OLI_0006.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 875 }} className='image-container'>
          <img src='images/OLI_0007.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 467 }} className='image-container'>
          <img src='images/OLI_0014.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 875 }} className='image-container'>
          <img src='images/OLI_0016.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 875 }} className='image-container'>
          <img src='images/OLI_0033.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 875 }} className='image-container'>
          <img src='images/OLI_0022(1).jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 467 }} className='image-container'>
          <img src='images/OLI_0034.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 875 }} className='image-container'>
          <img src='images/OLI_0040.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 875 }} className='image-container'>
          <img src='images/OLI_0074.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 1050 }} className='image-container'>
          <img src='images/OLI_0085.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 1054 }} className='image-container'>
          <img src='images/OLI_0094.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 875 }} className='image-container'>
          <img src='images/OLI_0105.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 467 }} className='image-container'>
          <img src='images/OLI_0148.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 875 }} className='image-container'>
          <img src='images/OLI_0151.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 875 }} className='image-container'>
          <img src='images/OLI_0190.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 875 }} className='image-container'>
          <img src='images/OLI_0198.jpg'
            alt='Photography-Icon'
          />
        </div>

        <div style={{ height: 875 }} className='image-container'>
          <img src='images/OLI_0211.jpg'
            alt='Photography-Icon'
          />
        </div>
      </div>
    </div>
  );
}
