import React from 'react';
import { Tooltip } from 'react-tooltip'; // ✅ updated for v5+

const features = [
  {
    title: 'Certified Local Experts',
    description: 'MCS-certified engineers with years of UK solar experience.',
    tooltip: 'We’re MCS-accredited — the highest standard in UK solar installation.',
    image: '/assets/svg/experts.svg',
    alt: 'Solar expert illustration',
  },
  {
    title: 'Save More Every Year',
    description: 'Custom solar systems that help you reduce your energy bills year after year.',
    tooltip: 'Solar Insight customers save £300–£900 yearly on average.',
    image: '/assets/svg/savings.svg',
    alt: 'Money savings illustration',
  },
  {
    title: 'Hassle-Free Process',
    description: 'We manage everything from survey to installation, paperwork to power-on.',
    tooltip: 'We handle everything, so you don’t have to lift a finger.',
    image: '/assets/svg/process.svg',
    alt: 'Easy installation process illustration',
  },
  {
    title: '30 Year Panel Performance Warranty',
    description: 'Premium panels with up to 25 years warranty, backed by local support.',
    tooltip: 'Top-tier panels with warranties up to 25 years — we’ve got your back.',
    image: '/assets/svg/warranty.svg',
    alt: 'Warranty protection illustration',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
          Why Choose Solar Insight?
        </h2>
        <p className="text-text max-w-xl mx-auto">
          We're not just installing panels — we're delivering long-term savings, reliability, and peace of mind.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-lg shadow-sm hover:shadow-xl transition p-6 flex flex-col items-center text-center"
            >
              <img
                src={feature.image}
                alt={feature.alt}
                data-tooltip-id="feature-tip"
                data-tooltip-content={feature.tooltip}
                className="w-24 h-24 mb-4 object-contain cursor-help"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-dark mb-2">{feature.title}</h3>
              <p className="text-sm text-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Tooltip instance */}
      <Tooltip id="feature-tip" place="top" className="z-50" />
    </section>
  );
};

export default WhyChooseUs;
