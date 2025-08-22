<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Make sure you have PHPMailer installed via Composer or downloaded from GitHub
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // SMTP Settings (Equivalent to your VBA CDO config)
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';           // Gmail SMTP
    $mail->SMTPAuth   = true;                       // Enable authentication
    $mail->Username   = 'leelidutychange@gmail.com'; // Your Gmail address
    $mail->Password   = 'ftxq gygk gdlr cgmr';   // 16-character App Password
    $mail->SMTPSecure = 'ssl';                      // Use SSL (like CDO /smtpusessl)
    $mail->Port       = 465;                        // Gmail SMTP port

    // Sender & Recipient
    $mail->setFrom('leelidutychange@gmail.com', 'Duty Change');
    $mail->addAddress('air1345@gmail.com');     // Recipient email

    // Email Content
    $mail->isHTML(true);
    $mail->Subject = 'Form Submission';
    $mail->Body    = 'Name: John Doe<br>'
                   . 'Date of Birth: 2000-01-01<br>'
                   . 'Country: Maldives';

    $mail->send();
    echo 'Email sent successfully!';
} catch (Exception $e) {
    echo "Email could not be sent. Error: {$mail->ErrorInfo}";
}
?>