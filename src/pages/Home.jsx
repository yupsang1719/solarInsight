import React from 'react';
import Hero from '../sections/Hero';
import WhyChooseUs from '../sections/WhyChooseUs';
import HowItWorks from '../sections/HowItWorks';
import SavingEstimator from '../sections/SavingEstimator';
import Projects from '../sections/Projects';
import Reviews from '../sections/Reviews';
import BlogPreview from '../sections/BlogPreview';

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <SavingEstimator />
      <Projects />
      <Reviews />
      <BlogPreview />
    </>
  );
};

export default Home;
