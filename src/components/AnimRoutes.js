import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Weddings from '../pages/Weddings';
import Families from '../pages/Families';
import Seniors from '../pages/Seniors';
import Boudoir from '../pages/Boudoir';

const AnimRoutes = () => {
  const location = useLocation();
  return (
  <AnimatePresence initial={true} mode='wait'>
    <Routes key={location.pathname} location={location}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/weddings' element={<Weddings />} />
      <Route path='/families' element={<Families />} />
      <Route path='/seniors' element={<Seniors />} />
      <Route path='/boudoir' element={<Boudoir />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </AnimatePresence>
  );
};

export default AnimRoutes;
