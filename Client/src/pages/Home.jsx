// import React, { useState } from "react";
import bgImage from "../assets/image_1.png";
// import ManualInput from "./ManualEntry";

const Home = () => {
    // const [sidebarOpen, setSidebarOpen] = useState(false);

    // const toggleSidebar = () => {
    //     setSidebarOpen(!sidebarOpen);
    // };

    return (
        <>
            <main
                className="min-h-screen bg-cover bg-fixed bg-center flex items-center justify-center text-center pt-20"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="bg-black/80 p-6 rounded-lg">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Upgrade Your Drive,<br />Go Electric.
                    </h1>
                    <div className="bg-neutral-800/90 rounded-lg p-6 inline-block">
                        <h2 className="text-xl text-pink-200 mb-4">Start Your Retrofitting Journey</h2>
                        <div className="space-x-4">
                            <a href="/startpage">
                                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded">
                                    Start
                                </button>
                            </a>
                            <a href="/workshops">
                                <button className="bg-yellow-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">
                                    Find Nearby
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
