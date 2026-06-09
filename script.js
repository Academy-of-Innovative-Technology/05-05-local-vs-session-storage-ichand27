let submit = document.querySelector(".submit");
let dateInput = document.querySelector("#date");
let riddleInput = document.querySelector("#riddle");

submit.addEventListener("click", function(e) {
  e.preventDefault();

  let dateValue = dateInput.value;
  let riddleValue = riddleInput.value;

  localStorage.setItem("local storage", dateValue);

  sessionStorage.setItem("riddle", riddleValue);

  console.log(sessionStorage.getItem("riddle"));
});