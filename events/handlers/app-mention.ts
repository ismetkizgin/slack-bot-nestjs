import { App } from "@slack/bolt";
import { EventBase } from "../base/event-base";

export class AppMentionEvent extends EventBase {
  public readonly name = "App Mention";
  public readonly description = "App mention event";

  load(app: App): void {
    app.event("app_mention", async ({ event }) => {
      try {
        console.log(`Bot mention edildi: ${event.text}`);
      } catch (error) {
        console.error("Hata:", error);
      }
    });
  }
}
