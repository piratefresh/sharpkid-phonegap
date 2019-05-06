<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers", "*");
header('Access-Control-Allow-Credentials', true);
header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

session_start();
$myjson->name = "RegState";
if (isset($_SESSION["RegState"]))
      $myjson->value = $_SESSION["RegState"];
else
      $myjson->value = 0;
echo json_encode($myjson);
exit();
