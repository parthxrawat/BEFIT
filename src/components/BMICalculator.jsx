import React, { useState } from 'react';

export default function BMICalculator() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / (height * height)).toFixed(1);
      setBMI(bmiValue);

      if (bmiValue < 18.5) setCategory('UNDERWEIGHT');
      else if (bmiValue < 24.9) setCategory('NORMAL WEIGHT');
      else if (bmiValue < 29.9) setCategory('OVERWEIGHT');
      else setCategory('OBESITY');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-blue-950 flex flex-col items-center p-10 text-white">
      <h2 className="text-sm text-blue-300 mb-2 tracking-wide">
        GUIDED PLAN FOR A HEALTHY LIFESTYLE
      </h2>
      <h1 className="text-3xl font-bold mb-8">Know Your Health Guide</h1>

      <div className="w-full max-w-md bg-blue-800 p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block text-blue-200 mb-2">01 Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Your Age"
            className="w-full p-3 rounded bg-blue-900 text-white placeholder-gray-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-blue-200 mb-2">02 Weight</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Your Weight in Kg"
            className="w-full p-3 rounded bg-blue-900 text-white placeholder-gray-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-blue-200 mb-2">03 Height</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Your Height in Meter"
            className="w-full p-3 rounded bg-blue-900 text-white placeholder-gray-400"
          />
        </div>

        <button
          onClick={calculateBMI}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded"
        >
          Calculate BMI
        </button>
      </div>

      {bmi && (
        <div className="mt-8 w-full max-w-md bg-blue-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">BMI</h3>
          <p className="text-sm text-gray-300 mb-4">
            BMI (Body Mass Index) is a measure that uses your weight and height to estimate body fat and assess if
            you're underweight, normal weight, overweight, or obese.
          </p>
          <p className="text-lg">
            Result: <span className="font-bold">{bmi}</span>, <span className="font-bold">{category}</span>
          </p>
        </div>
      )}
    </div>
  );
}
