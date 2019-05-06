<?php
require_once("config.php");
session_start();
$_SESSION["RegState"] = 0;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

$Email = $_GET['SignUpEmail'];
$Username = $_GET['SignUpUsername'];
print "Email ($Email) Name($Username) <br>";

// Connect to DB
$conn = mysqli_connect(SERVER, USER, PASSWORD, DATABASE);
if (!$conn) {
    $_SESSION["RegState"] = -1;
    $_SESSION["Message"] = "Connection failed: " . mysqli_connect_error();
    header("Location: ../index.php");
    die();
}
echo "Connected successfully";
// Build a query
$Acode = rand();
$Rdatetime = date("Y-m-d h:i:s");
$query = "INSERT into Sharpkid (Email,Username,Acode,Rdatetime)
    Values (" . "'$Email', '$Username', '$Acode', '$Rdatetime');
";
$result = mysqli_query($conn, $query);
// Check the result
if (!$result) {
    die("Insert Failed: " . mysqli_error($conn));
    exit();
}
// New Visitor inserted, ready to send email and acode
$Message = "Please click the link to activate account: " . "http://cis-linux2.temple.edu/~tug36870/2305/sharpkid/php/Authenticate.php?Email=$Email&Acode=$Acode";

// Build the PHPMailer object
$mail = new PHPMailer(true);
try {
    $mail->SMTPDebug = 2; // Wants to see all errors
    $mail->IsSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "cis105223053238@gmail.com";
    $mail->Password = 'g+N3NmtkZWe]m8"M';
    $mail->SMTPSecure = "ssl";
    $mail->Port = 465;
    $mail->SMTPKeepAlive = true;
    $mail->Mailer = "smtp";
    $mail->setFrom("tug36870@temple.edu", "Magnus Nilsen");
    $mail->addReplyTo("tug36870@temple.edu", "Magnus Nilsen");
    $msg = $Message;
    $mail->addAddress($Email, "$Username");
    $mail->Subject = "Welcome";
    $mail->Body = $msg;
    $mail->send();
    print "Email sent ...< br >";
    $_SESSION["RegState "] = 1;
    $_SESSION["Message"] = "Registration succeeded. Check email to complete";
    header("location:../index.html");
    exit();
} catch (phpmailerException $e) {
    $_SESSION["Message"] = "Mailer error: " . $e->errorMessage();
    $_SESSION["Message"] = -4;
    print "Mail send failed: " . $e->errorMessage;
}
//header("location:../index.php");
exit();
