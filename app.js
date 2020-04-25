const express = require("express");
const cors = require("cors");
const fs = require('fs-extra');
const path = require('path');
const cardRoutes = require("./routes/cardRoutes");

const corsOptions = {
  origin: ["https://roh7771.github.io", "http://localhost:9000"],
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

const cardImagesPath = path.resolve(__dirname, 'cardImages');
fs.ensureDirSync(cardImagesPath);
app.use('/api/v1/images', express.static(cardImagesPath));

// 3) ROUTES
app.use("/api/v1/cards", cardRoutes);

module.exports = app;
