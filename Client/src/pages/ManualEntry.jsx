import React, { useState } from "react";
import { assessRetrofit } from '../utility/assessRetrofit';
import { useNavigate } from 'react-router-dom';

const ManualInput = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        vehicleAge: "",
        brakingSystemCondition: "",
        tireCondition: "",
        wheelCondition: "",
        structuralIntegrity: "",
        vehicleBodyCondition: "",
        mudguardCondition: "",
        electricalIssues: "",
        outsideFrameCondition: "",
        suspensionLoadCondition: "",
        clusterDisplayCondition: "",
        lowerBodyCondition: "",
        transmissionCondition: "",
        desiredChanges: "",
    });

    const [recommendation, setRecommendation] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const results = assessRetrofit(formData);
        navigate('/results', { state: results });
    };

    const conditionOptions = [
        ["", "Select Condition"],
        ["0", "Less than 1 year"],
        ["1", "1-3 years"],
        ["2", "3-5 years"],
        ["3", "5-7 years"],
        ["4", "7-8 years"],
        ["5", "9-11 years"],
        ["6", "11-13 years"],
        ["7", "13-15 years"],
        ["8", "More than 15 years"],
    ];

    const renderDropdown = (id, label) => (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium text-white">{label}</label>
            <select
                id={id}
                value={formData[id]}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm p-2"
            >
                {conditionOptions.map(([value, text]) => (
                    <option key={value} value={value}>{text}</option>
                ))}
            </select>
        </div>
    );

    const getRecommendation = (data) => {
        const { vehicleAge, brakingSystemCondition, tireCondition, structuralIntegrity } = data;

        const issues = [];

        if (parseInt(vehicleAge) >= 6) {
            issues.push("Vehicle is too old for efficient retrofitting.");
        }

        if (
            parseInt(brakingSystemCondition) >= 4 ||
            parseInt(tireCondition) >= 4 ||
            parseInt(structuralIntegrity) >= 4
        ) {
            issues.push("Major components need repair or replacement.");
        }

        if (issues.length === 0) {
            return {
                status: "✅ Suitable",
                suggestions: ["Your vehicle is in good condition for EV retrofitting."],
            };
        } else if (issues.length <= 2) {
            return {
                status: "⚠️ Needs Improvement",
                suggestions: issues,
            };
        } else {
            return {
                status: "❌ Not Suitable",
                suggestions: issues,
            };
        }
    };

    return (
        <div className="min-h-screen bg-black p-6 text-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Start Retrofitting Process</h2>
                <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-md space-y-4">
                    {renderDropdown("vehicleAge", "Vehicle Age")}
                    {renderDropdown("brakingSystemCondition", "Braking System Condition")}
                    {renderDropdown("tireCondition", "Tire Condition")}
                    {renderDropdown("wheelCondition", "Wheel Condition")}
                    {renderDropdown("structuralIntegrity", "Structural Integrity")}
                    {renderDropdown("vehicleBodyCondition", "Vehicle Body Condition")}
                    {renderDropdown("mudguardCondition", "Mudguard Condition")}
                    {renderDropdown("electricalIssues", "Electrical Issues")}
                    {renderDropdown("outsideFrameCondition", "Outside Frame Condition")}
                    {renderDropdown("suspensionLoadCondition", "Suspension Load Condition")}
                    {renderDropdown("clusterDisplayCondition", "Cluster Display Condition")}
                    {renderDropdown("lowerBodyCondition", "Lower Body Condition")}
                    {renderDropdown("transmissionCondition", "Transmission Condition")}

                    <div className="mb-4">
                        <label htmlFor="desiredChanges" className="block text-sm font-medium text-white">
                            Desired/Needed Changes
                        </label>
                        <textarea
                            id="desiredChanges"
                            value={formData.desiredChanges}
                            onChange={handleChange}
                            placeholder="Enter any desired or needed changes"
                            className="mt-1 block w-full bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm p-2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
                </form>

                {recommendation && (
                    <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-white mb-2">Recommendation</h3>
                        <p className="text-xl font-semibold mb-2">{recommendation.status}</p>
                        <ul className="list-disc list-inside text-gray-300">
                            {recommendation.suggestions.map((sug, idx) => (
                                <li key={idx}>{sug}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManualInput;
