require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

// Routes Import
const recipeRoute = require("../rest-api/recipe/routes/recipe-routes");
const userRoute = require("../rest-api/user/routes/user-routes");

// Routes Use
server.use("/api/recipe", recipeRoute);
server.use("/api/user", userRoute);

server.get("/", (req, res) => {
  res.json("just cook it");
});

module.exports = server;
