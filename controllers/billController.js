const Bill = require("../models/Bill");

const addBill = async (req, res) => {
  const { amount, description, trip } = req.body;
  try {
    const bill = await Bill.create({ amount, description, trip });
    res.status(201).json(bill);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error adding bill", error: error.message });
  }
};

const getBills = async (req, res) => {
  const { tripId } = req.params;
  try {
    const bills = await Bill.find({ trip: tripId });
    res.status(200).json(bills);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching bills", error: error.message });
  }
};

module.exports = { addBill, getBills };
