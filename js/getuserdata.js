$(function() {
  readUserData();
});

/* Get User information from Session */
function readUserData() {
  $.ajax({
    type: "GET",
    crossOrigin: true,
    url:
      "http://cis-linux2.temple.edu/~tug36870/2305/sharpkid/php/readUserData.php",
    async: false,
    dataType: "json",
    encode: true
  }).always(data => {
    console.log(data);
    if (data.hasOwnProperty("username")) {
      UserName = `${data.username.toString()}`;
      const LogoutMarkUp = `
          <li>
            <a href="http://cis-linux2.temple.edu/~tug36870/2305/sharpkid/php/logout_controller.php">Logout</a>
          </li>

       `;
      const UserMarkUp = `
       <li>
       <a href="./user?Username=${UserName}">${UserName}</a>
     </li>
       `;
      $(".account-link").html(UserMarkUp);
      $(".logout-link").html(LogoutMarkUp);
    }
    return data;
  });
}
