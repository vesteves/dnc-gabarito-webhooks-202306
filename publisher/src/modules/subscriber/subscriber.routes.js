const express = require("express");
const webHooks = require("../../services/webhook");
const router = express.Router();

const subscribers = [];

router.post("/", (req, res) => {
  const { email, name } = req.body;
  subscribers.push({
    id: subscribers.length + 1,
    email,
    name,
  });
  webHooks.trigger("SubscriberStored", {
    data: subscribers[subscribers.length - 1],
    type: "SubscriberStored",
  });

  return res.status(200).json(subscribers);
});

router.get("/", (_, res) => {
  res.status(200).json(subscribers);
});

module.exports = router;
