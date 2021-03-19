let form = document.querySelector("form");

let errorMessage = {};

function displayError(name) {
  let elm = form.elements[name];
  elm.nextElementSibling.innerText = errorMessage[name];
  elm.parentElement.classList.add("error");
}

function displaySucess(name) {
  let elm = form.elements[name];
  elm.nextElementSibling.innerText = "";
  errorMessage[name] = "";
  elm.parentElement.classList.remove("error");
  elm.parentElement.classList.add("sucess");
}

function handleForm(event) {
  event.preventDefault();

  const username = event.target.elements.username.value;
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const number = event.target.elements.number.value;
  const password = event.target.elements.password.value;
  const confirmPassword = event.target.elements["password-check"].value;

  // Username can't be less than 4 characters
  if (username.length <= 4) {
    errorMessage.username = "Username can't be less than 4 characters";
    displayError("username");
  } else {
    displaySucess("username");
  }
  // Name can't be numbers

  if (!isNaN(name)) {
    errorMessage.name = "Name can't be number";
    displayError("name");
  } else {
    displaySucess("name");
  }
  // Email must contain the symbol @

  // Email must be at least 6 characters

  if (!email.includes("@")) {
    errorMessage.email = "Email must contain the symbol @";
    displayError("email");
  } else if (email.length < 6) {
    errorMessage.email = "Email must contain 6 character";
    displayError("email");
  } else {
    displaySucess("email");
  }
  // Phone numbers can only be a number
  // Length of phone number can't be less than 7

  if (!isNaN(number)) {
    errorMessage.number = "Number can only be number";
    displayError("number");
  } else if (number.length < 7) {
    errorMessage.number = "lenght of phone number should be more than 7";
    displayError("number");
  } else {
    displaySucess("number");
  }
  // Password and confirm password must be same.

  if (password !== confirmPassword) {
    errorMessage.phone = "Password and confirm password must be same";
    errorMessage["password-check"] =
      "Password and confirm password must be same";
    displayError("password");
    displayError("password-check");
  } else {
    displaySucess("password");
    displaySucess("password-check");
  }

  console.log(username, name, email, number, password, confirmPassword);
}

form.addEventListener("submit", handleForm);


