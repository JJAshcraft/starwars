axios = require("axios");

const peopleHelper = async (req, res, next) => {
  try {
    res.send({ message: "welcome to the people" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = peopleHelper;
