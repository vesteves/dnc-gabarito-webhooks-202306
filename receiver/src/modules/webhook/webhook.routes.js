const express = require("express");
const leadController = require("../lead/lead.controller");
const router = express.Router();

router.post("/", (req, res) => {
  if (req.body.type === "SubscriberStored") {
    const { email, name } = req.body.data;
    leadController.store({
      email,
      name,
      date: new Date(),
      status: "new",
    });
  }

  return res.status(200);
});

module.exports = router;
