import React from "react";
import bgImage from "../assets/image_1.png";

const Home = () => {
    return (
        <main
            className="min-h-screen bg-cover bg-fixed bg-center flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 pt-20"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="bg-black/80 p-4 sm:p-6 md:p-8 rounded-xl w-full max-w-2xl text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Upgrade Your Drive,<br />Go Electric.
                </h1>
                <div className="bg-neutral-800/90 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl text-pink-200 mb-4">
                        Start Your Retrofitting Journey
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/StartPage">
                            <button className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded">
                                Start
                            </button>
                        </a>
                        <a href="/WorkshopsPage">
                            <button className="w-full sm:w-auto bg-yellow-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded">
                                Find Nearby
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;

