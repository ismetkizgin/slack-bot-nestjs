import { App, SlackCommandMiddlewareArgs } from "@slack/bolt";

import CommandsHandlers from "./handlers";

export default class CommandLoader {
  public static load(app: App, commandPath: string): void {
    app.command(commandPath, async (context: SlackCommandMiddlewareArgs) => {
      await context.ack();
      try {
        const [subCommandPath] = context.command.text.split(" ");
        if (!subCommandPath) throw new Error("Command not found");

        const CommandHandler =
          CommandsHandlers[subCommandPath as keyof typeof CommandsHandlers];

        if (!CommandHandler) throw new Error("Command not found");

        const command = new CommandHandler(context);
        if (!command.validateArgs()) throw new Error("Invalid arguments");
        await command.handleAsync();
      } catch (error: any) {
        await context.say("Error: " + error.message);
      }
    });
    console.log(`Command Load: ${commandPath}`);
  }
}
