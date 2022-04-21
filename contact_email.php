<?php
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $city = $_POST['city'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $usermessage = $_POST['msg'];
    $link = $_POST['link'];

    $message ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $usermessage . "phone=".$phone ."subject=".$subject;

    $subject ="Smart Clipping Contact Mail";

    // Sender info  
    $to ="smartclippingtest@gmail.com";
    $senderEmail = "info@smartclipping24.com";
    $from = "Smart Clipping <".$senderEmail.">";  
    $headers = "From: ".$from; 
 
    // Boundary  
    $semi_rand = md5(time());  
    $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";  
 
    // Headers for attachment  
    $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\"";  
 
    // Multipart boundary  
    $message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" . 
    "Content-Transfer-Encoding: 7bit\n\n" . $message . "\n\n";  
 
    
     
                // print_r('Stop');
    $message .= "--{$mime_boundary}--"; 
    $returnpath = "-f" . $senderEmail; 
     
    // Send email 
    $mail = mail($to, $subject, $message, $headers, $returnpath);  
     
    // Return true if email sent, otherwise return false 
    if($mail){ 
        echo "Contact mail send ... OK";
    }else{ 
        echo "Contact mail send ... ERROR!";
        print_r( error_get_last() );
    }
