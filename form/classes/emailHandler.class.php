<?php
require_once "../../credentials/credentials.php";

require_once "/home2/homasan5/PHPMailer/PHPMailer.php";
require_once "/home2/homasan5/PHPMailer/SMTP.php";
require_once "/home2/homasan5/PHPMailer/Exception.php";

use PHPMailer\PHPMailer\PHPMailer;

class EmailHandler {

    public function sendTestEmail() {
        global $CREDENTIALS;
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = $CREDENTIALS->EMAIL;
        $mail->Password = $CREDENTIALS->PASSWORD;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        $mail->setFrom("tomcottis21@gmail.com", "Test");
        $mail->addAddress("tomcottis21@gmail.com");
        $mail->Subject = "Test";
        $mail->isHTML(false);
        $mail->Body = "This is a test";

        $mail->send();
    }

}