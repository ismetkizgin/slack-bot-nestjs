import { App } from "@slack/bolt";

export abstract class EventBase {
  public abstract readonly name: string;
  public abstract readonly description: string;

  public abstract load(app: App): void;
}
