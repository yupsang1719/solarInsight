import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OfferPopup = () => {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setClosed(true); // Show corner button
  };

  const handleRedirect = () => navigate('/free-quote');

  const reopenPopup = () => {
    setVisible(true);
    setClosed(false);
  };

  return (
    <>
      {/* OFFER POPUP */}
      {visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40 px-4">
          <div className="bg-white max-w-2xl w-full rounded-xl shadow-2xl relative animate-fadeIn border border-gray-200 p-6 md:p-8 transition-all duration-300">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-primary transition"
              aria-label="Close popup"
            >
              &times;
            </button>

            {/* Title */}
            <div className="mb-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent leading-snug">
                Is Your Solar System Underperforming?
              </h2>
              <p className="text-gray-600 text-base mt-2">Unlock its full potential with expert help!</p>
            </div>

            {/* Highlights */}
            <div className="space-y-2 text-gray-800 text-sm md:text-base font-light leading-relaxed">
              <p><strong className="font-semibold">🔍 Efficiency Check:</strong> Compare irradiance vs. DC string output</p>
              <p><strong className="font-semibold">⚠️ Safety Inspection:</strong> Check for arcing or overheating</p>
              <p><strong className="font-semibold">⚡ Upgrade Potential:</strong> See if your system supports batteries</p>
              <p><strong className="font-semibold">🛠️ Inverter Optimization:</strong> Ensure peak settings</p>
              <p><strong className="font-semibold">🧼 PV Cleaning:</strong> Pro clean with purified water</p>
            </div>

            {/* Contact Info */}
            <div className="mt-6 mb-4 text-center text-sm md:text-base">
              <p>📞 <strong>Call:</strong> <a href="tel:07469993831" className="text-primary underline">07469 993831</a></p>
              <p>📧 <strong>Email:</strong> <a href="mailto:admin@solarinsight.co.uk" className="text-primary underline">admin@solarinsight.co.uk</a></p>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleRedirect}
              className="w-full bg-primary text-white font-medium py-3 rounded-md hover:bg-accent transition"
            >
              Get My Free Quote
            </button>
          </div>
        </div>
      )}

      {/* FLOATING CORNER BUTTON */}
      {closed && (
        <button
          onClick={reopenPopup}
          className="fixed bottom-5 right-5 z-40 bg-primary text-white text-sm px-4 py-2 rounded-full shadow-md hover:bg-accent transition"
        >
          💡 Show Offer
        </button>
      )}
    </>
  );
};

export default OfferPopup;
