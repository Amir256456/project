<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['message'];
$token = "6215169430:AAFONJk1fBmN9VKPSZg8N0KxEhX-cP7rNp8";
$chat_id = "414270015";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Сообщение: ' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

header("Location: /");

?>