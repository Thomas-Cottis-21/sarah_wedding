<?php
/* ===== THIS RUNS ON THE SERVER ===== */

//import the validation class
require_once "validate.class.php";

//retrieve data
$postData = file_get_contents("php://input");

//extract the data
$data = json_decode($postData);

//validate expected data
$ValidateForm = new Validate();

if (!$ValidateForm->validateFormData($data)) {
    $response = false;
    echo json_encode($response);
    return;
}

//get expected data from client
$name = $data->name;
$email = $data->email;
$subject = $data->subject;
$message = $data->message;

//send emails
$response = true;
echo json_encode($response);