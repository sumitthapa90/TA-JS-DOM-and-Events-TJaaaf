let input = document.querySelector(`input[type= "text"]`);
let rootElm = document.querySelector(".movie-list");

let allTodo = JSON.parse(localStorage.getItem("todo")) || [];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && event.target.value) {
    allTodo.push({
      name: event.target.value,
      isDone: false,
    });
    createUI(allTodo);
    event.target.value = "";
  }
  localStorage.setItem("todo", JSON.stringify(allTodo));
});

function handleDelete() {
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  localStorage.setItem("todo", JSON.stringify(allTodo));
  createUI(allTodos);
}

function handleChange(event) {
  let id = event.target.id;
  allTodo[id].isDone = !allTodo[id].isDone;
  localStorage.setItem("todo", JSON.stringify(allTodo));
  createUI(allTodo);
}

function createUI(allTodos) {
  rootElm.innerText = "";
  allTodos.forEach((todo, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.classList.add("style-checkbox");
    input.type = "checkbox";
    input.id = i;
    input.checked = todo.isDone;
    input.addEventListener("change", handleChange);
    let label = document.createElement("label");
    label.for = i;
    label.innerText = todo.name;
    let span = document.createElement("span");
    span.innerText = "X";
    span.setAttribute("data-id", i);

    span.addEventListener("click", handleDelete);

    li.append(input, label, span);
    rootElm.append(li);
    return li;
  });
}

let all = document.querySelector(".all");
let active = document.querySelector(".active");
let complete = document.querySelector(".complete");
let clear = document.querySelector(".clear");

all.addEventListener("click", displayAll);

function displayAll() {
  createUI(allTodo);
}

active.addEventListener("click", displayActive);

function displayActive() {
  createUI(allTodo.filter((a) => a.isDone));
}

complete.addEventListener("click", displayeComplete);

function displayeComplete() {
  createUI(allTodo.filter((a) => !a.isDone));
}

clear.addEventListener("click", clearAll);

function clearAll() {
  allTodo = allTodo.filter((a) => !a.isDone);
  localStorage.setItem("todo", JSON.stringify(allTodo));
  createUI(allTodo);
}


createUI(allTodo);
