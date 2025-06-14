import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary tracking-tight" aria-label="Solar Insight Home">
          Solar Insight
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <li><Link to="/" className="hover:text-primary transition">Home</Link></li>

          {/* Dropdown - Services */}
          <li className="relative group">
            <button className="hover:text-primary transition">Services</button>
            <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-md hidden group-hover:block z-50">
              <li><Link to="/services/residential-solar" className="block px-4 py-2 hover:bg-gray-100">Residential Solar</Link></li>
              <li><Link to="/services/commercial-solar" className="block px-4 py-2 hover:bg-gray-100">Commercial Solar</Link></li>
              <li><Link to="/services/solar-battery-storage" className="block px-4 py-2 hover:bg-gray-100">Solar Battery</Link></li>
              <li><Link to="/services/ev-charging-installation" className="block px-4 py-2 hover:bg-gray-100">EV Charging</Link></li>
            </ul>
          </li>

          <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
          <li><Link to="/blogs" className="hover:text-primary transition">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
          <li>
            <Link to="/free-quote" className="ml-4 bg-primary text-white px-4 py-2 rounded hover:bg-accent transition">
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-dark"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 space-y-2 text-sm font-medium text-gray-700">
          <Link to="/" className="block hover:text-primary">Home</Link>
          <Link to="/services/residential-solar" className="block hover:text-primary">Residential Solar</Link>
          <Link to="/services/commercial-solar" className="block hover:text-primary">Commercial Solar</Link>
          <Link to="/services/solar-battery-storage" className="block hover:text-primary">Solar Battery</Link>
          <Link to="/services/ev-charging-installation" className="block hover:text-primary">EV Charging</Link>
          <Link to="/about" className="block hover:text-primary">About</Link>
          <Link to="/blogs" className="block hover:text-primary">Blog</Link>
          <Link to="/contact" className="block hover:text-primary">Contact</Link>
          <Link to="/free-quote" className="block bg-primary text-white text-center py-2 rounded hover:bg-accent transition">
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
