const boxOne = document.querySelector(".first");
const boxTwo = document.querySelector(".second");

function generateRandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
boxOne.addEventListener("click", () => {
  boxOne.style.backgroundColor = generateRandomColor();
});
boxTwo.addEventListener("mousemove", () => {
  boxTwo.style.backgroundColor = generateRandomColor();
});

