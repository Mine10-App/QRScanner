<?php
// ==== CONFIGURATION ====
// Change these to your details
$to = "air1345@gmail.com.com";   // 📧 receiver
$subject = "New Leave Request";  // email subject

// ==== GET FORM DATA ====
$date      = $_POST['date'] ?? '';
$staffname = $_POST['staffname'] ?? '';
$rcno      = $_POST['rcno'] ?? '';
$leavetype = $_POST['leavetype'] ?? '';
$reason    = $_POST['reason'] ?? '';
$dutytime  = $_POST['dutytime'] ?? '';

// ==== SAVE TO FILE (simple storage) ====
$file = "leave_records.csv";
$entry = "$date,$staffname,$rcno,$leavetype,$reason,$dutytime\n";
file_put_contents($file, $entry, FILE_APPEND);

// ==== EMAIL BODY ====
$message = "
A new leave request has been submitted:

📅 Date: $date
👤 Staff Name: $staffname
🔢 RCNo: $rcno
🏷 Leave Type: $leavetype
💬 Reason: $reason
⏰ Duty Time: $dutytime
";

// ==== SEND MAIL ====
$headers = "From: iirufan@gmail.com\r\n";
if(mail($to, $subject, $message, $headers)){
    echo "Leave request submitted & email sent!";
} else {
    echo "Error: Could not send email.";
}
?>
