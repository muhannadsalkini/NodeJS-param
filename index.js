const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routers/index.js");

const app = express();

app.use(express.json());

app.listen(3060, () => {
  console.log("server is on 3060");
});

app.use("/api", router);
