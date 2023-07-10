const express = require("express");
const app = express();
const subscriberRoutes = require("./src/modules/subscriber/subscriber.routes");
const webhookRoutes = require("./src/modules/webhook/webhook.routes");

app.use(express.json());

app.use("/subscribers", subscriberRoutes);
app.use("/webhook", webhookRoutes);

app.listen(8080, () => {
  console.log("Publisher is live");
});
