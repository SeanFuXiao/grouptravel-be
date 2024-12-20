const Trip = require("../models/Trip");

const createTrip = async (req, res) => {
  const { name, startDate, endDate } = req.body;
  try {
    const trip = await Trip.create({
      name,
      startDate,
      endDate,
      createdBy: req.user.id,
    });
    res.status(201).json(trip);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error creating trip", error: err.message });
  }
};

const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ createdBy: req.user.id });
    res.status(200).json(trips);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error fetching trips", error: err.message });
  }
};

module.exports = { createTrip, getTrips };
