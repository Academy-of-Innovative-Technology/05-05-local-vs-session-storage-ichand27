let submit = document.querySelector(".submit");
let date = document.querySelector("#date");
let riddle = document.querySelector("#riddle");

submit.addEventListener("click", function(e) {
  e.preventDefault();
  
    // localStorage here
  localStorage.setItem(date, date.value);
  
  
  // sessionStorage here
  sessionStorage.setItem(riddle, riddle.value);

});


console.log(sessionStorage.getItem(riddle));