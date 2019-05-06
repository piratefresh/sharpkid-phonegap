<?php
session_start();
$_SESSION["Message"] = "Successfully Logged Out";
unset($_SESSION["RegState"]);  // where $_SESSION["nome"] is your own variable. if you do not have one use only this as follow **session_unset();**
unset($_SESSION["UserJson"]);
header("Location: ../index.html");
