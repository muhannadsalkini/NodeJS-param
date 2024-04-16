const express = require("express");
const { storeCard } = require("../Controllers/StoreCard.js");

const router = express.Router();

// store card
router.get("/", storeCard);

// pay via stored card

// stored cards list

// Pre-authorization with reserved card

// remove card

// card verification

module.exports = router;
