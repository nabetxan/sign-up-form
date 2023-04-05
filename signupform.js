const passInput = document.getElementById("pass");
const passcfmInput = document.getElementById("passcfm");
const submitBtn = document.getElementById("submit-btn");
const submitError = document.getElementById("submit-error");

const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const useEmailInput = document.getElementById("user_email");

firstNameInput.placeholder = "Buz"
firstNameInput.setAttribute("required", true)
lastNameInput.placeholder = "Lightyear"
lastNameInput.setAttribute("required", true)
useEmailInput.placeholder = "you@example.com"
useEmailInput.setAttribute("required", true)
passInput.placeholder = "(required 8~24characters)"
passInput.setAttribute("minlength", 8)
passInput.setAttribute("maxlength", 24)
passInput.setAttribute("required", true)
passcfmInput.setAttribute("required", true)


function checkPassword() {
  if (passInput.value !== passcfmInput.value) {
    submitError.textContent = "*Password is incorrect";
  }
}

submitBtn.addEventListener("click", function () {
  checkPassword();
});
