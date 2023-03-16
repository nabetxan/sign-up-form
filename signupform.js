const pass = document.getElementById("pass");
const passcfm = document.getElementById("passcfm");
const submitBtn = document.getElementById("submit-btn");
const submitError = document.getElementById("submit-error");

function checkPassword() {
  if (pass.value !== passcfm.value) {
    submitError.textContent = "*Password is incorrect";
  }
}

submitBtn.addEventListener("click", function () {
  checkPassword();
});
