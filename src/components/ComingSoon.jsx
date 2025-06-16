import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background px-6 text-center">
      <h1 className="text-5xl font-bold text-dark mb-4">😅 Oops... Not Quite Ready!</h1>
      <p className="text-lg text-text mb-6 max-w-lg">
        This page is still baking in our solar oven. <br />
        We promise it’ll be *well done* soon!
      </p>
      <p className="text-sm text-gray-500 mb-8 italic">Meanwhile, enjoy the sun... or check out our other cool stuff.</p>

      <Link
        to="/"
        className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-accent transition"
      >
        🔙 Back to Solar Goodness
      </Link>
    </section>
  );
};

export default ComingSoon;
