let input = document.getElementById("input");
console.log(input);
function getInput(i) {
  var x = i;
  if (x === "=") {
    input.value = eval(input.value);
  } else if (x === "C") {
    input.value = "";
  } else {
    input.value += i;
  }
}

