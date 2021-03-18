let form = document.querySelector("form");

let userinfo = {};

function handleForm(event) {
  event.preventDefault();
  console.dir(event.target.elements.name.value);
}

form.addEventListener("submit", handleForm);
