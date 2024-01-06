import { SlackCommandMiddlewareArgs } from "@slack/bolt";

export abstract class CommandBase {
  protected readonly context: SlackCommandMiddlewareArgs;
  protected argsSize: number = 0;

  constructor(context: SlackCommandMiddlewareArgs) {
    this.context = context;
  }

  protected getArgs(): Array<string> {
    const [_, ...args] = this.context.command.text.split(" ");
    return args;
  }

  public validateArgs(): boolean {
    return this.getArgs().length === this.argsSize;
  }

  abstract handleAsync(): Promise<void>;
}
