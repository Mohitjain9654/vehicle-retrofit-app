import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="bg-black text-white flex items-center justify-between p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="text-2xl font-bold">Retro</div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="p-6 space-y-4">
          <li><Link to="/"><i className="fa fa-home mr-2"></i>Home</Link></li>
          <li><Link to="/retrofitting"><i className="fa fa-cogs mr-2"></i>Retrofitting Process</Link></li>
          <li><Link to="/workshops"><i className="fa fa-map-marker-alt mr-2"></i>Nearby Workshop</Link></li>
          <li><Link to="/about"><i className="fa fa-info-circle mr-2"></i>About Us</Link></li>
        </ul>
      </div>

      {/* Toggle Button */}
      <button
        className="text-2xl lg:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      {/* Main navbar (for large screens) */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-6 text-white text-lg">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/retrofitting">Retrofitting Process</Link></li>
          <li><Link to="/workshops">Nearby Workshop</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
