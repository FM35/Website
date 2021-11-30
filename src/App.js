import React from 'react';
import './App.css';
import { useLocation, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Port_Page_One from './components/pages/Portfolio_page_1';
import Port_Page_Two from './components/pages/Portfolio_page_2';
import Port_Page_Three from './components/pages/Portfolio_page_3';
import PC_Builds from './components/pages/PC_Builds';
import Contact_Us from './components/pages/Contact-Us'
import Olivine from './components/pages/Olivine';
import Pato from './components/pages/Pato';
import KLVC from './components/pages/KLVC';
import { AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import VirtualExhibit from './components/pages/VirtualExhibit';
import About_Me from './components/pages/About_Me';
import VirtualExhibitComputer from './components/pages/VirtualExhibitComputer'
import VirtualExhibitMobile from './components/pages/VirtualExhibitMobile'
import TechPort from './components/pages/TechPort'


function App() {
  const location = useLocation();

  return (
    <>

      <AnimatePresence exitBeforeEnter >
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={HeroSection} />
          <Route path='/port-page-one' component={Port_Page_One} />
          <Route path='/port-page-two' component={Port_Page_Two} />
          <Route path='/port-page-three' component={Port_Page_Three} />
          <Route path='/pc_builds' component={PC_Builds} />
          <Route path='/Olivine' component={Olivine} />
          <Route path='/Pato' component={Pato} />
          <Route path='/KLVC' component={KLVC} />
          <Route path='/VirtualExhibit' component={VirtualExhibit} />
          <Route path='/contact-us' component={Contact_Us} />
          <Route path='/about-me' component={About_Me} />
          <Route path='/VEC' component={VirtualExhibitComputer} />
          <Route path='/VEM' component={VirtualExhibitMobile} />
          <Route path='/techPort' component={TechPort} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
