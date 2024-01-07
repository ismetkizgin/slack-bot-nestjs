import { Block, KnownBlock } from "@slack/types";

import { BlockBase } from "../base/block-base";
import { DynamicObject } from "../../../models";

export class ERROR implements BlockBase {
  getBlocks(options: DynamicObject): Array<KnownBlock | Block> {
    return [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "❌ An error has occurred!",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: options.message as string,
        },
      },
    ];
  }
}
