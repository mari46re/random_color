"use strict";

document.addEventListener("DOMContentLoaded", randomBackground);

function randomBackground() {
  let newColor = randomColor();
  console.log(newColor);

  let background = rgbToCSS(newColor);

  document.querySelector("body").style.backgroundColor = background;
}

function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  console.log(r, g, b);

  return { r, g, b };
}

function rgbToCSS(rgb) {
  const r = rgb.r.toString(16);
  const g = rgb.g.toString(16);
  const b = rgb.b.toString(16);

  console.log(r, g, b);

  return `#${r}${g}${b}`;
}
