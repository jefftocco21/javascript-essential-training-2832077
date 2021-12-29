var world = "World";
var again = "Again";

const main = document.createElement("span");
const notMain = document.createElement("span");

function append(param) {
  document.querySelector(".yep").append(param);
}

function input(input, word) {
  input.classList.add(".yep");
  input.innerHTML = `<h1>Hello ${word}</h1>`;
}

append(main);
append(notMain);

input(main, world);
input(notMain, again);
