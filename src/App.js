import React from 'react';
import './App.css';
import { useLocation, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import PC_Builds from './components/pages/PC_Builds';
import HeatPack from './components/pages/HeatPack';
import Pato from './components/pages/Pato';
import KLVC from './components/pages/KLVC';
import { AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';


function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={HeroSection} />
          <Route path='/services' component={Services} />
          <Route path='/pc_builds' component={PC_Builds} />
          <Route path='/HeatPack' component={HeatPack} />
          <Route path='/Pato' component={Pato} />
          <Route path='/KLVC' component={KLVC} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
