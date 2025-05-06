// routes/vehicle.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const vehicleData = req.body;
  console.log('Received vehicle data:', vehicleData);

  // You can process this or save to DB
  res.status(200).json({ message: 'Vehicle data received', vehicleData });
});

module.exports = router;
