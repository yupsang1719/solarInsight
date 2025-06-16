import React, { useState } from 'react';

const FreeQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    goal: '',
    energy: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const templateParams = {
      ...formData
    };

    try {

      // Send to Google Sheets
      await fetch('https://script.google.com/macros/s/AKfycbzNZ-kS5ciPbzPZirM0H_7EmPcDv0Ouf3zn2sGbcWPdud2Rab4eAsqO_7g5S674P5Se/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(templateParams)
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', propertyType: '', goal: '', energy: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="bg-background min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-dark mb-6 text-center">Get Your Free Solar Quote</h2>

        {submitted ? (
          <p className="text-center text-green-600 font-semibold">Thank you! We'll be in touch shortly.</p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Property Type</label>
              <select
                name="propertyType"
                required
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-primary"
              >
                <option value="">Select an option</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Your Goal</label>
              <textarea
                name="goal"
                rows="4"
                value={formData.goal}
                onChange={handleChange}
                placeholder="Tell us a bit about your solar goals..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Annual Energy Consumption (Optional)</label>
              <input
                type="text"
                name="energy"
                value={formData.energy}
                onChange={handleChange}
                placeholder="e.g., 3500 kWh"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-primary"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-primary text-white font-medium py-3 rounded-md hover:bg-accent transition"
            >
              Request My Quote
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default FreeQuote;
