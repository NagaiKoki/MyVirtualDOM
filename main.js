import { createElement } from "./createElement.js";
import { render } from "./render.js";
import { insert } from "./insert.js";
import { diff } from "./diff.js";

let myElement = createElement("div", {
  attrs: { class: "container" },
  children: [
    createElement("img", {
      attrs: {
        id: "img",
        src:
          "https://user-images.githubusercontent.com/50698194/107141048-9c517a00-6969-11eb-8681-295f68f6ce9f.png",
      },
      children: [],
    }),
  ],
});

let element = render(myElement);
let rootElement = insert(element, document.querySelector("#root"));

setInterval(() => {
  let myVirtualElemet = createElement("section", {
    attrs: { class: "img" },
    children: [
      createElement("img", {
        attrs: {
          id: "img",
          src: `https://user-images.githubusercontent.com/50698194/107140981-382eb600-6969-11eb-901b-b63cea37cf5f.png`,
        },
        children: [],
      }),
    ],
  });

  const patch = diff(myElement, myVirtualElemet);
  rootElement = patch(rootElement);
}, 1000);
