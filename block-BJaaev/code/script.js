let input = document.querySelector(`input[type= "text"]`);
let rootElm = document.querySelector(".movie-list");

let allTodos = [];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    allTodos.push({
      name: event.target.value,
      isDone: false,
    });
    createUI();
    event.target.value = "";
  }
  localStorage.setItem("todo", JSON.stringify(allTodos));
});

function handleDelete() {
  let id = event.target.dataset.id;
  allTodos.slice(id, 1);
  localStorage.setItem("todo", JSON.stringify(allTodos));
  createUI();
}

function handleChange(event) {
  let id = event.target.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  localStorage.setItem("todo", JSON.stringify(allTodos));
  createUI();
}

function createUI() {
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

createUI();
