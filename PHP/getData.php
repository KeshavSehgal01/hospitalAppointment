<?php

require_once 'db.php';

$sql = "SELECT * FROM user;";
$result = mysqli_query($conn,$sql);
$resultCheck = mysqli_num_rows($result);

for($set = array();$row = $result->fetch_assoc();$set[] = $row);
// print_r($set);
echo json_encode($set);

?>