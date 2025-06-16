import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import FreeQuote from './pages/FreeQuote'; // Create this page too
import Blog from './pages/blog';
import SolarWorth from './pages/SolarWorth';
import ComingSoon from './components/ComingSoon';
import Contact from './pages/Contact';
import Projects from './pages/ProjectAll';
import ProjectDetail from './pages/ProjectDetails';
import About from './pages/About';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/free-quote" element={<FreeQuote />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/blogs/is-solar-worth-it-uk" element={<SolarWorth />} />
        <Route path="/services/residential-solar" element={<ComingSoon />} />
        <Route path="/services/commercial-solar" element={<ComingSoon />} />
        <Route path="/services/solar-battery-storage" element={<ComingSoon />} />
        <Route path="/services/ev-charging-installation" element={<ComingSoon />} />
        
        <Route path="/about" element={<About />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
