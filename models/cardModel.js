const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  frontImgSrc: {
    type: String,
    required: [true, `A card must have a frontImgSrc`],
  },
  backImgSrc: {
    type: String,
    required: [true, `A card must have a backImgSrc`],
  },
  difficulty: {
    type: String,
    required: [true, `A card must have a difficulty`],
  },
  category: {
    type: String,
    required: [true, `A card must have a category`],
  }
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
