<?php
  try{
    $message = "";

    $message .= "=============== NEW REQUEST ===============\n";
    $timezone  = 7;
    $message .= "Date & Time: : " . gmdate("Y/m/d h:i:s A", time() + 3600*($timezone+date("I"))) . "\n";
    $message .= "Name: " . $_POST['name'] . "\n";
    $message .= "Email: " . $_POST["email"] . "\n";
    $message .= "Subject: " . $_POST["subject"] . "\n";
    $message .= "Message: " . $_POST["message"] . "\n";
    $message .= "============ END OF NEW REQUEST ===========" . "\n\n";
    writeToTextFile($message);

    echo "OK";
  }catch(Exception $e) {
    echo 'Message: ' .$e->getMessage();
  }

  function writeToTextFile($message) {
    try{
      $fp = fopen('request-message.txt', 'a');//opens file in append mode  
      fwrite($fp, $message);  
      fclose($fp); 
    }catch(Exception $e) {
      echo 'Message: ' .$e->getMessage();
    }
  }

?>
