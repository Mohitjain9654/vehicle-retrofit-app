import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ManualEntry from './pages/ManualEntry';
import StartPage from './pages/StartPage';
import Result from './pages/Result';
import WorkshopsPage from './pages/WorkshopsPage';
import RetrofittingProcess from './pages/retrofitting';  // Updated import
import About from './pages/About';  // Corrected import for the About page

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-gray-800">
        <Navbar />
        {/* Add padding-top to account for the fixed navbar */}
        <div className="pt-16">
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/startPage" element={<StartPage />} />
              <Route path="/retrofitting" element={<RetrofittingProcess />} />
              <Route path="/ManualEntry" element={<ManualEntry />} />
              <Route path="/results" element={<Result />} />
              <Route path="/WorkshopsPage" element={<WorkshopsPage />} />
              <Route path="/about" element={<About />} /> {/* About page route */}
              {/* <Route path="/camera" element={<CameraInput />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
