import React, { useState } from 'react';

const faqs = [
  {
    question: "How much can I save with solar?",
    answer: "Depending on your usage and location, solar can cut your electricity bill by 50–80% annually."
  },
  {
    question: "Is my roof suitable?",
    answer: "Most south, east, or west-facing roofs are suitable for solar — flat and pitched options included."
  },
  {
    question: "Do I need planning permission?",
    answer: "Usually no. Most solar installs fall under permitted development. Exceptions apply for listed buildings or conservation areas."
  },
  {
    question: "What’s the installation process like?",
    answer: "We handle everything from design to installation in as little as 2–4 weeks."
  },
  {
    question: 'Do solar panels work on cloudy or rainy days?',
    answer: 'Yes, but with reduced efficiency. Solar panels still generate power from indirect sunlight during overcast days, just at a lower output.',
  },
  {
    question: 'Will solar panels increase my property value?',
    answer: 'In most cases, yes. Homes with solar installations are often more attractive to buyers due to lower electricity costs and environmental benefits.',
  },{
    question: 'Do I need to clean my solar panels regularly?',
    answer: 'Typically, rain is enough to keep your panels clean. However, if you notice a drop in performance, a professional cleaning every 1–2 years can help.',
  },
  {
    question: 'Is maintenance required for solar systems?',
    answer: 'Solar systems require minimal maintenance. It’s recommended to have an annual check-up to ensure all components are functioning efficiently.',
  },
  {
    question: 'What happens during a power cut?',
    answer: 'Unless you have a battery or backup system, your solar system will shut off during a power cut to protect utility workers. Battery systems allow you to keep using power.',
  },
];

const FAQTeaser = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
          Got Questions About Solar?
        </h2>
        <p className="text-text mb-10">
          Here are some of the most common questions we get from homeowners and businesses.
        </p>

        <div className="grid gap-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md shadow-md border cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-primary">{faq.question}</h3>
                <span className="text-xl text-gray-400">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-3 text-sm text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQTeaser;
