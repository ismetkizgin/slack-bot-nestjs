import * as events from "./handlers";

import { App } from "@slack/bolt";

export default class EventLoader {
  public static loadAll(app: App): void {
    Object.values(events).forEach((event) => {
      const eventInstance = new event();
      eventInstance.load(app);
      console.log(`Event Load: ${eventInstance.name}`);
    });
  }
}
