require("dotenv").config;

const express = require(express);
const cors = require(cors);

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---
// Enable CORS for all routes
app.use(cors());

// --- Basic Route ---
// Define a simple GET route to test the server
app.get("/", (req, res) => {
  res.send("Hello from the MERN Portfolio Backend!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Access it at: http://localhost:${PORT}`);
});
