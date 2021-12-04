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
import About_Me from './components/pages/aboutUs';
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
          <Route path='/photography-portfolio-page-one' component={Port_Page_One} />
          <Route path='/photography-portfolio-page-two' component={Port_Page_Two} />
          <Route path='/photography-portfolio-page-three' component={Port_Page_Three} />
          <Route path='/computer-portfolio' component={PC_Builds} />
          <Route path='/olivine' component={Olivine} />
          <Route path='/pato' component={Pato} />
          <Route path='/klvc' component={KLVC} />
          <Route path='/virtual-exhibit' component={VirtualExhibit} />
          <Route path='/contact-us' component={Contact_Us} />
          <Route path='/about-us' component={About_Me} />
          <Route path='/virtual-exhibit-computer' component={VirtualExhibitComputer} />
          <Route path='/virtual-exhibit-mobile' component={VirtualExhibitMobile} />
          <Route path='/technology-portfolio' component={TechPort} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
