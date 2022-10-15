// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
// по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
const btnChangeColor = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");
const spaceBodyColor= document.querySelector("body");

btnChangeColor.addEventListener("click",getRandomHexColor);

function getRandomHexColor(event) {
  const newColor = "#"+Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, 0);

  spaceBodyColor.style.background = newColor;
  nameColor.textContent = newColor;
  console.dir(newColor);
  // console.log();
}
