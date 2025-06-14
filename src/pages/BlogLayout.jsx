import React from 'react';

const BlogLayout = ({ title, date, image, children }) => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <img src={image} alt={title} className="w-full h-64 object-cover rounded mb-6" />
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h1 className="text-3xl font-bold text-dark mb-6">{title}</h1>
        <article className="prose prose-lg max-w-none text-gray-800">{children}</article>
      </div>
    </section>
  );
};

export default BlogLayout;
