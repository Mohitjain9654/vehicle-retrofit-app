import { useState } from "react";
import ManualEntry from "./ManualEntry";
import CameraUpload from "./CameraUpload";

const StartPage = () => {
  const [activeTab, setActiveTab] = useState("manual");

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 font-semibold rounded ${
            activeTab === "manual"
              ? "bg-red-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setActiveTab("manual")}
        >
          Manual Entry
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded ${
            activeTab === "camera"
              ? "bg-red-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setActiveTab("camera")}
        >
          Camera
        </button>
      </div>

      {activeTab === "manual" ? <ManualEntry /> : <CameraUpload />}
    </div>
  );
};

export default StartPage;
