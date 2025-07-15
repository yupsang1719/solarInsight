import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-sky-200 via-sky-100 to-background pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10 px-6 text-dark">

        {/* Brand & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">Solar Insight</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Your trusted local solar experts delivering quality, efficiency, and savings across the UK.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link to="/" className="hover:font-semibold">Home</Link></li>
            <li><Link to="/about" className="hover:font-semibold">About</Link></li>
            <li><Link to="/contact" className="hover:font-semibold">Contact</Link></li>
            <li><Link to="/blogs" className="hover:font-semibold">Blog</Link></li>
            <li><Link to="/free-quote" className="hover:font-semibold">Get a Quote</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link to="/services/residential-solar" className="hover:font-semibold">Residential Solar</Link></li>
            <li><Link to="/services/commercial-solar" className="hover:font-semibold">Commercial Solar</Link></li>
            <li><Link to="/services/solar-battery-storage" className="hover:font-semibold">Battery Storage</Link></li>
            <li><Link to="/services/ev-charging-installation" className="hover:font-semibold">EV Charging</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              📍 ASentinel House, Ancells Business Park, Harvest Crescent, Fleet, GU51 2UZ
            </li>
            <li>
              📞 <a href="tel:07469993831" className="hover:underline">0800 086 2556</a>
            </li>
            <li>
              ✉️ <a href="mailto:admin@solarinsight.co.uk" className="hover:underline">admin@solarinsight.co.uk</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Notice */}
      <div className="mt-10 pt-6 border-t border-gray-300 text-center text-sm text-gray-500 px-6">
        &copy; {new Date().getFullYear()} Solar Insight. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
