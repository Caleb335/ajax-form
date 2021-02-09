// targetting all form input fields
var firstChoice = document.getElementById("firstChoice").value;
var secondChoice = document.getElementById("secondChoice").value;
var thirdChoice = document.getElementById("thirdChoice").value;

// button element
var button = document.getElementById("submit-btn");

// targetting the form
var form = document.getElementById("form");

// error message field: thi field would display all the error
// messages that would be comming from the
// validation function
let err = document.getElementById("errMsg");

// validation handler
function validateInput(e) {
  e.preventDefault();
  if (firstChoice === "") {
    alert("first choice cannot be empty");
    return;
  }
  if (secondChoice === "") {
    alert("second choice cannot be empty");
    return;
  }
  if (thirdChoice === "") {
    alert("your third choice cannot be blank");
    return;
  }
  if (
    firstChoice !== "calculus" &&
    secondChoice !== "calculus" &&
    thirdChoice !== "calculus"
  ) {
    alert("your choice should include claculus");
    return;
  }
}

button.addEventListener("click", validateInput);

window.addEventListener("load", () => {
  // the AJAX http request goes here
  function postStudentCourses() {
    // initialize the http request variable
    const req = new XMLHttpRequest();

    const coursesChoice = new FormData(form);

    // on succesful student courses posting request
    // get the response text from the server
    req.addEventListener("load", (e) => {
      alert(e.target.responseText);
    });
    // if the process encounters an error
    // show a message thorugh the browser's alert
    req.addEventListener("load", () => {
      alert("An error ocur while trying to send your courses to the server.");
    });
    // this mehod below sets our post request
    req.open("POST", "https://example.com");
    req.send(coursesChoice);
  }

  // attaching an event handler to the form element.
  // ensures that the inputs are valiadted completely.
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // the function below ensures that inputs are validated before posting.
    validateInput();

    postStudentCourses();
  });
});
