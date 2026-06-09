let button = document.querySelector(".printContent");

let localOutput = document.querySelector("#localContent");
let sessionOutput = document.querySelector("#sessionContent");

button.addEventListener("click", function () {

  let localData = localStorage.getItem("local storage");
  let sessionData = sessionStorage.getItem("riddle");

  localOutput.textContent = localData;
  sessionOutput.textContent = sessionData;

});