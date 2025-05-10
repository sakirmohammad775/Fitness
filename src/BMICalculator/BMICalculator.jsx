import React from 'react';

const BMICalculator = () => {
  return (
    <div className="bg-neutral-900 text-white py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* BMI Calculator Chart */}
        <div className="rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">BMI Calculator Chart</h2>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2 font-semibold text-gray-400">BMI</th>
                <th className="py-2 font-semibold text-gray-400">Weight Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Below 18.5</td>
                <td className="py-2">Underweight</td>
              </tr>
              <tr>
                <td className="py-2">18.5 - 24.9</td>
                <td className="py-2">Healthy</td>
              </tr>
              <tr>
                <td className="py-2">25.0 - 29.9</td>
                <td className="py-2">Overweight</td>
              </tr>
              <tr>
                <td className="py-2">30.0 and Above</td>
                <td className="py-2">Obese</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Calculate your BMI */}
        <div className="rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Calculate your BMI</h2>
          <p className="text-gray-400 mb-6">
            We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="number"
              placeholder="Height/cm"
              className="bg-gray-800 text-white rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="number"
              placeholder="Weight/kg"
              className="bg-gray-800 text-white rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="number"
              placeholder="Age"
              className="bg-gray-800 text-white rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select
              className="bg-gray-800 text-white rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <select
            className="w-full bg-gray-800 text-white rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-6"
          >
            <option value="">Select an activity factor</option>
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="lightly-active">Lightly active (light exercise/sports 1-3 days/week)</option>
            <option value="moderately-active">Moderately active (moderate exercise/sports 3-5 days/week)</option>
            <option value="very-active">Very active (hard exercise/sports 6-7 days a week)</option>
            <option value="extra-active">Extra active (very hard exercise/sports & physical job or 2x training)</option>
          </select>
          <button
            className="bg-red-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-2xl focus:outline-none focus:shadow-outline active:bg-amber-700 w-1/2"
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;