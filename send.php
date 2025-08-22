<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // if using Composer
// OR if you downloaded manually:
// require 'src/PHPMailer.php';
// require 'src/SMTP.php';
// require 'src/Exception.php';

// === COLLECT FORM DATA ===
$date      = $_POST['date'] ?? '';
$staffname = $_POST['staffname'] ?? '';
$rcno      = $_POST['rcno'] ?? '';
$leavetype = $_POST['leavetype'] ?? '';
$reason    = $_POST['reason'] ?? '';
$dutytime  = $_POST['dutytime'] ?? '';

// === SAVE TO FILE ===
$file = "leave_records.csv";
$entry = "$date,$staffname,$rcno,$leavetype,$reason,$dutytime\n";
file_put_contents($file, $entry, FILE_APPEND);

// === EMAIL MESSAGE ===
$message = "
<h2>New Leave Request</h2>
<ul>
<li><b>Date:</b> $date</li>
<li><b>Staff Name:</b> $staffname</li>
<li><b>RC No:</b> $rcno</li>
<li><b>Leave Type:</b> $leavetype</li>
<li><b>Reason:</b> $reason</li>
<li><b>Duty Time:</b> $dutytime</li>
</ul>
";

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'leelidutychange@gmail.com';   // ✅ your Gmail
    $mail->Password   = 'ftxq gygk gdlr cgmr';         // ✅ 16-digit Gmail App Password
    $mail->SMTPSecure = 'ssl';                         // ssl or tls
    $mail->Port       = 465;                           // 465 (SSL) or 587 (TLS)

    // FROM & TO
    $mail->setFrom('leelidutychange@gmail.com', 'Duty Change System');
    $mail->addAddress('air1345@gmail.com'); // ✅ where you want to receive mail

    // CONTENT
    $mail->isHTML(true);
    $mail->Subject = "New Leave Request from $staffname";
    $mail->Body    = $message;

    $mail->send();
    echo "✅ Leave request submitted and email sent.";
} catch (Exception $e) {
    echo "❌ Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
