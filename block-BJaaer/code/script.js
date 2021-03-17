// let form = document.querySelector(".form");
// let model = document.querySelector(".model");
// let button = document.querySelector("btn");
// let inputName = document.querySelector(".input-name");
// let inputEmail = document.querySelector(".input-email");
// let inputChoice = document.querySelector(".input-choise");
// let inputColor = document.querySelector(".input-color");
// let inputRange = document.querySelector(".input-range");
// let inputDrone = document.querySelector(".input-drone");
// let inputTerm = document.querySelector("input-terms");

// let userInfo = {};

// function handleInput(event) {
//   event.preventDefault();

//   userInfo.name = event.target.text.value;
//   inputName.innerText = userInfo.name;

//   userInfo.email = event.target.text.value;
//   inputEmail.innerText = userInfo.email;

//   userInfo.choice = event.target.text.value;
//   inputChoice.innerText = userInfo.choice;

//   userInfo.coloe = event.target.text.value;
//   inputColor.innerText = userInfo.color;

//   userInfo.range = event.target.text.value;
//   inputRange.innerText = userInfo.name;

//   userInfo.range = event.target.text.value;
//   inputDrone.innerText = userInfo.drone;

//   userInfo.terms = event.target.text.value;
//   if (userInfo.terms === "on") {
//     inputTerm.innerText = "You Gree to terms and condition";
//   } else {
//     inputTerm.innerText = "";
//   }

//   form.style.display = "none";
//   model.style.display = "flex";
// }
// console.log(userInfo);

// form.addEventListener("submit", handleInput);
// btn.addEventListener("click", () => {
//   modal.style.display = "none";
//   form.style.display = "block";
// });

let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let cancelBtn = document.querySelector(".cancel-btn");
let displayName = document.querySelector(".display-name");
let displayEmail = document.querySelector(".display-email");
let displayChoice = document.querySelector(".display-choice");
let displayColor = document.querySelector(".display-color");
let displayRange = document.querySelector(".display-range");
let displayDrone = document.querySelector(".display-drone");
let displayTerms = document.querySelector(".display-terms");

let userInfo = {};

function handleInput(event) {
  event.preventDefault();

  userInfo.name = event.target.text.value;
  displayName.innerText = userInfo.name;

  userInfo.email = event.target.email.value;
  displayEmail.innerText = userInfo.email;

  userInfo.choice = event.target.choice.value;
  displayChoice.innerText = userInfo.choice;

  userInfo.color = event.target.color.value;
  displayColor.innerText = userInfo.color;

  userInfo.range = event.target.range.value;
  displayRange.innerText = userInfo.range;

  userInfo.drone = event.target.drone.value;
  displayDrone.innerText = userInfo.drone;

  userInfo.terms = event.target.terms.value;
  if (userInfo.terms === "on") {
    displayTerms.innerText = "You agree to Terms and Conditions";
  } else {
    displayTerms.innerText = "";
  }

  form.style.display = "none";
  modal.style.display = "flex";
}
console.log(userInfo);

form.addEventListener("submit", handleInput);

cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
  form.style.display = "block";
});
