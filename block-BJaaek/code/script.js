const btn1 = document.querySelector(".first");
const btn2 = document.querySelector(".second");

function generateRandomColor() {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
btn1.addEventListener("click", () => {
  btn1.style.backgroundColor = generateRandomColor();
});
btn2.addEventListener("mousemove", () => {
  btn2.style.backgroundColor = generateRandomColor();
});


