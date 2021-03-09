<?php

$to='ginobartolucci21@gmail.com';//EMAIL AL QUE SE ENVIA 

    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $subjet = $_POST['subjet'];
    $message = $_POST['message'];
      
    if (!empty($name) && !empty($mail) && !empty($subjet) && !empty($message)){
        if (filter_var($mail, FILTER_VALIDATE_EMAIL)) {
            $mailBody = "Nombre: ".$name."\nCorreo: ".$mail."\nConsulta: ".$message."\n";
            $header= "From: www.pincen.com.ar". "\r\n";
            $header.= "Reply-to: ".$mail. "\r\n";
            $header.= "X-Mailer: PHP". phpversion();

            mail($to,"pincen.com.ar: ".$subjet,$mailBody,$header);

            echo "<script>"
                ,"let alertmail = document.querySelector('.alert-mail');"
                ,"alertmail.style.display = 'block';"
                ,"</script>";
        }elseif (!(filter_var($mail, FILTER_VALIDATE_EMAIL))) {
            echo '<p class="error-form">Debe ingresar una mail valido</p>';
        }
    }elseif (empty($name) || empty($subjet) || empty($message) || empty($mail)) {
        echo '<p class="error-form">Los campos con (*) son obligatorios</p>';
    }
