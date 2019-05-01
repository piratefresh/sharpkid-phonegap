const SignUpForm = document.querySelector(".SignUpForm");
const LoginForm = document.querySelector(".LoginForm");
let LoginButton = document.querySelectorAll(".LoginButton");
let SignUpButton = document.querySelectorAll(".SignUpButton");

$(function() {
  /* Clear Messages */
  $(".LoginForm").show();
  $(".SignUpForm").hide();
  $(".ForgotPasswordForm").hide();
  LoginButtonInit();
  SignUpInit();
  ForgotPasswordInit();
});

function SignUpInit() {
  $(".SignUpButton").click(() => {
    $(".LoginForm").hide();
    $(".SignUpForm").show();
  });
}

function LoginButtonInit() {
  $(".LoginButton").click(function() {
    $(".SignUpForm").hide();
    $(".LoginForm").show();
  });
}

function ForgotPasswordInit() {
  $(".ForgotPasswordButton").click(function() {
    $(".SignUpForm").hide();
    $(".LoginForm").hide();
    $(".ForgotPasswordForm").show();
  });
}
