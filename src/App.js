import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import FreeQuote from './pages/FreeQuote'; // Create this page too
import Blog from './pages/blog';
import SolarWorth from './pages/SolarWorth';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/free-quote" element={<FreeQuote />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/is-solar-worth-it-uk" element={<SolarWorth />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
