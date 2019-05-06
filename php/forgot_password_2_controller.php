<?php
require_once("config.php");
session_start();

$Acode = $_POST['ForgotAcode'];
$Email = $_POST['EmailPasswordReset'];
$ForgotEmail = $_POST['SetFormEmail'];

print "Got Email($Email) Acode($Acode) \n";
// Connect to DB
$conn = mysqli_connect(SERVER, USER, PASSWORD, DATABASE);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
print "step 2 \n";
if ($Email != $ForgotEmail) {
    $_SESSION["RegState"] = 0;
    $_SESSION["Message"] = "Email can't be found";
    header("Location: ../index.html");
    die();
}
print "step 3 \n";
if (isset($_POST['ResetPassword1'])) {
    $Password = $_POST['ResetPassword1'];
    $Password2 = $_POST['ResetPassword2'];
    print "Got password($Password) password2($Password2) \n";
    if ($Password == $Password2) {
        print "step 4 \n";
        $query = "UPDATE Sharpkid SET Password='$Password' WHERE Email='$Email' AND Acode='$Acode'";
        $result = mysqli_query($conn, $query);
        while ($row = mysqli_fetch_array($result)) {
            $FirstName = $row['FirstName'];
            $LastName = $row['LastName'];
        }
        if ($result) { // Update Success
            $_SESSION["RegState"] = 4;
            /* Set Session with user info */
            $userData = [
                'email' => $Email,
                'firstname' => $FirstName,
                'lastname' => $LastName,
                'loggedin' => true
            ];
            $_SESSION["UserJson"] = $userData;
            $_SESSION["Message"] = "Reset Password Succedded";
            header("Location: ../member.html");
            die();
        } else {
            $_SESSION["RegState"] = 0;
            $_SESSION["Message"] = "Reset Password Failed";
            header("Location: ../index.html");
            die();
        }
    }
}
exit();
