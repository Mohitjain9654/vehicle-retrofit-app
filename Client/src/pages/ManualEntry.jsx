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

    // const [recommendation, setRecommendation] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const results = assessRetrofit(formData);
    //     navigate('/results', { state: results });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert all values to integers
        const parsedFormData = Object.fromEntries(
            Object.entries(formData).map(([key, value]) => [key, parseInt(value)])
        );

        const results = assessRetrofit(parsedFormData);
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

    const commonConditionOptions = [ 
        ["", "Select Condition"],
        ["0", "5 ⭐️ (Excellent)"],
        ["1", "4 ⭐️ (Very Good)"],
        ["2", "3 ⭐️ (Good)"],
        ["3", "2 ⭐️ (Average)"],
        ["4", "1 ⭐️ (Bad)"],
    ];

    const wheelConditionOptions = [
        ["", "Select Condition"],
        ["0", "5 ⭐️ Excellent (Non-Rusted & Non-Damaged)"],
        ["1", "4 ⭐️ Very Good"],
        ["2", "3 ⭐️ Good"],
        ["3", "2 ⭐️ Bad"],
        ["4", "1 ⭐️ Very Poor (Rusted & Damaged)"],
    ];

    const mudguardConditionOptions = [
        ["", "Select Condition"],
        ["0", "5 ⭐️ Excellent (Perfect condition)"],
        ["1", "4 ⭐️ Very Good (Minor scratches)"],
        ["2", "3 ⭐️ Good (Visible scratches)"],
        ["3", "2 ⭐️ Bad (damaged)"],
        ["4", "1 ⭐️ Very Poor (no Mudguard)"],
    ]

    const electricalTransmissionOptions = [
        ["", "Select Condition"],
        ["0", "5 ⭐️ Excellent (Working properly)"],
        ["1", "4 ⭐️ Very Good (Minor issues)"],
        ["2", "3 ⭐️ Good (Moderate issues)"],
        ["3", "2 ⭐️ Bad (Major issues)"],
        ["4", "1 ⭐️ Very Poor (Not working)"],
    ]



    // const renderDropdown = (id, label) => (
    //     <div className="mb-4">
    //         <label htmlFor={id} className="block text-sm font-medium text-white">{label}</label>
    //         <select
    //             id={id}
    //             value={formData[id]}
    //             onChange={handleChange}
    //             className="mt-1 block w-full bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm p-2"
    //         >
    //             {conditionOptions.map(([value, text]) => (
    //                 <option key={value} value={value}>{text}</option>
    //             ))}
    //         </select>
    //     </div>
    // );

    // {renderDropdown("vehicleAge", "Vehicle Age", conditionOptions)}

    const renderDropdown = (id, label, options) => (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium text-white">{label}</label>
            <select
                id={id}
                value={formData[id]}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm p-2"
            >
                {options.map(([value, text]) => (
                    <option key={value} value={value}>{text}</option>
                ))}
            </select>
        </div>
    );

    // const getRecommendation = (data) => {
    //     const { vehicleAge, brakingSystemCondition, tireCondition, structuralIntegrity } = data;

    //     const issues = [];

    //     if (parseInt(vehicleAge) >= 6) {
    //         issues.push("Vehicle is too old for efficient retrofitting.");
    //     }

    //     if (
    //         parseInt(brakingSystemCondition) >= 4 ||
    //         parseInt(tireCondition) >= 4 ||
    //         parseInt(structuralIntegrity) >= 4
    //     ) {
    //         issues.push("Major components need repair or replacement.");
    //     }

    //     if (issues.length === 0) {
    //         return {
    //             status: "✅ Suitable",
    //             suggestions: ["Your vehicle is in good condition for EV retrofitting."],
    //         };
    //     } else if (issues.length <= 2) {
    //         return {
    //             status: "⚠️ Needs Improvement",
    //             suggestions: issues,
    //         };
    //     } else {
    //         return {
    //             status: "❌ Not Suitable",
    //             suggestions: issues,
    //         };
    //     }
    // };

    return (
        <div className="min-h-screen bg-black p-6 text-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Start Retrofitting Process</h2>
                <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-md space-y-4">
                {renderDropdown("vehicleAge", "Vehicle Age", conditionOptions)}
                    {renderDropdown("brakingSystemCondition", "Braking System Condition", commonConditionOptions)}
                    {renderDropdown("tireCondition", "Tire Condition", commonConditionOptions)}
                    {renderDropdown("wheelCondition", "Wheel Condition", wheelConditionOptions)}
                    {renderDropdown("structuralIntegrity", "Structural Integrity", commonConditionOptions)}
                    {renderDropdown("vehicleBodyCondition", "Vehicle Body Condition", commonConditionOptions)}
                    {renderDropdown("mudguardCondition", "Mudguard Condition", mudguardConditionOptions)}
                    {renderDropdown("electricalIssues", "Electrical Issues", electricalTransmissionOptions)}
                    {renderDropdown("outsideFrameCondition", "Outside Frame Condition", commonConditionOptions)}
                    {renderDropdown("suspensionLoadCondition", "Suspension Load Condition", commonConditionOptions)}
                    {renderDropdown("clusterDisplayCondition", "Cluster Display Condition", commonConditionOptions)}
                    {renderDropdown("lowerBodyCondition", "Lower Body Condition", commonConditionOptions)}
                    {renderDropdown("transmissionCondition", "Transmission Condition", electricalTransmissionOptions)}

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

                {/* {recommendation && (
                    <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-white mb-2">Recommendation</h3>
                        <p className="text-xl font-semibold mb-2">{recommendation.status}</p>
                        <ul className="list-disc list-inside text-gray-300">
                            {recommendation.suggestions.map((sug, idx) => (
                                <li key={idx}>{sug}</li>
                            ))}
                        </ul>
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default ManualInput;
