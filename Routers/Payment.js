const express = require("express");
const { createPayment } = require("../Controllers/Payment.js");

const router = express.Router();

router.get("/", createPayment);

module.exports = router;
