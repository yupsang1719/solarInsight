import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background text-dark border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + Message */}
        <div>
          <img src="/assets/logo/footer-logo.png" alt="Solar Insight Logo" className="h-10 mb-4" />
          <p className="text-sm text-text">
            Bringing sunlight to your doorstep. Trusted solar experts in the UK.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/services/residential-solar" className="hover:text-primary">Residential Solar</a></li>
            <li><a href="/services/commercial-solar" className="hover:text-primary">Commercial Solar</a></li>
            <li><a href="/services/solar-battery-storage" className="hover:text-primary">Solar Battery</a></li>
            <li><a href="/services/ev-charging-installation" className="hover:text-primary">EV Charging</a></li>
            <li><a href="/about" className="hover:text-primary">About</a></li>
            <li><a href="/blogs" className="hover:text-primary">Blog</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            <li><a href="/free-quote" className="hover:text-primary font-medium">Get a Quote</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
          <p className="text-sm text-text mb-2">📍 Aldershot, Hampshire, UK</p>
          <p className="text-sm text-text mb-2">📞 +44 123 456 7890</p>
          <p className="text-sm text-text">✉️ info@solarinsight.co.uk</p>
        </div>

        {/* Newsletter + Socials */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
          <form className="mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md mb-2"
            />
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-dark transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-2 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-primary">📘</a>
            <a href="#" aria-label="Instagram" className="hover:text-primary">📸</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary">🔗</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-200 pt-4 text-center text-sm text-text">
        <p>© {new Date().getFullYear()} Solar Insight. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/privacy-policy" className="hover:text-primary">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-primary">Terms of Service</a>
          <a
            href="https://matdigitals.com"
            className="hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            Site by MatDigitals
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
