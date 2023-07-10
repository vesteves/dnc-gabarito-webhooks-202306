const express = require("express");
const webHooks = require("../../services/webhook");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, link } = req.body;
  const response = webHooks.add(name, link);

  return res.status(200).json(response);
});

router.get("/", async (_, res) => {
  const response = await webHooks.getDB();
  res.status(200).json(response);
});

router.delete("/:name", async (req, res) => {
  const response = await webHooks.remove(req.params.name);

  res.status(200).json(response);
});

module.exports = router;
