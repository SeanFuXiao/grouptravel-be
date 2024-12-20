const express = require("express");
const { addBill, getBills } = require("../controllers/billController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, addBill);
router.get("/:tripId", authMiddleware, getBills);

module.exports = router;
