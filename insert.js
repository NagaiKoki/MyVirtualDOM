export const insert = (element, domElement) => {
  domElement.replaceWith(element);
  return element;
};
