const WebHooks = require("node-webhooks");

const webHooks = new WebHooks({
  db: "../../webHooksDB.json", // json file that store webhook URLs
});

module.exports = webHooks;
