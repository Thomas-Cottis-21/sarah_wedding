<?php
$postData = file_get_contents("php://input");

$data = json_decode($postData);

$response = "RECEIVED";

echo json_encode($response);