const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js and SQLite backend!");
});

module.exports = app; // Export the Express instance
