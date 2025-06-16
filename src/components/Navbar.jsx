import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
          Solar Insight
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>

          {/* Services Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              className="hover:text-primary transition"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Services
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-52 bg-white border rounded-md shadow-md z-50">
                <li><Link to="/services/residential-solar" className="block px-4 py-2 hover:bg-gray-100">Residential Solar</Link></li>
                <li><Link to="/services/commercial-solar" className="block px-4 py-2 hover:bg-gray-100">Commercial Solar</Link></li>
                <li><Link to="/services/solar-battery-storage" className="block px-4 py-2 hover:bg-gray-100">Solar Battery</Link></li>
                <li><Link to="/services/ev-charging-installation" className="block px-4 py-2 hover:bg-gray-100">EV Charging</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/about" className="hover:text-primary">About</Link></li>
          <li><Link to="/blogs" className="hover:text-primary">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          <li>
            <Link to="/free-quote" className="ml-4 bg-primary text-white px-4 py-2 rounded hover:bg-accent">
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle (optional) */}
        {/* Your existing mobile menu code */}
      </nav>
    </header>
  );
};

export default Navbar;
