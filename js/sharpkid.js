const SignUpForm = document.querySelector(".SignUpForm");
const LoginForm = document.querySelector(".LoginForm");
let LoginButton = document.querySelectorAll(".LoginButton");
let SignUpButton = document.querySelectorAll(".SignUpButton");

$(function() {
  /* Clear Messages */
  readRegState();
  $(".LoginForm").show();
  $(".SignUpForm").hide();
  $(".ForgotPasswordForm").hide();
  LoginButtonInit();
  SignUpInit();
  ForgotPasswordInit();
  readMessage();
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

// Get Regstate from php session
function readRegState() {
  $.ajax({
    type: "GET",
    crossOrigin: true,
    url:
      "http://cis-linux2.temple.edu/~tug36870/2305/sharpkid/php/readRegState.php",
    async: false,
    dataType: "json",
    encode: true
  }).always(data => {
    console.log(data);
    RegState = parseInt(data.value);
    return data;
  });
}

// Get Message from php session
function readMessage() {
  $.ajax({
    type: "GET",
    crossOrigin: true,
    url:
      "http://cis-linux2.temple.edu/~tug36870/2305/sharpkid/php/readMessage.php",
    async: false,
    dataType: "json",
    encode: true
  }).always(data => {
    console.log(data);
    Message = data.value.toString();
    if (Message.length > 1 && RegState < 0) {
      const AlertMarkUp = `
      <div class="bg-red-lightest border border-red-light text-red-dark px-4 py-3 rounded relativer" role="alert">
        ${Message}
      </div>
     `;
      $(".alertMessage").append(AlertMarkUp);
    }
    if (Message.length > 1 && RegState >= 0) {
      const AlertMarkUp = `
      <div class="bg-blue-lightest border-t border-b border-blue text-blue-dark px-4 py-3" role="alert">
        ${Message}
      </div>
    `;
      $(".alertMessage").append(AlertMarkUp);
    }
    return data;
  });
}
