$(function() {
  GetEmailQuery();
  GetAcodeQuery();
});

function GetEmailQuery() {
  let urlParams = new URLSearchParams(window.location.search);
  const Email = urlParams.get("Email");
  console.log(Email);
  document.getElementById("SetFormEmail").value = Email;
}
function GetAcodeQuery() {
  let urlParams = new URLSearchParams(window.location.search);
  const Acode = urlParams.get("Acode");
  console.log(Acode);
  document.getElementById("ForgotAcode").value = Acode;
}
