// Elements
let emailField = document.getElementById("email-field")
let emailErrorMessage = document.getElementById("email-error-message")
let submitButton = document.getElementById("submit-button")

// Function: validate user's input 
function validateEmail () {
  // If user's input doesn't match the symboles => display the error message
  if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

    emailErrorMessage.innerHTML = "Oops! Please check your email";
    return false;
  }
  // If user's input matches the symboles => don't display the error message
  emailErrorMessage.innerHTML = "";
  return true
}

// prevent the submit button from submitting data
submitButton.addEventListener("click", (e) => {
  e.preventDefault()
})