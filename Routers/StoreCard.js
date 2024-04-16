const express = require("express");
const { storeCard } = require("../Controllers/StoreCard.js");

const router = express.Router();

router.get("/", storeCard);

module.exports = router;
