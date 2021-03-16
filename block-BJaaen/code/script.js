const gameArr = ["rock", "paper", "scissors"];

const userTurn = document.querySelector(".user-turn");

let previousComValue = null;
let previousUserValue = null;

userTurn.addEventListener("click", (e) => {
  const target = e.target;
  let index = Math.floor(Math.random() * 3);
  const comValue = gameArr[index];
  const userValue = target.value;
  const comTurn = document.getElementById(comValue);

  if (previousUserValue && previousComValue) {
    previousComValue.style.color = "black";
    previousUserValue.style.color = "black";
  }

  previousComValue = comTurn;
  previousUserValue = target;

  console.log("index" + " " + index);

  target.style.color = "red";
  comTurn.style.color = "red";

  if (userValue === "rock") {
    if (comValue === "scissors") {
      console.log("User wins");
    } else if (comValue === "paper") {
      console.log("Computer wins");
    } else {
      console.log("Draw");
    }
    console.log({ user: target.value, com: gameArr[index] });
  }

  if (userValue === "paper") {
    if (comValue === "rock") {
      console.log("User wins");
    } else if (comValue === "scissors") {
      console.log("Computer wins");
    } else {
      console.log("Draw");
    }
    console.log({ user: target.value, com: gameArr[index] });
  }

  if (userValue === "scissors") {
    if (comValue === "paper") {
      console.log("User wins");
    } else if (comValue === "rock") {
      console.log("Computer wins");
    } else {
      console.log("Draw");
    }
    console.log({ user: target.value, com: gameArr[index] });
  }
});

// function whoWins(user, computer) {
//   if (user === "rock" ) {
//     return computer === "scissors" ? "User wins" : "Computer wins";
//   } else if (user === "rock" && computer === "scissors") {
//     return "Computer wins";
//   }
//   if (user === "" && computer === "scissors") {
//     return "User wins";
//   }else if (user === "rock" && computer === "scissors") {
//     return "Computer wins";
//   }
// }

function add(x) {
  let a = 2;
  console.log(x + a);
}

add(5);
