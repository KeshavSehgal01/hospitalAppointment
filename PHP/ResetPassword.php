<?php

require_once 'db.php';
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if(!isset($_POST["Code"])){
    exit("Cannot find page");
}
$code = $_POST["Code"];

$getEmailQuery = mysqli_query($conn,"SELECT Email FROM resetPassword WHERE code='$code'");
if(mysqli_num_rows($getEmailQuery) == 0){
    exit("Can't find page");
}
if(isset($_POST["Password"]) && isset($_POST["ConfirmPassword"])){
    $pass1 = $_POST["Password"];
    $pass2 = $_POST["ConfirmPassword"];
    if($pass1 == $pass2)
    {
        $row = mysqli_fetch_array($getEmailQuery);
        $email = $row["Email"];

        $query = mysqli_query($conn,"UPDATE user SET Password='$pass1' WHERE Email='$email'");

        if($query){
            $query = mysqli_query($conn,"DELETE FROM resetPassword WHERE code='$code'");
            exit("Password reset");
        }
        else{
            exit("Something went wrong");
        }
    }
}


?>

