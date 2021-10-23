import React, { useEffect } from 'react';
import './HeatPack.css';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { Power3, TimelineLite } from "gsap";

export default function HeatPack() {

  const tl = new TimelineLite();

  let imageReveal1 = CSSRulePlugin.getRule('.flex');

  useEffect(() => {
    tl.to(imageReveal1, 2, { display: "flex", gap: "0px", ease: Power3.easeInOut, delay: 0.7 });
  });

  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const staggerEffect = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: 1,
      },
    },
  };

  const letter = {
    initial: {
      y: 100,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ...transition },
    },
  };

  return (

    <div className='heatpack-container' style={{ overflowX: 'hidden' }}>
      <div>
        Image gonna be here
        <h1> Fungai(foon-guy-e) Mawoyo </h1>
        <p>
          I am a photographer and Computer Scientist (Bachelor of Science in Computer Science conferred by the University of Calgary), from Harare Zimbabwe, currently based in Calgary, Canada.
          My passion lies in finding intersections between photography and technology, which is why the Virtual Exhibit idea is my prized jewel. It is an idea that was brought about by my desire to exhibit
          photography but lacking the capital to rent out a physical space to do so. The Virtual Exhibit was built using the Unity Platform and the programming language C#. My other Technological exploit
          which is exhibited on ths website, is the website itself in which I put my FrontEnd Development and design skills to use. The website was coded using React JS, CSS and html. I also use the python
          programming language for data science and machine learning projects aswell that can be found on my GitHub page by clicking the github at the bottom. If you would like an in-depth breakdown of the
          website and Virtual Exhibit , click here to watch video breakdowns in the mobile and web app section. <br />
          When it comes down to my photography exploits, I exclusively shoot in Black and White with a focus on shooting  in and around DownTown spaces. My Goal for my photography is to get to a stage
          where I can travel to different cities on the globe and document the Downtown scene and sell prints of my work.<br />
          Explain Olivine and thank the community for APIs and what not. Done.

        </p>
      </div>
    </div>
  );
}