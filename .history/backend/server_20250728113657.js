require("dotenv").config;

const express = require(express);
const cors = require(cors);

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---
// Enable CORS for all routes
app.use(cors());


