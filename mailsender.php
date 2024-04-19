<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $position = $_POST["position"];
    $message = $_POST["message"];

    $to = "36542563@bk.ru";
    $subject = "New Form Submission";
    $body = "Name: $name\nEmail: $email\nPosition: $position\nMessage: $message";

    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "Sorry, something went wrong.";
    }
}
