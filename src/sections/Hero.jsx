import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const logos = [
    { src: '/assets/logo/mcs.jpg', alt: 'MCS Certified' },
    { src: '/assets/logo/recc1.jpg', alt: 'NAPIT Certified' },
  ];

  return (
    <section className="relative bg-gradient-to-b from-sky-200 via-sky-100 to-background pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center md:items-start text-center md:text-left gap-10 relative">
        
        {/* Left: Text */}
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
            Power Your Home with Clean, Affordable Solar Energy
          </h1>
          <p className="mt-4 text-lg text-text">
            Join thousands of UK homeowners switching to solar and start saving on your energy bills today.
          </p>
          <a
            href="/free-quote"
            className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded hover:bg-accent transition font-medium"
          >
            Get Your Free Quote
          </a>
        </div>

        {/* Right: CTA */}
        {showPrompt && (
          <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10">
            <div className="w-[90%] md:w-72 bg-white border border-primary border-opacity-30 rounded-xl shadow-xl p-4 animate-bounce-slow hover:shadow-2xl transition text-left">
              <p className="text-sm text-dark font-semibold">💡 Curious how much you could save?</p>
              <p className="text-sm text-text mt-1">
                Read how solar helps UK homeowners cut costs every year.
              </p>
              <a
                href="/blogs"
                className="inline-block mt-2 text-primary font-medium underline hover:text-accent transition"
              >
                Visit the Blog →
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Logo Row Outside the Core Grid */}
      <div className="mt-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export default Hero;
