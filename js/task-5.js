
const buttonCol = document.querySelector(".change-color");
const bodyCol = document.querySelector("body");
const spanCol = document.querySelector("span");

buttonCol.addEventListener("click", handleClick);

function handleClick(e) {
  const color = getRandomHexColor();
  spanCol.textContent = color;
  bodyCol.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}