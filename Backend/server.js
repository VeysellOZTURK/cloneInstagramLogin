//import technologies
const express = require('express');
const cors = require('cors'); // For handling cross-origin requests
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON bodies

// API endpoint to receive data
app.post('/api/data', (req, res) => {
  const { data } = req.body; // Extract 'data' from request body
  console.log('Received data:', data); // Log data to backend console
  res.send('Data received');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
