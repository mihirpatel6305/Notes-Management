const express = require("express");
const { home } = require("./controller");
const router = express.Router();

router.route("/", home);

module.exports = router;
