<?php
/* ===== THIS RUNS ON THE SERVER ===== */

//import the validation class
require_once "./classes/validate.class.php";
require_once "./classes/emailHandler.class.php";

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
$EmailHandler = new EmailHandler();
$EmailHandler->sendFormEmail($name, $email, $subject, $message);

$response = true;
echo json_encode($response);