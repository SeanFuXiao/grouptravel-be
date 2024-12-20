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
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating trip", error: error.message });
  }
};

const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ createdBy: req.user.id });
    res.status(200).json(trips);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching trips", error: error.message });
  }
};

module.exports = { createTrip, getTrips };
