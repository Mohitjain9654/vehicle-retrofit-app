import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCar, FaCameraRetro, FaCheckCircle, FaWrench, FaTimesCircle, FaHeartbeat, FaLightbulb, FaRocket, FaExclamationTriangle } from 'react-icons/fa';

const RetrofittingProcess = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 rounded-xl shadow-2xl space-y-10">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold mb-6 text-blue-400 tracking-wide">
                    Thinking About Upgrading Your Ride? Here's How It Works
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                    See the easy steps to find out if your vehicle is ready for a modern, greener upgrade.
                </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-8">
                {/* Step 1: Tell Us About Your Two Wheeler */}
                <div className="bg-gray-800 bg-opacity-70 p-8 rounded-xl shadow-md">
                    <div className="flex flex-col md:flex-row items-center md:space-x-12">
                        {/* Left Side: Introduction and Options */}
                        <div className="md:w-1/2 space-y-6">
                            <div className="flex items-center space-x-4 text-blue-400">
                                <FaCar size={36} /> {/* Changed text to two wheeler but kept car icon for visual appeal, can change to a motorcycle icon if preferred */}
                                <h3 className="text-2xl font-semibold">Let's Start with Your Two Wheeler!</h3>
                            </div>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                To see if your two wheeler is ready for an upgrade, tell us about its current state. Choose the way that's easiest for you:
                            </p>
                            <div className="space-y-4">
                                {/* Option 1: Fill a Form */}
                                <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg flex items-center space-x-6">
                                    <div className="text-blue-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.125h15.003m-15.003-5.5c0-1.389.896-2.6 2.25-2.914l1.154-.385m11.33-2.914c1.354.314 2.25.925 2.25 2.914m-15.003 5.5c0 1.389.896 2.6 2.25 2.914l-1.154.385m11.33 2.914c1.354-.314 2.25-.925 2.25-2.914" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-200">Describe It in a Form</h4>
                                        <p className="text-gray-300 text-sm">
                                            Provide details about the body, engine, electrical parts, and overall condition. Be as specific as you can!
                                        </p>
                                        <span className="inline-block mt-2 font-semibold text-green-400">Go to Form</span>
                                    </div>
                                </div>

                                {/* Option 2: Show with Camera */}
                                <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg flex items-center space-x-6">
                                    <div className="text-blue-300">
                                        <FaCameraRetro size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-200">Show Us with Your Camera</h4>
                                        <p className="text-gray-300 text-sm">
                                            Use your webcam or upload photos to show us the current state of your two wheeler visually.
                                        </p>
                                        <span className="inline-block mt-2 font-semibold text-green-400">Upload Photos</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Visual Arrow */}
                        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                            <FaArrowRight size={70} className="text-blue-500 animate-bounce" />
                        </div>
                    </div>
                </div>

                {/* Step 2: What Our System Checks */}
                <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:space-x-8">
                    <div className="md:w-1/2 flex justify-center items-center mb-4 md:mb-0 animate-pulse">
                        <FaHeartbeat size={60} className="text-purple-500" />
                    </div>
                    <div className="md:w-1/2 space-y-4">
                        <div className="flex items-center space-x-3 text-purple-400">
                            <h3 className="text-xl font-semibold">Step 2: Our Smart Check-Up</h3>
                        </div>
                        <p className="text-lg text-gray-300">
                            Our smart system will look at the information or pictures you provided to understand how your two wheeler is doing right now. This helps us get a clear picture of its current health.
                        </p>
                    </div>
                </div>

                {/* Step 3: Getting a Health Score */}
                <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:space-x-8">
                    <div className="md:w-1/2 space-y-4">
                        <div className="flex items-center space-x-3 text-teal-400">
                            <FaWrench size={32} className="animate-spin slow-spin" /> {/* Added spin animation to the wrench */}
                            <h3 className="text-xl font-semibold">Step 3: Your Two Wheeler's Health Number is Calculated</h3>
                        </div>
                        <p className="text-lg text-gray-300">
                            Based on the smart check-up, we'll calculate a health score for your two wheeler. This number helps us understand its overall condition and if it's a good fit for an upgrade.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0 animate-pulse"> {/* Added subtle pulse to the arrow */}
                        <FaArrowRight size={60} className="text-teal-500" />
                    </div>
                </div>

                {/* Step 4: Our Advice for You */}
                <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-md space-y-6 text-center animate-pulse-slow">
                    <div className="flex items-center justify-center space-x-4 text-yellow-400">
                        <FaLightbulb size={36} className="animate-spin-slow" />
                        <h3 className="text-2xl font-semibold tracking-wide">Step 4: Here's What We Think</h3>
                    </div>
                    <p className="text-lg text-gray-300 mb-6">
                        Based on your two wheeler's health score, here's our recommendation to help you decide what's next:
                    </p>
                    <div className="flex flex-col md:flex-row justify-around items-center gap-4">
                        <div className="flex items-center text-green-500 bg-gray-700 bg-opacity-50 p-4 rounded-md shadow-sm animate-slide-in-bottom">
                            <FaCheckCircle size={28} className="mr-3" /> <span className="text-white font-semibold">Ready for Upgrade!</span>
                        </div>
                        <div className="flex items-center text-yellow-500 bg-gray-700 bg-opacity-50 p-4 rounded-md shadow-sm animate-wiggle">
                            <FaExclamationTriangle size={28} className="mr-3" /> <span className="text-white font-semibold">Might Need Some Attention First</span>
                        </div>
                        <div className="flex items-center text-red-500 bg-gray-700 bg-opacity-50 p-4 rounded-md shadow-sm animate-slide-in-top">
                            <FaTimesCircle size={28} className="mr-3" /> <span className="text-white font-semibold">Not Ideal for Upgrade Now</span>
                        </div>
                    </div>
                </div>

                <style jsx global>
                    {`
    @keyframes pulse-slow {
      0% { transform: scale(1); }
      50% { transform: scale(1.03); }
      100% { transform: scale(1); }
    }

    .animate-pulse-slow {
      animation: pulse-slow 2s ease-in-out infinite;
    }

    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .animate-spin-slow {
      animation: spin-slow 3s linear infinite;
    }

    @keyframes slide-in-bottom {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .animate-slide-in-bottom {
      animation: slide-in-bottom 0.5s ease-out forwards;
    }

    @keyframes slide-in-top {
      from { transform: translateY(-20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .animate-slide-in-top {
      animation: slide-in-top 0.5s ease-out forwards;
    }

    @keyframes wiggle {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(-3deg); }
      50% { transform: rotate(3deg); }
      75% { transform: rotate(-3deg); }
      100% { transform: rotate(0deg); }
    }

    .animate-wiggle {
      animation: wiggle 0.8s ease-in-out infinite;
    }
  `}
                </style>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-10">
                <Link to="/startPage" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
                    <FaRocket size={20} className="inline-block mr-2" /> Let's Get Started!
                </Link>
            </div>

            <p className="text-xs text-gray-500 mt-6 text-center">
                <strong className="font-semibold">Disclaimer:</strong> Our assessment is based on the information provided and may not be entirely accurate. Please double-check our recommendations with a qualified professional.
            </p>
        </div>
    );
};

export default RetrofittingProcess;