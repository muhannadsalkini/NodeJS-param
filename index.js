const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.listen(3060, () => {
  console.log("server is on 3060");
});
