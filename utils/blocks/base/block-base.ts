import { Block, KnownBlock } from "@slack/types";

import { DynamicObject } from "../../../models";

export interface BlockBase {
  getBlocks(options: DynamicObject): Array<KnownBlock | Block>;
}
