const express = require("express");
const router = express.Router();
const { dialog } = require("../controllers/dialog");

router.get("/dialog",dialog);

module.exports = router;
