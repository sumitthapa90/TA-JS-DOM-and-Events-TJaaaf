let container = document.querySelector(".container");
let input = document.getElementById("text");

input.addEventListener("keyup", (event) => {
  console.log(event);
  if (event.keyCode === 13) {
    window.open("http://google.com/search?q=" + event.target.value);
  }
});
