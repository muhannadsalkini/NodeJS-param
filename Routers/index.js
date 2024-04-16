const express = require("express");
const paymentRouter = require("./Payment.js");

const router = express.Router();

router.use("/payment", paymentRouter);

module.exports = router;
