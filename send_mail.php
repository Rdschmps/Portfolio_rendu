<?php

// Attention ! Ce fichier est volontairement incomplet afin de ne pas divulger les informations de connexion au compte de l'envoi de mail. 
//Mais le code est onfctionnel et peut être utilisé en remplaçant les valeurs manquantes comme on peut le tester sur le site en ligne.

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Inclure Composer autoload si PHPMailer est installé via Composer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération et validation des données
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    if (!$email || empty($message)) {
        echo "Veuillez fournir une adresse email valide et un message.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Configuration SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'Mail'; 
        $mail->Password = 'Mot_de_passe'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Paramètres de l'email
        $mail->setFrom('serveur@gmail.com', 'Portfolio Contact');
        $mail->addAddress('Mail'); // Adresse de réception
        $mail->addReplyTo($email); // Adresse de réponse

        $mail->isHTML(true);
        $mail->Subject = 'Nouveau message de votre portfolio';
        $mail->Body = "<h2>Nouveau message de votre portfolio</h2>
                       <p><strong>Email :</strong> {$email}</p>
                       <p><strong>Message :</strong><br>" . nl2br($message) . "</p>";

        // Envoi
        $mail->send();

        // Redirection après succès
        header('Location: confirmation.html');
        exit;
    } catch (Exception $e) {
        echo "Erreur lors de l'envoi : {$mail->ErrorInfo}";
    }
}
?>
 