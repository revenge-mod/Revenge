import { findInTree } from "@lib/utils";
import { SearchFilter } from "@types";

export default (tree: { [key: string]: any }, filter: SearchFilter): any =>
  findInTree(tree, filter, {
    walkable: ["props", "children", "child", "sibling"],
  });
