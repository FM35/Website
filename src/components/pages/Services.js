import React, { useEffect } from 'react';
import '../../App.css';
import Aos from 'aos';
import "aos/dist/aos.css"
import './Services.css';

export default function Services() {

  useEffect(() => {
    Aos.init({});
  }, [])
  return (<div>
    <h1 className='services'>SERVICES</h1>
    <div data-aos='fade up' className='right'> Internals: <br />Ryzen Processor <br />Motherboard <br />Memory Storage <br />Video Card <br />Power Supply <br />Case <br />Network Card <br />Operating System</div>
    <div data-aos='fade right' className='left'> <img src='images/photography.png'
      alt='Photography-Icon'
      width='242'
      height='242'
    />
    </div>


  </div>
  );
}
