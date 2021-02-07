import { render } from "./render.js";

export const diff = (oldVNode, newVNode) => {
  if (oldVNode.tagName !== newVNode.tagName) {
    return ($node) => {
      const $newNode = render(newVNode);
      $node.replaceWith($newNode);
      return $newVNode;
    };
  }

  return ($node) => {
    return $node;
  };
};
