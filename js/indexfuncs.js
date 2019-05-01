const SignUpForm = document.querySelector(".SignUpForm");
const LoginForm = document.querySelector(".LoginForm");
let LoginButton = document.querySelectorAll(".LoginButton");
let SignUpButton = document.querySelectorAll(".SignUpButton");

$(function() {
  /* Clear Messages */
  SignUpForm.style.display = "none";
  SignUpButtonInit();
});

function SignUpButtonInit() {
  console.log(SignUpButton);
  SignUpButton.addEventListener("click", () => {
    SignUpForm.style.display = "display";
    Login.style.display = "none";
    console.log("hello");
  });
}
