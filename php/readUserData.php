<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers", "*");
header('Access-Control-Allow-Credentials', true);
header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

session_start();
if (isset($_SESSION["UserJson"]))
    $myjson = $_SESSION["UserJson"];
else
    $myjson = 0;
echo json_encode($myjson);
exit();
