import * as Templates from "./templates";

import { Block, KnownBlock } from "@slack/types";

import { DynamicObject } from "../../models";

export default class BlockFactory {
  static getBlock(
    blockName: string,
    options: DynamicObject
  ): Array<KnownBlock | Block> {
    const Blog = Templates[blockName as keyof typeof Templates];
    if (!Blog) throw new Error(`Blog template: ${blockName} not found.`);
    return new Blog().getBlocks(options);
  }
}
