import React, { useEffect, useRef } from 'react';

const steps = [
  {
    title: 'Free Consultation',
    description: 'Book a quick chat with our experts to assess your energy usage and solar potential.',
    icon: '/assets/svg/consult.svg',
  },
  {
    title: 'Custom Design & Quote',
    description: 'We tailor a solar system to your home and provide a clear savings quote.',
    icon: '/assets/svg/design.svg',
  },
  {
    title: 'Professional Installation',
    description: 'Our certified local team installs your system with minimal disruption.',
    icon: '/assets/svg/install.svg',
  },
  {
    title: 'Lifetime Support',
    description: 'You get 25+ years of clean energy, warranty, and on-demand local support.',
    icon: '/assets/svg/support.svg',
  },
];

const HowItWorks = () => {
  const sectionRef = useRef([]);
  const lineRef = useRef(null);

  // Animate steps
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current;
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Animate vertical line
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && lineRef.current) {
          lineRef.current.style.height = '100%';
        }
      },
      { threshold: 0.1 }
    );

    const lineElement = lineRef.current;

    if (lineElement) observer.observe(lineElement);

    return () => {
      if (lineElement) observer.unobserve(lineElement);
    };
  }, []);

  return (
    <section className="relative py-28 overflow-hidden bg-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/section-bg/howitworks-bg.png"
          alt="Decorative background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Section Content */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            How It Works
          </h2>
          <p className="text-text text-base md:text-lg max-w-2xl mx-auto">
            From your first call to years of clean energy — here’s how we make it effortless to go solar.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 space-y-24">
          {/* Vertical Line */}
          <div
            ref={lineRef}
            className="absolute left-0 top-0 w-1 bg-primary transition-all duration-[2000ms] ease-in-out"
            style={{ height: '0%' }}
          ></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => (sectionRef.current[index] = el)}
              className="relative flex items-start gap-8 transform opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              {/* Dots */}
              <div className="absolute -left-[38px] top-1 w-7 h-7 bg-primary rounded-full border-4 border-white shadow-md z-10 animate-ping-slow"></div>
              <div className="absolute -left-[38px] top-1 w-7 h-7 bg-primary rounded-full border-4 border-white shadow-md z-10"></div>

              {/* Icon */}
              <img
                src={step.icon}
                alt={step.title}
                className="w-20 h-20 object-contain flex-shrink-0 mt-1 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
                loading="lazy"
              />

              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold text-dark mb-2">{step.title}</h3>
                <p className="text-text text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
