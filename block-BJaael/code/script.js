function generateRandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 500 + 1);
  return randomNumber;
}

for (let i = 0; i < 500; i++) {
  let div = document.createElement("div");
  div.classList.add("box");
  let container = document.querySelector(".container");
  container.append(div);

  div.innerText = generateRandomNumber();
}
let container = document.querySelector(".container");

container.addEventListener("mousemove", () => {
  let boxes = document.querySelectorAll(".box");

  for (box of boxes) {
    box.style.backgroundColor = generateRandomColor();
    box.innerText = generateRandomNumber();
  }
});


