import { CommandBase } from "../base/command-base";

export class HelloCommand extends CommandBase {
  async handleAsync(): Promise<void> {
    await this.context.say("Hello");
  }
}
