let boxes = document.querySelectorAll(".box");

boxes.forEach((el) => {
  el.addEventListener("click", (e) => {
    const num = Math.ceil(Math.random() * 12);
    el.innerText = num;

    setTimeout(() => {
      el.innerText = "";
    }, 5000);
  });
});

let boxes2 = document.querySelector(".boxes-2");

boxes2.addEventListener("click", (event) => {
  if (event.target.classList.contains("box")) {
    event.target.innerText = Math.ceil(Math.random() * 12);
    setTimeout(() => {
      event.target.innerText = "";
    }, 3000);
  }
});
