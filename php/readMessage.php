<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers", "*");
header('Access-Control-Allow-Credentials', true);
header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

session_start();
$myjson->name = "Message";
if (isset($_SESSION["Message"]))
      $myjson->value = $_SESSION["Message"];
else
      $myjson->value = 0;
echo json_encode($myjson);
unset($_SESSION["Message"]);
exit();
