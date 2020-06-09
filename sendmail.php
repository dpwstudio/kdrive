<?php


switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $email = $params->email;

        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $headers .= "From: <$email>";

        $to = 'dpw.contact@gmail.com';

        $subject = '[ChronChain] Some one has subscribed';

        $message = '<html><body>';
        $message .= '<p>Bonjour, une demande vient d\'être effectué sur votre site</p>';
        $message .= '<p><strong>Email: </strong>' . $email . '</p>';
        $message .= '<br />Thanks ! :)';
        $message .= '</body></html>';

        // Sending email
        if (mail($to, $subject, $message, $headers)) {
            echo 'Success: Your mail has been sent successfully.';
        } else {
            echo 'Error: Unable to send email. Please try again.';
        }
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
