<?php
header("Access-Control-Allow-Origin: *");

if ($_SERVER['HTTP_REFERER'] === 'http://localhost:3000/contacto') {

    $to='ginobartolucci21@gmail.com';
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
      
    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)){
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $mailBody = "Nombre: ".$name."\nCorreo: ".$email."\nConsulta: ".$message."\n";
            $header= "From: www.pincen.com.ar". "\r\n";
            $header.= "Reply-to: ".$email. "\r\n";
            $header.= "X-Mailer: PHP". phpversion();

            mail($to,$subject,$mailBody,$header);

            $response = array('success'=>true, 'message'=>'COSO');
            print json_encode($response);
                        //echo 'mail enviado';

        }else{
            echo 'Debe ingresar una email valido';
        }
    }elseif (empty($name) || empty($subject) || empty($message) || empty($email)) {
        echo 'Los campos con (*) son obligatorios';
    }

}else{
    echo 'Error';
}
