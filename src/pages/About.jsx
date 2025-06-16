import React from 'react';

const About = () => {
  return (
    <section className="bg-background min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-dark text-center mb-10">About Solar Insight</h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <img
            src="/assets/about/team.jpg"
            alt="Solar Insight Team"
            className="rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold text-dark mb-4">Who We Are</h2>
            <p className="text-text mb-4">
              At Solar Insight, we are a passionate team of solar experts committed to helping
              UK homeowners and businesses transition to cleaner, more cost-efficient energy.
              With years of experience in solar panel installation, battery storage, and EV
              charging, we tailor every solution to meet your energy goals and property needs.
            </p>
            <p className="text-text">
              We're not just installers — we’re educators, partners, and advocates for a sustainable future.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-dark mb-4">Our Mission</h2>
            <p className="text-text">
              We aim to make solar energy simple, accessible, and impactful for everyone. Whether you're
              looking to reduce your carbon footprint or slash your energy bills, we’re here to guide
              you every step of the way — from consultation to installation and beyond.
            </p>
          </div>
          <img
            src="/assets/about/mission.jpg"
            alt="Our Mission"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-dark mb-2">Trusted. Local. Proven.</h3>
          <p className="text-text mb-6">
            Proudly serving Berkshire, Hampshire, and surrounding areas with premium-quality
            workmanship and ongoing support.
          </p>
          <a
            href="/free-quote"
            className="inline-block bg-primary text-white font-medium py-3 px-6 rounded-md hover:bg-accent transition"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
