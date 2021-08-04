<?php
$serverName = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "hospitalappointment";
$conn = new mysqli($serverName,$dbUsername,$dbPassword,$dbName);

if($conn->connect_error){
    die("Connection failed: ".$conn->connect_error);
}
?>