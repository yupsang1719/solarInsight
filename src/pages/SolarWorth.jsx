import React from 'react';
import BlogLayout from './BlogLayout';

const SolarWorth = () => {
  return (
    <BlogLayout
      title="Is Solar Worth It in the UK?"
      date="May 10, 2025"
      image="/assets/blogs/1.jpeg"
    >
      <p>Solar panels have become more affordable in the UK over the last few years...</p>
      <p>With rising energy prices, the return on investment has never looked better...</p>
      <h2>Government Support</h2>
      <p>Thanks to initiatives like the Smart Export Guarantee (SEG)...</p>
      {/* Add more sections as needed */}
    </BlogLayout>
  );
};

export default SolarWorth;
