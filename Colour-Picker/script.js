const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const hexSpan = document.getElementById("hex");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const newHexArray = [];
  while (newHexArray.length < 6) {
    newHexArray.push(hexValues[getRandomNumber()]);
  }
  const newHexNumber = '#' + newHexArray.join("")
  hexSpan.innerHTML = newHexNumber
  hexSpan.style.color = newHexNumber
  document.body.style.backgroundColor = newHexNumber
});

function getRandomNumber() {
  return Math.floor(Math.random() * hexValues.length);
}
