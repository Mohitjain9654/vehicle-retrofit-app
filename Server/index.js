const express = require('express');
const multer = require('multer');
const path = require('path');
const mysql = require('mysql2');
const fs = require('fs');
const app = express();

// Set up multer for file uploads
const upload = multer({
  dest: 'uploads/', // Set the destination folder for images
  limits: { fileSize: 5 * 1024 * 1024 }, // Set a file size limit (e.g., 5MB)
  fileFilter: (req, file, cb) => {
    // Only allow image files (JPG, JPEG, PNG, GIF)
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed.'));
    }
  }
}).single('vehicleImage'); // 'vehicleImage' is the name of the field in the form

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Your password here
  database: 'vehicle_db',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Middleware for parsing JSON request bodies
app.use(express.json());

// Ensure uploads directory exists
if (!fs.existsSync(path.join(__dirname, 'uploads'))) {
  fs.mkdirSync(path.join(__dirname, 'uploads'));
}

// POST route to handle manual entry and image upload
app.post('/api/vehicle', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message }); // Multer error (e.g., file size exceeded)
    }

    const { make, model, year, odometer_reading, service_history, pollution_check_validity, ownership_count } = req.body;
    
    // Get the image path (stored by multer)
    const imagePath = req.file ? path.join(__dirname, 'uploads', req.file.filename) : null;

    // Insert the data into the MySQL database
    const query = `
      INSERT INTO vehicles (make, model, year, odometer_reading, service_history, pollution_check_validity, ownership_count, image_path)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    db.query(query, [make, model, year, odometer_reading, service_history, pollution_check_validity, ownership_count, imagePath], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'Vehicle data added successfully', vehicleId: result.insertId });
    });
  });
});

// Start the server
app.listen(5050, () => {
  console.log('welcome to retrofitting Server is running on http://localhost:5050');
});
