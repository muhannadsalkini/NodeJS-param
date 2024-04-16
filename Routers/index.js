const express = require("express");
const paymentRouter = require("./Payment.js");
const cardRouter = require("./StoreCard.js");

const router = express.Router();

router.use("/payment", paymentRouter);
router.use("/card", cardRouter);

module.exports = router;
