// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
// app.use(cors());
app.use(express.json()); // For parsing application/json

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the backend of Team-Social!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
