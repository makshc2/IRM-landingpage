<?php
   $user_name = $_POST['user_name'];
   $user_email = $_POST['user_email'];
   $user_name = htmlspecialchars($user_name);
   $user_email = htmlspecialchars($user_email);
   $user_name = urldecode($user_name);
   $user_email = urldecode($user_email);
   $user_name = trim($user_name);
   $user_email = trim($user_email);
   echo $fio;
   echo "<br>";
   echo $email;
   if (mail("makshc2@gmail.com", "Заявка с сайта", "ФИО:".$user_name.". E-mail: ".$user_email ,"From: makshc2@gmail.com \r\n"))
    {     echo "сообщение успешно отправлено";
   } else {
       echo "при отправке сообщения возникли ошибки";
   }?>