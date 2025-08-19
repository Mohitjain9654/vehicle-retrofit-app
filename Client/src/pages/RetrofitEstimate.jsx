import React from 'react';
import { useLocation } from 'react-router-dom';

const RetrofitEstimate = () => {
  const { state } = useLocation();
  const { batteryCapacity, maxSpeed, vehicleWeight, budget } = state || {};

  // --- Convert weight category to numeric (approximate) ---
  let weightCategory = 0;
  switch (vehicleWeight) {
    case "under_100":
      weightCategory = 90;
      break;
    case "100_125":
      weightCategory = 110;
      break;
    case "125_150":
      weightCategory = 135;
      break;
    case "150_200":
      weightCategory = 175;
      break;
    case "above_200":
      weightCategory = 220;
      break;
    default:
      weightCategory = 100;
  }

  // --- Adjusted Cost Parameters ---
  const batteryCost = parseInt(batteryCapacity) * 8000; // ₹8,000 per kWh
  const motorCapacity = maxSpeed > 65 ? 3.5 : maxSpeed > 45 ? 2.5 : 1.5;
  const motorCost = motorCapacity * 7000; // ₹7,000 per kW

  const weightBasedCost = weightCategory * 10; // ₹10 per kg approx
  const otherPartsCost = 14000;
  const laborCost = 10000;

  const totalCost = batteryCost + motorCost + otherPartsCost + laborCost + weightBasedCost;

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-2xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-400">🔧 Retrofitting Cost Estimate</h2>

        <div className="space-y-4 text-lg">
          <p><strong>Battery Capacity:</strong> {batteryCapacity} kWh</p>
          <p><strong>Battery Cost:</strong> ₹{batteryCost.toLocaleString()}</p>

          <p><strong>Motor Capacity:</strong> {motorCapacity} kW</p>
          <p><strong>Motor Cost:</strong> ₹{motorCost.toLocaleString()}</p>

          <p><strong>Weight-based Adjustment:</strong> ₹{weightBasedCost.toLocaleString()}</p>
          <p><strong>Other Components:</strong> ₹{otherPartsCost.toLocaleString()}</p>
          <p><strong>Labor & Installation:</strong> ₹{laborCost.toLocaleString()}</p>

          <hr className="border-gray-600" />

          <p className="text-xl font-semibold text-yellow-400">
            💰 Total Estimated Retrofit Cost: ₹{totalCost.toLocaleString()}
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Your entered budget: ₹{budget.toLocaleString()}
            {totalCost > budget ? (
              <span className="text-red-400 ml-2">⚠️ Over budget</span>
            ) : (
              <span className="text-green-400 ml-2">✅ Within budget</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RetrofitEstimate;

