import React from 'react';
import Hero from '../sections/Hero';
import WhyChooseUs from '../sections/WhyChooseUs';
import HowItWorks from '../sections/HowItWorks';
import SavingEstimator from '../sections/SavingEstimator';
import Projects from '../sections/Projects';
import FAQTeaser from '../sections/FaqTeaser';
import OfferPopup from '../components/OfferPopup';

const Home = () => {
  return (
    <>
      <OfferPopup />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <SavingEstimator />
      <Projects />
      <FAQTeaser />
    </>
  );
};

export default Home;
