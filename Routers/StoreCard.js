const express = require("express");
const { storeCard, payViaStoredCard } = require("../Controllers/StoreCard.js");

const router = express.Router();

// store card
router.get("/store", storeCard);

// pay via stored card
router.get("/pay", payViaStoredCard);

// stored cards list

// Pre-authorization with reserved card

// remove card

// card verification

module.exports = router;
