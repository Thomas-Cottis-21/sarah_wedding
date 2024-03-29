<?php
require_once "/home2/homasan5/PHPMailer/PHPMailer.php";
require_once "/home2/homasan5/PHPMailer/SMTP.php";
require_once "/home2/homasan5/PHPMailer/Exception.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class EmailHandler {

    public function sendTestEmail() {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "tomcottis21@gmail.com";
        $mail->Password = "rvnndshrfexknykn";
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        $mail->setFrom("tomcottis21@gmail.com", "Test");
        $mail->addAddress("tomcottis21@gmail.com");
        $mail->Subject = "Test";
        $mail->isHTML(false);
        $mail->Body = "This is a test";

        $mail->send();
    }

    public function sendFormEmail($name, $email, $subject, $message) {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "tomcottis21@gmail.com";
        $mail->Password = "rvnndshrfexknykn";
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        $mail->setFrom("tomcottis21@gmail.com", "Sarah + Josh Site");
        $mail->addAddress($email);
        $mail->isHTML(false);
        $mail->Subject = "New Message From $name: $subject";
        $mail->Body = $message;

        try {
            $mail->send();
            return true;
        } catch(Exception $e) {
            return $e;
        }
        
    }

}