import React, { useEffect, useState } from 'react';
import './aboutUs.css';
import Navbar from '../Nav_helper';
import { motion } from "framer-motion";
import { PopUp, Close2 } from '../NavbarElements';
import AutoPlay from './AutoPlay';

export default function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openSketch, toggleSketch] = useState(false);
  const handleSketch = () => toggleSketch(!openSketch);

  const [openHCI, toggleHCI] = useState(false);
  const handleHCI = () => toggleHCI(!openHCI);

  const [showX, toggleX] = useState(false);
  const handleX = () => toggleX(!showX);

  function Sketch() {
    handleX();
    handleSketch();
  }

  function HCI() {
    handleX();
    handleHCI();
  }

  function Close() {

    handleX();

    if (openHCI === true) { handleHCI(); }

    if (openSketch === true) { handleSketch() }
  }

  const transition = {
    duration: "1",
    type: 'spring',
    stiffness: 30,
    damping: 10,
    ease: [0.6, 0.01, -0.05, 0.9]
  };

  const transition2 = {
    duration: '1',
    type: 'spring',
  };



  const Menu = {
    closed: {
      width: "0",
      height: "0",
      transition: { ...transition }
    },
    open: {

      width: "80%",
      height: "90%",
      transition: { ...transition }
    }
  };

  const PopUpText = {
    closed: {
      opacity: "0%",
      transition: { ...transition2 }
    },
    open: {

      opacity: "100%",
      transition: { ...transition2 }
    }
  };

  return (

    <motion.div className='about-container' style={{ overflowX: 'hidden' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      <Navbar />
      <PopUp variants={Menu}
        initial='closed'
        animate={showX ? "open" : "closed"}>

        <div className={showX ? '' : 'display-none'}>
          <Close2 style={{ color: '#f9f9f9' }} onClick={Close} />
        </div>

        <motion.p variants={PopUpText} initial='closed'
          animate={openSketch ? "open" : "closed"} className='pop-up-heading'> The Process</motion.p>
        <motion.p variants={PopUpText} initial='closed'
          animate={openHCI ? "open" : "closed"} className='pop-up-heading'> HCI</motion.p>
        <motion.p variants={PopUpText} initial='closed'
          animate={openSketch ? "open" : "closed"} className='pop-font'>By going through the sketching process we significantly reduce the waste of two precious resources, time and money. The Process includes:
          <br /><br /><br /><br />
          <ol>
            <li>An intake form that will aid us to get an idea of your business, organisation, or idea for the solution.</li>
            <br /><br />
            <li>A consultation with us so we can discuss the intake form and start brainstorming some potential solutions using quick sketches.</li>
            <br /><br />
            <li> And finally, a period where we return more refined sketches at different intervals, with each new sketch having adjustments based on your feedback.</li>
          </ol>
        </motion.p>
        <motion.p variants={PopUpText} initial='closed'
          animate={openHCI ? "open" : "closed"} className='pop-font'>We strive to make the human-computer Interaction an enjoyable, pain-free experience. This means making an interface which has the following characterstics:
          <br /><br /><br /><br />
          <ol>
            <li>Straight-forward to use.</li>
            <br /><br />
            <li>Minimal waiting times between a button press and the return of the needed information.</li>
            <br /><br />
            <li>Bugs that are dealt with in a timely manner.</li>
          </ol>
        </motion.p>
      </PopUp>
      <div className={showX ? 'opacityblur' : ''}>
        <div className='about-me'>
          <div style={{ width: '100%', textAlign: 'center', left: '0%' }} className='heading'>About Us</div>
          <div style={{ marginBottom: '20px', marginTop: '125px' }} className='about-me-passage'>
            <p style={{ opacity: 0.5 }} className='section8'> Website Designed and Developed In-house</p>
            <p className='section7'>
              Olivine is a technology and photography start up based in Calgary, Alberta that offers the following services:
            </p>
            <p style={{ opacity: 0.5 }} className='section5'> Website Designed and Coded In-house</p>
            <p className='section2'>
              1)Web and Mobile Application Development
            </p>
            <p className='section3'>
              2)Virtual Exhibit Development
            </p>
            <p className='section2'>
              3)Custom Built Desktop Computers
            </p>
            <p className='section3'>
              4)Photographic prints from various photographers
            </p>

            <p className='section7'>When it comes to designing and developing a well built solution we believe in this four step recipe:</p>
            <p className='section1'>1)The Sketching Process</p>
            <p className='section6'>Before we run to the computers and start putting our technical expertise to work, we first have to make sure that we are on the same page and have a defined vision of where we are going with the solution. </p>
            <button disabled={showX ? true : false} className='expand-button' onClick={Sketch} >Learn More</button>
            <p className='section1'>2)Minimalist Design</p>
            <p className='section6'>By definition a minimalistic design limits the amount of noise an interface has inorder to emphasize necessary information. it gets rid of what's not important so the important information can stand out. </p>
            <p className='section1'>3)Minimalistic, Not Simplistic</p>
            <AutoPlay className='vid-section' src="videos/animations.mp4" />
            <p className='section6'>The solution should be aesthetically pleasing. This can take shape in the form of smooth transitions, animating icons and text, or the positioning and layout of the elements in the application. </p>
            <p className='section1'>4) An Amazing Human-Computer Interaction</p>
            <p className='section6'>A solution that doesn't leave you wanting to pull your hair out. </p>
            <button disabled={showX ? true : false} className='expand-button' onClick={HCI} >Learn More</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}