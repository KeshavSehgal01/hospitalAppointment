<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$email = $_POST["Email"];
$password = $_POST["Password"];
require_once 'db.php';

$sql = "SELECT * FROM user WHERE Email = '$email' AND Password = '$password'; ";
$result = mysqli_query($conn,$sql);
if(mysqli_num_rows($result) == 1)
{
    for($set = array();$row = $result->fetch_assoc();$set[] = $row);
// print_r($set);
$t=time()+ 60;
$set[0]["ExpiresAt"] = $t;
// array_push($set, array("ExpiresAt" => "4765897"));
echo json_encode($set);
}
else{
    $flag = false;
    echo json_encode($flag);
}




?>