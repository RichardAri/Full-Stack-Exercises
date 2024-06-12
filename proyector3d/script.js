let items = document.querySelectorAll(".item");

let imagenes = [
  "url(css-icon.png)",
  "url(git-icon.png)",
  "url(github-icon.png)",
  "url(html-icon.png)",
  "url(java-icon.png)",
  "url(javascript-icon.png)",
  "url(python-icon.png)",
  "url(swift-icon.png)",
];

let container = document.querySelector(".caja");
let containerWidth = container.offsetWidth;
let containerHeight = container.offsetHeight;
let radius = containerWidth / 2 - 50;

items.forEach((item, index) => {
  let angle = (index / items.length) * (2 * Math.PI);
  let x = containerWidth / 2 + radius * Math.cos(angle) - 50; //
  let y = containerHeight / 2 + radius * Math.sin(angle) - 100;
  item.style.left - `${x}px`;
  item.style.top = `${y}px`;
  item.style.backgroundImage = imagenes[index];
});
