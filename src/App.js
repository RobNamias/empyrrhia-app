import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
//import About from './pages/About';
import Medias from './pages/Medias';
import Dates from './pages/Dates';
import Contact from './pages/Contact';
import Lecteur from './components/Lecteur';
import Footer from './components/Footer'
//import Logo from './components/Logo';

const App = () => {
  return (
    <>
      <div className='grandconteneur' >
        <Lecteur />
      </div>
      <div className='conteneur'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medias" element={<Medias />} />
            <Route path="/dates" element={<Dates />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* path="*" fonctionne si jamais l'url ne correspon çà rien de déclaré au dessus */}
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
};

export default App;