axios = require("axios");

const planetHelper = async (req, res, next) => {
  try {
    res.send({ message: "welcome to the planets" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = planetHelper;
