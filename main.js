import { createElement } from "./createElement.js";
import { render } from "./render.js";
import { insert } from "./insert.js";

let createVirtualDom = createElement("div", {
  attrs: { id: "text" },
  children: [
    createElement("p", {
      attrs: { id: "text" },
      children: ["hello my virtual dom"],
    }),
  ],
});

let element = render(createVirtualDom);
let rootElement = insert(element, document.querySelector("#root"));
