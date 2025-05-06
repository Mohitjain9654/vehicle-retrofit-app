import React, { useState, useRef, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import Webcam from 'react-webcam';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';

const CameraUpload = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const webcamRef = useRef(null);
  const imageRef = useRef(null); // To hold image DOM reference

  const onDrop = acceptedFiles => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  };

  useEffect(() => {
    const classifyImage = async () => {
      if (!imageRef.current) return;

      const model = await mobilenet.load();
      const results = await model.classify(imageRef.current);
      setPrediction(results[0]); // Only take top prediction
      console.log('Prediction:', results);
    };

    if (imageSrc) {
      classifyImage();
    }
  }, [imageSrc]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <div className="text-white flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-semibold">Upload Vehicle Image</h2>

      {/* Drag & Drop Section */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed border-gray-600 p-6 w-80 text-center rounded ${
          isDragActive ? 'bg-gray-800' : 'bg-gray-900'
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
          <p>Drag & drop an image here, or click to select one</p>
        )}
      </div>

      {/* Webcam Section */}
      <div className="w-80">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="rounded"
        />
        <button
          onClick={capture}
          className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white"
        >
          Capture from Webcam
        </button>
      </div>

      {/* Display Image */}
      {imageSrc && (
        <div className="mt-4">
          <p className="mb-2">Preview:</p>
          <img
            src={imageSrc}
            alt="Preview"
            ref={imageRef}
            crossOrigin="anonymous"
            className="rounded w-64 h-auto"
          />
        </div>
      )}

      {/* Prediction Result */}
      {prediction && (
        <div className="mt-4 text-center">
          <h3 className="text-xl font-semibold">Prediction</h3>
          <p>{prediction.className}</p>
          <p className="text-sm text-gray-400">Confidence: {(prediction.probability * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default CameraUpload;
