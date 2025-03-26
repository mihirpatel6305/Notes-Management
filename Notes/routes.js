const express = require("express");
const { getNote, addNote, allNotes } = require("./controller");
const router = express.Router();

router.route("/:id").get(getNote);
router.route("/").get(allNotes).post(addNote);

module.exports = router;
