<?php
    $files =  $_FILES['files']['name'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['mob'];
    $website = $_POST['website'];
    $usermessage = $_POST['msg'];
    $link = $_POST['link'];

    $message ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $usermessage . "phone=".$phone ."website=".$website . "link=".$link;

    $subject ="Smart Clipping Mail";

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
 
    // Preparing attachment 
    if(!empty($files)){ 
        for($i=0;$i<count($files);$i++){
                // print_r($files[$i]);
                $file_name = $_FILES['files']['name'][$i]; 
                $file_size = $_FILES['files']['size'][$i]; 
                 
                $message .= "--{$mime_boundary}\n"; 
                $fp =    @fopen($_FILES['files']['tmp_name'][$i], "rb"); 
                $data =  @fread($fp, $file_size); 
                @fclose($fp); 
                $data = chunk_split(base64_encode($data)); 
                $message .= "Content-Type: application/octet-stream; name=\"".$file_name."\"\n" .  
                "Content-Description: ".$file_name."\n" . 
                "Content-Disposition: attachment;\n" . " filename=\"".$file_name."\"; size=".$file_size.";\n" .  
                "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n"; 
        } 
    } 
     
                // print_r('Stop');
    $message .= "--{$mime_boundary}--"; 
    $returnpath = "-f" . $senderEmail; 
     
    // Send email 
    $mail = mail($to, $subject, $message, $headers, $returnpath);  
     
    // Return true if email sent, otherwise return false 
    if($mail){ 
        echo "mail send ... OK";
    }else{ 
        echo "mail send ... ERROR!";
        print_r( error_get_last() );
    }
