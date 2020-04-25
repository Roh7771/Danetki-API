const Card = require("../models/cardModel");

exports.createCard = async (req, res) => {
  try {
    const newCard = await Card.create(req.body);

    res.status(201).json({
      status: `success`,
      card: newCard
    });
  } catch (err) {
    res.status(400).json({
      status: `failed`,
      message: err
    });
  }
};

exports.getAllCards = async (req, res) => {
  try {
    const queryObj = { ...req.query };

    const excludedFields = [`page`, `sort`, `limit`, `fileds`];
    excludedFields.forEach(el => delete queryObj[el]);

    if (queryObj.difficulty) {
      queryObj.difficulty = {
        $in: queryObj.difficulty.split(',')
      };
    }

    if (queryObj.category) {
      queryObj.category = {
        $in: queryObj.category.split(',')
      };
    }

    let query = Card.find(queryObj);

    query = query.sort(`category difficulty`);

    const cards = await query;

    res.status(200).json({
      status: `success`,
      cards
    });
  } catch (err) {
    res.status(404).json({
      status: `failed`,
      message: err
    });
  }
};
