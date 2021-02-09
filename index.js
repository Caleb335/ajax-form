// targetting all form input fields
var firstChoice = document.getElementById("firstChoice");
var secondChoice = document.getElementById("secondChoice");
var thirdChoice = document.getElementById("thirdChoice");

// button element
var button = document.getElementById("submit-btn");

// error message field: thi field would display all the error
// messages that would be comming from the
// validation function
var err = document.getElementById("errMsg");

// validation handler
function validateInput(e) {
  e.preventDefault();
  if (!firstChoice.value && !secondChoice.value && !thirdChoice.value) {
    alert("all input fileds cannot be empty");
  } else if (
    firstChoice.value !== "calculus" ||
    secondChoice.value !== "calculus" ||
    thirdChoice.value !== "calculus"
  ) {
    alert("You choices must include calculus");
  } else if (firstChoice.value === "") {
    alert("first choice cannot be empty");
  } else if (secondChoice.value === "") {
    alert("second choice cannot be empty");
  } else if (thirdChoice.value === "") {
    alert("your third choice cannot be blank");
  }
  return;
}

button.addEventListener("click", validateInput);
