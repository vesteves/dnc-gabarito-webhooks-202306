const express = require("express");
const app = express();
const leadRoutes = require("./src/modules/lead/lead.routes");
const webhookRoutes = require("./src/modules/webhook/webhook.routes");

app.use(express.json());

app.use("/leads", leadRoutes);
app.use("/webhook", webhookRoutes);

app.listen(8081, () => {
  console.log("Receiver is live");
});
