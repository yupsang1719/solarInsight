import React, { useState } from 'react';

const SavingsEstimator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bill: '',
    roof: '',
    postcode: '',
  });

  //const navigate = useNavigate(); // Optional: if using React Router

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else handleEstimate();
  };

  const handleEstimate = () => {
    // Redirect (for now, to blog page)
    window.location.href = '/blog'; // Replace with CMS or quote form later
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
          See How Much You Could Save
        </h2>
        <p className="text-text mb-10">
          Answer 3 quick questions to estimate your annual solar savings.
        </p>

        {/* Step 1: Energy Bill */}
        {step === 1 && (
          <div className="space-y-4">
            <p className="font-semibold text-dark">What’s your monthly energy bill?</p>
            <div className="grid grid-cols-2 gap-4">
              {['£50-£100', '£100-£150', '£150-£200', '£200+'].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange('bill', option)}
                  className={`border px-4 py-3 rounded-md hover:bg-primary hover:text-white transition ${
                    formData.bill === option ? 'bg-primary text-white' : ''
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Roof Type */}
        {step === 2 && (
          <div className="space-y-4">
            <p className="font-semibold text-dark">What type of roof do you have?</p>
            <div className="grid grid-cols-2 gap-4">
              {['Tile', 'Slate', 'Metal', 'Flat'].map(option => (
                <button
                  key={option}
                  onClick={() => handleChange('roof', option)}
                  className={`border px-4 py-3 rounded-md hover:bg-primary hover:text-white transition ${
                    formData.roof === option ? 'bg-primary text-white' : ''
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Postcode */}
        {step === 3 && (
          <div className="space-y-4">
            <p className="font-semibold text-dark">Where are you located?</p>
            <input
              type="text"
              placeholder="Enter your postcode"
              value={formData.postcode}
              onChange={e => handleChange('postcode', e.target.value)}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary"
            />
          </div>
        )}

        {/* Button */}
        <div className="mt-8">
          <button
            onClick={nextStep}
            className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-dark transition"
          >
            {step < 3 ? 'Next' : 'Estimate My Savings'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SavingsEstimator;
