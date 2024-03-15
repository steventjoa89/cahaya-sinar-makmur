<?php
  try{
    $message = "";

    $message .= "=============== NEW REQUEST NEWSLETTER ==============\n";
    $timezone  = 7;
    $message .= "Date & Time: : " . gmdate("Y/m/d h:i:s A", time() + 3600*($timezone+date("I"))) . "\n";
    $message .= "Email: " . $_POST["email"] . "\n";
    $message .= "================ END OF NEW NEWSLETTER ==============" . "\n\n";
    writeToTextFile($message);

    echo "OK";
  }catch(Exception $e) {
    echo 'Message: ' .$e->getMessage();
  }

  function writeToTextFile($message) {
    try{
      $fp = fopen('request-newsletter.txt', 'a');//opens file in append mode  
      fwrite($fp, $message);  
      fclose($fp); 
    }catch(Exception $e) {
      echo 'Message: ' .$e->getMessage();
    }
  }

?>
