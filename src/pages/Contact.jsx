import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await fetch('https://script.google.com/macros/s/AKfycbzn2Z_WKbCP6bz7c_p6VflEsUly9fZ_MWpBZayfE143iA7W2r5OuC34UJMXg5DIEsai3A/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setError('Something went wrong, please try again.');
    }
  };

  return (
    <section className="bg-background min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-dark">Contact Us</h2>

        {submitted ? (
          <p className="text-green-600 text-center font-semibold">Thank you! We’ll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-primary"
              ></textarea>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-accent transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
