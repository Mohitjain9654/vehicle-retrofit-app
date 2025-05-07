import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg w-full max-w-lg space-y-4">
        <h2 className="text-xl font-semibold text-center text-green-400">Select Retrofit Preferences</h2>

        <div>
          <label>Battery Capacity (kWh):</label>
          <select value={batteryCapacity} onChange={(e) => setBatteryCapacity(e.target.value)} required className="w-full bg-black border p-2">
            <option value="">Select</option>
            <option value="2">2 kWh</option>
            <option value="3">3 kWh</option>
            <option value="4">4 kWh</option>
            <option value="5">5 kWh</option>
          </select>
        </div>

        <div>
          <label>Max Speed Desired:</label>
          <select value={maxSpeed} onChange={(e) => setMaxSpeed(e.target.value)} required className="w-full bg-black border p-2">
            <option value="">Select</option>
            <option value="35">35 km/h</option>
            <option value="45">45 km/h</option>
            <option value="65">65 km/h</option>
            <option value="75">75 km/h</option>
          </select>
        </div>

        <div>
          <label>Vehicle Weight:</label>
          <select value={vehicleWeight} onChange={(e) => setVehicleWeight(e.target.value)} required className="w-full bg-black border p-2">
            <option value="">Select</option>
            <option value="under_100">Under 100 kg (e.g., scooters)</option>
            <option value="100_125">100–125 kg (light bikes)</option>
            <option value="125_150">125–150 kg (standard bikes)</option>
            <option value="150_200">150–200 kg (sport bikes)</option>
            <option value="above_200">Above 200 kg (heavy two-wheelers)</option>
          </select>
        </div>

        <div>
          <label>Budget (₹):</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
            className="w-full bg-black border p-2"
            placeholder="Enter your budget"
          />
        </div>

        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 p-2 rounded text-white">
          Calculate Estimate
        </button>
      </form>
    </div>
  );
};

export default WantRetrofit;
