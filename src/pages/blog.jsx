import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Is Solar Worth It in the UK?',
    excerpt: 'Understand how UK homeowners are saving thousands annually with solar energy.',
    image: '/assets/blogs/1.jpeg',
    date: 'May 10, 2025',
    link: '/blogs/is-solar-worth-it-uk',
  },
  {
    id: 2,
    title: 'Solar Battery vs. No Battery',
    excerpt: 'Explore whether investing in solar battery storage really pays off long-term.',
    image: '/assets/blogs/2.jpg',
    date: 'May 25, 2025',
    link: '/blogs/solar-battery-vs-no-battery',
  },
  {
    id: 3,
    title: 'How to Maximise Solar Savings',
    excerpt: 'Learn how to get the most value from your solar installation.',
    image: '/assets/blogs/4.jpg',
    date: 'June 3, 2025',
    link: '/blogs/maximise-solar-savings',
  },
];

const Blog = () => {
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">Solar Insights Blog</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-lg font-semibold text-dark mb-2">{post.title}</h3>
                <p className="text-sm text-gray-700">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
