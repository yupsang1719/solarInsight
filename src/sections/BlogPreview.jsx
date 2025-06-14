import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'How Solar Panels Actually Save You Money',
    excerpt: 'Discover how much you could save on energy bills each year by switching to solar.',
    date: 'June 5, 2025',
    image: '/assets/blog/solar-savings.jpg',
    url: '/blog/solar-panels-save-money',
  },
  {
    id: 2,
    title: 'Is Your Roof Ready for Solar?',
    excerpt: 'A quick guide to check if your home is suitable for a solar panel system.',
    date: 'May 30, 2025',
    image: '/assets/blog/roof-check.jpg',
    url: '/blog/is-your-roof-ready',
  },
  {
    id: 3,
    title: 'Understanding the MCS Certification',
    excerpt: 'Why it matters and how certified installers protect your investment.',
    date: 'May 20, 2025',
    image: '/assets/blog/mcs-certification.jpg',
    url: '/blog/mcs-certification-explained',
  },
];

const BlogPreview = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
          From the Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-background rounded-lg shadow-sm hover:shadow-lg transition duration-300 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-dark mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-text mb-4">{post.excerpt}</p>
                <a
                  href={post.url}
                  className="text-primary font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
            <div className="text-center mt-12">
                <a href="/blog"
                className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-dark transition">
                    View All Articles
                </a>
            </div>
      </div>
    </section>
  );
};

export default BlogPreview;
