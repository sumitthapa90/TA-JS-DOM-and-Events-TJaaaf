let inputText = document.querySelector("#text");
const root = document.querySelector("ul");

let allMovieList = [];

function handleApp(event) {
  if (event.keyCode === 13 && event.target.value !== "") {
    let movieList = {
      name: event.target.value,
      isDone: false,
    };
    allMovieList.push(movieList);
    console.log(movieList, "ML");
    event.target.value = "";
    for (random of allMovieList) {
      console.log(allMovieList);
      console.log(random);
      createUI(random);
    }
  }
}

function handleDelete(event) {
  let id = event.target.dataset.id;
  allMovieList.splice(id, 1);
  createUI(allMovieList, root);
}

function handleToggle(event) {
  let id = event.target.dataset.id;
  allMovieList[id].isDone = !allMovieList[id].isDone;
  console.log(allMovieList);
  createUI(allMovieList, root);
}

function createUI(movieList) {
  root.innerHTML = "";
  allMovieList.forEach((movieList, index) => {
    let li = document.createElement("li");
    let div = document.createElement("div");
    div.classList.add("flex");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = movieList.isDone;
    input.addEventListener("input", handleToggle);
    input.setAttribute("data-id", index);
    let p = document.createElement("p");
    p.innerText = movieList.name;
    let span = document.createElement("span");
    span.innerText = "X";

    span.setAttribute("data-id", index);
    span.addEventListener("click", handleDelete);

    div.append(input, p, span);
    li.append(div);
    root.append(li);
  });
}

inputText.addEventListener("keyup", handleApp);
// console.log(createUI(allMovieList));
createUI(allMovieList);
