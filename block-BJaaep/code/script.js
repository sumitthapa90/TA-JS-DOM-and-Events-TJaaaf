let boxes = document.querySelectorAll(".box");

boxes.forEach((el) => {
  el.addEventListener("click", (e) => {
    const num = Math.floor(Math.random() * 12);
    el.innerText = num;

    setTimeout(() => {
      el.innerText = "";
    }, 3000);
  });
});

let boxes2 = document.querySelector(".box");

boxes.addEventListener("click" , (event)=> {
  if(event.target.classList.contains("box")){
    event.target.innerText = Math.floor(Math.random() * 12)
  }
  setTimeout(() => {
    event.innerText = ""
  }, 3000);
})


