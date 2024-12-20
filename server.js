require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const tripRoutes = require("./routes/tripRoutes");
const billRoutes = require("./routes/billRoutes");

const app = express();
const cors = require("cors");

connectDB();

// Middleware
app.use(cors());
app.use(express.json());
pp.use(
  cors({
    origin: "https://gtesredo-54350d55fab4.herokuapp.com",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/bills", billRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
