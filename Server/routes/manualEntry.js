// routes/manualEntry.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/manual-entry', (req, res) => {
  const {
    vehicleNumber,
    vehicleType,
    fuelType,
    odometerReading,
    serviceHistory,
    pollutionValidityDate,
    ownershipCount,
  } = req.body;

  const query = `
    INSERT INTO vehicle_entries 
    (vehicle_number, vehicle_type, fuel_type, odometer_reading, service_history, pollution_validity_date, ownership_count)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.execute(query, [
    vehicleNumber,
    vehicleType,
    fuelType,
    odometerReading,
    serviceHistory,
    pollutionValidityDate,
    ownershipCount,
  ], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Failed to insert data' });
    }

    res.status(201).json({ message: 'Data inserted successfully' });
  });
});

module.exports = router;
