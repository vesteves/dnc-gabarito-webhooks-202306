const express = require("express");
const leadController = require("./lead.controller");
const router = express.Router();

router.get("/", (_, res) => {
  return res.status(200).json(leadController.get());
});

module.exports = router;
