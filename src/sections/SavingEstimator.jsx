import React, { useState } from 'react';

const SavingsEstimatorWithPostcodeLookup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bill: '',
    roof: '',
    postcode: '',
    addressInfo: null,
    estimate: null,
  });
  const [error, setError] = useState('');

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setError('');
  };

  const nextStep = async () => {
    if (step === 3) {
      const address = await fetchAddress(formData.postcode);
      if (address) {
        const estimate = calculateEstimate(formData.bill);
        setFormData((prev) => ({
          ...prev,
          addressInfo: address,
          estimate,
        }));
        setStep(step + 1);
      } else {
        setError('Invalid postcode. Please try again.');
      }
    } else {
      setStep(step + 1);
    }
  };

  const fetchAddress = async (postcode) => {
    try {
      const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
      const data = await response.json();
      return data.status === 200 ? data.result : null;
    } catch (err) {
      console.error('Postcode lookup error:', err);
      return null;
    }
  };

  const calculateEstimate = (billRange) => {
    const averageBill = {
      '£50-£100': 75,
      '£100-£150': 125,
      '£150-£200': 175,
      '£200+': 250,
    }[billRange] || 100;

    const annualBill = averageBill * 12;
    const usageKWh = annualBill / 0.30; // average unit cost 30p/kWh
    const systemSize = usageKWh / 900; // assume 900 kWh/kW generated per year
    const savings = systemSize * 900 * 0.30;
    return Math.round(savings);
  };

  const handleSubmit = () => {
    window.location.href = '/free-quote';
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
          See How Much You Could Save
        </h2>
        <p className="text-text mb-10">Answer 3 quick questions to estimate your annual solar savings.</p>

        {/* Step 1: Bill Range */}
        {step === 1 && (
          <div className="space-y-4">
            <p className="font-semibold text-dark">What’s your monthly energy bill?</p>
            <div className="grid grid-cols-2 gap-4">
              {['£50-£100', '£100-£150', '£150-£200', '£200+'].map((option) => (
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
              {['Tile', 'Slate', 'Metal', 'Flat'].map((option) => (
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
            <p className="font-semibold text-dark">Your Postcode</p>
            <input
              type="text"
              placeholder="Enter your postcode"
              value={formData.postcode}
              onChange={(e) => handleChange('postcode', e.target.value)}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        )}

        {/* Step 4: Result */}
        {step === 4 && formData.estimate && (
          <div className="space-y-4">
            <p className="text-lg text-dark">
              🎉 You could save approximately{' '}
              <span className="font-bold text-primary">£{formData.estimate}</span> per year!
            </p>
            <p className="text-sm text-text">
              Based on your usage and location: {formData.addressInfo.admin_district},{' '}
              {formData.addressInfo.region}
            </p>
            <button
              onClick={handleSubmit}
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-dark transition"
            >
              Get a Free Quote
            </button>
          </div>
        )}

        {/* Next Button */}
        {step < 4 && (
          <div className="mt-8">
            <button
              onClick={nextStep}
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-dark transition"
            >
              {step < 3 ? 'Next' : 'Estimate My Savings'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SavingsEstimatorWithPostcodeLookup;
