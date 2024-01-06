import * as dotenv from "dotenv";

import { App, SocketModeReceiver } from "@slack/bolt";

import CommandLoader from "./commands/command-loader";
import EventLoader from "./events/event-loader";

dotenv.config();

const socketModeReceiver = new SocketModeReceiver({
  appToken: process.env.SLACK_APP_TOKEN!,
  clientId: process.env.SLACK_CLIENT_ID!,
  clientSecret: process.env.SLACK_CLIENT_SECRET!,
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: socketModeReceiver,
});

(async () => {
  EventLoader.loadAll(app);
  CommandLoader.load(app, process.env.SLACK_COMMAND_PATH!);
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
