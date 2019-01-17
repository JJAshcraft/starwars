const express = require("express");
const helper = require("../helpers/starWarsHelpers/starWarsModules");
const router = express.Router();

router.route("/people").get(helper.peopleHelper);
router.route("/planets").get(helper.planetHelper);

module.exports = router;
