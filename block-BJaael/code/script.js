function generateRandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 500 + 1);
  return randomNumber;
}

let parentDiv = document.querySelector(".boxes");

for (let i = 0; i < 500; i++) {
  let div = document.createElement("div");
  div.classList.add("box");
  let h3 = document.createElement("h3");
  let randomNumber = generateRandomNumber(500);
  h3.innerText = randomNumber;
  div.append(h3);
  parentDiv.append(div);
}

let allBoxes = document.querySelectorAll(".box");

parentDiv.addEventListener("mousemove", mouseMove);

function mouseMove() {
  allBoxes.forEach((box) => {
    box.style.backgroundColor = generateRandomColor();
    box.children[0].innerText = generateRandomNumber();
  });
}
