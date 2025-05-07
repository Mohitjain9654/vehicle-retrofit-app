import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Battery, Gauge, Weight, IndianRupee } from 'lucide-react';

const WantRetrofit = () => {
  const navigate = useNavigate();

  const [batteryCapacity, setBatteryCapacity] = useState('');
  const [maxSpeed, setMaxSpeed] = useState('');
  const [vehicleWeight, setVehicleWeight] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!batteryCapacity || !maxSpeed || !vehicleWeight || !budget) {
      alert('Please fill in all fields');
      return;
    }

    navigate('/retrofit-estimate', {
      state: {
        batteryCapacity,
        maxSpeed: parseInt(maxSpeed),
        vehicleWeight,
        budget: parseInt(budget),
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-white/5 border border-white/10 shadow-xl rounded-2xl p-8 w-full max-w-lg space-y-6 text-white"
      >
        <h2 className="text-3xl font-bold text-center text-green-400">EV Retrofit Preferences</h2>
        <p className="text-center text-sm text-gray-400">Get a smart estimate tailored to your needs</p>

        <div className="space-y-1">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
            <Battery className="w-4 h-4 text-green-400" /> Battery Capacity (kWh)
          </label>
          <select
            value={batteryCapacity}
            onChange={(e) => setBatteryCapacity(e.target.value)}
            required
            className="w-full bg-black/40 border border-gray-600 rounded px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            <option value="">Select</option>
            <option value="2">2 kWh</option>
            <option value="3">3 kWh</option>
            <option value="4">4 kWh</option>
            <option value="5">5 kWh</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
            <Gauge className="w-4 h-4 text-green-400" /> Max Speed Desired
          </label>
          <select
            value={maxSpeed}
            onChange={(e) => setMaxSpeed(e.target.value)}
            required
            className="w-full bg-black/40 border border-gray-600 rounded px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            <option value="">Select</option>
            <option value="35">35 km/h</option>
            <option value="45">45 km/h</option>
            <option value="65">65 km/h</option>
            <option value="75">75 km/h</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
            <Weight className="w-4 h-4 text-green-400" /> Vehicle Weight
          </label>
          <select
            value={vehicleWeight}
            onChange={(e) => setVehicleWeight(e.target.value)}
            required
            className="w-full bg-black/40 border border-gray-600 rounded px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            <option value="">Select</option>
            <option value="under_100">Under 100 kg (scooters)</option>
            <option value="100_125">100–125 kg (light bikes)</option>
            <option value="125_150">125–150 kg (standard bikes)</option>
            <option value="150_200">150–200 kg (sport bikes)</option>
            <option value="above_200">Above 200 kg (heavy two-wheelers)</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
            <IndianRupee className="w-4 h-4 text-green-400" /> Budget (₹)
          </label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
            placeholder="Enter your budget"
            className="w-full bg-black/40 border border-gray-600 rounded px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 transition duration-300 p-3 rounded-xl font-semibold shadow-md"
        >
          Calculate Estimate
        </button>
      </form>
    </div>
  );
};

export default WantRetrofit;

