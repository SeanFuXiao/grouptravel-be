const Bill = require("../models/Bill");

const addBill = async (req, res) => {
  const { amount, description, trip } = req.body;
  try {
    const bill = await Bill.create({ amount, description, trip });
    res.status(201).json(bill);
  } catch (err) {
    res.status(400).json({ message: "Error adding bill", error: err.message });
  }
};

const getBills = async (req, res) => {
  const { tripId } = req.params;
  try {
    const bills = await Bill.find({ trip: tripId });
    res.status(200).json(bills);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error fetching bills", error: err.message });
  }
};

module.exports = { addBill, getBills };
