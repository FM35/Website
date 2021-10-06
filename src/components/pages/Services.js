import React, { useRef, useEffect } from 'react';
import './Services.css';
import useWindowSize from "./useWindowSize";
import { motion } from "framer-motion";

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

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height
      }px`;
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
      scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

      //loop vai raf
      requestAnimationFrame(() => skewScrolling());
    } catch (error) {

    }
  };



  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      ref={app} className='App'>
      <div ref={scrollContainer} className='scroll'>

        <h1>Portfolio</h1>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0018.jpg'
            alt='Photography-Icon'
          />
          <p>
            Central Memorial Park <br />
            July, 2021 <br />
            Calgary, AB, Canada <br />
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/DSC_0025.JPG'
            alt='Photography-Icon'
          />
          <p>
            Centre Street Train Platform <br />
            March, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0029.JPG'
            alt='Photography-Icon'
          />
          <p>
            Sunalta Train Platform <br />
            July, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0042.jpg'
            alt='Photography-Icon'
          />
          <p>
            Sunalta <br />
            April, 2021 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0087.jpg'
            alt='Photography-Icon'
          />
          <p>
            Chinatown <br />
            April, 2021 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0100.jpg'
            alt='Photography-Icon'
          />
          <p>
            Banff Tea Co <br />
            February, 2021 <br />
            Banff, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0101.jpg'
            alt='Photography-Icon'
          />
          <p>
            Calgary Tennis Club <br />
            August, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0246.jpg'
            alt='Photography-Icon'
          />
          <p>
            3rd Street SW Train Station <br />
            November, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0001.jpg'
            alt='Photography-Icon'
          />
          <p>
            Bankview <br />
            September, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0006.jpg'
            alt='Photography-Icon'
          />
          <p>
            Bankview <br />
            December, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0007.jpg'
            alt='Photography-Icon'
          />
          <p>
            Bankview <br />
            September, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0014.jpg'
            alt='Photography-Icon'
          />
          <p>
            Bankview <br />
            July, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0016.jpg'
            alt='Photography-Icon'
          />
          <p>
            17th Ave SW <br />
            December, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0033.jpg'
            alt='Photography-Icon'
          />
          <p>
            Lindsay Park <br />
            September, 2021 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0022(1).jpg'
            alt='Photography-Icon'
          />
          <p>
            Downtown <br />
            June, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0034.jpg'
            alt='Photography-Icon'
          />
          <p>
            Sunalta Train Platform <br />
            July, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0040.jpg'
            alt='Photography-Icon'
          />
          <p>
            Central Memorial Park <br />
            September, 2021 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0074.jpg'
            alt='Photography-Icon'
          />
          <p>
            Chinatown <br />
            April, 2021 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0085.jpg'
            alt='Photography-Icon'
          />
          <p>
            Bankview <br />
            February, 2021 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0094.jpg'
            alt='Photography-Icon'
          />
          <p>
            Bankview <br />
            September, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0105.jpg'
            alt='Photography-Icon'
          />
          <p>
            Bankview <br />
            July, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0148.jpg'
            alt='Photography-Icon'
          />
          <p>
            Downtown <br />
            September, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0151.jpg'
            alt='Photography-Icon'
          />
          <p>
            Sunalta <br />
            August, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0190.jpg'
            alt='Photography-Icon'
          />
          <p>
            17th Ave SW <br />
            November, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0198.jpg'
            alt='Photography-Icon'
          />
          <p>
            Downtown West End <br />
            November, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>

        <div className='image-container'>
          <img className='img-settings' src='images/OLI_0211.jpg'
            alt='Photography-Icon'
          />
          <p>
            Downtown <br />
            November, 2020 <br />
            Calgary, AB, Canada
          </p>
        </div>
      </div>
    </motion.div>
  );
}
